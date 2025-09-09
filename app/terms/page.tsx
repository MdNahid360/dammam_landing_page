import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { API_ENDPOINTS, siteConfig } from "@/lib/utils"
import Link from "next/link"

export const metadata: Metadata = {
  title: "الشروط والأحكام - شركة شراء الأثاث والمكيفات",
  description:
    "الشروط والأحكام لخدمات شراء الأثاث المستعمل، مكيفات السكراب، خردة الحديد والنحاس والألمنيوم، ومعدات المطاعم في الدمام، الخبر، القطيف، الجبيل، الأحساء، والهفوف.",
  alternates: {
    canonical: "https://www.dammamathathmukayfat.com/terms",
  },
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-blue-50 to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
              الشروط والأحكام
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              نرحب بكم في شركة شراء الأثاث والمكيفات، المتخصصة في شراء الأثاث المستعمل، مكيفات السكراب، خردة المعادن، ومعدات المطاعم في الدمام، الخبر، القطيف، الجبيل، الأحساء، والهفوف.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Card className="shadow-lg border-0">
              <CardContent className="p-6 sm:p-8 prose prose-lg max-w-none leading-relaxed">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    1. قبول الشروط
                  </CardTitle>
                </CardHeader>
                <p className="text-gray-700">
                  باستخدام خدماتنا في شركة شراء الأثاث والمكيفات، فإنك توافق على الالتزام بهذه الشروط والأحكام المتعلقة بشراء الأثاث المستعمل، مكيفات السكراب، خردة الحديد، النحاس، الألمنيوم، ومعدات المطاعم في الدمام، الخبر، القطيف، الجبيل، الأحساء، والهفوف. إذا لم توافق، يرجى عدم استخدام خدماتنا.
                </p>

                <Separator className="my-6" />

                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    2. الخدمات المقدمة
                  </CardTitle>
                </CardHeader>
                <ul className="list-disc list-inside text-gray-700">
                  <li>شراء الأثاث المستعمل في الدمام، الخبر، والقطيف</li>
                  <li>شراء مكيفات سكراب ومكيفات مستعملة في المنطقة الشرقية</li>
                  <li>شراء سكراب الحديد، النحاس، الألمنيوم، وجميع أنواع الخردة</li>
                  <li>شراء معدات المطاعم والمطابخ المستعملة</li>
                  <li>تقييم مجاني وسريع للأثاث، المكيفات، والسكراب</li>
                  <li>خدمة نقل مجانية داخل مناطق الدمام، الخبر، القطيف، الجبيل، الأحساء، والهفوف</li>
                </ul>

                <Separator className="my-6" />

                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    3. شروط الشراء
                  </CardTitle>
                </CardHeader>
                <ul className="list-disc list-inside text-gray-700">
                  <li>يجب أن تكون الأغراض (الأثاث، المكيفات، أو السكراب) مملوكة قانونيًا للبائع</li>
                  <li>نحتفظ بالحق في رفض أي مواد لا تتوافق مع معايير الجودة لدينا</li>
                  <li>تحدد الأسعار بناءً على حالة الأثاث، المكيفات، أو السكراب</li>
                  <li>الدفع يتم نقدًا أو عبر تحويل فوري عند استلام المواد</li>
                </ul>

                <Separator className="my-6" />

                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    4. التقييم والأسعار
                  </CardTitle>
                </CardHeader>
                <ul className="list-disc list-inside text-gray-700">
                  <li>التقييم الأولي عبر الهاتف أو الواتساب هو تقديري وقابل للتغيير</li>
                  <li>يتم تحديد السعر النهائي بعد المعاينة المباشرة للأثاث، المكيفات، أو السكراب</li>
                  <li>نقدم أفضل الأسعار التنافسية لشراء الأثاث المستعمل، مكيفات السكراب، وخردة المعادن في المنطقة الشرقية</li>
                </ul>

                <Separator className="my-6" />

                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    5. النقل والاستلام
                  </CardTitle>
                </CardHeader>
                <ul className="list-disc list-inside text-gray-700">
                  <li>نوفر خدمة نقل مجانية في الدمام، الخبر، القطيف، الجبيل، الأحساء، والهفوف</li>
                  <li>يتم التنسيق مسبقًا لتحديد موعد الاستلام</li>
                  <li>نوفر فريقًا محترفًا لتفكيك ونقل الأثاث، المكيفات، أو السكراب بأمان</li>
                </ul>

                <Separator className="my-6" />

                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    6. المسؤولية
                  </CardTitle>
                </CardHeader>
                <ul className="list-disc list-inside text-gray-700">
                  <li>لا نتحمل مسؤولية الأضرار الناتجة عن أسباب خارجة عن سيطرتنا أثناء النقل أو الاستلام</li>
                  <li>العميل مسؤول عن تقديم معلومات دقيقة حول الأغراض المراد بيعها</li>
                  <li>نلتزم بإجراءات السلامة ومعايير حماية البيئة أثناء التعامل مع السكراب</li>
                </ul>

                <Separator className="my-6" />

                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    7. الإلغاء والتأجيل
                  </CardTitle>
                </CardHeader>
                <ul className="list-disc list-inside text-gray-700">
                  <li>يمكن للعميل إلغاء أو تأجيل الخدمة بإشعار مسبق عبر الهاتف أو الواتساب</li>
                  <li>نحتفظ بالحق في إلغاء الخدمة في حالات استثنائية مع إشعار العميل</li>
                </ul>

                <Separator className="my-6" />

                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    8. حماية البيئة
                  </CardTitle>
                </CardHeader>
                <p className="text-gray-700">
                  نحن ملتزمون بإعادة تدوير الأثاث المستعمل، مكيفات السكراب، وخردة المعادن بطريقة مستدامة وفق المعايير البيئية، لتقليل النفايات والحفاظ على البيئة في المنطقة الشرقية.
                </p>

                <Separator className="my-6" />

                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    9. تعديل الشروط
                  </CardTitle>
                </CardHeader>
                <p className="text-gray-700">
                  قد نقوم بتحديث هذه الشروط والأحكام من وقت لآخر لتعكس التغييرات في خدماتنا أو القوانين المعمول بها. سيتم إشعارك بأي تغييرات جوهرية عبر الموقع أو البريد الإلكتروني.
                </p>

                <Separator className="my-6" />

                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    10. القانون المطبق
                  </CardTitle>
                </CardHeader>
                <p className="text-gray-700">
                  تخضع هذه الشروط والأحكام لقوانين المملكة العربية السعودية، وتتم تسوية أي نزاعات وفقًا للأنظمة المحلية.
                </p>

                <Separator className="my-6" />

                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    11. التواصل معنا
                  </CardTitle>
                </CardHeader>
                <p className="text-gray-700">
                  للاستفسارات حول الشروط والأحكام أو خدماتنا (شراء الأثاث المستعمل، مكيفات السكراب، أو معدات المطاعم)، يرجى التواصل معنا عبر:
                  <br />
                  <strong>الهاتف:</strong> {siteConfig.phone}
                  <br />
                  <strong>الواتساب:</strong> {siteConfig.phone}
                  <br />
                  <strong>الموقع:</strong>
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