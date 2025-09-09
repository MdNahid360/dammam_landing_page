
import { Icons } from "./icons"
import Link from "next/link"
import { API_ENDPOINTS } from "@/lib/utils"
import { Service } from "@/types"
import ServiceCard from "./service-card"
import { servicesLinks } from "@/lib/links"

async function getServices(): Promise<Service[]> {
  try {
    const res = await fetch(`${API_ENDPOINTS.services}?domain=${API_ENDPOINTS.domain}&limit=9&offset=0`, {
      next: { revalidate: 60 * 60 * 2 }, // Cache for 2 hours
    })
    if (!res.ok) throw new Error("Failed to fetch")
    const json = await res.json()
    // API returns { data: Service[] }
    return json?.services ?? []
  } catch {
    return []
  }
}

export async function ServicesSection() {
  const services = await getServices()

  if (services.length === 0) return null
  return (
    <section className="py-20 bg-primary/10 ">
      <div className="container mx-auto px-4">

        <div className="text-center mb-16 animate-fade-in md:max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">
            <Link href={servicesLinks.usedAirConditioners}>
              <strong className="font-bold gradient-text hover:border-b-2 border-primary">
                شراء مكيفات مستعمل وسكراب بالدمام والخبر
              </strong>
            </Link>{' '}
            وخدمات أخرى تشمل{' '}
            <Link href={servicesLinks.scrapMetals}>
              المعادن والخردة
            </Link>،{' '}
            <Link href={servicesLinks.usedRestaurantEquipment}>
              معدات المطاعم المستعملة
            </Link>، و{' '}
            <Link href={servicesLinks.usedHomeAppliances}>
              الأجهزة الكهربائية المستعملة
            </Link>
          </h2>

          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            نحن شركة متخصصة في شراء وبيع جميع أنواع المكيفات المستعملة والسكراب في الدمام، الخبر، القطيف، الجبيل، والأحساء، بما في ذلك المكيفات المعطلة، سكراب الحديد، النحاس، والألمنيوم.
            <br />
            كما نوفر خدمات شراء المعدات المستعملة للمطاعم، الأجهزة الكهربائية القديمة، وتركيب المطابخ في الدمام والقطيف. نقدم نقل مجاني، تقييم فوري، وأسعار تنافسية لجميع المنتجات.
            <br />
            خدماتنا متاحة لجميع مناطق الشرقية مع التزامنا بأعلى مستوى من الاحترافية والشفافية.
          </p>
        </div>


        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service._id} service={service} />
          ))}
        </div>
      </div>

      <div className="text-center mt-12">
        <Link href="/services" className="bg-primary hover:bg-primary/80 transition-all duration-300 text-white px-3 py-2 rounded flex items-center gap-2 w-[170px] m-auto"
          rel="noopener noreferrer"
        >
          تصفح جميع الخدمات
          <Icons.arrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  )
}
