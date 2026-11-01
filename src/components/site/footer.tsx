import { Container } from "./primitives"
import { Logo } from "./logo"

export function Footer() {
  return (
    <footer className="pt-10 pb-[52px] text-[13.5px] text-muted-foreground">
      <Container className="flex flex-col gap-3">
        <Logo size="sm" href="#top" />
        <p>Ocaro is a record-keeping tool and does not provide tax advice. Always check current ATO rules and rates before lodging.</p>
        <p>© 2026 Ocaro. Made in Australia.</p>
      </Container>
    </footer>
  )
}
