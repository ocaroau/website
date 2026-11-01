import { buttonVariants } from "@/components/ui/button"
import { BigTitle, Container } from "./primitives"
import { HeroPhones } from "./hero-phones"

const trust = ["ATO-ready reports", "Live 5,000 km cap meter", "12-week logbook"]

export function Hero() {
  return (
    <section
      id="top"
      className="overflow-hidden bg-[radial-gradient(900px_500px_at_85%_100%,rgba(254,202,202,.55),transparent_70%)]"
    >
      <Container className="grid items-center gap-6 lg:min-h-[700px] lg:grid-cols-[1.05fr_1fr]">
        <div className="pt-10 pb-2 lg:py-14">
          <BigTitle as="h1" light="Logbook app for" bold="Aussie drivers" className="mb-7" />
          <p className="mb-9 max-w-[520px] text-lg text-muted-foreground">
            Track your work trips, watch your kilometre cap and build logbook reports for your tax agent. Everything
            organised and ready for tax time.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#start" className={buttonVariants()}>Get the app</a>
            <a href="#how" className={buttonVariants({ variant: "outline" })}>See how it works</a>
          </div>
          <div className="mt-[34px] flex flex-wrap gap-x-[22px] gap-y-2 text-sm font-medium text-muted-foreground">
            {trust.map((t) => (
              <span
                key={t}
                className="before:mr-2 before:inline-block before:size-[7px] before:rounded-full before:bg-brand before:align-[1px] before:content-['']"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
        <HeroPhones />
      </Container>
    </section>
  )
}
