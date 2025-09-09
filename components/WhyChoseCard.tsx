import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Icons } from "./icons";
import Link from "next/link";

const WhyChoseCard = ({ item, index }: { item: { icon: any; title: any; description: any; image: any; }; index: number }) => {

    return (
        <Card
            key={index}
            className="group relative overflow-hidden rounded shadow-lg hover:shadow-2xl transition-all duration-500 animate-slide-up bg-primary/5 backdrop-blur-sm border border-primary "
            style={{
                animationDelay: `${index * 0.1}s`,
                transformStyle: 'preserve-3d',
            }}
        >
            {/* Decorative elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute -right-10 -top-10 w-32 h-32 rounded-full bg-primary/10 group-hover:scale-150 transition-transform duration-700" />

            <div className="relative h-full">
                {/* Image with gradient overlay */}
                <div className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100  transition-opacity duration-300" />
                    <Image
                        src={item.image || "/placeholder.jpg"}
                        alt={item.title}
                        width={400}
                        height={300}
                        className="w-full min-h-[250px] h-[250px] object-cover group-hover:scale-110 transition-all duration-700"
                    />
                    {/* EEAT Badge */}
                    <div className="absolute bottom-4 left-4 z-20 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-primary/90 text-primary-foreground backdrop-blur-sm">
                            <Icons.checkCircle className="w-3 h-3" />
                            مرخصة ومعتمدة
                        </span>
                    </div>
                </div>

                <CardContent className="p-6 flex flex-col justify-center relative z-10">
                    {/* Icon with animated ring */}
                    <div className="space-y-4 mt-2">
                        <div className="flex items-start gap-2">
                            {/* <div>
                                <div className=" w-[40px] h-[40px] rounded-full bg-background shadow-md flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                                    <item.icon className="w-6 h-6 text-primary relative z-10 group-hover:scale-110 transition-transform duration-300" />
                                </div>
                            </div> */}
                            <h3 className="text-xl font-bold text-foreground group-hover:gradient-text transition-all duration-300 leading-tight">
                                {item.title}
                            </h3>
                        </div>

                        <div className="h-[2px] w-16 bg-gradient-to-r from-primary to-transparent opacity-70 group-hover:w-24 transition-all duration-500" />
                        <p className="text-gray-700 leading-relaxed text-sm md:text-base group-hover:text-foreground/90 transition-colors duration-300">
                            {item.description}
                        </p>
                    </div>

                    {/* Subtle CTA */}
                    <Link href={"#"} className="mt-4 font-semibold flex items-center text-sm text-primary opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                        <span>اكتشف المزيد</span>
                        <Icons.arrowRight className="w-4 h-4 mr-1 transition-transform group-hover:translate-x-1 duration-300 rtl:rotate-180" />
                    </Link>
                </CardContent>
            </div>

            {/* Hover effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </Card>
    )
}

export default WhyChoseCard;