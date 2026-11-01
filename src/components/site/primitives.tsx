import type { ComponentProps, ReactNode } from "react"
import { cn } from "@/lib/utils"

export function Container({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("mx-auto w-full max-w-[1160px] px-6", className)} {...props} />
}

export function Section({ className, ...props }: ComponentProps<"section">) {
  return <section className={cn("py-16 lg:py-24", className)} {...props} />
}

export function Eyebrow({ className, ...props }: ComponentProps<"p">) {
  return (
    <p className={cn("mb-4 text-xs leading-none font-semibold tracking-[.14em] text-brand uppercase", className)} {...props} />
  )
}

/** Uppercase Outfit heading: a light first line and a bold second line. */
export function BigTitle({
  light,
  bold,
  as: Tag = "h2",
  className,
}: {
  light: ReactNode
  bold: ReactNode
  as?: "h1" | "h2"
  className?: string
}) {
  return (
    <Tag
      className={cn(
        "font-heading text-[clamp(32px,5.4vw,60px)] leading-none font-light tracking-[-.01em] uppercase",
        className,
      )}
    >
      {light}
      <b className="block font-bold">{bold}</b>
    </Tag>
  )
}

export function Lead({ className, ...props }: ComponentProps<"p">) {
  return <p className={cn("max-w-[540px] text-lg text-muted-foreground", className)} {...props} />
}
