const digit =
  "relative flex h-[88px] w-16 items-center justify-center overflow-hidden rounded-[14px] border border-[#2b2b30] bg-[#161618] text-[52px] font-semibold tracking-[-.02em] text-white"

function Digit({ children, hot = false }: { children: string; hot?: boolean }) {
  return (
    <span className={`${digit} ${hot ? "!border-[rgba(242,85,74,.6)] !bg-[#1c1112] !text-[#f2554a]" : ""}`}>
      {children}
      <span className="absolute top-[43px] -left-px h-px w-16 bg-black/55" />
    </span>
  )
}

/** Closing call to action: red glow, zeroed odometer, headline and button. */
export function Cta() {
  return (
    <section id="start" className="relative flex flex-col items-center gap-10 overflow-hidden bg-ink px-6 py-36 text-center lg:px-20">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        alt=""
        src="/images/red-glow.svg"
        className="pointer-events-none absolute -top-[2064px] -left-[841px] h-[2768px] w-[1513px] max-w-none"
      />
      <div className="relative flex flex-col items-center gap-5">
        <div className="flex items-center gap-2">
          <Digit>0</Digit>
          <Digit>0</Digit>
          <Digit>0</Digit>
          <Digit>0</Digit>
          <span className="text-[52px] font-semibold text-white/50">.</span>
          <Digit hot>0</Digit>
          <span className="text-xl text-white/55">km</span>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[.06] px-3.5 py-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt="" src="/images/dot-ready.svg" className="size-[7px]" />
          <p className="text-sm font-medium text-white/70">Odometer ready · Your first work km starts here</p>
        </div>
      </div>
      <h2 className="relative text-[clamp(48px,7.5vw,92px)] leading-[1.04] font-semibold tracking-[-.05em]">
        <span className="block text-white">Let&apos;s start</span>
        <span className="block text-brand">measuring.</span>
      </h2>
      <p className="relative text-xl text-muted-dark">Be first in line when Ocaro opens up to Australian drivers.</p>
      <a href="#" className="relative flex items-center gap-2.5 rounded-full bg-white px-9 py-5 text-[17px] font-semibold text-ink">
        Get early access <span aria-hidden="true">→</span>
      </a>
    </section>
  )
}
