import { methods } from "@/content/site"
import { BigTitle, Container, Eyebrow, Lead, Section } from "./primitives"

export function Methods() {
  return (
    <Section id="methods" className="pt-0">
      <Container>
        <Eyebrow>Two ways to claim</Eyebrow>
        <BigTitle light="Ocaro handles" bold="both methods" />
        <Lead className="mt-[18px]">
          Use the method that gets you the bigger deduction. We keep the records for either.
        </Lead>
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {methods.map((m) => (
            <div key={m.title} className="rounded-[20px] bg-grey p-[30px]">
              <span className="mb-3.5 inline-block rounded-full bg-brand-200 px-2.5 py-1.5 text-xs leading-none font-semibold">
                {m.tag}
              </span>
              <h3 className="mb-2 font-heading text-[23px] leading-[1.05] font-semibold tracking-[-.02em]">{m.title}</h3>
              <p className="text-[15.5px] text-muted-foreground">{m.text}</p>
              <ul className="mt-2.5 list-disc pl-[18px] text-[15.5px] text-muted-foreground">
                {m.points.map((p) => (
                  <li key={p} className="my-1">{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
