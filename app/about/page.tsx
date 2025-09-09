import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Icons } from "@/components/icons"

export const metadata: Metadata = {
  title: "من نحن - شركة شراء الأثاث والمكيفات | شراء الأثاث المستعمل وسكراب الدمام",
  description:
    "تعرف على شركة شراء الأثاث والمكيفات، الرائدة في شراء الأثاث المستعمل، مكيفات السكراب، خردة المعادن، ومعدات المطاعم في الدمام، الخبر، القطيف، الجبيل، الأحساء، والهفوف منذ أكثر من 10 سنوات.",
  keywords: "شراء الأثاث المستعمل بالدمام, شراء مكيفات سكراب الدمام, شراء سكراب القطيف, شركة شراء سكراب المنطقة الشرقية, شراء معدات مطاعم مستعملة",
  alternates: {
    canonical: "https://www.dammamathathmukayfat.com/about",
  },
}

const stats = [
  { icon: Icons.users, number: "350+", label: "عميل راضي" },
  { icon: Icons.award, number: "10+", label: "سنوات خبرة" },
  { icon: Icons.truck, number: "600+", label: "عملية نقل شهرياً" },
  { icon: Icons.recycle, number: "100%", label: "رضا العملاء" },
]

const values = [
  {
    icon: Icons.shield,
    title: "الثقة والمصداقية",
    description: "نبني علاقات طويلة الأمد مع عملائنا من خلال الشفافية في شراء الأثاث المستعمل ومكيفات السكراب",
  },
  {
    icon: Icons.zap,
    title: "السرعة والكفاءة",
    description: "نقدم خدمات سريعة وفعالة لشراء الأثاث، المكيفات، والخردة في الدمام والمنطقة الشرقية",
  },
  {
    icon: Icons.dollarSign,
    title: "أفضل الأسعار",
    description: "نضمن أسعارًا تنافسية لشراء الأثاث المستعمل، مكيفات السكراب، وخردة المعادن",
  },
  {
    icon: Icons.headphones,
    title: "خدمة العملاء",
    description: "فريقنا متاح 24/7 للإجابة على استفساراتك حول شراء الأثاث والسكراب",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
              من نحن
            </h1>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              شركة رائدة في شراء الأثاث المستعمل، مكيفات السكراب، خردة المعادن، ومعدات المطاعم في الدمام، الخبر، القطيف، الجبيل، الأحساء، والهفوف
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-3xl font-bold mb-6">قصتنا</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  بدأت <strong>شركة شراء الأثاث والمكيفات</strong> في عام 2015 كمزود خدمات متخصص في <em>شراء الأثاث المستعمل بالدمام</em> و<em>شراء مكيفات سكراب الدمام</em>. مع الوقت، توسعنا لتشمل خدمات شراء خردة الحديد، النحاس، الألمنيوم، ومعدات المطاعم المستعملة في المنطقة الشرقية.
                </p>
                <p>
                  اليوم، نحن نفخر بخدمة آلاف العملاء في الدمام، الخبر، القطيف، الجبيل، الأحساء، والهفوف، مقدمين خدمات شاملة تشمل التقييم المجاني، النقل المجاني، وأفضل الأسعار التنافسية لـ <em>شراء سكراب الدمام</em> و<em>شراء معدات مطاعم مستعملة</em>.
                </p>
                <p>
                  رؤيتنا هي أن نكون الشركة الرائدة في إعادة التدوير والاستدامة البيئية في المملكة، من خلال تقديم حلول مبتكرة لشراء الأثاث المستعمل ومكيفات السكراب مع المساهمة في الاقتصاد الدائري.
                </p>
              </div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <img
                src="/images/about_us.jpg?height=400&width=600&text=شركة+شراء+الأثاث+والمكيفات"
                alt="شركة شراء الأثاث والمكيفات الدمام"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">إنجازاتنا بالأرقام</h2>
            <p className="text-gray-600">أرقام تعكس ثقة عملائنا في خدمات شراء الأثاث والسكراب</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-blue-600/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">قيمنا</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              القيم التي توجه عملنا في تقديم خدمات شراء الأثاث المستعمل، مكيفات السكراب، وخردة المعادن
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-600/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <value.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}