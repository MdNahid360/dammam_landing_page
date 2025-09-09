import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FloatingActions } from "@/components/floating-actions"
import { TopBar } from "@/components/top-bar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "شركة شراء الأثاث والمكيفات | شراء الأثاث المستعمل ومكيفات السكراب بالدمام 0554268296",
  description:
    "نشتري الأثاث المستعمل، مكيفات السكراب، خردة الحديد، النحاس، الألمنيوم، ومعدات المطاعم المستعملة في الدمام، الخبر، القطيف، الجبيل، الأحساء، والهفوف بأفضل الأسعار مع خدمة استلام فورية.",
  keywords: [
    "شراء الأثاث المستعمل بالدمام",
    "شركة شراء اثاث مستعمل بالدمام",
    "شراء الأثاث المستعمل بالخبر",
    "شراء مكيفات مستعمل بالدمام",
    "شراء مكيفات سكراب الدمام",
    "شراء معدات مطاعم مستعملة بالدمام",
    "شراء مطابخ مستعملة بالدمام",
    "أفضل من يشتري السكراب والسكراب في الدمام",
    "أرقام شراء سكراب الدمام",
    "شراء سكراب القطيف",
    "شراء مكيفات سكراب الخبر",
    "شراء مكيفات سكراب الجبيل",
    "شراء مكيفات سكراب الأحساء",
    "شراء سكراب الهفوف",
  ],
  authors: [{ name: "شركة شراء الأثاث والمكيفات" }],
  creator: "شركة شراء الأثاث والمكيفات",
  publisher: "شركة شراء الأثاث والمكيفات",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "ar_SA",
    url: "https://www.dammamathathmukayfat.com",
    siteName: "شركة شراء الأثاث والمكيفات",
    title: "شركة شراء الأثاث والمكيفات | شراء الأثاث المستعمل ومكيفات السكراب بالدمام 0554268296",
    description:
      "نشتري الأثاث المستعمل، مكيفات السكراب، خردة الحديد، النحاس، الألمنيوم، ومعدات المطاعم المستعملة في الدمام، الخبر، القطيف، الجبيل، الأحساء، والهفوف بأفضل الأسعار.",
  },
  twitter: {
    card: "summary_large_image",
    title: "شركة شراء الأثاث والمكيفات | شراء الأثاث المستعمل ومكيفات السكراب بالدمام 0554268296",
    description:
      "نشتري الأثاث المستعمل، مكيفات السكراب، خردة الحديد، النحاس، الألمنيوم، ومعدات المطاعم المستعملة في الدمام، الخبر، القطيف، الجبيل، الأحساء، والهفوف بأفضل الأسعار.",
  },
  alternates: {
    canonical: "https://www.dammamathathmukayfat.com",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="canonical" href="https://www.dammamathathmukayfat.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "شركة شراء الأثاث والمكيفات",
              description: "نشتري الأثاث المستعمل، مكيفات السكراب، خردة المعادن، ومعدات المطاعم في الدمام والمنطقة الشرقية",
              telephone: "+966554268296",
              address: {
                "@type": "PostalAddress",
                addressLocality: "الدمام",
                addressRegion: "المنطقة الشرقية",
                addressCountry: "SA",
              },
              areaServed: ["الدمام", "الخبر", "القطيف", "الجبيل", "الأحساء", "الهفوف", "المنطقة الشرقية", "المملكة العربية السعودية"],
              serviceType: "شراء الأثاث المستعمل، مكيفات السكراب، خردة المعادن، ومعدات المطاعم المستعملة",
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <TopBar />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  )
}