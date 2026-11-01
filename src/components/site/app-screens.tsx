import { Eyebrow } from "./primitives"

/** The phone screens are exported from the design (shadow included), so they match it exactly. */
const screens = [
  {
    src: "/images/phone-rides.png",
    alt: "Ocaro home screen listing cars and recent rides",
    title: "Your rides, logged",
    text: "Every trip with distance, time and speed, per car.",
  },
  {
    src: "/images/phone-detection.png",
    alt: "Ocaro account screen with drive detection settings",
    title: "Detection you control",
    text: "Automatic drive detection, or only when your car Bluetooth connects.",
  },
  {
    src: "/images/phone-cars.png",
    alt: "Ocaro My cars screen with a cap meter for each car",
    title: "All your cars",
    text: "A cap meter for each car, with the kilometres run this month.",
  },
]

export function AppScreens() {
  return (
    <section id="app" className="flex flex-col items-center gap-[72px] bg-white px-6 py-[120px] lg:px-20">
      <div className="flex flex-col items-center gap-5 text-center">
        <Eyebrow>The app</Eyebrow>
        <h2 className="text-[clamp(40px,6vw,64px)] leading-[1.12] font-semibold tracking-[-.04em]">
          <span className="block text-ink">Every ride.</span>
          <span className="block text-muted-ink">One calm place.</span>
        </h2>
      </div>
      <div className="flex flex-wrap justify-center gap-10">
        {screens.map((s) => (
          <figure key={s.title} className="flex w-[327.6px] flex-col items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={s.src} alt={s.alt} width={328} height={789} className="h-auto w-[327.6px] max-w-none" />
            <figcaption className="-mt-[52px] flex flex-col items-center gap-1.5 text-center">
              <p className="text-[22px] font-semibold tracking-[-.02em] text-ink">{s.title}</p>
              <p className="w-[300px] text-[15px] leading-normal text-muted-ink">{s.text}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
