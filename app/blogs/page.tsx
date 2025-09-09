import type { Metadata } from "next"
import { API_ENDPOINTS, formatDate } from "@/lib/utils"
import { Blog } from "@/types"
import BlogCard from "@/components/blog-card"
import { internalLinks } from "@/lib/links"
import Link from "next/link"
import { Card, CardHeader } from "@/components/ui/card"
import Image from "next/image"

export const metadata: Metadata = {
  title: "مدونتنا - نصائح ومقالات شراء مكيفات السكراب والمعادن",
  description:
    "اقرأ أحدث المقالات والنصائح حول شراء السكراب والمعادن، أسعار المكيفات، وطرق التقييم في المنطقة الشرقية.",
  keywords: ["مدونة مكيفات سكراب", "نصائح شراء سكراب", "أسعار مكيفات سكراب", "مقالات معادن خردة"],
  authors: [{ name: "مكيفات سكراب الدمام" }],
  creator: "مكيفات سكراب الدمام",
  publisher: "مكيفات سكراب الدمام",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "ar_SA",
    url: "https://www.dammamathathmukayfat.com/blogs",
    siteName: "مكيفات سكراب الدمام",
    title: "مدونتنا - نصائح ومقالات شراء مكيفات السكراب والمعادن",
    description:
      "اقرأ أحدث المقالات والنصائح حول شراء السكراب والمعادن، أسعار المكيفات، وطرق التقييم في المنطقة الشرقية.",
  },
  twitter: {
    card: "summary_large_image",
    title: "مدونتنا - نصائح ومقالات شراء مكيفات السكراب والمعادن",
    description:
      "اقرأ أحدث المقالات والنصائح حول شراء السكراب والمعادن، أسعار المكيفات، وطرق التقييم في المنطقة الشرقية.",
  },
  alternates: {
    canonical: "https://www.dammamathathmukayfat.com/blogs",
  },
}

const LIMIT = 3

async function getBlogs(page: number): Promise<{ blogs: Blog[]; total: number }> {
  try {
    const offset = (page - 1) * LIMIT
    const res = await fetch(
      `${API_ENDPOINTS.blogs}?domain=${API_ENDPOINTS.domain}&limit=${LIMIT}&offset=${offset}`,
      {
        next: { revalidate: 60 * 60 * 2 },
      }
    )
    if (!res.ok) return { blogs: [], total: 0 }
    const json = await res.json()
    return { blogs: json?.blogs ?? [], total: json?.total ?? 0 }
  } catch {
    return { blogs: [], total: 0 }
  }
}

export default async function BlogsPage({
  searchParams = {},
}: {
  searchParams?: { page?: string }
}) {
  const page = Number(searchParams?.page) > 0 ? Number(searchParams.page) : 1
  const { blogs, total } = await getBlogs(page)

  const totalPages = Math.ceil(total / LIMIT)

  return (
    <div className="min-h-screen">
      <section
        style={{
          backgroundImage: "linear-gradient(#000000b5, #01140a), url('/images/hero-banner.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
        className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-white text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              نصائح حول{" "}
              <Link
                rel="noopener"
                href={internalLinks.scrapQatif}
                className="border-gradient-b gradient-text"
              >
                شراء سكراب القطيف
              </Link>{" "}
              والمزيد
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              تابع أحدث المقالات عن{" "}
              <Link
                rel="noopener"
                href={internalLinks.scrapMetals}
                className="gradient-text border-gradient-b"
              >
                شراء خردة المعادن
              </Link>{" "}
              و{" "}
              <Link
                rel="noopener"
                href={internalLinks.scrapACs}
                className="gradient-text border-gradient-b"
              >
                مكيفات السكراب
              </Link>{" "}
              في القطيف، الخبر، الجبيل والمنطقة الشرقية. نقدم أيضاً خدمات{" "}
              <Link
                rel="noopener"
                href={internalLinks.restaurantEquipment}
                className="gradient-text border-gradient-b"
              >
                شراء معدات مطاعم مستعملة
              </Link>
              ،{" "}
              <Link
                rel="noopener"
                href={internalLinks.officeFurniture}
                className="gradient-text border-gradient-b"
              >
                الأثاث المكتبي
              </Link>
              ، و{" "}
              <Link
                rel="noopener"
                href={internalLinks.usedKitchens}
                className="gradient-text border-gradient-b"
              >
                المطابخ المستعملة
              </Link>{" "}
              بأعلى الأسعار، بالإضافة إلى{" "}
              <Link
                rel="noopener"
                href={internalLinks.allScrap}
                className="gradient-text border-gradient-b"
              >
                شراء جميع أنواع السكراب
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 ">

          <div className="lg:col-span-3 lg:border-l lg:pl-6 ">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              {blogs.map((blog: Blog) => (
                <BlogCard key={blog._id} blog={blog} />
              ))}
            </div>

            {totalPages > 1 && (
              <div className="flex justify-center gap-2 pt-3">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                  <Link
                    key={p}
                    href={`/blogs?page=${p}`}
                    className={`px-4 py-2 rounded border ${p === page
                      ? "bg-primary text-white border-primary"
                      : "bg-white text-gray-700 border-gray-300"
                      }`}
                  >
                    {p.toLocaleString("ar-EG")}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="flex flex-col md:flex-col lg:flex-col">
            <h5 className="font-semibold text-xl border-b pb-2 lg:mt-0 mt-6">({blogs.length.toLocaleString("ar-EG") || 0}) المدونات الأخيرة</h5>
            {blogs?.map((blog, index) => (
              <div key={blog?._id || index}>
                <Link href={`/blogs/${blog.slug}`} className="overflow-hidden rounded flex flex-col md:flex-row group bg-transparent !border-none ">
                  {/* <Link
                  href={`/blogs/${blog.slug}`}
                  className="relative md:w-1/3 h-64 md:h-auto flex-shrink-0 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10 opacity-70 group-hover:opacity-90 transition-opacity" />
                  <Image
                    src={blog?.image?.src || "/placeholder.png"}
                    alt={blog?.image?.alt || "/placeholder.png"}
                    aria-description={blog?.image?.description}
                    fill
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute bottom-0 right-0 p-4 z-20">
                    <div className="text-sm text-white/80 mb-1">{formatDate(blog.date)}</div>
                  </div>
                </Link> */}

                  <CardHeader className="flex flex-col justify-between p-4 ">
                    <Link href={`/blogs/${blog.slug}`} className="text-lg font-semibold mb-2">
                      <h3 className="text-xl font-bold line-clamp-2 group-hover:text-primary">{blog.title}</h3>
                    </Link>
                    <p className="text-muted-foreground line-clamp-3">{blog.excerpt}</p>
                  </CardHeader>
                </Link>
                <hr />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}