import { CapMeter } from "./cap-meter"
import { Eyebrow, Title } from "./primitives"

const points = ["A separate meter for every car", "A warning before you reach 5,000 km", "Rates and caps stored per financial year"]

export function Cap() {
  return (
    <section id="cap" className="flex flex-col items-center gap-12 bg-grey px-6 py-[120px] lg:flex-row lg:gap-24 lg:px-20">
      <div className="flex min-w-0 flex-1 flex-col items-start gap-6">
        <Eyebrow>The cap meter</Eyebrow>
        <Title first="See what's left" second="before the cap." />
        <p className="max-w-[500px] text-[19px] leading-[1.55] text-muted-ink">
          The cents-per-kilometre method is capped at 5,000 work kilometres a year, per car. Ocaro keeps a live dial for
          each car so you see the limit coming.
        </p>
        <ul className="flex flex-col gap-3.5">
          {points.map((p) => (
            <li key={p} className="flex items-center gap-3 text-[17px] font-medium text-ink">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="" src="/images/dot-red.svg" className="size-2" />
              {p}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex w-full max-w-[560px] shrink-0 flex-col items-center gap-5 rounded-[40px] border border-line bg-white px-6 pt-14 pb-12 sm:px-14">
        <CapMeter />
      </div>
    </section>
  )
}
