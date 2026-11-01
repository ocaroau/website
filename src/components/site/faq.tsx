import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { faqs } from "@/content/site"
import { BigTitle, Container, Eyebrow, Section } from "./primitives"

export function Faq() {
  return (
    <Section id="faq" className="pt-0">
      <Container>
        <Eyebrow>Questions</Eyebrow>
        <BigTitle light="Good" bold="to know" />
        <Accordion className="mt-9 max-w-[760px]">
          {faqs.map((f) => (
            <AccordionItem key={f.q} value={f.q} className="border-b border-line py-[22px]">
              <AccordionTrigger className="items-center gap-4 rounded-none border-0 p-0 font-heading text-xl leading-[1.05] font-semibold hover:no-underline **:data-[slot=accordion-trigger-icon]:text-ink">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                <p className="pt-2.5">{f.a}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </Section>
  )
}
