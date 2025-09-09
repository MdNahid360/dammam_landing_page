import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Icons } from "./icons"
import Link from "next/link"
import { reviews } from "@/data/reviews"
import { internalLinks } from "@/lib/links"

export function TestimonialsSection() {
  // Show only first 6 reviews on homepage
  const featuredReviews = reviews.slice(0, 3)
  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in md:max-w-4xl mx-auto">
          {/* Section Title */}
          <h2 className="text-4xl font-bold mb-4">
            آراء عملائنا حول خدماتنا في{' '}
            <Link href={internalLinks.usedFurniture} className="gradient-text hover:border-b-2 border-b-primary">
              شراء الأثاث المستعمل
            </Link>{' '}
            و{' '}
            <Link href={internalLinks.usedAirConditioners} className="gradient-text hover:border-b-2 border-b-primary">
              المكيفات المستعملة
            </Link>{' '}
            في الدمام والمنطقة الشرقية
          </h2>

          {/* Underline */}
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>

          {/* Subtitle / Description */}
          <p className="text-xl text-text-white max-w-3xl mx-auto leading-relaxed">
            اكتشف تجارب عملائنا الحقيقية معنا في{' '}
            <Link href={internalLinks.usedFurnitureDammam} className="gradient-text hover:border-b-2 border-b-primary">
              شراء الأثاث المستعمل بالدمام
            </Link>،{' '}
            <Link href={internalLinks.scrapACs} className="gradient-text hover:border-b-2 border-b-primary">
              مكيفات السكراب
            </Link>،{' '}
            <Link href={internalLinks.restaurantEquipment} className="gradient-text hover:border-b-2 border-b-primary">
              معدات المطاعم المستعملة
            </Link>، و{' '}
            <Link href={internalLinks.scrapMetals} className="gradient-text hover:border-b-2 border-b-primary">
              خردة المعادن
            </Link>، مع خدماتنا في الخبر، القطيف، الجبيل، والأحساء.
            <br />
            نحن ملتزمون بتقديم أفضل الأسعار، خدمة سريعة، ونقل مجاني لجميع العملاء.
          </p>
        </div>


        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredReviews.map((review, index) => (
            <Card
              key={review._id}
              className="group bg-primary text-white animate-slide-up hover:shadow-xl transition-all duration-300 overflow-hidden rounded-tl-none rounded-tr-3xl rounded-br-none rounded-bl-3xl"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 relative flex flex-col justify-between h-full">
                {/* Service Badge */}
                <span className="absolute top-4 right-4 bg-white text-primary px-3 py-1 rounded-full text-xs font-semibold">
                  {review.service}
                </span>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4 mt-6" aria-label={`Rating: ${review.rating} out of 5`}>
                  {[...Array(5)].map((_, i) => (
                    <Icons.star
                      key={i}
                      className={`w-5 h-5 ${i < review.rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-300 text-gray-300"
                        }`}
                      aria-hidden="true"
                    />
                  ))}
                  <span className="text-sm text-white group-hover:text-white mr-2">({review.rating}.0)</span>
                </div>

                {/* Review Comment */}
                <blockquote className="text-white group-hover:text-white italic mb-6 leading-relaxed text-sm transition-colors">
                  "{review.comment}"
                </blockquote>

                {/* Customer Info */}
                <div className="border-t pt-4 mt-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div className="flex-1">
                    <p className="font-semibold text-white">{review.name}</p>
                    <p className="text-sm text-text-white group-hover:text-white flex items-center gap-1 mt-1">
                      <Icons.mapPin className="w-4 h-4 text-white" />
                      {review.location}
                    </p>
                    <time className="text-xs text-text-white group-hover:text-white mt-1 block" dateTime={review.date}>
                      {new Date(review.date).toLocaleDateString("ar-SA", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                  </div>

                  {/* Verified Badge */}
                  <div className="flex items-center gap-1 text-white group-hover:text-white text-xs">
                    <Icons.checkCircle className="w-4 h-4" aria-hidden="true" />
                    <span>عميل معتمد</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>


        {/* Statistics and CTA */}
        <div className="text-center mt-12 bg-primary text-priamry rounded md:p-12 p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="animate-fade-in">
              <div className="text-3xl font-bold text-white mb-2">+1000</div>
              <div className="text-gray-200">عميل راضي</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Icons.star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="font-bold text-2xl text-white">{averageRating.toFixed(1)}</span>
              </div>
              <div className="text-gray-200">متوسط التقييم ({reviews.length} تقييم)</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-200">خدمة متاحة</div>
            </div>
          </div>

          <p className="text-lg text-gray-200 mb-6 max-w-2xl mx-auto">
            انضم إلى آلاف العملاء الراضين عن خدماتنا في شراء الأثاث المستعمل والمكيفات السكراب
            <br />
            <span className="text-primary font-semibold">أعلى الأسعار مضمونة في جميع أنحاء المنطقة الشرقية</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="rounded font-bold border border-white hover:bg-white hover:text-primary " asChild size="lg">
              <Link href="/reviews">
                اقرأ جميع التقييمات
                <Icons.arrowRight className="w-4 h-4 mr-2" />
              </Link>
            </Button>
            <Button className="rounded  font-bold" asChild size="lg" variant="outline">
              <Link href="tel:+966554268296">
                <Icons.phone className="w-4 h-4 ml-2" />
                احصل على تقييم مجاني
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}