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

/** Horizontal logo for black backgrounds, built from the two exported Figma pieces (146 x 36 at its design size). */
export function Logo({ href = "#top", className }: { href?: string; className?: string }) {
  return (
    <a href={href} aria-label="Ocaro home" className={cn("relative block h-[35.942px] w-[146.016px] shrink-0", className)}>
      <span className="absolute inset-[20.32%_79.23%_21.01%_3.85%]">
        <span className="absolute inset-[-11.98%_-10.23%]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt="" src="/images/logo-mark.svg" className="block size-full max-w-none" />
        </span>
      </span>
      <span className="absolute inset-[28.12%_1.92%_28.12%_31.54%]">
        <span className="absolute inset-[-14.29%_-2.31%]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt="" src="/images/logo-word.svg" className="block size-full max-w-none" />
        </span>
      </span>
    </a>
  )
}
