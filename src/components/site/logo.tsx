import { cn } from "@/lib/utils"

/** Cap-meter dial mark. Ink comes from `currentColor`, the red arc is fixed at #DC2626 so it stays the full brand red. */
export function Dial({ className }: { className?: string }) {
  return (
    <svg viewBox="14 14 172 160" aria-hidden="true" className={cn("text-ink", className)}>
      <path d="M50.5 149.5 A70 70 0 0 1 123.9 34.2" fill="none" stroke="currentColor" strokeWidth="26" strokeLinecap="round" />
      <path d="M145 46.4 A70 70 0 0 1 149.5 149.5" fill="none" stroke="#DC2626" strokeWidth="26" strokeLinecap="round" />
      <path
        d="M126 76 L103.8 113.8 A11 11 0 1 1 88.2 98.2 Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Logo({ size = "md", href = "#" }: { size?: "sm" | "md"; href?: string }) {
  const sm = size === "sm"
  return (
    <a href={href} className="inline-flex items-center gap-2" aria-label="Ocaro home">
      <Dial className={sm ? "h-6 w-[26px]" : "h-[34px] w-9"} />
      <span className={cn("font-heading leading-[1.05] font-semibold tracking-[-.02em] lowercase", sm ? "text-[22px]" : "text-[30px]")}>
        ocaro
      </span>
    </a>
  )
}
