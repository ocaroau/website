import type { ComponentProps, ReactNode } from "react"
import { cn } from "@/lib/utils"

/** Page gutter from the design: 80px on desktop. */
export function Container({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("mx-auto w-full max-w-[1440px] px-6 lg:px-20", className)} {...props} />
}

export function Eyebrow({ className, ...props }: ComponentProps<"p">) {
  return (
    <p className={cn("text-xs font-semibold tracking-[.14em] text-brand uppercase", className)} {...props} />
  )
}

/** Semi-bold Inter heading: a solid first line and a muted second line. */
export function Title({
  first,
  second,
  size = "md",
  dark = false,
  align = "left",
  className,
}: {
  first: ReactNode
  second?: ReactNode
  size?: "md" | "lg" | "xl"
  dark?: boolean
  align?: "left" | "center"
  className?: string
}) {
  return (
    <h2
      className={cn(
        "font-semibold",
        size === "md" && "text-[clamp(40px,6vw,64px)] leading-[1.12] tracking-[-.04em]",
        size === "lg" && "text-[clamp(44px,7vw,88px)] leading-[1.04] tracking-[-.05em]",
        size === "xl" && "text-[clamp(48px,7.5vw,92px)] leading-[1.04] tracking-[-.05em]",
        align === "center" && "text-center",
        className,
      )}
    >
      <span className={cn("block", dark ? "text-white" : "text-ink")}>{first}</span>
      {second && <span className={cn("block", dark ? "text-muted-dark" : "text-muted-ink")}>{second}</span>}
    </h2>
  )
}
