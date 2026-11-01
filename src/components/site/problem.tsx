import { Eyebrow } from "./primitives"

const digit = "flex h-[76px] w-[52px] items-center justify-center rounded-[14px] border border-line-dark bg-surface-dark text-[44px] font-semibold tracking-[-.02em] text-white"

const steps = [
  {
    title: "It notices",
    text: "Motion detection wakes GPS only when you are in a car, so the battery stays fine.",
    mock: (
      <div className="flex w-full flex-col gap-1.5 rounded-[18px] border border-line-dark bg-surface-dark px-[18px] py-4">
        <div className="flex w-full items-center gap-2 text-xs text-muted-dark">
          <span className="size-[18px] rounded-md bg-brand" />
          <span className="font-medium">Ocaro</span>
          <span className="flex-1" />
          <span>now</span>
        </div>
        <p className="text-[15px] font-semibold text-white">Looks like you&apos;re driving</p>
        <p className="text-[13px] text-muted-dark">Trip started. We&apos;ll stop when you park.</p>
      </div>
    ),
  },
  {
    title: "It measures",
    text: "Distance and time are measured on your phone. No tapping, no remembering.",
    mock: (
      <div className="flex items-center gap-2">
        <span className={digit}>0</span>
        <span className={digit}>2</span>
        <span className={digit}>3</span>
        <span className="text-[44px] font-semibold text-white">.</span>
        <span className={`${digit} text-brand`}>6</span>
        <span className="text-base font-medium text-muted-dark">km</span>
      </div>
    ),
  },
  {
    title: "You label it",
    text: "One tap for business or private, plus a short reason. Edit anything detection got wrong.",
    mock: (
      <div className="flex w-full flex-col gap-3">
        <div className="flex w-full rounded-full border border-line-dark bg-surface-dark p-1 text-sm">
          <span className="flex flex-1 items-center justify-center rounded-full bg-white py-2.5 font-semibold text-ink">Business</span>
          <span className="flex flex-1 items-center justify-center py-2.5 font-medium text-muted-dark">Private</span>
        </div>
        <div className="flex items-center gap-0.5 rounded-2xl border border-line-dark bg-surface-dark px-4 py-3.5 text-sm text-white">
          Client meeting
          <span className="h-4 w-[1.5px] bg-brand" />
        </div>
      </div>
    ),
  },
]

export function Problem() {
  return (
    <section id="how" className="flex flex-col gap-16 bg-white px-6 pt-[112px] pb-[120px] lg:px-20">
      <div className="flex flex-col gap-5">
        <Eyebrow>How it works</Eyebrow>
        <h2 className="text-[clamp(40px,6vw,64px)] leading-[1.12] font-semibold tracking-[-.04em] text-ink">Drive. Tag. Done.</h2>
        <p className="max-w-[560px] text-xl leading-normal text-muted-ink">
          Ocaro does the counting in the background. You only decide what was work.
        </p>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {steps.map((s, i) => (
          <div key={s.title} className="flex flex-col gap-7 rounded-[32px] bg-grey px-4 pt-4 pb-9">
            <div className="flex h-[240px] items-center justify-center rounded-3xl bg-ink px-6 py-7">{s.mock}</div>
            <div className="flex flex-col gap-2.5 px-4">
              <p className="text-[13px] font-semibold text-brand">0{i + 1}</p>
              <p className="text-[26px] leading-[1.1] font-semibold tracking-[-.02em] text-ink">{s.title}</p>
              <p className="text-base leading-normal text-muted-ink">{s.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
