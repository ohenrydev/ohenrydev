import Link from 'next/link'
import posts from '@/database/posts.json'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLinkIcon } from 'lucide-react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

export default function Blog() {

    const publishedPosts = posts.filter((post) => post.state === "published");

    return (
        <main className="w-full max-w-2xl flex flex-col items-center">

            <h1 className="mb-8 mt-16 font-bold text-xl md:text-2xl">Blog</h1>

            <p className="mb-2 font text-sm md:text-base text-center md:text-justify">
                {"Here are some of the articles I've written. Those articles are mostly about me and my projects, or just about anything. I hope you find something interesting."}
            </p>


            <section className=" w-full mb-6 mt-8 max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-6 place-items-stretch content-stretch">

                {publishedPosts.map((post) => {
                    return (
                        <Card key={post.uuid} className="flex flex-col space-y-1">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    {post.title}
                                </CardTitle>
                                <CardDescription>{post.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <div className="flex flex-wrap gap-2">
                                    {post.tags.map((tag) => (
                                        <Badge key={tag} variant={"outline"} className="shadow-none hover:shadow-sm cursor-pointer">{tag}</Badge>
                                    ))}
                                </div>
                            </CardContent>
                            <CardFooter className="mt-auto">
                                <Button asChild variant="outline" className="w-full">
                                    <Link href={`/blog/posts/${post.slug}`}  className="flex items-center justify-center">
                                        Read post <ExternalLinkIcon className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    )
                })}
            </section>
        </main>
    )
}