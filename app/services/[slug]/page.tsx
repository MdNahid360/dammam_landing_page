import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { notFound } from "next/navigation"
import Image from "next/image"
import { Service } from "@/types"
import Head from "next/head"
import Link from "next/link"
import { socialLinks } from "@/lib/links"

interface ServicePageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";
  const domain = process.env.NEXT_PUBLIC_DOMAIN_NAME || "";

  const response = await fetch(
    `${baseUrl}/api/public/services?domain=${domain}&limit=100`
  );

  if (!response.ok) {
    return [];
  }

  const services = await response.json();
  return services.services.map((service: Service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const domain = process.env.NEXT_PUBLIC_DOMAIN_NAME || "";
  const response = await fetch(
    `${baseUrl}/api/public/services/${params.slug}?domain=${domain}`
  );

  if (!response.ok) {
    return {
      title: "الخدمة غير موجودة - Mukayfat Scrap Qatif",
      description: "الخدمة المطلوبة غير متوفرة",
    };
  }

  const service = await response.json();

  return {
    title: `${service.title} - مكيفات سكراب الدمام`,
    description: service.description,
    keywords: service.keywords.split(", "),
    authors: [{ name: "مكيفات سكراب الدمام" }],
    creator: "مكيفات سكراب الدمام",
    publisher: "مكيفات سكراب الدمام",
    robots: "index, follow",
    openGraph: {
      type: "website",
      locale: "ar_SA",
      url: `https://www.dammamathathmukayfat.com/services/${service.slug}`,
      siteName: "مكيفات سكراب الدمام",
      title: `${service.title} - مكيفات سكراب الدمام`,
      description: service.description,
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} - مكيفات سكراب الدمام`,
      description: service.description,
    },
    alternates: {
      canonical: `https://www.dammamathathmukayfat.com/services/${service.slug}`,
    },
  }
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";
  const domain = process.env.NEXT_PUBLIC_DOMAIN_NAME || "";

  let service: Service | null = null;
  let allServices: Service[] = [];

  try {
    const [serviceResponse, allServicesResponse] = await Promise.all([
      fetch(`${baseUrl}/api/public/services/${params.slug}?domain=${domain}`, {
        next: { revalidate: 60 * 60 * 2 },
      }),
      fetch(`${baseUrl}/api/public/services?domain=${domain}&limit=6`, {
        next: { revalidate: 60 * 60 * 2 },
      }),
    ]);

    if (!serviceResponse.ok) {
      notFound();
    }

    service = await serviceResponse.json();
    allServices = allServicesResponse.ok
      ? (await allServicesResponse.json()).services
      : [];
  } catch (error) {
    console.error("Error fetching service details:", error);
    notFound();
  }

  const relatedServices = allServices.filter((s) => s.slug !== service?.slug);

  if (!service) {
    notFound();
  }

  // Generate JSON-LD Schema Markup
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    url: `https://www.dammamathathmukayfat.com/services/${service.slug}`,
    image: service.image.src || "https://www.dammamathathmukayfat.com/placeholder.svg",
    provider: {
      "@type": "Organization",
      name: "مكيفات سكراب الدمام",
      telephone: "+966554268296",
      url: "https://www.dammamathathmukayfat.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.dammamathathmukayfat.com/images/logo.svg", // Replace with your actual logo URL
      },
      sameAs: [
        socialLinks.instagram,
        socialLinks.youtube,
        socialLinks.facebook,
      ],
    },
    areaServed: {
      "@type": "Place",
      name: "الدمام، الخبر، القطيف، الجبيل، الأحساء، الهفوف، الظهران، المنطقة الشرقية، المملكة العربية السعودية",
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "SAR",
      description: "تقييم مجاني وأفضل الأسعار لخدمات شراء السكراب",
      availability: "https://schema.org/InStock",
      url: `https://www.dammamathathmukayfat.com/services/${service.slug}`,
    },
    keywords: service.keywords.split(", "),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.dammamathathmukayfat.com/services/${service.slug}`,
    },
  };

  return (
    <>
      {/* Add Schema Markup to <head> */}
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-12 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{service.title}</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <div className="mb-8">
                  <Image
                    src={service.image.src || "/placeholder.svg"}
                    alt={service.image.alt}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                </div>

                <div
                  className="prose prose-lg max-w-none ql-editor"
                  dangerouslySetInnerHTML={{ __html: service.content }}
                />
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Service Info */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">معلومات الخدمة</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Icons.checkCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">تقييم مجاني ودقيق</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <Icons.checkCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">نقل مجاني 100%</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <Icons.checkCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">أفضل الأسعار في السوق</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <Icons.checkCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">خدمة سريعة في نفس اليوم</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <Icons.checkCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">دفع فوري نقداً</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* CTA */}
                <Card className="gradient-bg">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-bold mb-4">احصل على عرض سعر</h3>
                    <p className="mb-6 opacity-90">تواصل معنا الآن للحصول على تقييم مجاني وأفضل سعر</p>
                    <div className="space-y-3">
                      <Button asChild variant="secondary" className="w-full">
                        <a href="tel:+966554268296">
                          <Icons.phone className="w-4 h-4 ml-2 text-green-500" />
                          اتصل الآن
                        </a>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        className="w-full bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                      >
                        <a href="https://wa.me/966554268296">
                          <Icons.whatsapp className="w-4 h-4 ml-2" />
                          واتساب
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Related Services Section */}
        {relatedServices.length > 0 && (
          <section className="py-12 bg-muted/50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-8">
                الخدمات ذات الصلة
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedServices.map((relatedService) => (
                  <Card key={relatedService.slug} className="group hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <Link href={`/services/${relatedService.slug}`}>
                        <Image
                          src={relatedService.image.src || "/placeholder.svg"}
                          alt={relatedService.image.alt}
                          width={300}
                          height={200}
                          className="w-full h-48 object-cover rounded-lg mb-4"
                        />
                      </Link>
                      <Link href={`/services/${relatedService.slug}`} className="group-hover:text-blue-600">
                        <h3 className="text-xl font-bold mb-2">{relatedService.title}</h3>
                      </Link>
                      <p className="text-sm text-muted-foreground mb-4">{relatedService.description}</p>
                      <Button asChild variant="outline">
                        <Link href={`/services/${relatedService.slug}`}>
                          اقرأ المزيد
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
}
