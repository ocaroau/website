import { stats } from "@/content/site"

export function Facts() {
  return (
    <section className="grid gap-8 bg-white px-6 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:px-20">
      {stats.map((s, i) => (
        <div key={s.value} className={i > 0 ? "flex flex-col gap-1.5 lg:border-l lg:border-line lg:pl-8" : "flex flex-col gap-1.5"}>
          <p className="text-[32px] leading-none font-semibold tracking-[-.03em] text-ink">{s.value}</p>
          <p className="text-sm leading-[1.4] text-muted-ink">{s.label}</p>
        </div>
      ))}
    </section>
  )
}
