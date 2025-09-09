import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Service } from "@/types"

type ServiceCardProps = {
    service: Service
}

const ServiceCard = ({ service }: ServiceCardProps) => {
    return (
        <Card className="overflow-hidden hover:shadow-xl shadow-gray-500 rounded rounded-tr-4xl rounded-bl-4xl bg-primary text-primary-foreground md:p-4 p-2  flex flex-col justify-between transition-all group border-none">
            <Link href={`/services/${service.slug}`} className="relative  h-64 w-full overflow-hidden group rounded rounded-tr-4xl rounded-bl-4xl border-4">
                <Image
                    src={service.image.src}
                    alt={service.image.alt}
                    aria-description={service.image.description}
                    fill
                    className="object-fill w-full h-full transition-transform duration-500 group-hover:scale-110 "
                />
            </Link>
            <CardContent className="p-6 flex flex-col flex-1 justify-between">
                <Link href={`/services/${service.slug}`} className="text-lg font-semibold mb-2">
                    <h3 className="text-xl font-bold line-clamp-2 group-hover:text-white">
                        {service.title}
                    </h3>
                </Link>
                <p className="text-gray-200 mb-4">{service.description.substring(0, 160)}...</p>
            </CardContent>
        </Card>
    );
};

export default ServiceCard;