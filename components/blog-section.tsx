
import Link from "next/link"
import { Button } from "@/components/ui/button"
import BlogCard from "./blog-card"
import { Blog } from "@/types"
import { API_ENDPOINTS } from "@/lib/utils";

const internalLinks = {
  qatiffScrap: "/services/شراء-سكراب-القطيف",
  dammamScrap: "/services/شراء-سكراب-الدمام",
  jubailScrap: "/services/شراء-سكراب-الجبيل",
  khobarScrap: "/services/شراء-سكراب-الخبر",
  ahsaScrap: "/services/شراء-سكراب-الأحساء",
  hofufScrap: "/services/شراء-سكراب-الهفوف",
  easternScrap: "/services/شراء-سكراب-المنطقة-الشرقية",
  qatiffAC: "/services/شراء-مكيفات-سكراب-القطيف",
  dammamAC: "/services/شراء-مكيفات-سكراب-الدمام",
  jubailAC: "/services/شراء-مكيفات-سكراب-الجبيل",
  khobarAC: "/services/شراء-مكيفات-سكراب-الخبر",
  ahsaAC: "/services/شراء-مكيفات-سكراب-الأحساء",
  hofufAC: "/services/شراء-مكيفات-سكراب-الهفوف",
  easternAC: "/services/شراء-مكيفات-سكراب-المنطقة-الشرقية",
};

async function getBlogs(): Promise<Blog[]> {
  try {
    const res = await fetch(`${API_ENDPOINTS.blogs}?domain=${API_ENDPOINTS.domain}&limit=6&offset=0`, {
      next: { revalidate: 60 * 60 * 2 }, // Cache for 30 mins
    })
    if (!res.ok) throw new Error("Failed to fetch")
    const json = await res.json()
    return json?.blogs ?? []
  } catch {
    return []
  }
}

export async function BlogSection() {
  const blogs = await getBlogs()
  return (
    <section id="blog" className="py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-primary/20 to-primary-dark/20 rounded-lg px-3 py-1 text-sm text-primary-dark font-medium mb-4">
            المدونات
          </div>

          {/* Focus keyword in title: شراء مكيفات سكراب الدمام */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent pb-2.5">
            شراء مكيفات سكراب الدمام – أفضل خدمات شراء المكيفات المستعملة
          </h2>

          {/* Description with multiple keywords + internal links */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            نقدم خدمات متكاملة لـ{" "}
            <a href={internalLinks.dammamAC} className="underline text-primary hover:text-primary-dark">
              شراء مكيفات سكراب الدمام
            </a>
            ،{" "}
            <a href={internalLinks.khobarAC} className="underline text-primary hover:text-primary-dark">
              شراء مكيفات سكراب الخبر
            </a>
            ، و{" "}
            <a href={internalLinks.jubailAC} className="underline text-primary hover:text-primary-dark">
              شراء مكيفات سكراب الجبيل
            </a>
            ، بالإضافة إلى خدمات{" "}
            <a href={internalLinks.easternScrap} className="underline text-primary hover:text-primary-dark">
              شراء سكراب المنطقة الشرقية
            </a>{" "}
            و{" "}
            <a href={internalLinks.qatiffScrap} className="underline text-primary hover:text-primary-dark">
              شراء سكراب القطيف
            </a>
            . كما نوفر عروضًا مميزة لشراء{" "}
            <a href={internalLinks.ahsaAC} className="underline text-primary hover:text-primary-dark">
              مكيفات مستعملة الأحساء
            </a>{" "}
            و{" "}
            <a href={internalLinks.hofufAC} className="underline text-primary hover:text-primary-dark">
              الهفوف
            </a>
            ، مع أسعار تنافسية لجميع أنواع الخردة والمكيفات المستعملة في الدمام وجميع أنحاء المنطقة الشرقية.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.slice(0, 6).map((blog: Blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/blogs" passHref>
            <Button
              variant="outline"
              size="lg"
              className="bg-gradient-to-r from-primary/10 to-primary-dark/10 hover:from-primary hover:to-primary-dark hover:text-white transition-all duration-300"
            >
              عرض جميع المقالات
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
