import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { faqs } from "@/content/site"
import { Reveal } from "./motion"
import { Container, Eyebrow } from "./primitives"

export function Faq() {
  return (
    <section id="faq" className="bg-white py-28 lg:py-40">
      <Container className="flex flex-col gap-14 lg:flex-row lg:gap-24">
      <Reveal className="flex w-full shrink-0 flex-col gap-6 lg:sticky lg:top-28 lg:h-fit lg:w-[380px]">
        <Eyebrow>Questions</Eyebrow>
        <h2 className="text-[clamp(40px,6vw,64px)] leading-[1.12] font-semibold tracking-[-.04em]">
          <span className="block text-ink">Good to</span>
          <span className="block text-muted-ink">know.</span>
        </h2>
      </Reveal>
      <Accordion defaultValue={[faqs[0].q]} className="min-w-0 flex-1 border-t border-line">
        {faqs.map((f) => (
          <AccordionItem key={f.q} value={f.q} className="border-b border-line py-8">
            <AccordionTrigger className="items-center gap-4 rounded-none border-0 p-0 text-[22px] leading-[1.2] font-semibold tracking-[-.015em] text-ink hover:no-underline **:data-[slot=accordion-trigger-icon]:text-brand">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-[17px] leading-[1.55] text-muted-ink">
              <p className="pt-3.5">{f.a}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      </Container>
    </section>
  )
}
