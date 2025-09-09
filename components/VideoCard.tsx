import { Card, CardContent } from "./ui/card"

const VideoCard = ({ video, index }: { video: any, index: number }) => {

    return (
        <Card
            key={video.id}
            className="animate-slide-up rounded-tl-none rounded-tr-6xl rounded-br-none rounded-bl-6xl shadow-none transition-all duration-300 !bg-transparent border-0 cursor-pointer overflow-hidden"
            style={{ animationDelay: `${index * 0.1}s` }}
        >
            <CardContent className="p-0 overflow-hidden group">
                <figure className="relative p-0 h-full overflow-hidden">
                    <video
                        controls
                        preload="metadata"
                        className="w-full rounded h-full"
                        title={video.eng_title}
                        aria-label={video.title}
                    >
                        <source src={video.videoUrl} type="video/mp4" />
                        متصفحك لا يدعم تشغيل الفيديو
                    </video>
                    <figcaption className="mt-4 absolute opacity-0 group-hover:opacity-100 group-hover:translate-y-[0px] translate-y-[-200] duration-200 -top-4 left-0 right-0 w-full bg-gradient-to-t from-transpatent via-[#00000065] to-[#000c05c4] h-[200px] p-4 transition-all">
                        <h3 className="font-bold text-white text-lg">{video.title}</h3>
                        <p className="text-white text-sm">{video.description}</p>
                    </figcaption>
                </figure>
            </CardContent>
        </Card>
    )
}

export default VideoCard;