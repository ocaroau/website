"use client"

import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "motion/react"
import { useRef } from "react"
import { CAP_KM, DEFAULT_DRIVEN_KM } from "@/content/site"
import { Eyebrow } from "./primitives"

const CENTRE = 100
const NEEDLE_LENGTH = 62
const NEEDLE_HALF_BASE = 9
// The dial sweeps 270 degrees, starting bottom-left (135 degrees clockwise from +x).
const SWEEP_START = 135
const SWEEP = 270
const ARC = "M50.5 149.5 A70 70 0 1 1 149.5 149.5"

const km = (n: number) => Math.round(n).toLocaleString("en-AU")

function needlePoints(progress: number) {
  const a = ((SWEEP_START + SWEEP * progress) * Math.PI) / 180
  const [dx, dy] = [Math.cos(a), Math.sin(a)]
  const tip = [CENTRE + NEEDLE_LENGTH * dx, CENTRE + NEEDLE_LENGTH * dy]
  const b1 = [CENTRE - NEEDLE_HALF_BASE * dy, CENTRE + NEEDLE_HALF_BASE * dx]
  const b2 = [CENTRE + NEEDLE_HALF_BASE * dy, CENTRE - NEEDLE_HALF_BASE * dx]
  return [tip, b1, b2].map((p) => p.join(",")).join(" ")
}

/** Writes a motion value into an element's text without re-rendering React. */
function Readout({ value, format, className }: { value: MotionValue<number>; format: (n: number) => string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null)
  useMotionValueEvent(value, "change", (v) => {
    if (ref.current) ref.current.textContent = format(v)
  })
  return (
    <p ref={ref} className={className}>
      {format(value.get())}
    </p>
  )
}

const steps = [
  { title: "A separate meter for every car", text: "The 5,000 km cap is per car, so each one gets its own dial." },
  { title: "A warning before you reach 5,000 km", text: "Ocaro tells you when the cap is close, while there is still room to plan." },
  { title: "Rates and caps stored per financial year", text: "Every 1 July the meter starts again, with the rules for that year." },
]

function Step({ progress, index }: { progress: MotionValue<number>; index: number }) {
  const a = index / steps.length
  const b = (index + 1) / steps.length
  const fade = 0.05
  const opacity = useTransform(
    progress,
    index === 0 ? [0, b - fade, b] : index === steps.length - 1 ? [a - fade, a, 1] : [a - fade, a, b - fade, b],
    index === 0 ? [1, 1, 0] : index === steps.length - 1 ? [0, 1, 1] : [0, 1, 1, 0],
  )
  const y = useTransform(
    progress,
    index === 0 ? [0, b - fade, b] : index === steps.length - 1 ? [a - fade, a, 1] : [a - fade, a, b - fade, b],
    index === 0 ? [0, 0, -24] : index === steps.length - 1 ? [24, 0, 0] : [24, 0, 0, -24],
  )
  return (
    <motion.div style={{ opacity, y }} className="absolute inset-x-0 top-0 flex flex-col gap-3">
      <p className="text-3xl leading-[1.15] font-semibold tracking-[-.03em] text-white sm:text-4xl">{steps[index].title}</p>
      <p className="max-w-[440px] text-lg leading-normal text-muted-dark">{steps[index].text}</p>
    </motion.div>
  )
}

/**
 * The cap meter, driven by scroll. The section is 400vh tall and the dial sticks for the whole of it:
 * scrolling winds the needle from 0 to the cap, and the km counter follows.
 */
export function Cap() {
  const reduce = useReducedMotion()
  const section = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: section, offset: ["start start", "end end"] })
  const still = useMotionValue(DEFAULT_DRIVEN_KM / CAP_KM)
  // A little spring so the needle trails the scroll like a real gauge.
  const sprung = useSpring(scrollYProgress, { stiffness: 90, damping: 22, mass: 0.6 })
  const progress = reduce ? still : sprung

  const points = useTransform(progress, needlePoints)
  const dash = useTransform(progress, (p) => `${p * 100} 100`)
  const driven = useTransform(progress, (p) => p * CAP_KM)
  const left = useTransform(progress, (p) => (1 - p) * CAP_KM)
  const warn = useTransform(progress, [0.82, 0.9], [0, 1])
  // Text steps share the first 85% of the scroll; the last stretch holds on a full dial.
  const stepProgress = useTransform(scrollYProgress, [0, 0.9], [0, 1])

  return (
    <section
      id="cap"
      ref={section}
      className={reduce ? "bg-ink px-6 py-32 lg:px-20" : "relative h-[400vh] bg-ink"}
    >
      <div
        className={
          reduce
            ? "mx-auto grid max-w-[1280px] items-center gap-16 lg:grid-cols-2"
            : "sticky top-0 mx-auto grid h-dvh max-w-[1280px] items-center gap-10 px-6 lg:grid-cols-2 lg:gap-24 lg:px-20"
        }
      >
        <div className="flex flex-col gap-8 lg:gap-10">
          <Eyebrow className="text-brand-200">The cap meter</Eyebrow>
          <h2 className="text-[clamp(36px,5vw,68px)] leading-[1.05] font-semibold tracking-[-.045em]">
            <span className="block text-white">See what&apos;s left</span>
            <span className="block text-muted-dark">before the cap.</span>
          </h2>
          {reduce ? (
            <ul className="flex flex-col gap-6">
              {steps.map((s) => (
                <li key={s.title} className="flex flex-col gap-1">
                  <p className="text-xl font-semibold text-white">{s.title}</p>
                  <p className="text-base text-muted-dark">{s.text}</p>
                </li>
              ))}
            </ul>
          ) : (
            <div className="relative h-[150px] sm:h-[170px]">
              {steps.map((_, i) => (
                <Step key={i} progress={stepProgress} index={i} />
              ))}
            </div>
          )}
        </div>

        <div className="relative flex flex-col items-center gap-6 rounded-[40px] border border-line-dark bg-surface-dark px-6 pt-10 pb-10 sm:px-12 sm:pt-14">
          <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-brand/60 to-transparent" />
          <svg
            viewBox="14 14 172 160"
            role="img"
            aria-label="Cap meter winding up towards the 5,000 km cap"
            className="h-auto w-[min(100%,420px)]"
          >
            <path d={ARC} pathLength={100} fill="none" stroke="#2b2b30" strokeWidth="26" strokeLinecap="round" />
            <motion.path
              d={ARC}
              pathLength={100}
              fill="none"
              stroke="#DC2626"
              strokeWidth="26"
              strokeLinecap="round"
              style={{ strokeDasharray: dash }}
            />
            <motion.polygon fill="#ffffff" points={points} />
            <circle cx={CENTRE} cy={CENTRE} r="11" fill="#ffffff" />
          </svg>
          <div className="flex flex-col items-center gap-1.5">
            <div className="flex items-end gap-2.5">
              <Readout value={left} format={km} className="text-[clamp(44px,6vw,64px)] leading-none font-semibold tracking-[-.04em] text-white tabular-nums" />
              <p className="text-[22px] font-medium text-muted-dark">km left</p>
            </div>
            <div className="flex items-center gap-1.5 text-[15px] text-muted-dark tabular-nums">
              <Readout value={driven} format={km} />
              <p>of {km(CAP_KM)} km claimed</p>
            </div>
          </div>
          <motion.p
            style={{ opacity: reduce ? 0 : warn }}
            className="rounded-full bg-brand px-4 py-1.5 text-sm font-semibold text-brand-200"
          >
            Close to your cap
          </motion.p>
        </div>
      </div>
    </section>
  )
}
