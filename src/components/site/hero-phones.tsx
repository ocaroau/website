import { Dial } from "./logo"

const phone =
  "absolute overflow-hidden rounded-[46px] border-[9px] border-ink bg-white text-xs shadow-[0_30px_60px_rgba(10,10,10,.18)]"

function Status() {
  return (
    <div className="flex justify-between px-[22px] pt-3.5 pb-2 text-xs font-semibold">
      <span>9:41</span>
      <span>●●●</span>
    </div>
  )
}

function CapMeterPhone() {
  const rows = [
    ["Driven", "3,000 km"],
    ["Work trips", "148"],
    ["Method", "Cents per km"],
  ]
  return (
    <div className={`${phone} top-[90px] -left-10 h-[620px] w-[220px] bg-grey max-[460px]:hidden lg:top-24 lg:left-0 lg:w-[262px]`}>
      <div className="bg-white">
        <Status />
        <div className="px-4 pt-2.5 pb-3.5 text-sm font-semibold">Cap meter</div>
      </div>
      <div className="mx-3 mt-3.5 rounded-[14px] bg-white p-3.5 text-center">
        <Dial className="mx-auto h-[122px] w-[130px]" />
        <strong className="block font-heading text-[26px] leading-[1.05] font-semibold">2,000 km</strong>
        <small className="text-[11px] text-muted-foreground">left before the cap</small>
      </div>
      {rows.map(([k, v]) => (
        <div key={k} className="mx-3 mt-2.5 flex justify-between rounded-xl bg-white px-3.5 py-3 font-medium">
          {k}
          <span className="text-muted-foreground">{v}</span>
        </div>
      ))}
    </div>
  )
}

function TripPhone() {
  const trips = [
    { place: "Manly", sub: "71 Alto Ave", time: "9:00 AM", end: false },
    { place: "Bondi", sub: "Bondi Junction", time: "9:45 AM", end: true },
  ]
  return (
    <div
      className={`${phone} -right-1.5 top-6 h-[560px] w-[250px] max-[460px]:right-1/2 max-[460px]:translate-x-1/2 lg:right-2 lg:h-[640px] lg:w-[292px]`}
    >
      <div className="bg-white">
        <Status />
        <div className="flex items-center justify-center gap-2 pt-2.5 pb-3.5 text-sm font-semibold">
          Pending trips
          <span className="rounded-full bg-ink px-1.5 py-0.5 text-[9px] text-white">29</span>
        </div>
      </div>
      <div className="h-full bg-grey p-3">
        <div className="flex items-center gap-2 rounded-t-xl bg-ink px-3.5 py-2.5 font-semibold text-white">⇄ Round trip</div>
        <div className="relative my-2 h-28 overflow-hidden rounded-[10px] bg-[#eceff1]">
          <svg viewBox="0 0 260 112" preserveAspectRatio="none" aria-hidden="true" className="absolute inset-0 size-full">
            <rect width="260" height="112" fill="#eceff1" />
            <path d="M0 80 C60 60 90 100 140 70 S220 40 260 50" stroke="#fff" strokeWidth="8" fill="none" />
            <path d="M30 20 L70 60 L120 52 L168 84 L214 30" stroke="#0A0A0A" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="30" cy="20" r="6" fill="#0A0A0A" />
            <circle cx="214" cy="30" r="6" fill="#DC2626" />
          </svg>
          <div className="absolute top-2 right-2 rounded-lg bg-ink px-2.5 py-1.5 text-[9px] leading-[1.3] text-white">
            Distance
            <b className="block text-[13px]">22.5 km</b>
            Potential
            <b className="block text-[13px] text-brand-200">$19.80</b>
          </div>
        </div>
        <div className="my-2.5 grid grid-cols-2 rounded-[10px] bg-white p-1 text-center font-medium">
          <span className="rounded-lg py-2">Personal</span>
          <span className="rounded-lg bg-grey py-2 font-semibold">Business</span>
        </div>
        {trips.map((t) => (
          <div key={t.place} className="flex items-center justify-between py-2">
            <div className="flex items-center">
              <i className={`mr-2.5 inline-block size-2.5 rounded-full border-[3px] ${t.end ? "border-brand" : "border-ink"}`} />
              <div>
                <b>{t.place}</b>
                <small className="block text-[10px] text-muted-foreground">{t.sub}</small>
              </div>
            </div>
            <span className="rounded-md bg-white px-2.5 py-1.5 text-[11px]">{t.time}</span>
          </div>
        ))}
        <div className="mt-2.5 rounded-lg bg-ink p-[13px] text-center font-semibold text-white">Mark as reviewed</div>
      </div>
    </div>
  )
}

export function HeroPhones() {
  return (
    <div
      aria-hidden="true"
      className="relative mx-auto h-[520px] w-full max-w-[420px] max-[460px]:h-[500px] lg:mx-0 lg:h-[620px] lg:max-w-none lg:self-end"
    >
      <CapMeterPhone />
      <TripPhone />
    </div>
  )
}
