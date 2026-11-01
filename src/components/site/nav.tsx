import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Container } from "./primitives"
import { Logo } from "./logo"

const links = [
  { href: "#how", label: "How it works" },
  { href: "#cap", label: "Cap meter" },
  { href: "#methods", label: "Methods" },
  { href: "#faq", label: "FAQ" },
]

export function Nav() {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-white/92 backdrop-blur-[10px]">
      <Container className="flex h-[76px] items-center gap-10">
        <Logo href="#top" />
        <nav aria-label="Main" className="hidden gap-8 text-base font-medium lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="underline-offset-[6px] decoration-brand decoration-2 hover:underline"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a href="#start" className={cn(buttonVariants({ size: "sm" }), "ml-auto")}>
          Get started
        </a>
      </Container>
    </header>
  )
}
