import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Blog } from "@/types"
import { getBlogs } from "@/components/blogs-section"
import { formatDate } from "@/lib/utils"
import BlogCard from "@/components/blog-card"
import Head from "next/head"
import { socialLinks } from "@/lib/links"


interface BlogPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";
  const domain = process.env.NEXT_PUBLIC_DOMAIN_NAME || "";

  const response = await fetch(
    `${baseUrl}/api/public/blogs?domain=${domain}&limit=100`
  );

  if (!response.ok) {
    return [];
  }

  const blogs = await response.json();
  return blogs.blogs.map((blog: Blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";
  const domain = process.env.NEXT_PUBLIC_DOMAIN_NAME || "";

  const response = await fetch(
    `${baseUrl}/api/public/blogs/${params.slug}?domain=${domain}`
  );

  if (!response.ok) {
    return {
      title: "الخدمة غير موجودة - Mukayfat Scrap Qatif",
      description: "الخدمة المطلوبة غير متوفرة",
    };
  }

  const blog: Blog = await response.json();

  return {
    title: blog.title,
    description: blog.excerpt,
    keywords: blog.keywords.split(", "),
    authors: [{ name: blog.author }],
    creator: "مكيفات سكراب الدمام",
    publisher: "مكيفات سكراب الدمام",
    robots: "index, follow",
    openGraph: {
      type: "article",
      locale: "ar_SA",
      url: `https://www.dammamathathmukayfat.com/blogs/${blog.slug}`,
      siteName: "مكيفات سكراب الدمام",
      title: blog.title,
      description: blog.excerpt,
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.excerpt,
    },
    alternates: {
      canonical: `https://www.dammamathathmukayfat.com/blogs/${blog.slug}`,
    },
  }
}

export default async function BlogDetailPage({ params }: BlogPageProps) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";
  const domain = process.env.NEXT_PUBLIC_DOMAIN_NAME || "";
  const blogs = await getBlogs();

  let blog: Blog = {
    _id: "",
    title: "",
    slug: "",
    author: "",
    date: "",
    excerpt: "",
    keywords: "",
    image: {
      src: "",
      alt: "",
      description: "",
    },
    content: "",
  };

  try {
    const blogResponse = await fetch(
      `${baseUrl}/api/public/blogs/${params.slug}?domain=${domain}`,
      {
        next: { revalidate: 60 * 60 * 2 },
      }
    );

    if (!blogResponse.ok) {
      notFound();
    }

    blog = await blogResponse.json();
  } catch (error) {
    console.error("Error fetching blog data:", error);
    notFound();
  }

  const relatedBlogs = blogs.filter((b) => b._id !== blog._id).slice(0, 3);

  // Generate JSON-LD Schema Markup
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: blog.excerpt,
    author: {
      "@type": "Person",
      name: blog.author,
    },
    publisher: {
      "@type": "Organization",
      name: "مكيفات سكراب الدمام",
      logo: {
        "@type": "ImageObject",
        url: "https://www.dammamathathmukayfat.com/images/logo.svg", // Replace with your actual logo URL
      },
    },
    datePublished: blog.date,
    dateModified: blog.date, // Update if you have a separate modified date
    image: blog.image.src || "https://www.dammamathathmukayfat.com/placeholder.svg",
    url: `https://www.dammamathathmukayfat.com/blogs/${blog.slug}`,
    keywords: blog.keywords.split(", "),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.dammamathathmukayfat.com/blogs/${blog.slug}`,
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
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <div className="text-sm text-muted-foreground mb-4">
                {formatDate(blog.date)}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                {blog.title}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {blog.excerpt}
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-4 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-3">
                <div className="relative h-96 rounded-lg overflow-hidden">
                  <Image
                    src={blog?.image.src || "/placeholder.svg"}
                    alt={blog?.image.alt || "Blog Image"}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                <div
                  className="prose prose-lg max-w-none ql-editor"
                  dangerouslySetInnerHTML={{ __html: blog.content }}
                />

                {/* Share Section */}
                <div className="mt-12 pt-8 border-t">
                  <h3 className="text-xl font-bold mb-4">شارك المقال</h3>
                  <div className="flex flex-wrap gap-4">
                    <Button asChild variant="outline" size="sm">
                      <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        href={`https://www.instagram.com/?url=${encodeURIComponent(
                          `https://www.dammamathathmukayfat.com/blogs/${blog.slug}`
                        )}`}
                      >
                        <Icons.instagram className="w-4 h-4 ml-2 text-pink-500" />
                        إنستغرام
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="sm">
                      <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        href={`https://wa.me/?text=${encodeURIComponent(
                          blog.title + " - " + `https://www.dammamathathmukayfat.com/blogs/${blog.slug}`
                        )}`}
                      >
                        <Icons.whatsapp className="w-4 h-4 ml-2 text-green-500" />
                        واتساب
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="sm">
                      <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                          blog.title
                        )}&url=${encodeURIComponent(
                          `https://www.dammamathathmukayfat.com/blogs/${blog.slug}`
                        )}`}
                      >
                        <Icons.twitter className="w-4 h-4 ml-2 text-blue-400" />
                        تويتر
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="sm">
                      <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                          `https://www.dammamathathmukayfat.com/blogs/${blog.slug}`
                        )}`}
                      >
                        <Icons.facebook className="w-4 h-4 ml-2 text-blue-600" />
                        فيسبوك
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Related Blogs */}
                <Card>
                  <CardContent className="p-6">
                    <h2>
                      <span className="text-muted-foreground text-lg">
                        روابط سريعة للمقالات
                      </span>
                    </h2>
                    {blogs.map((blog: Blog) => (
                      <Link
                        className="gradient-text border-gradient-b line-clamp-2 mb-2"
                        key={blog._id}
                        href={`/blogs/${blog.slug}`}
                      >
                        <p>{blog.title}</p>
                      </Link>
                    ))}
                  </CardContent>
                </Card>

                {/* CTA */}
                <Card className="gradient-bg">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg font-bold mb-4">
                      هل تريد بيع سكرابك؟
                    </h3>
                    <p className="mb-4 opacity-90 text-sm">
                      احصل على أفضل سعر لمكيفاتك ومعادنك القديمة
                    </p>
                    <Button asChild variant="secondary" size="sm" className="w-full">
                      <Link target="_blank" rel="noopener noreferrer" href={socialLinks.phone}>
                        <Icons.phone className="w-4 h-4 ml-2 text-blue-600" />
                        اتصل الآن
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                {/* Related Articles */}
                {relatedBlogs.length > 0 && (
                  <section className="py-20">
                    <div className="container mx-auto px-4">
                      <h2 className="text-3xl font-bold text-center mb-8">
                        مقالات ذات صلة
                      </h2>
                      <div className="grid grid-cols-1 gap-8">
                        {relatedBlogs.map((blog: Blog) => (
                          <BlogCard key={blog._id} blog={blog} />
                        ))}
                      </div>
                    </div>
                  </section>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}