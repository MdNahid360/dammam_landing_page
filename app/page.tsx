import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { WhyChooseUsSection } from "@/components/why-choose-us-section"
import { ServiceAreasSection } from "@/components/service-areas-section"
import { VideosSection } from "@/components/videos-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { BlogsSection } from "@/components/blogs-section"
import { ContactSection } from "@/components/contact-section"
import { FaqSection } from "@/components/faq-section"
import { faqs } from "@/data/faqs"

export default function HomePage() {
  const slicedFaqs = faqs.slice(0, 6)
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <ServiceAreasSection />
      <VideosSection />
      <TestimonialsSection />
      <BlogsSection />
      <ContactSection />
      <FaqSection faqs={slicedFaqs} />
    </>
  )
}