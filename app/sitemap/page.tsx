import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, ChevronLeft } from "lucide-react"
import { Blog, Service } from "@/types";

export const metadata: Metadata = {
  title: " +996540858851 مشتري مكيفات الهواء الخردة في الدمام",
  description:
    "تصفح خريطة الموقع للوصول بسهولة إلى جميع صفحات وخدمات مشتري مكيفات الهواء الخردة، بما في ذلك شراء المكيفات المستعملة وسكراب المكيفات والمعادن في الدمام وجميع مدن المنطقة الشرقية.",
  icons: "/favicon.ico",
  keywords: [
    "خريطة الموقع",
    "مشتري مكيفات الهواء الخردة",
    "شراء مكيفات مستعملة",
    "سكراب مكيفات الدمام",
    "شراء سكراب المكيفات",
    "شراء سكراب المعادن",
    "شركة شراء مكيفات",
    "شراء المكيفات التالفة",
    "مكيفات سكراب الشرقية"
  ],
  openGraph: {
    title: "خريطة الموقع | مشتري مكيفات الهواء الخردة في الدمام",
    description:
      "استعرض خريطة الموقع للوصول إلى جميع خدمات مشتري مكيفات الهواء الخردة، بما في ذلك شراء المكيفات المستعملة وسكراب المكيفات والمعادن في الدمام وجميع مدن الشرقية.",
    url: "https://www.dammamathathmukayfat.com/sitemap",
    siteName: "مشتري مكيفات الهواء الخردة",
    locale: "ar_SA",
    type: "website",
  },
  alternates: {
    canonical: "https://www.dammamathathmukayfat.com/sitemap",
  },
};


export default async function SitemapPage() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";
  const domain = process.env.NEXT_PUBLIC_DOMAIN_NAME || "";

  let services: Service[] = [];
  let blogs: Blog[] = [];

  try {
    const [servicesRes, blogsRes] = await Promise.all([
      fetch(
        `${baseUrl}/api/public/services?domain=${domain}&limit=100&offset=0`,
        {
          next: { revalidate: 60 * 60 * 2 },
        }
      ),
      fetch(`${baseUrl}/api/public/blogs?domain=${domain}&limit=100&offset=0`, {
        next: { revalidate: 60 * 60 * 2 },
      }),
    ]);

    if (servicesRes.ok) {
      const servicesData = await servicesRes.json();
      services = servicesData.services;
    }

    if (blogsRes.ok) {
      const blogsData = await blogsRes.json();
      blogs = blogsData.blogs;
    }
  } catch (error) {
    console.error("Error fetching sitemap data:", error);
  }

  const siteLinks = [
    {
      title: "الصفحات الرئيسية",
      links: [
        { name: "الصفحة الرئيسية", url: "/" },
        { name: "من نحن", url: "/about" },
        { name: "تواصل معنا", url: "/contact" },
      ],
    },
    {
      title: "خدماتنا",
      links: [
        { name: "جميع الخدمات", url: "/services" },
        ...services.map((service: { title: string; slug: string }) => ({
          name: service.title,
          url: `/services/${service.slug}`,
        })),
      ],
    },
    {
      title: "المدونات والوسائط",
      links: [
        { name: "جميع المقالات", url: "/blog" },
        { name: "فيديوهات خدماتنا", url: "/videos" },
        ...blogs.map((blog: { title: string; slug: string }) => ({
          name: blog.title,
          url: `/blog/${blog.slug}`,
        })),
      ],
    },
    {
      title: "معلومات قانونية",
      links: [
        { name: "سياسة الخصوصية", url: "/privacy-policy" },
        { name: "شروط الخدمة", url: "/terms-of-service" },
        { name: "خريطة الموقع", url: "/sitemap" },
      ],
    },
  ];


  return (
    <div className="container mx-auto px-4 py-24">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center text-primary border-gradient-b mb-8">
          <ArrowLeft className="ml-2 h-4 w-4" />
          العودة إلى الصفحة الرئيسية
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold mb-8">
          خريطة موقع مشتري مكيفات الهواء الخردة
        </h1>

        <p className="text-lg text-muted-foreground mb-12">
          تصفح خريطة موقع مشتري مكيفات الهواء الخردة للوصول بسهولة إلى جميع صفحاتنا وخدماتنا، بما في ذلك شراء المكيفات المستعملة وسكراب المكيفات والمعادن في الدمام وجميع مدن المنطقة الشرقية.
        </p>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {siteLinks.map((section) => (
            <div key={section.title} className="space-y-4">
              <h2 className="text-2xl font-bold text-primary">{section.title}</h2>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.url} className="border-b border-gray-100 dark:border-gray-800 pb-2">
                    <Link
                      href={link.url}
                      className="flex items-center space-x-4 hover:text-primary transition-colors"
                    >
                      <span className="line-clamp-1">{link.name}</span>
                      <ChevronLeft className="h-4 w-4" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
