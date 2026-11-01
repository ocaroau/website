import { Logo } from "./logo"

const links = ["Privacy", "Terms", "Contact"]

export function Footer() {
  return (
    <footer className="flex flex-col justify-between gap-8 border-t border-line-dark bg-ink px-6 pt-12 pb-14 lg:flex-row lg:px-20">
      <Logo href="#top" className="h-[33.178px] w-[134.784px]" />
      <div className="flex flex-col gap-2 text-[13px] text-muted-dark">
        <p className="max-w-[460px] leading-[1.55]">
          Ocaro is a record-keeping tool and does not provide tax advice. Always check current ATO rules and rates before
          lodging.
        </p>
        <p>© 2026 Ocaro. Made in Australia.</p>
      </div>
      <nav aria-label="Footer" className="flex gap-7 text-sm font-medium text-white/70">
        {links.map((l) => (
          <a key={l} href="#" className="transition-colors hover:text-white">
            {l}
          </a>
        ))}
      </nav>
    </footer>
  )
}
