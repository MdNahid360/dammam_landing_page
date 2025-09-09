import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Icons } from "./icons"
import Link from "next/link"
import { Blog } from "@/types"
import { API_ENDPOINTS } from "@/lib/utils"
import BlogCard from "./blog-card"
import { internalLinks } from "@/lib/links"


export async function getBlogs(): Promise<Blog[]> {
  try {
    const res = await fetch(`${API_ENDPOINTS.blogs}?domain=${API_ENDPOINTS.domain}&limit=6&offset=0`, {
      next: { revalidate: 60 * 30 }, // Cache for 30 mins
    })
    if (!res.ok) throw new Error("Failed to fetch")
    const json = await res.json()
    return json?.blogs ?? []
  } catch {
    return []
  }
}

export async function BlogsSection() {
  const blogs = await getBlogs()

  // if not found show a notfound ui
  if (blogs.length === 0) return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            لا توجد مقالات متاحة حالياً
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            سنقوم بنشر مقالات جديدة قريباً
          </p>
        </div>
      </div>
    </section>
  )

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in md:max-w-4xl mx-auto">
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4 pb-2.5">
            أحدث المقالات والنصائح حول{' '}
            <Link href={internalLinks.usedFurniture} className="gradient-text hover:border-b-2 border-primary">
              الأثاث المستعمل
            </Link>{' '}
            و{' '}
            <Link href={internalLinks.usedAirConditioners} className="gradient-text hover:border-b-2 border-primary">
              المكيفات المستعملة بالدمام
            </Link>
          </h2>

          {/* Underline */}
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>

          {/* Subtitle / Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            تابع أحدث المقالات والنصائح المفيدة حول{' '}
            <Link href={internalLinks.usedFurnitureDammam} className="gradient-text hover:border-b-2 border-primary">
              شراء الأثاث المستعمل بالدمام
            </Link>{' '}
            و{' '}
            <Link href={internalLinks.usedAirConditioners} className="gradient-text hover:border-b-2 border-primary">
              المكيفات المستعملة
            </Link>،{' '}
            <Link href={internalLinks.scrapACs} className="gradient-text hover:border-b-2 border-primary">
              مكيفات السكراب
            </Link>،{' '}
            <Link href={internalLinks.scrapMetals} className="gradient-text hover:border-b-2 border-primary">
              خردة المعادن
            </Link>، في الخبر، القطيف، الجبيل والمنطقة الشرقية.
            نقدم أيضاً دليلاً شاملاً لـ{' '}
            <Link href={internalLinks.restaurantEquipment} className="gradient-text hover:border-b-2 border-primary">
              شراء معدات المطاعم المستعملة
            </Link>،{' '}
            <Link href={internalLinks.officeFurniture} className="gradient-text hover:border-b-2 border-primary">
              الأثاث المكتبي المستعمل
            </Link>،{' '}
            <Link href={internalLinks.usedKitchens} className="gradient-text hover:border-b-2 border-primary">
              المطابخ المستعملة
            </Link>، و{' '}
            <Link href={internalLinks.usedHomeAppliances} className="gradient-text hover:border-b-2 border-primary">
              الأجهزة الكهربائية المستعملة
            </Link>، بأعلى الأسعار وأفضل الخدمات في المملكة العربية السعودية.
          </p>
        </div>


        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog: Blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/blogs?page=1"
            className="bg-primary hover:bg-primary/80 transition-all duration-300 text-white px-3 py-2 rounded flex items-center gap-2 w-[170px] m-auto"
            rel="noopener noreferrer"
          >
            جميع المقالات
            <Icons.arrowRight className="w-4 h-4 mr-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}
