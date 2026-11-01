import { Cap } from "@/components/site/cap"
import { Cta } from "@/components/site/cta"
import { Faq } from "@/components/site/faq"
import { Footer } from "@/components/site/footer"
import { Hero } from "@/components/site/hero"
import { Methods } from "@/components/site/methods"
import { Nav } from "@/components/site/nav"
import { Problem } from "@/components/site/problem"

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Cap />
        <Methods />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  )
}
