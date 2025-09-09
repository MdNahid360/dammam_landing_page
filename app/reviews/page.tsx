import { Button } from "@/components/ui/button"
import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Icons } from "@/components/icons"
import { reviews } from "@/data/reviews"

export const metadata: Metadata = {
  title: "آراء العملاء - تقييمات وتجارب حقيقية مع مكيفات سكراب الدمام",
  description:
    "اقرأ تقييمات وآراء عملائنا الحقيقية في شراء مكيفات السكراب والمعادن. أكثر من 1000 عميل راضي في المنطقة الشرقية.",
  keywords: ["آراء العملاء", "تقييمات مكيفات سكراب", "تجارب العملاء", "مراجعات شراء سكراب"],
  authors: [{ name: "مكيفات سكراب الدمام" }],
  creator: "مكيفات سكراب الدمام",
  publisher: "مكيفات سكراب الدمام",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "ar_SA",
    url: "https://www.dammamathathmukayfat.com/reviews",
    siteName: "مكيفات سكراب الدمام",
    title: "آراء العملاء - تقييمات وتجارب حقيقية مع مكيفات سكراب الدمام",
    description:
      "اقرأ تقييمات وآراء عملائنا الحقيقية في شراء مكيفات السكراب والمعادن. أكثر من 1000 عميل راضي في المنطقة الشرقية.",
  },
  twitter: {
    card: "summary_large_image",
    title: "آراء العملاء - تقييمات وتجارب حقيقية مع مكيفات سكراب الدمام",
    description:
      "اقرأ تقييمات وآراء عملائنا الحقيقية في شراء مكيفات السكراب والمعادن. أكثر من 1000 عميل راضي في المنطقة الشرقية.",
  },
  alternates: {
    canonical: "https://www.dammamathathmukayfat.com/reviews",
  },
}

export default function ReviewsPage() {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("ar-SA", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">آراء عملائنا</h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              اقرأ تجارب عملائنا الحقيقية وتقييماتهم لخدماتنا في شراء السكراب والمعادن
            </p>

            {/* Rating Summary */}
            <div className="bg-background rounded-lg p-6 inline-block">
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Icons.star key={i} className="w-6 h-6 fill-primary text-primary" />
                  ))}
                </div>
                <span className="font-bold text-2xl">{averageRating.toFixed(1)}</span>
              </div>
              <p className="text-muted-foreground">متوسط التقييم من {reviews.length} تقييم</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card
                key={review._id}
                className="animate-slide-up hover:shadow-lg transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icons.star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed italic">"{review.comment}"</p>

                  <div className="border-t pt-4">
                    <div className="font-semibold">{review.name}</div>
                    <div className="text-sm text-muted-foreground flex items-center gap-1 mb-1">
                      <Icons.mapPin className="w-3 h-3" />
                      {review.location}
                    </div>
                    <div className="text-xs text-primary mb-1">{review.service}</div>
                    <div className="text-xs text-muted-foreground">{formatDate(review.date)}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">انضم إلى عملائنا الراضين</h2>
            <p className="text-xl text-muted-foreground mb-8">
              احصل على نفس الخدمة المميزة والأسعار العادلة التي حصل عليها آلاف العملاء
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <a href="tel:+966554268296">
                  <Icons.phone className="w-5 h-5 ml-2" />
                  اتصل الآن للحصول على عرض سعر
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="https://wa.me/966554268296">
                  <Icons.whatsapp className="w-5 h-5 ml-2" />
                  واتساب
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
