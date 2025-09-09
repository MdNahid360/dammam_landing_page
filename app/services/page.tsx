import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import Link from "next/link"
import Image from "next/image"
import { API_ENDPOINTS } from "@/lib/utils"
import { Service } from "@/types"
import ServiceCard from "@/components/service-card"
import { servicesLinks } from "@/lib/links"

export const metadata: Metadata = {
  title: "خدماتنا - شراء مكيفات سكراب ومعادن خردة بأفضل الأسعار",
  description:
    "خدمات شاملة لشراء مكيفات السكراب، معادن الخردة، الأجهزة الإلكترونية في المنطقة الشرقية بأفضل الأسعار ونقل مجاني.",
  keywords: ["خدمات شراء سكراب", "شراء مكيفات سكراب", "شراء معادن خردة", "شراء أجهزة إلكترونية", "شراء معدات مطاعم"],
  authors: [{ name: "مكيفات سكراب الدمام" }],
  creator: "مكيفات سكراب الدمام",
  publisher: "مكيفات سكراب الدمام",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "ar_SA",
    url: "https://www.dammamathathmukayfat.com/services",
    siteName: "مكيفات سكراب الدمام",
    title: "خدماتنا - شراء مكيفات سكراب ومعادن خردة بأفضل الأسعار",
    description:
      "خدمات شاملة لشراء مكيفات السكراب، معادن الخردة، الأجهزة الإلكترونية في المنطقة الشرقية بأفضل الأسعار ونقل مجاني.",
  },
  twitter: {
    card: "summary_large_image",
    title: "خدماتنا - شراء مكيفات سكراب ومعادن خردة بأفضل الأسعار",
    description:
      "خدمات شاملة لشراء مكيفات السكراب، معادن الخردة، الأجهزة الإلكترونية في المنطقة الشرقية بأفضل الأسعار ونقل مجاني.",
  },
  alternates: {
    canonical: "https://www.dammamathathmukayfat.com/services",
  },
}

async function getServices(): Promise<Service[]> {
  try {
    const res = await fetch(`${API_ENDPOINTS.services}?domain=${API_ENDPOINTS.domain}&limit=20&offset=0`, {
      next: { revalidate: 60 * 60 * 2 }, // Cache for 10 mins
    })
    if (!res.ok) throw new Error("Failed to fetch")
    const json = await res.json()
    return json?.services ?? []
  } catch {
    return []
  }
}

export default async function ServicesPage() {
  const services = await getServices()
  console.log("testing", servicesLinks)
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        style={{
          backgroundImage: "linear-gradient(#000000b5, #01140a), url('/images/faq.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
        className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl text-white md:text-5xl font-bold mb-6 lg:w-[45rem] m-auto">
              خدمات - خدماتنا تشمل{' '}
              <Link rel="noopener" href={servicesLinks?.scrapAirConditioners?.href}>
                <strong className="font-bold gradient-text border-gradient-b">
                  {servicesLinks?.scrapAirConditioners?.label}
                </strong>
              </Link>{' '}
              وغيرها
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>

            {/* <p className="text-xl text-muted-foreground leading-relaxed">
              نقدم خدمات احترافية لشراء <Link rel="noopener" href={servicesLinks.scrapAirConditioners.href}><strong className="gradient-text border-gradient-b">المكيفات السكراب</strong></Link>، <Link rel="noopener" href={servicesLinks.usedHomeAppliances.href}><strong className="gradient-text border-gradient-b">الأجهزة المنزلية المستعملة</strong></Link>، <Link rel="noopener" href={servicesLinks.usedRestaurantEquipment}><strong className="gradient-text border-gradient-b">أثاث المطاعم المستعمل</strong></Link>، و<Link rel="noopener" href={servicesLinks.scrapMetals.href}><strong className="gradient-text border-gradient-b">المعادن الخردة</strong></Link> بجميع أنواعها مثل الحديد، النحاس، والألمنيوم. نخدم كافة مناطق الشرقية بما في ذلك الدمام، الخبر، القطيف، الجبيل، الأحساء، الهفوف، والمناطق المجاورة.
            </p> */}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service: Service) => (
              <ServiceCard key={service._id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/50 h-[25rem] flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-6">هل تحتاج خدمة مخصصة؟</h2>
            <p className="text-xl text-muted-foreground mb-8">
              تواصل معنا للحصول على استشارة مجانية وعرض سعر مخصص لاحتياجاتك
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="gradient-bg rounded">
                <Link href="/contact">
                  احصل على عرض سعر
                  <Icons.arrowRight className="w-5 h-5 mr-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded border hover:bg-primary hover:text-white duration-200 border-primary text-primary">
                <a href="tel:+966554268296">
                  <Icons.phone className="w-5 h-5 ml-2" />
                  اتصل الآن
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
