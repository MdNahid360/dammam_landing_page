import { Card, CardContent } from "@/components/ui/card"
import { Icons } from "./icons"
import { internalLinks, socialLinks } from "@/lib/links"
import Link from "next/link"
import Image from "next/image"
import { Car } from "lucide-react"

const serviceAreas = [
  {
    name: "الدمام",
    description: "شراء الأثاث المستعمل والمكيفات السكراب في الدمام وجميع الأحياء بأعلى الأسعار",
    image: "/images/dammam-air-conditioner-scrap.jpg",
    services: ["أثاث مستعمل", "مكيفات سكراب", "معادن خردة"]
  },
  {
    name: "الخبر",
    description: "خدمات شراء الأثاث المستعمل والمكيفات المستعملة في الخبر بخدمة سريعة ونقل مجاني",
    image: "/images/khobar-used-dining-room-furniture.jpg",
    services: ["أثاث مستعمل", "مكيفات مستعملة", "معدات مطاعم"]
  },
  {
    name: "القطيف",
    description: "نشتري جميع أنواع الأثاث المستعمل ومكيفات السكراب في القطيف والمناطق المحيطة",
    image: "/images/qatif-used-furniture.jpg",
    services: ["مكيفات سكراب", "أثاث مستعمل", "أجهزة كهربائية"]
  },
  {
    name: "الجبيل",
    description: "شراء الأثاث المكتبي المستعمل ومكيفات السكراب الجبيل - خدمة متخصصة للشركات والمصانع",
    image: "/images/jubail-office-furniture.jpg",
    services: ["أثاث مكتبي", "مكيفات سكراب", "معدات صناعية"]
  },
  {
    name: "الأحساء",
    description: "خدمات شراء الأثاث المستعمل ومعدات المطاعم المستعملة في الأحساء بتقييم فوري",
    image: "/images/ahsa-restaurant-equipment.jpg",
    services: ["معدات مطاعم", "أثاث مستعمل", "مطابخ مستعملة"]
  },
  {
    name: "الهفوف",
    description: "شراء الأثاث المستعمل ومكيفات السكراب الهفوف بأفضل الأسعار وخدمة على مدار الساعة",
    image: "/images/hofuf-used-and-scrap-airconditioner.jpg",
    services: ["مكيفات سكراب", "أثاث منزلي", "خردة معادن"]
  },
]

export function ServiceAreasSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center ">          <h2 className="text-4xl font-bold mb-6">
          مناطق خدمتنا في المنطقة الشرقية
        </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
            نقدم خدماتنا في جميع أنحاء المنطقة الشرقية، بما في ذلك الدمام، الخبر، القطيف، الجبيل، الأحساء، والهفوف.
            سواء كنت بحاجة لشراء الأثاث المستعمل، المكيفات السكراب، أو المعادن والخردة، نحن نغطي جميع المدن الرئيسية.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceAreas.map((area, index) => (
            <Card
              className="relative group hover:shadow-xl h-[20rem] transition-all duration-300 rounded animate-slide-up overflow-hidden"
              key={area?.name}>
              <Image
                src={area.image}
                alt={`خدمات شراء الأثاث المستعمل في ${area.name}`}
                width={500}
                height={500}
                className="object-cover h-full transition-transform duration-500 group-hover:scale-110"
              />

              <div className="opacity-0 group-hover:opacity-100 duration-300 transition-all absolute bottom-0 left-0 right-0 top-0 h-full flex flex-col justify-end p-4 bg-gradient-to-b from-[#00000010] to-[#000000d5]">
                <h3 className="group-hover:translate-y-0 duration-300 transition-all translate-y-4 text-xl text-white font-bold mb-2">{area.name}</h3>
                <p className="group-hover:translate-y-0 translate-y-4 duration-300 transition-all text-gray-200 mb-4">{area.description}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-white  transition-colors">
                    <Icons.mapPin className="w-4 h-4" />
                    <span className="text-sm font-medium">خدمة محلية</span>
                  </div>

                  <Link
                    href={socialLinks.phone}
                    className="inline-flex items-center gap-2 hover:bg-white text-white group-hover:bg-primary hover:text-primary px-4 py-2 rounded-lg transition-colors font-medium text-sm"
                  >
                    <Icons.phone className="w-4 h-4" />
                    اتصل الآن
                  </Link>
                </div>

              </div>
            </Card>
          ))}
        </div>

        {/* Additional Coverage Note */}
        <div className="text-center mt-12 animate-fade-in">
          <p className="text-lg text-muted-foreground">
            كما نخدم جميع المناطق المحيطة والأحياء الفرعية في المنطقة الشرقية
            <br />
            <span className="text-primary font-semibold">خدمة طوارئ 24/7 متاحة في جميع المناطق</span>
          </p>
        </div>
      </div>
    </section>
  )
}

