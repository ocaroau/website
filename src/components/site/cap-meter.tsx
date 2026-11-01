"use client"

import { useState } from "react"
import { CAP_KM, DEFAULT_DRIVEN_KM } from "@/content/site"

const CENTRE = 100
const NEEDLE_LENGTH = 62
const NEEDLE_HALF_BASE = 9
// The dial sweeps 270 degrees, starting bottom-left (135 degrees clockwise from +x).
const SWEEP_START = 135
const SWEEP = 270

const km = (n: number) => n.toLocaleString("en-AU")

function needlePoints(progress: number) {
  const a = ((SWEEP_START + SWEEP * progress) * Math.PI) / 180
  const [dx, dy] = [Math.cos(a), Math.sin(a)]
  const tip = [CENTRE + NEEDLE_LENGTH * dx, CENTRE + NEEDLE_LENGTH * dy]
  const b1 = [CENTRE - NEEDLE_HALF_BASE * dy, CENTRE + NEEDLE_HALF_BASE * dx]
  const b2 = [CENTRE + NEEDLE_HALF_BASE * dy, CENTRE - NEEDLE_HALF_BASE * dx]
  return [tip, b1, b2].map((p) => p.join(",")).join(" ")
}

const ARC = "M50.5 149.5 A70 70 0 1 1 149.5 149.5"

/** Dial showing kilometres driven against the cap, with a slider to try it. */
export function CapMeter() {
  const [driven, setDriven] = useState(DEFAULT_DRIVEN_KM)
  const progress = driven / CAP_KM

  return (
    <div className="text-center">
      <svg
        viewBox="14 14 172 160"
        role="img"
        aria-label="Cap meter showing kilometres driven against the 5,000 km cap"
        className="mx-auto h-auto w-[min(100%,320px)]"
      >
        <path d={ARC} pathLength={100} fill="none" stroke="#DC2626" strokeWidth="26" strokeLinecap="round" />
        <path
          d={ARC}
          pathLength={100}
          fill="none"
          stroke="#0A0A0A"
          strokeWidth="26"
          strokeLinecap="round"
          strokeDasharray={`${progress * 100} 100`}
          visibility={driven === 0 ? "hidden" : "visible"}
        />
        <polygon fill="#0A0A0A" points={needlePoints(progress)} />
        <circle cx={CENTRE} cy={CENTRE} r="11" fill="#0A0A0A" />
      </svg>
      <div className="mt-1 font-heading text-[42px] leading-[1.05] font-semibold tracking-[-.02em]">
        <span className="text-brand">{km(CAP_KM - driven)}</span> km left
        <small className="block font-sans text-sm font-medium tracking-normal text-muted-foreground">
          {km(driven)} of {km(CAP_KM)} km claimed
        </small>
      </div>
      <input
        type="range"
        min={0}
        max={CAP_KM}
        step={50}
        value={driven}
        onChange={(e) => setDriven(Number(e.target.value))}
        aria-label="Kilometres driven"
        className="mt-7 w-full accent-ink"
      />
      <p className="mt-2 text-[13px] text-muted-foreground">Drag to try it.</p>
    </div>
  )
}
