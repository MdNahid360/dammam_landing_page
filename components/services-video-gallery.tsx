import Link from "next/link"
import { Button } from "@/components/ui/button"
import videos from "@/data/videos.json";


export default async function ServicesVideoGallery() {
  try {
    // const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://www.scrapsbuyerdammam.com"
    // const response = await fetch(`${baseUrl}/api/videos`, {
    //   next: { revalidate: 60 * 60 * 2 }, // Revalidate every hour
    // })

    // Only show the first 4 videos in the gallery
    const displayedVideos = videos.slice(0, 4)

    return (
      <section
        id="video-gallery"
        className="py-16 bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-900"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-gradient-to-r from-primary/20 to-primary-dark/20 rounded-lg px-3 py-1 text-sm text-primary-dark font-medium mb-4">
              فيديوهات خدماتنا
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent pb-2.5">
              شاهد خدماتنا بالفيديو
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              مجموعة من الفيديوهات التوضيحية حول خدماتنا في شراء السكراب والمكيفات المستعملة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayedVideos.map((video: any) => (
              <div
                key={video.id}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all"
              >
                <div className="relative w-full h-64">
                  <iframe
                    src={video.videoUrl}
                    title={video.title}
                    className="absolute top-0 left-0 w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="p-6">
                  <h2 className="font-bold text-xl mb-3 line-clamp-3">{video.title}</h2>
                  <p className="text-muted-foreground line-clamp-4">{video.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/videos">
              <Button className="bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary">
                المزيد من الفيديوهات
              </Button>
            </Link>
          </div>
        </div>
      </section>
    )
  } catch (error) {
    console.error(
      "Error loading videos:",
      error,
      "URL attempted:",
      process.env.NEXT_PUBLIC_BASE_URL ? `${process.env.NEXT_PUBLIC_BASE_URL}/api/videos` : "/api/videos",
    )
    // Fallback UI in case of error
    return (
      <section
        id="video-gallery"
        className="py-16 bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-900"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              شاهد خدماتنا بالفيديو
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              مجموعة من الفيديوهات التوضيحية حول خدماتنا في شراء السكراب والمكيفات المستعملة
            </p>
          </div>
          <div className="text-center text-muted-foreground">جاري تحميل الفيديوهات...</div>
        </div>
      </section>
    )
  }
}
