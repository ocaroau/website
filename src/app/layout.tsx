import type { Metadata, Viewport } from "next"
import { Inter, Outfit } from "next/font/google"
import "./globals.css"

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], weight: ["400", "500", "600"] })
const outfit = Outfit({ variable: "--font-outfit", subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] })

export const metadata: Metadata = {
  title: "Ocaro – Logbook app for Aussie drivers",
  description:
    "Track your work trips, watch your kilometre cap and build logbook reports for your tax agent. Everything organised and ready for tax time.",
}

export const viewport: Viewport = {
  themeColor: "#ffffff",
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-AU" className={`${inter.variable} ${outfit.variable}`} data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  )
}
