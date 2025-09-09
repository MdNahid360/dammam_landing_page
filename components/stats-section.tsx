import { Card, CardContent } from "@/components/ui/card"
import { Clock, Users, CheckCircle, Truck } from "lucide-react"
import { cn } from "@/lib/utils"

const stats = [
  {
    id: 1,
    title: "خبرة في المجال",
    value: 4,
    suffix: " سنوات",
    icon: Clock,
  },
  {
    id: 2,
    title: "عملاء راضون",
    value: 50,
    suffix: "+",
    icon: Users,
  },
  {
    id: 3,
    title: "مشاريع مكتملة",
    value: 200,
    suffix: "+",
    icon: CheckCircle,
  },
  {
    id: 4,
    title: "خدماتنا",
    value: 200,
    suffix: "+",
    icon: Truck,
  },
]

export default function StatsSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-primary/5 to-primary-dark/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card
              key={stat.id}
              className={cn("overflow-hidden border-none shadow-lg transition-all hover:shadow-xl")}
            >
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary/20 to-primary-dark/20 flex items-center justify-center mb-4">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                  {stat.value}
                  {stat.suffix}
                </h3>
                <p className="text-lg font-medium text-muted-foreground">{stat.title}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
