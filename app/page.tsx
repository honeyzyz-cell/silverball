import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { StorySection } from "@/components/story-section"
import { UspSection } from "@/components/usp-section"
import { ServicesSection } from "@/components/services-section"
import { ResultsSection } from "@/components/results-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <StorySection />
        <UspSection />
        <ServicesSection />
        <ResultsSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
