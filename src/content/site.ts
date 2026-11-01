export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ocaro.com.au"
export const SITE_NAME = "Ocaro"

export const CAP_KM = 5000
export const DEFAULT_DRIVEN_KM = 3000

export const stats = [
  { value: "5,000 km", label: "cents-per-km cap, tracked per car", count: { to: 5000, suffix: " km" } },
  { value: "12 weeks", label: "continuous logbook, valid for 5 years", count: { to: 12, suffix: " weeks" } },
  { value: "PDF + CSV", label: "exports built for your tax agent" },
  { value: "No route", label: "only start, end and distance are kept" },
]

export const methods = [
  {
    title: "Cents per kilometre",
    text: "Claim a set rate for up to 5,000 work kilometres. No receipts needed, but you must be able to show how you worked out your kilometres.",
    points: ["Live cap meter for every car", "Trip history you can show the ATO"],
  },
  {
    title: "Logbook method",
    text: "Keep a continuous 12-week logbook to work out your business-use percentage, then claim that share of your running costs.",
    points: ["A 12-week logbook built for you", "Valid for five years"],
  },
]

export const faqs = [
  {
    q: "Who is Ocaro for?",
    a: "Employees, sole traders and gig drivers in Australia who use their own car for work and want to claim it on their tax return.",
  },
  {
    q: "Is a digital logbook accepted by the ATO?",
    a: "The ATO accepts electronic records as long as they contain the required details. Ocaro captures date, distance, odometer readings and trip purpose.",
  },
  {
    q: "Do I have to track every trip?",
    a: "For the cents-per-kilometre method you need a reasonable way to show how you worked out your kilometres. For the logbook method, you track one continuous 12-week period.",
  },
  {
    q: "Will it drain my battery?",
    a: "Ocaro uses motion detection to wake GPS only when you are in a car, so it does not track constantly.",
  },
  {
    q: "Is this tax advice?",
    a: "No. Ocaro is a record-keeping tool. Check ato.gov.au or talk to a registered tax agent about your own situation.",
  },
]
