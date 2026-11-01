import { Logo } from "./logo"

const links = [
  { href: "#how", label: "How it works" },
  { href: "#cap", label: "Cap meter" },
  { href: "#methods", label: "Methods" },
  { href: "#faq", label: "FAQ" },
]

/** Nav sits on the hero photo, so it is white-on-dark and scrolls with the page. */
export function Nav() {
  return (
    <header className="relative z-10 flex items-center justify-between px-6 py-7 lg:px-20">
      <Logo href="#top" />
      <nav aria-label="Main" className="hidden gap-9 text-[15px] font-medium text-white/70 lg:flex">
        {links.map((l) => (
          <a key={l.href} href={l.href} className="transition-colors hover:text-white">
            {l.label}
          </a>
        ))}
      </nav>
      <a href="#start" className="rounded-full bg-white px-[22px] py-3 text-[15px] font-semibold text-ink">
        Get early access
      </a>
    </header>
  )
}
