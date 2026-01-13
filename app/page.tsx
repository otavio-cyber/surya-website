import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { TendasSection } from "@/components/tendas-section"
import { MainImage } from "@/components/main-image"
import { OmbrelonesSection } from "@/components/ombrelones-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"

export default function Page() {
  return (
    <>
      <Header />
      <Hero />
      <TendasSection />
      <MainImage />
      <OmbrelonesSection />
      <CtaSection />
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
