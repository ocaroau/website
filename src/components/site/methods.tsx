import { methods } from "@/content/site"

export function Methods() {
  return (
    <section id="methods" className="flex flex-col gap-16 bg-ink px-6 pt-[120px] pb-32 lg:px-20">
      <div className="flex flex-col gap-5">
        <p className="text-xs font-semibold tracking-[.14em] text-brand-200 uppercase">Two ways to claim</p>
        <h2 className="text-[clamp(40px,6vw,64px)] leading-[1.12] font-semibold tracking-[-.04em]">
          <span className="block text-white">Ocaro handles</span>
          <span className="block text-muted-dark">both methods.</span>
        </h2>
        <p className="max-w-[560px] text-xl leading-normal text-muted-dark">
          Use the method that gets you the bigger deduction. We keep the records for either.
        </p>
      </div>
      <div className="grid items-stretch gap-6 lg:grid-cols-2">
        {methods.map((m) => (
          <div key={m.title} className="flex flex-col gap-5 rounded-[36px] border border-line-dark bg-surface-dark p-6 sm:p-10">
            <p className="text-4xl leading-[1.1] font-semibold tracking-[-.03em] text-white">{m.title}</p>
            <p className="text-[17px] leading-[1.55] text-muted-dark">{m.text}</p>
            <div className="h-px w-full bg-line-dark" />
            <ul className="flex flex-col gap-3.5">
              {m.points.map((p) => (
                <li key={p} className="flex items-center gap-3 text-base font-medium text-white">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img alt="" src="/images/dot-pink.svg" className="size-2" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
