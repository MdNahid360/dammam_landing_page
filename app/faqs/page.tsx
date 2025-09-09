import { faqs } from "@/data/faqs"
import type { Metadata } from "next"
import { FaqSection } from "@/components/faq-section"

export const metadata: Metadata = {
  title: "الأسئلة الشائعة - مكيفات سكراب الدمام | FAQ",
  description:
    "إجابات على أكثر الأسئلة شيوعاً حول شراء مكيفات السكراب والمعادن، الأسعار، النقل، ومناطق الخدمة في المنطقة الشرقية.",
  keywords: "أسئلة شائعة مكيفات سكراب, FAQ شراء سكراب, أسئلة شراء خردة, استفسارات مكيفات سكراب",
  alternates: {
    canonical: "https://www.dammamathathmukayfat.com/faqs",
  },
}

export default function FaqsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">الأسئلة الشائعة</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">إجابات على أكثر الأسئلة شيوعاً حول خدماتنا</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FaqSection faqs={faqs} />
    </div>
  )
}
