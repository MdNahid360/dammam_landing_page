import { Button } from "@/components/ui/button"
import { Icons } from "./icons"
import Link from "next/link"
import { socialLinks } from "@/lib/links"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative md:min-h-[98vh] min-h-[125vh] h-full flex items-center justify-center overflow-visible md:py-12 py-4">
      <div className="grid md:grid-cols-2 relative z-10 container mx-auto px-4 text-white">
        <div className="md:p-3 ">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            اشترِ الأثاث المستعمل ومكيفات السكراب في
            <span className="block text-secondary">الدمام بأعلى الأسعار</span>
          </h1>
          <p className="md:text-2xl text-sm mb-8 text-gray-100 leading-relaxed">
            اشترِ أو بيع الأثاث المستعمل، المكيفات السكراب، والمعادن في الدمام والخبر والقطيف والجبيل والأحساء بأسعار ممتازة وخدمة احترافية.
            نحن نقدم تقييم فوري لجميع الأثاث والمكيفات والمعادن، نقل مجاني سريع إلى أي موقع، وخدمة عملاء متاحة طوال أيام الأسبوع لضمان تجربة سلسة وآمنة.
            أسعارنا تنافسية ومضمونة، مع التزامنا بأعلى مستوى من الاحترافية والشفافية في جميع عمليات الشراء والبيع.
          </p>

          <div className=" flex-row gap-4 justify-center items-center ">
            {/* <Button
              asChild
              size="icon"
              className="gradient-bg hover:opacity-90 transition-opacity"
            >
              <Link
                rel="noopener noreferrer"
                href={socialLinks.whatsapp}
              >
                <Icons.whatsapp className="w-6 h-6" />
              </Link>
            </Button> */}

            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-primary text-xl rounded !text-primary-foreground hover:bg-primary/90 border-none">
              <Link href="/services">
                تفضل بزيارة خدماتنا
                <Icons.arrowRight className="w-7 h-7 mr-2" />
              </Link>
            </Button>

          </div>
        </div>
        <div className=" flex justify-end relative md:pt-0 pt-12">
          <Image
            src="/images/image2.webp"
            alt="Hero Banner"
            width={900}
            height={900}
            className="md:w-[600px] md:h-[600px] w-[300px] h-[300px] md:p-4 p-1 border bg-primary/20 object-cover rounded-[4rem] rounded-tl-none rounded-br"
          />
          <div className="max-w-4xl mx-auto absolute left-1/2 -bottom-24 md:bottom-[-4rem] transform -translate-x-1/2 w-11/12 md:w-10/12 border-6 border-white rounded-tr-[2rem] rounded-bl-[2rem] overflow-hidden shadow-xl p-3 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white bg-primary md:min-h-[9rem] justify-center items-center">
            <div className="absolute inset-0 bg-black/20 " />
            <div className="animate-slide-up bg-white/0 backdrop-blur-xs py-1 rounded-xl">
              <div className="text-xl md:text-3xl font-bold text-primary-foreground">+350</div>
              <div className="text-sm">عميل راضي</div>
            </div>
            <div className="animate-slide-up bg-white/0 backdrop-blur-xs py-1 rounded-xl ">
              <div className="text-xl md:text-3xl font-bold text-primary-foreground">24/7</div>
              <div className="text-sm">خدمة متاحة</div>
            </div>
            <div className="animate-slide-up bg-white/0 backdrop-blur-xs py-1 rounded-xl ">
              <div className="text-xl md:text-3xl font-bold text-primary-foreground">مجاني</div>
              <div className="text-sm">النقل والتقييم</div>
            </div>
            <div className="animate-slide-up bg-white/0 backdrop-blur-xs py-1 rounded-xl ">
              <div className="text-xl md:text-3xl font-bold text-primary-foreground">أعلى</div>
              <div className="text-sm">الأسعار</div>
            </div>
          </div>

        </div>
      </div>
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `radial-gradient(circle, #000b0670, #000c08), url('/images/hero-banner.webp?height=800&width=1200')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }} />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-primary/20" />
    </section>

  )
}
