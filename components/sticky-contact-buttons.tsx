"use client"

import { useState, useEffect } from "react"
import { Phone, Instagram, Twitter } from "lucide-react"
import { cn } from "@/lib/utils"
import { Icons } from "./icons"
import Link from "next/link"

export default function StickyContactButtons() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={cn(
        "fixed right-4 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-3 transition-all duration-500",
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none",
      )}
    >
      <Link
        href="#"
        className={cn(
          "w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg hover:bg-green-600 transition-all hover:scale-110",
          "animate-pulse-subtle",
          isVisible && "animate-slide-in",
          "relative after:absolute after:content-['اتصل_بنا'] after:right-full after:mr-2 after:bg-black/80 after:text-white after:py-1 after:px-2 after:rounded after:text-sm after:opacity-0 after:pointer-events-none after:transition-opacity hover:after:opacity-100 after:whitespace-nowrap",
        )}
        aria-label="اتصل بنا"
        style={{ animationDelay: "0ms" }}
      >
        <Phone className="h-5 w-5" />
      </Link>
      <Link
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center shadow-lg hover:bg-green-700 transition-all hover:scale-110",
          "animate-pulse-subtle",
          isVisible && "animate-slide-in",
          "relative after:absolute after:content-['واتساب'] after:right-full after:mr-2 after:bg-black/80 after:text-white after:py-1 after:px-2 after:rounded after:text-sm after:opacity-0 after:pointer-events-none after:transition-opacity hover:after:opacity-100 after:whitespace-nowrap",
        )}
        aria-label="واتساب"
        style={{ animationDelay: "150ms" }}
      >
        <Icons.whatsapp className="h-5 w-5 text-white fill-white" />
      </Link>
      <Link
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 text-white flex items-center justify-center shadow-lg hover:from-purple-700 hover:via-pink-600 hover:to-orange-500 transition-all hover:scale-110",
          "animate-pulse-subtle",
          isVisible && "animate-slide-in",
          "relative after:absolute after:content-['انستغرام'] after:right-full after:mr-2 after:bg-black/80 after:text-white after:py-1 after:px-2 after:rounded after:text-sm after:opacity-0 after:pointer-events-none after:transition-opacity hover:after:opacity-100 after:whitespace-nowrap",
        )}
        aria-label="انستغرام"
        style={{ animationDelay: "300ms" }}
      >
        <Instagram className="h-5 w-5" />
      </Link>
      <Link
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "w-12 h-12 rounded-full bg-[#1DA1F2] text-white flex items-center justify-center shadow-lg hover:bg-[#0c85d0] transition-all hover:scale-110",
          "animate-pulse-subtle",
          isVisible && "animate-slide-in",
          "relative after:absolute after:content-['تويتر'] after:right-full after:mr-2 after:bg-black/80 after:text-white after:py-1 after:px-2 after:rounded after:text-sm after:opacity-0 after:pointer-events-none after:transition-opacity hover:after:opacity-100 after:whitespace-nowrap",
        )}
        aria-label="تويتر"
        style={{ animationDelay: "450ms" }}
      >
        <Twitter className="h-5 w-5" />
      </Link>
    </div>
  )
}
