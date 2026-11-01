"use client"

import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "motion/react"
import { useRef } from "react"
import { Reveal } from "./motion"
import { Container, Eyebrow } from "./primitives"

/** The phone screens are exported from the design (shadow included), so they match it exactly. */
const screens = [
  {
    src: "/images/phone-rides.png",
    alt: "Ocaro home screen listing cars and recent rides",
    title: "Your rides, logged",
    text: "Every trip with distance, time and speed, per car.",
    lift: 60,
  },
  {
    src: "/images/phone-detection.png",
    alt: "Ocaro account screen with drive detection settings",
    title: "Detection you control",
    text: "Automatic drive detection, or only when your car Bluetooth connects.",
    lift: 130,
  },
  {
    src: "/images/phone-cars.png",
    alt: "Ocaro My cars screen with a cap meter for each car",
    title: "All your cars",
    text: "A cap meter for each car, with the kilometres run this month.",
    lift: 20,
  },
]

function Phone({ screen, progress }: { screen: (typeof screens)[number]; progress: MotionValue<number> }) {
  const reduce = useReducedMotion()
  // Each phone rides a different distance, so the three separate as you scroll past.
  const y = useTransform(progress, [0, 1], [reduce ? 0 : screen.lift * 1.6, reduce ? 0 : -screen.lift])
  return (
    <motion.figure style={{ y }} className="flex w-[327.6px] max-w-full flex-col items-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={screen.src} alt={screen.alt} width={328} height={789} className="h-auto w-full max-w-none" />
      <figcaption className="-mt-[52px] flex flex-col items-center gap-2 text-center">
        <p className="text-[22px] font-semibold tracking-[-.02em] text-ink">{screen.title}</p>
        <p className="w-[300px] max-w-full text-[15px] leading-normal text-muted-ink">{screen.text}</p>
      </figcaption>
    </motion.figure>
  )
}

export function AppScreens() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  return (
    <section id="app" className="overflow-hidden bg-white py-28 lg:py-40">
      <Container className="flex flex-col items-center gap-20">
        <Reveal className="flex flex-col items-center gap-6 text-center">
          <Eyebrow>The app</Eyebrow>
          <h2 className="text-[clamp(40px,6vw,72px)] leading-[1.05] font-semibold tracking-[-.045em]">
            <span className="block text-ink">Every ride.</span>
            <span className="block text-muted-ink">One calm place.</span>
          </h2>
        </Reveal>
        <div ref={ref} className="flex flex-wrap items-start justify-center gap-x-12 gap-y-20 pb-16">
          {screens.map((s) => (
            <Phone key={s.title} screen={s} progress={scrollYProgress} />
          ))}
        </div>
      </Container>
    </section>
  )
}
