import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Icons } from "./icons"

const pricingData = [
  {
    category: "مكيفات الشباك",
    items: [
      { size: "1 طن", price: "150-300 ريال", condition: "حسب الحالة" },
      { size: "1.5 طن", price: "200-400 ريال", condition: "حسب الحالة" },
      { size: "2 طن", price: "250-500 ريال", condition: "حسب الحالة" },
    ],
  },
  {
    category: "مكيفات الاسبليت",
    items: [
      { size: "1 طن", price: "200-400 ريال", condition: "حسب الحالة" },
      { size: "2 طن", price: "300-600 ريال", condition: "حسب الحالة" },
      { size: "3 طن", price: "400-800 ريال", condition: "حسب الحالة" },
    ],
  },
  {
    category: "المعادن",
    items: [
      { size: "ألمنيوم", price: "8-12 ريال/كيلو", condition: "حسب النوع" },
      { size: "نحاس أحمر", price: "25-35 ريال/كيلو", condition: "حسب النقاء" },
      { size: "حديد", price: "1.5-2.5 ريال/كيلو", condition: "حسب النوع" },
    ],
  },
]

export function PricingSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">أسعارنا التنافسية</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            أسعار تقريبية لمساعدتك في معرفة قيمة السكراب لديك
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {pricingData.map((category, index) => (
            <Card key={category.category} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6 text-center text-primary">{category.category}</h3>
                <div className="space-y-4">
                  {category.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between items-center py-2 border-b border-border last:border-0"
                    >
                      <div>
                        <div className="font-medium">{item.size}</div>
                        <div className="text-sm text-muted-foreground">{item.condition}</div>
                      </div>
                      <div className="font-bold text-primary">{item.price}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-muted/50 rounded-lg p-6 mb-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Icons.star className="w-5 h-5 text-primary" />
              <span className="font-semibold">ملاحظة مهمة</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              الأسعار المذكورة تقريبية وقد تختلف حسب حالة المكيف أو المعدن، الماركة، العمر، والكمية. للحصول على سعر
              دقيق، يرجى التواصل معنا للتقييم المجاني.
            </p>
          </div>

          <Button size="lg" asChild>
            <a href="tel:+966554268296">
              احصل على تقييم مجاني الآن
              <Icons.phone className="w-5 h-5 mr-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
