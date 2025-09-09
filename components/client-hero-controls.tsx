"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Phone } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

interface Slide {
  id: number
  image: string
  title: string
  description: string
  cta: string
  href: string
}

interface ClientHeroControlsProps {
  slides: Slide[]
}

export default function ClientHeroControls({ slides }: ClientHeroControlsProps) {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 6000) // Change slide every 5 seconds
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
            index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none",
          )}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-primary/40 z-10" />
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            fill
            priority={index === 0}
            className="object-cover"
          />
          <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4 sm:px-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 max-w-4xl animate-fade-up mt-12">{slide.title}</h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl animate-fade-up animation-delay-200">
              {slide.description}
            </p>
            <Link
              href={slide.href}>

              <Button
                size="lg"
                className="animate-fade-up animation-delay-300 bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary group"
              >
                <Phone className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                {slide.cta}
              </Button>
            </Link>
          </div>
        </div>
      ))}

      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center space-x-2 space-x-reverse">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all",
              index === currentSlide ? "bg-white w-8" : "bg-white/50",
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
        aria-label="Previous slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
        aria-label="Next slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
    </>
  )
}
