"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Icons } from "./icons"
import Image from "next/image"
import { Recycle } from "lucide-react"
import { cn } from "@/lib/utils"
import { navigationLinks, socialLinks } from "@/lib/links"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      style={{
        boxShadow: isScrolled
          ? "0px 2px 20px rgba(0,0,0,0.1)"
          : "none"
      }}
      className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md  text-foreground  transition-all duration-300" : "backdrop-blur-md  bg-white/90 text-black transition-all duration-300"
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center min-h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-28 md:w-40 rounded-lg flex items-center justify-center">
              <Image className="w-28 md:w-40" src={
                isScrolled
                  ? "/logo.svg"
                  : "/logo.svg"
              } alt="شركة شراء الأثاث والمكيفات" width={100} height={100} />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg">
                شركة شراء الأثاث والمكيفات
              </span>
              <span className={cn("text-xs font-semibold text-gray-400")}>
                الدمام، الخبر، القطيف، والمنطقة الشرقية
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigationLinks?.map((link: any) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn("text-sm font-semibold hover:text-secondary transition-colors duration-300 text-primary")}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button asChild className="bg-primary hover:bg-primary/90 !text-primary-foreground">
              <Link href="/contact">
                <span className="hidden md:block">اتصل بنا الآن</span>
                <Icons.phone className="w-5 h-5 mr-2" />
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 bg-primary hover:bg-primary/50 rounded-full text-primary-foreground" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <Icons.x className="w-6 h-6" /> : <Icons.menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t animate-slide-up">
            <div className="flex flex-col gap-4">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:gradient-text transition-colors font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Button asChild className="gradient-bg mt-4 rounded-none">
                <Link href={socialLinks.phone} onClick={() => setIsOpen(false)}>
                  <span>اتصل بنا الآن</span>
                  <Icons.phone className="w-5 h-5 mr-2" />
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
