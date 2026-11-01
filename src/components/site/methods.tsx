import { methods } from "@/content/site"
import { Reveal } from "./motion"
import { Container } from "./primitives"

export function Methods() {
  return (
    <section id="methods" className="bg-ink py-28 lg:py-40">
      <Container className="flex flex-col gap-20">
        <Reveal className="flex flex-col gap-6">
          <p className="text-xs font-semibold tracking-[.14em] text-brand-200 uppercase">Two ways to claim</p>
          <h2 className="text-[clamp(40px,6vw,72px)] leading-[1.05] font-semibold tracking-[-.045em]">
            <span className="block text-white">Ocaro handles</span>
            <span className="block text-muted-dark">both methods.</span>
          </h2>
          <p className="max-w-[560px] text-xl leading-normal text-muted-dark">
            Use the method that gets you the bigger deduction. We keep the records for either.
          </p>
        </Reveal>
        <div className="grid items-stretch gap-6 lg:grid-cols-2 lg:gap-8">
          {methods.map((m, i) => (
            <Reveal
              key={m.title}
              delay={i * 0.12}
              className="flex flex-col gap-6 rounded-[36px] border border-line-dark bg-surface-dark p-8 sm:p-12"
            >
              <p className="text-4xl leading-[1.1] font-semibold tracking-[-.03em] text-white">{m.title}</p>
              <p className="text-[17px] leading-[1.6] text-muted-dark">{m.text}</p>
              <div className="h-px w-full bg-line-dark" />
              <ul className="flex flex-col gap-4">
                {m.points.map((p) => (
                  <li key={p} className="flex items-center gap-3 text-base font-medium text-white">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img alt="" src="/images/dot-pink.svg" className="size-2" />
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
