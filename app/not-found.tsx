import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30">
      <div className="text-center px-4">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-3xl font-bold mb-4">الصفحة غير موجودة</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-md mx-auto">
            عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها إلى مكان آخر
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/">
              <Icons.arrowRight className="w-5 h-5 ml-2 rotate-180" />
              العودة للرئيسية
            </Link>
          </Button>

          <Button asChild size="lg" variant="outline">
            <Link href="/contact">
              <Icons.phone className="w-5 h-5 ml-2" />
              اتصل بنا
            </Link>
          </Button>
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">أو تواصل معنا مباشرة:</p>
          <div className="flex justify-center gap-4">
            <a
              href="tel:+966554268296"
              className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <Icons.phone className="w-5 h-5" />
              0554268296
            </a>
            <a
              href="https://wa.me/966554268296"
              className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <Icons.whatsapp className="w-5 h-5" />
              واتساب
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
