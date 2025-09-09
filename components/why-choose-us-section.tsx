import { Card, CardContent } from "@/components/ui/card"
import { Icons } from "./icons"
import Image from "next/image"
import { internalLinks } from "@/lib/links"
import Link from "next/link"
import WhyChoseCard from "./WhyChoseCard"

const whyChooseUsData = [
  {
    icon: Icons.award, // Trust & Expertise
    title: "خبرة متخصصة في شراء الأثاث المستعمل بالدمام",
    description:
      "أكثر من 10 سنوات من الخبرة المتخصصة في شراء الأثاث المستعمل بالدمام والمنطقة الشرقية. فريقنا من الخبراء المعتمدين يقدم تقييماً دقيقاً وعادلاً لجميع قطع الأثاث، من غرف النوم والصالات إلى المكاتب ومعدات المطاعم المستعملة.",
    image: "/images/used-furniture-dammam.jpg",
  },
  {
    icon: Icons.dollarSign, // Best Prices
    title: "أعلى الأسعار لشراء المكيفات المستعملة والسكراب",
    description:
      "نضمن لك أفضل الأسعار في السوق لشراء المكيفات المستعملة ومكيفات السكراب في الدمام، الخبر، القطيف، والجبيل. نقوم بدراسة السوق يومياً لضمان حصولك على أعلى عائد من بيع مكيفاتك القديمة أو المعطلة.",
    image: "/images/used-and-scrap-airconditioner.webp",
  },
  {
    icon: Icons.zap, // Fast Service
    title: "خدمة فورية وتقييم مجاني في نفس اليوم",
    description:
      "نصل إليك خلال ساعات قليلة في جميع أنحاء المنطقة الشرقية بما في ذلك الأحساء والهفوف. نقدم تقييماً مجانياً فورياً لأثاثك ومكيفاتك مع إمكانية الشراء والدفع نقداً في نفس الجلسة، مما يوفر عليك الوقت والجهد.",
    image: "/images/fast-service-eastern-province.jpg",
  },
  {
    icon: Icons.shield, // Licensed & Insured
    title: "شركة مرخصة ومؤمنة بالكامل",
    description:
      "نعمل بتراخيص رسمية من الجهات المختصة في المملكة العربية السعودية، ونحمل تأميناً شاملاً يغطي جميع عمليات الشراء والنقل. هذا يضمن لك التعامل الآمن والقانوني عند بيع ممتلكاتك المستعملة.",
    image: "/images/licensed-company-ksa.jpg",
  },
  {
    icon: Icons.recycle, // Eco-friendly
    title: "معالجة بيئية مستدامة للمواد المعاد تدويرها",
    description:
      "نتبع أحدث المعايير البيئية في إعادة تدوير المعادن والمكيفات والأثاث المستعمل. نساهم في الاقتصاد الدائري من خلال إعطاء حياة جديدة للمواد المستعملة، مما يقلل من التلوث البيئي ويدعم التنمية المستدامة في المنطقة الشرقية.",
    image: "/images/sustainable-recycling.jpg",
  },
  {
    icon: Icons.truck, // Free Transportation
    title: "نقل مجاني وفريق متخصص للتفكيك والتحميل",
    description:
      "نوفر خدمة النقل المجاني لجميع المشتريات بغض النظر عن الحجم أو الوزن في جميع مناطق الدمام والخبر والقطيف. فريقنا المدرب يتولى تفكيك الأثاث الثقيل ونقل المكيفات بأمان تام دون أي تكلفة إضافية عليك، مع ضمان عدم تضرر منزلك أو مكتبك.",
    image: "/images/free-transport-disassembly.jpg",
  }
]



export function WhyChooseUsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in md:max-w-4xl mx-auto">
          {/* Section Title */}
          <h2 className="text-4xl font-bold mb-4">
            لماذا تختارنا في{' '}
            <Link href={internalLinks.usedAirConditioners} className="gradient-text hover:border-b-2 border-primary">
              شراء مكيفات مستعمل بالدمام
            </Link>{' '}
            و{' '}
            <Link href={internalLinks.usedFurniture} className="gradient-text hover:border-b-2 border-primary">
              الأثاث المستعمل
            </Link>
          </h2>

          {/* Divider */}
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>

          {/* Section Description */}
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            نحن{' '}
            <Link href={internalLinks.usedFurnitureDammam} className="gradient-text hover:border-b-2 border-primary">
              أفضل شركة شراء أثاث مستعمل بالدمام
            </Link>{' '}
            و{' '}
            <Link href={internalLinks.scrapQatif} className="gradient-text hover:border-b-2 border-primary">
              المشترون الرائدون للسكراب في القطيف
            </Link>، الخبر، الجبيل، الأحساء، وفي جميع أنحاء المنطقة الشرقية.
            نقدم خدمات شراء{' '}
            <Link href={internalLinks.usedFurniture} className="gradient-text hover:border-b-2 border-primary">
              الأثاث المستعمل
            </Link>،{' '}
            <Link href={internalLinks.usedAirConditioners} className="gradient-text hover:border-b-2 border-primary">
              المكيفات المستعملة والسكراب
            </Link>، جميع أنواع المعادن والخردة، بالإضافة إلى{' '}
            <Link href={internalLinks.restaurantEquipment} className="gradient-text hover:border-b-2 border-primary">
              معدات المطاعم المستعملة
            </Link>،{' '}
            <Link href={internalLinks.usedKitchens} className="gradient-text hover:border-b-2 border-primary">
              المطابخ الألمنيوم المستعملة
            </Link>،{' '}
            <Link href={internalLinks.officeFurniture} className="gradient-text hover:border-b-2 border-primary">
              الأثاث المكتبي
            </Link>، والأجهزة الكهربائية المستعملة.
            سواء كنت في الدمام، الخبر، القطيف أو أي مكان في المنطقة الشرقية، فنحن نضمن لك{' '}
            <strong className="text-primary">أعلى الأسعار</strong>، <strong className="text-primary">خدمة سريعة</strong> و<strong className="text-primary">موثوقة</strong>.
          </p>
        </div>


        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {whyChooseUsData.map((item, index) => (
            <WhyChoseCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
