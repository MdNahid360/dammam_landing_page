import type { Metadata } from "next"
import { ContactSection } from "@/components/contact-section"
import { Card, CardContent } from "@/components/ui/card"
import { Icons } from "@/components/icons"

export const metadata: Metadata = {
  title: "اتصل بنا - شركة شراء الأثاث والمكيفات | 0554268296",
  description:
    "تواصل مع شركة شراء الأثاث والمكيفات للحصول على أفضل الأسعار لشراء الأثاث المستعمل، مكيفات السكراب، خردة المعادن، ومعدات المطاعم في الدمام، الخبر، القطيف، الجبيل، الأحساء، والهفوف. خدمة 24/7.",
  keywords: "اتصل بنا شراء الأثاث المستعمل, رقم شراء سكراب الدمام, واتساب شراء مكيفات سكراب, شراء معدات مطاعم مستعملة, شراء سكراب القطيف",
  alternates: {
    canonical: "https://www.dammamathathmukayfat.com/contact",
  },
}

const contactInfo = [
  {
    icon: Icons.phone,
    title: "اتصل بنا",
    details: ["0554268296"],
    action: "tel:+966554268296",
  },
  {
    icon: Icons.whatsapp,
    title: "واتساب",
    details: ["0554268296"],
    action: "https://wa.me/966554268296",
  },
  {
    icon: Icons.clock,
    title: "ساعات العمل",
    details: ["24 ساعة / 7 أيام", "خدمة متاحة دائمًا لشراء الأثاث والسكراب"],
    action: null,
  },
  {
    icon: Icons.mapPin,
    title: "مناطق الخدمة",
    details: ["الدمام • الخبر • القطيف", "الجبيل • الأحساء • الهفوف"],
    action: null,
  },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
              اتصل بنا
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              نحن في <strong>شركة شراء الأثاث والمكيفات</strong> هنا لخدمتك على مدار الساعة لشراء الأثاث المستعمل، مكيفات السكراب، وخردة المعادن بأفضل الأسعار في الدمام والمنطقة الشرقية
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-600/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold mb-3">{info.title}</h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600">
                      {info.action ? (
                        <a href={info.action} className="hover:text-blue-600 transition-colors">
                          {detail}
                        </a>
                      ) : (
                        detail
                      )}
                    </p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <ContactSection />
    </div>
  )
}