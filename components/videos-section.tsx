"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Icons } from "./icons"
import { videos } from "@/data/videos"
import Link from "next/link"
import { internalLinks } from "@/lib/links"
import VideoCard from "./VideoCard"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import { useRef, useEffect, useState } from "react"

export function VideosSection() {
  const prevRef = useRef<HTMLButtonElement | null>(null)
  const nextRef = useRef<HTMLButtonElement | null>(null)
  const [swiperReady, setSwiperReady] = useState(false)


  useEffect(() => {
    // wait until refs are set
    setSwiperReady(true)
  }, [])

  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in md:max-w-4xl mx-auto">
          {/* Section Title */}
          <h2 className="text-4xl font-bold mb-4">
            شاهد مقاطع الفيديو لخدماتنا في{' '}
            <Link
              href={internalLinks.usedFurniture}
              className="text-[#79e0ff] hover:border-b-2 border-primary"
            >
              الأثاث المستعمل
            </Link>{' '}
            و{' '}
            <Link
              href={internalLinks.usedAirConditioners}
              className="text-[#79e0ff] hover:border-b-2 border-primary"
            >
              المكيفات المستعملة بالدمام
            </Link>
          </h2>

          {/* Underline */}
          <div className="w-24 h-1 bg-background mx-auto mb-6"></div>

          {/* Subtitle / Description */}
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            اكتشف كيف نقدم خدمات شراء الأثاث المستعمل والمكيفات المستعملة والسكراب في الدمام والخبر والقطيف والجبيل والأحساء من خلال الفيديوهات التوضيحية.
            تعرف على عملياتنا الاحترافية، النقل المجاني، والأسعار التنافسية.
            <br />
            مشاهدة الفيديوهات تساعدك على فهم خدماتنا بشكل أفضل واتخاذ القرار الصحيح.
          </p>
        </div>


        <div className="relative">
          <div className="flex items-center gap-3 pb-4">
            <button
              ref={prevRef}
              className="  text-white p-3 rounded-full cursor-pointer"
            >
              <Icons.moveRight className="w-6 h-6 " />
            </button>
            <button
              ref={nextRef}
              className=" text-white p-3 rounded-full cursor-pointer"
            >
              <Icons.moveLeft className="w-6 h-6" />
            </button>

          </div>
          {swiperReady && (
            <Swiper
              modules={[Navigation]}
              spaceBetween={20}
              breakpoints={{
                320: { slidesPerView: 1 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
              }}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onBeforeInit={(swiper) => {
                // @ts-ignore
                swiper.params.navigation.prevEl = prevRef.current
                // @ts-ignore
                swiper.params.navigation.nextEl = nextRef.current
              }}
            >
              {videos.slice(0, 6).map((video, index) => (
                <SwiperSlide key={index}>
                  <VideoCard video={video} index={index} />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button
            asChild
            size="lg"
            className="bg-background hover:bg-background/80 transition-all duration-300 text-primary font-semibold text-lg px-4 py-2 rounded flex items-center gap-2 w-[210px] m-auto"
          >
            <a href="/videos">
              مشاهدة جميع الفيديوهات
              <Icons.arrowRight className="w-6 h-6 mr-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
