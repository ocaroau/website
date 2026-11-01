"use client"

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"
import { Reveal } from "./motion"
import { Container, Eyebrow } from "./primitives"

const tiles = [
  { label: "Start", value: "8:12 am" },
  { label: "End", value: "8:43 am" },
  { label: "Distance", value: "23.6 km", accent: true },
]

export function Privacy() {
  const reduce = useReducedMotion()
  const route = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: route, offset: ["start 85%", "center 45%"] })
  // The dotted route is wiped away left to right as you scroll, then the three kept facts remain.
  const clip = useTransform(scrollYProgress, (p) => `inset(0 ${reduce ? 0 : (1 - p) * 100}% 0 0)`)
  return (
    <section id="privacy" className="bg-grey py-28 lg:py-40">
      <Container className="flex flex-col items-center gap-16 text-center">
        <Reveal className="flex flex-col items-center gap-6">
          <Eyebrow>Privacy</Eyebrow>
          <h2 className="text-[clamp(44px,7vw,88px)] leading-[1.04] font-semibold tracking-[-.05em]">
            <span className="block text-ink">We keep the distance.</span>
            <span className="block text-muted-ink">Not the route.</span>
          </h2>
        </Reveal>
        <div ref={route} className="w-[760px] max-w-full">
          <motion.div style={{ clipPath: clip }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt="" src="/images/route.svg" className="h-[120px] w-full" />
          </motion.div>
        </div>
        <Reveal className="flex max-w-full flex-col overflow-hidden rounded-[28px] border border-line bg-white sm:flex-row">
          {tiles.map((t, i) => (
            <div
              key={t.label}
              className={`flex flex-col items-start gap-2 px-10 py-7 text-left sm:px-14 ${i > 0 ? "border-t border-line sm:border-t-0 sm:border-l" : ""}`}
            >
              <p className="text-xs font-semibold tracking-[.1em] text-muted-ink uppercase">{t.label}</p>
              <p className={`text-[30px] leading-none font-semibold tracking-[-.02em] ${t.accent ? "text-brand" : "text-ink"}`}>{t.value}</p>
            </div>
          ))}
        </Reveal>
        <Reveal className="max-w-[620px] text-[19px] leading-[1.6] text-muted-ink">
          <p>
            The map is live while you drive. When the trip ends, Ocaro keeps the start time, end time and distance. Your
            location history stays yours.
          </p>
        </Reveal>
      </Container>
    </section>
  )
}
