import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Blog } from "@/types"
import { formatDate } from "@/lib/utils"
type BlogCardProps = {
    blog: Blog
}

const BlogCard = ({ blog }: BlogCardProps) => {
    return (
        <Card
            className="overflow-hidden rounded-tl-none rounded-tr-3xl rounded-br-none rounded-bl-3xl bg-background shadow-2xl flex flex-col h-full transition-all hover:shadow-xl group border border-primary group"
        >
            <Link href={`/blogs/${blog.slug}`} className="relative h-64 w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10 opacity-70 group-hover:opacity-90 transition-opacity" />
                <Image
                    src={blog?.image?.src || "/placeholder.png"}
                    alt={blog?.image?.alt || "/placeholder.png"}
                    aria-description={blog?.image?.description}
                    fill
                    className="object-fill transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute bottom-0 right-0 p-4 z-20">
                    <div className="text-sm text-white/80 mb-1">
                        {formatDate(blog.date)}
                    </div>
                </div>
            </Link>
            <CardHeader className="flex-grow p-6">
                <Link href={`/blogs/${blog.slug}`} className="text-lg font-semibold mb-2">
                    <h3 className="text-xl font-bold line-clamp-2 group-hover:text-primary">
                        {blog.title}
                    </h3>
                </Link>
                <p className="text-muted-foreground line-clamp-3">{blog.excerpt}</p>
            </CardHeader>
            <CardFooter className="p-6 pt-0">
                <Link href={`/blogs/${blog.slug}`} passHref className="flex justify-center w-full">
                    <Button
                        variant="ghost"
                        className="w-full bg-primary hover:bg-primary/80 !text-white py-2 cursor-pointer transition-all duration-300"
                    >
                        قراءة المزيد
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    );
};

export default BlogCard;