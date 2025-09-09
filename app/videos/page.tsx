import type { Metadata } from "next"
import { videos } from "@/data/videos"
import { Card, CardContent } from "@/components/ui/card"
import VideoCard from "@/components/VideoCard"

export const metadata: Metadata = {
  title: "فيديوهاتنا - مكيفات سكراب الدمام | شاهد خدماتنا",
  description:
    "شاهد فيديوهات توضيحية عن خدمات شراء مكيفات السكراب والمعادن، طرق التقييم، وعملية النقل في المنطقة الشرقية.",
  keywords: "فيديوهات مكيفات سكراب, شرح خدمات شراء سكراب, فيديو تقييم مكيفات, طريقة شراء خردة",
  alternates: {
    canonical: "https://www.dammamathathmukayfat.com/videos",
  },
}

export default function VideosPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        style={{
          backgroundImage: "linear-gradient(#000000b5, #01140a), url('/images/hero-banner.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
        className="py-20 lg:h-[25rem] flex items-center justify-center text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">فيديوهاتنا</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              شاهد فيديوهات توضيحية عن خدماتنا وطرق عملنا في شراء السكراب والمعادن
            </p>
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <div className="container mx-auto py-10 px-4">
        <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-2 md:gap-4 gap-2 ">
          {videos.slice(0, 11).map((video, index) => (
            <VideoCard video={video} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}
