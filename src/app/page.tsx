import { AppScreens } from "@/components/site/app-screens"
import { Cap } from "@/components/site/cap"
import { Cta } from "@/components/site/cta"
import { Facts } from "@/components/site/facts"
import { Faq } from "@/components/site/faq"
import { Footer } from "@/components/site/footer"
import { Hero } from "@/components/site/hero"
import { Methods } from "@/components/site/methods"
import { Privacy } from "@/components/site/privacy"
import { Problem } from "@/components/site/problem"

export default function Home() {
  return (
    <main>
      <Hero />
      <Facts />
      <Problem />
      <Cap />
      <Methods />
      <AppScreens />
      <Privacy />
      <Faq />
      <Cta />
      <Footer />
    </main>
  )
}
