import Link from "next/link"
import { Icons } from "./icons"
import { navigationLinks, socialLinks } from "@/lib/links"
import { Mail, MapPin, Phone } from "lucide-react"
import { cn, siteConfig } from "@/lib/utils"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-primary text-white relative overflow-hidden">
      {/* Geometric pattern background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-2 bg-primary"></div>
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-primary rotate-45"></div>
        <div className="absolute top-20 right-20 w-16 h-16 border border-primary"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-primary rotate-12"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 border-2 border-primary rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Company Info - Spans 5 columns */}
            <div className="md:col-span-5 space-y-6">
              <div>
                <h3 className="text-3xl font-bold font-tajawal mb-4">شركة شراء الأثاث والمكيفات</h3>
                <div className="w-20 h-1 bg-primary-foreground mb-2"></div>
                <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                  شراء الأثاث المستعمل والمكيفات السكراب بالدمام
                </p>
              </div>
              {/* <Link href="/" className="flex items-center gap-2">
                <div className="w-28 md:w-40 rounded-lg flex items-center justify-center">
                  <Image className="w-28 md:w-40" src={"/logo.svg"} alt="شركة شراء الأثاث والمكيفات" width={100} height={100} />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-lg">
                    شركة شراء الأثاث والمكيفات
                  </span>
                  <span className={cn("text-xs font-semibold text-gray-400")}>
                    الدمام، الخبر، القطيف، والمنطقة الشرقية
                  </span>
                </div>
              </Link> */}

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-white" />
                  <span className="text-gray-300">المنطقة الشرقية، المملكة العربية السعودية</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-white" />
                  <span className="text-gray-300" dir="ltr">
                    {siteConfig.phone}
                  </span>
                </div>
                {/* <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-white" />
                  <span className="text-gray-300">{siteConfig.email}</span>
                </div> */}
              </div>
            </div>

            {/* Quick Links - Spans 2 columns */}
            <div className="md:col-span-2 space-y-6">
              <div>
                <h4 className="text-xl font-bold font-tajawal mb-4">الصفحات</h4>
                <div className="w-12 h-1 bg-white mb-4"></div>
              </div>
              <ul className="space-y-3">
                {navigationLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={"#"}
                      className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services - Spans 3 columns */}
            <div className="md:col-span-3 space-y-6">
              <div>
                <h4 className="text-xl font-bold font-tajawal mb-4">خدماتنا المميزة</h4>
                <div className="w-12 h-1 bg-white mb-4"></div>
              </div>
              <ul className="space-y-3">
                {[
                  { href: "/services/scrap-ac-buying", label: "شراء مكيفات سكراب" },
                  { href: "/services/scrap-metal-buying", label: "شراء خردة معادن" },
                  { href: "/services/restaurant-equipment-buying", label: "شراء معدات مطاعم" },
                ].map((service) => (
                  <li key={service.href}>
                    <Link
                      href={"#"}
                      className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block group"
                    >
                      <span className="border-b border-transparent group-hover:border-white transition-all duration-300">
                        {service.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact CTA - Spans 2 columns */}
            <div className="md:col-span-2 space-y-6">
              <div>
                <h4 className="text-xl font-bold font-tajawal mb-4">تواصل فوري</h4>
                <div className="w-12 h-1 bg-white mb-4"></div>
              </div>
              <div className="space-y-4">
                <Link
                  href={"#"}
                  className="block w-full bg-white text-primary text-center py-3 px-4 font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
                >
                  اتصل الآن
                </Link>
                <Link
                  href={"#"}
                  className="block w-full border-2 border-white text-white text-center py-3 px-4 font-bold hover:bg-white hover:text-primary transition-all duration-300 hover:scale-105"
                >
                  واتساب
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t-2 border-white py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-right">
              <p className="text-gray-300 text-lg">
                &copy; 2025 <span className="font-bold text-white">شركة شراء الأثاث والمكيفات</span>
              </p>
              <p className="text-gray-400 text-sm mt-1">جميع الحقوق محفوظة</p>
            </div>

            <div className="flex items-center gap-6">
              <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                سياسة الخصوصية
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                الشروط والأحكام
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}