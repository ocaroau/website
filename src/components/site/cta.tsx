import { buttonVariants } from "@/components/ui/button"
import { Dial } from "./logo"
import { BigTitle, Container, Lead, Section } from "./primitives"

export function Cta() {
  return (
    <Section id="start" className="bg-grey text-center">
      <Container>
        <Dial className="mx-auto mb-5 h-[67px] w-[72px]" />
        <BigTitle light="Stop leaving money" bold="on the road" />
        <Lead className="mx-auto mt-[18px] mb-8">Be first in line when Ocaro opens up to Australian drivers.</Lead>
        <a href="#" className={buttonVariants()}>Get early access</a>
      </Container>
    </Section>
  )
}
