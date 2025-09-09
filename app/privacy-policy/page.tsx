import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Link } from "lucide-react"
import { API_ENDPOINTS, siteConfig } from "@/lib/utils"

export const metadata: Metadata = {
  title: "سياسة الخصوصية - شركة شراء الأثاث والمكيفات",
  description: "سياسة الخصوصية لشركة شراء الأثاث والمكيفات في الدمام، الخبر، القطيف، والمنطقة الشرقية. تعرف على كيفية حماية بياناتك الشخصية عند بيع الأثاث المستعمل، مكيفات السكراب، ومعدات المطاعم.",
  alternates: {
    canonical: "https://www.dammamathathmukayfat.com/privacy-policy",
  },
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-blue-50 to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
              سياسة الخصوصية
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              في شركة شراء الأثاث والمكيفات، نحن ملتزمون بحماية خصوصيتك وبياناتك الشخصية أثناء تقديم خدمات شراء الأثاث المستعمل، مكيفات السكراب، ومعدات المطاعم في الدمام، الخبر، القطيف، والمنطقة الشرقية.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Card className="shadow-lg border-0">
              <CardContent className="p-6 sm:p-8 prose prose-lg max-w-none">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    مقدمة
                  </CardTitle>
                </CardHeader>
                <p className="text-gray-700">
                  في شركة شراء الأثاث والمكيفات، نحترم خصوصيتك ونلتزم بحماية بياناتك الشخصية عند التعامل مع خدماتنا، سواء كنت تبيع أثاثًا مستعملًا، مكيفات سكراب، خردة الحديد، النحاس، الألمنيوم، أو معدات مطاعم مستعملة في الدمام، الخبر، القطيف، الجبيل، الأحساء، أو الهفوف.
                </p>

                <Separator className="my-6" />

                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    المعلومات التي نجمعها
                  </CardTitle>
                </CardHeader>
                <p className="text-gray-700">
                  نجمع المعلومات التالية لتقديم خدماتنا بكفاءة:
                </p>
                <ul className="list-disc list-inside text-gray-700">
                  <li>الاسم ورقم الهاتف للتواصل معك</li>
                  <li>العنوان لتقديم خدمات النقل والاستلام</li>
                  <li>تفاصيل الأثاث المستعمل، مكيفات السكراب، أو معدات المطاعم المراد بيعها</li>
                  <li>صور المواد (مثل الأثاث، المكيفات، أو الخردة) للتقييم المبدئي</li>
                </ul>

                <Separator className="my-6" />

                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    كيفية استخدام المعلومات
                  </CardTitle>
                </CardHeader>
                <p className="text-gray-700">
                  نستخدم المعلومات التي نجمعها للأغراض التالية:
                </p>
                <ul className="list-disc list-inside text-gray-700">
                  <li>تقديم خدمات شراء الأثاث المستعمل، مكيفات السكراب، ومعدات المطاعم</li>
                  <li>التواصل معك لتأكيد الطلبات وتنسيق الخدمات</li>
                  <li>تحسين جودة خدماتنا في المنطقة الشرقية</li>
                  <li>إرسال عروض ترويجية حول شراء السكراب أو الأثاث المستعمل (بموافقتك المسبقة)</li>
                </ul>

                <Separator className="my-6" />

                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    حماية المعلومات
                  </CardTitle>
                </CardHeader>
                <p className="text-gray-700">
                  نستخدم إجراءات أمنية متقدمة لحماية بياناتك من الوصول غير المصرح به، التغيير، الكشف، أو التدمير، سواء كانت تتعلق بشراء الأثاث المستعمل، مكيفات السكراب، أو خردة المعادن في الدمام والمنطقة الشرقية.
                </p>

                <Separator className="my-6" />

                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    مشاركة المعلومات
                  </CardTitle>
                </CardHeader>
                <p className="text-gray-700">
                  لا نشارك معلوماتك الشخصية مع أطراف ثالثة إلا في الحالات التالية:
                </p>
                <ul className="list-disc list-inside text-gray-700">
                  <li>بموافقتك الصريحة</li>
                  <li>لتقديم الخدمات المطلوبة، مثل نقل الأثاث أو السكراب</li>
                  <li>عند الطلب من السلطات القانونية وفقًا للقوانين المعمول بها</li>
                </ul>

                <Separator className="my-6" />

                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    حقوقك
                  </CardTitle>
                </CardHeader>
                <p className="text-gray-700">
                  لديك الحق في:
                </p>
                <ul className="list-disc list-inside text-gray-700">
                  <li>طلب نسخة من بياناتك الشخصية التي نحتفظ بها</li>
                  <li>طلب تصحيح أو تحديث معلوماتك</li>
                  <li>طلب حذف بياناتك الشخصية</li>
                  <li>الاعتراض على معالجة بياناتك</li>
                </ul>

                <Separator className="my-6" />

                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    ملفات تعريف الارتباط
                  </CardTitle>
                </CardHeader>
                <p className="text-gray-700">
                  نستخدم ملفات تعريف الارتباط لتحسين تجربتك على موقعنا الإلكتروني (dammamathathmukayfat.com) وتقديم محتوى مخصص يتناسب مع خدماتنا مثل شراء الأثاث المستعمل ومكيفات السكراب.
                </p>

                <Separator className="my-6" />

                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    التحديثات
                  </CardTitle>
                </CardHeader>
                <p className="text-gray-700">
                  قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر لتعكس التغييرات في خدماتنا أو القوانين. سنخطرك بأي تغييرات جوهرية عبر الموقع أو البريد الإلكتروني.
                </p>

                <Separator className="my-6" />

                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    التواصل معنا
                  </CardTitle>
                </CardHeader>
                <p className="text-gray-700">
                  إذا كانت لديك أسئلة حول سياسة الخصوصية أو خدماتنا (مثل شراء الأثاث المستعمل، مكيفات السكراب، أو معدات المطاعم)، يرجى التواصل معنا عبر:
                  <br />
                  <strong>الهاتف:</strong> {siteConfig.phone}
                  <br />
                  <strong>الواتساب:</strong> {siteConfig.phone}
                  <br />
                  <strong>الموقع:</strong> {" "}
                  <Link href={`https://${API_ENDPOINTS.domain}`}>
                    {API_ENDPOINTS.domain}
                  </Link>
                </p>

                <p className="text-sm text-gray-500 mt-8">
                  آخر تحديث: أغسطس 2025
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}