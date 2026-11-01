"use client"

import { animate, motion, useInView, useReducedMotion } from "motion/react"
import { useEffect, useRef, type ComponentProps } from "react"
import { cn } from "@/lib/utils"

const EASE = [0.16, 1, 0.3, 1] as const

/** Fades and lifts its children in once, as they enter the viewport. */
export function Reveal({
  delay = 0,
  y = 28,
  className,
  children,
  ...props
}: { delay?: number; y?: number } & Omit<ComponentProps<typeof motion.div>, "initial" | "whileInView" | "transition">) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8, delay, ease: EASE }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

/** Counts up from zero when scrolled into view, like a speedo winding up. Writes straight to the DOM, no re-renders. */
export function CountUp({
  to,
  decimals = 0,
  duration = 1.6,
  prefix = "",
  suffix = "",
  className,
}: {
  to: number
  decimals?: number
  duration?: number
  prefix?: string
  suffix?: string
  className?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const reduce = useReducedMotion()
  const format = (n: number) =>
    prefix + n.toLocaleString("en-AU", { minimumFractionDigits: decimals, maximumFractionDigits: decimals }) + suffix

  useEffect(() => {
    const el = ref.current
    if (!el || !inView || reduce) return
    const controls = animate(0, to, {
      duration,
      ease: EASE,
      onUpdate: (v) => {
        el.textContent = format(v)
      },
    })
    return () => controls.stop()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, reduce, to, duration])

  return (
    <span ref={ref} className={className}>
      {format(reduce ? to : 0)}
    </span>
  )
}

/** Four-digit odometer (000.0 style) that winds to its value on view. */
export function Odometer({ to, className }: { to: number; className: string }) {
  const refs = useRef<(HTMLSpanElement | null)[]>([])
  const wrap = useRef<HTMLDivElement>(null)
  const inView = useInView(wrap, { once: true, amount: 0.6 })
  const reduce = useReducedMotion()

  const paint = (v: number) => {
    const s = Math.round(v * 10).toString().padStart(4, "0")
    refs.current.forEach((el, i) => {
      if (el) el.textContent = s[i]
    })
  }

  useEffect(() => {
    if (!inView) return
    if (reduce) return paint(to)
    const controls = animate(0, to, { duration: 1.8, ease: EASE, onUpdate: paint })
    return () => controls.stop()
  }, [inView, reduce, to])

  const cell = (i: number, hot = false) => (
    <span key={i} ref={(el) => void (refs.current[i] = el)} className={cn(className, hot && "text-brand")}>
      0
    </span>
  )

  return (
    <div ref={wrap} className="flex items-center gap-2" aria-label={`${to} km`} role="img">
      {cell(0)}
      {cell(1)}
      {cell(2)}
      <span className="text-[44px] font-semibold text-white">.</span>
      {cell(3, true)}
      <span className="text-base font-medium text-muted-dark">km</span>
    </div>
  )
}
