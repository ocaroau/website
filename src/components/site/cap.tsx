import { CAP_KM } from "@/content/site"
import { CapMeter } from "./cap-meter"
import { BigTitle, Container, Eyebrow, Lead, Section } from "./primitives"

export function Cap() {
  return (
    <Section id="cap">
      <Container className="grid items-center gap-9 lg:grid-cols-2 lg:gap-16">
        <div>
          <Eyebrow>The cap meter</Eyebrow>
          <BigTitle light="See what's left" bold="before the cap" />
          <Lead className="mt-[18px]">
            The cents-per-kilometre method is capped at {CAP_KM.toLocaleString("en-AU")} work kilometres a year. Ocaro
            keeps a live dial: white for what you&apos;ve driven, a small stroke of red for what&apos;s left.
          </Lead>
        </div>
        <CapMeter />
      </Container>
    </Section>
  )
}
