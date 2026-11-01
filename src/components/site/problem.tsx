import { BigTitle, Container, Section } from "./primitives"

const steps = [
  {
    title: "Drive as normal",
    text: "Ocaro logs every trip with date, distance and odometer reading in the background.",
  },
  {
    title: "Tag work trips",
    text: "One tap to mark a trip as work or private. Add a purpose and you're done.",
  },
  {
    title: "Export at tax time",
    text: "Get a clean, ATO-ready logbook and kilometre summary for your accountant, or lodge it yourself.",
  },
]

export function Problem() {
  return (
    <Section id="how" className="bg-grey">
      <Container>
        <BigTitle light="Car records are easy to miss" bold="when you're on the road" />
        <p className="mt-5 max-w-[540px] text-xl font-semibold">From untracked trips to missed deadlines, it all adds up.</p>
        <p className="mt-2.5 max-w-[640px] text-muted-foreground">
          Every kilometre you forget to log is money left off your tax return. Ocaro keeps the record for you.
        </p>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {steps.map((s, i) => (
            <div key={s.title} className="rounded-[20px] border border-line bg-white p-[30px]">
              <span className="mb-[18px] inline-flex size-9 items-center justify-center rounded-full bg-ink font-heading text-[15px] font-semibold text-white">
                {i + 1}
              </span>
              <h3 className="mb-2 font-heading text-[23px] leading-[1.05] font-semibold tracking-[-.02em]">{s.title}</h3>
              <p className="text-[15.5px] text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
