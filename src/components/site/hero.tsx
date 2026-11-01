"use client"

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"
import { CountUp } from "./motion"
import { Nav } from "./nav"

/** Hero: photo background, scrim, nav, headline and the two floating cards, at the design's 1440 x 938. */
const EASE = [0.16, 1, 0.3, 1] as const

export function Hero() {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
  // The photo drifts slower than the page and the copy lifts away, so leaving the hero feels like pulling out.
  const photoY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "18%"])
  const photoScale = useTransform(scrollYProgress, [0, 1], [1.04, reduce ? 1.04 : 1.18])
  const copyY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -90])
  const copyOpacity = useTransform(scrollYProgress, [0, 0.7], [1, reduce ? 1 : 0])
  const enter = (delay: number) =>
    reduce ? {} : { initial: { opacity: 0, y: 32 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.9, delay, ease: EASE } }

  return (
    <section ref={ref} id="top" className="relative flex min-h-[938px] flex-col overflow-hidden bg-ink">
      <motion.div style={{ y: photoY, scale: photoScale }} className="pointer-events-none absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt="" src="/images/hero.png" className="size-full max-w-none object-cover" />
      </motion.div>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(10,10,10,.55) 0%, rgba(10,10,10,0) 18%, rgba(10,10,10,0) 78%, rgba(10,10,10,.85) 100%), linear-gradient(90deg, rgba(10,10,10,.94) 0%, rgba(10,10,10,.72) 42%, rgba(10,10,10,.15) 75%, rgba(10,10,10,.05) 100%)",
        }}
      />
      <Nav />
      <motion.div style={{ y: copyY, opacity: copyOpacity }} className="relative flex flex-1 items-center gap-16 px-6 pt-14 pb-[120px] lg:px-20">
        <div className="flex min-w-0 flex-1 flex-col items-start gap-9">
          <motion.h1 {...enter(0.1)} className="text-[clamp(44px,8.4vw,88px)] leading-[.98] lg:whitespace-nowrap font-semibold tracking-[-.045em]">
            <span className="block text-white">Every work km.</span>
            <span className="block text-brand">Tracked.</span>
          </motion.h1>
          <motion.p {...enter(0.25)} className="max-w-[560px] text-xl leading-normal text-muted-dark">
            Ocaro notices when you drive, counts the kilometres and builds the logbook your tax agent needs. You just
            drive.
          </motion.p>
          <motion.div {...enter(0.4)} className="flex flex-wrap gap-3">
            <a href="#start" className="flex items-center gap-2.5 rounded-full bg-white px-[30px] py-[18px] text-base font-semibold text-ink">
              Get early access <span aria-hidden="true">→</span>
            </a>
            <a href="#how" className="flex items-center rounded-full border border-line-dark px-7 py-[18px] text-base font-medium text-white">
              See how it works
            </a>
          </motion.div>
        </div>

        <div className="relative hidden h-[680px] w-[600px] shrink-0 lg:block" aria-hidden="true">
          <motion.div {...enter(0.6)} className="absolute top-[72px] -left-14 flex w-[264px] flex-col gap-3.5 rounded-3xl border border-line-dark bg-surface-dark px-[22px] py-5 shadow-[0_24px_48px_rgba(0,0,0,.35)] backdrop-blur-[14px]">
            <p className="text-[13px] font-medium text-white/70">Trip in progress</p>
            <div className="flex items-end gap-1.5">
              <CountUp to={23.6} decimals={1} duration={2.4} className="text-[52px] leading-none font-semibold tracking-[-.04em] text-white tabular-nums" />
              <p className="text-lg font-medium text-muted-dark">km</p>
            </div>
            <div className="flex w-full items-center justify-between">
              <p className="text-[13px] text-muted-dark">Started 8:12 am</p>
              <p className="rounded-full bg-brand px-2.5 py-1 text-xs font-semibold text-brand-200">Business</p>
            </div>
          </motion.div>

          <motion.div {...enter(0.8)} className="absolute top-[509px] left-[300px] flex items-center gap-4 rounded-[28px] border border-line-dark bg-surface-dark py-4 pr-[26px] pl-4 shadow-[0_24px_48px_rgba(0,0,0,.35)] backdrop-blur-[14px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt="" src="/images/dial-hero.svg" className="h-[96.744px] w-[104px]" />
            <div className="flex flex-col gap-1">
              <p className="text-[30px] leading-none font-semibold tracking-[-.03em] text-white tabular-nums"><CountUp to={3104} duration={2.6} suffix=" km" /></p>
              <p className="text-[13px] text-muted-dark">of your 5,000 km cap</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
