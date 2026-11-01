import { stats } from "@/content/site"
import { CountUp, Reveal } from "./motion"
import { Container } from "./primitives"

export function Facts() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <Container className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
        {stats.map((s, i) => (
          <Reveal
            key={s.value}
            delay={i * 0.08}
            className={i > 0 ? "flex flex-col gap-3 lg:border-l lg:border-line lg:pl-10" : "flex flex-col gap-3"}
          >
            <p className="text-[clamp(32px,3.4vw,44px)] leading-none font-semibold tracking-[-.035em] text-ink tabular-nums">
              {"count" in s && s.count ? <CountUp to={s.count.to} suffix={s.count.suffix} /> : s.value}
            </p>
            <p className="max-w-[220px] text-sm leading-[1.5] text-muted-ink">{s.label}</p>
          </Reveal>
        ))}
      </Container>
    </section>
  )
}
