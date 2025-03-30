import Link from "next/link";
import { ArrowRightIcon, CalendarIcon } from "lucide-react";
import posts from "@/data/posts.json" with { type: "json" };

export default function Blog() {
  return <main className="pt-24 pb-16 px-4 sm:px-6">
  <div className="max-w-4xl mx-auto">
    <header className="mb-12">
      <h1 className="text-3xl md:text-4xl font-bold text-olive mb-4">Blog</h1>
      <p className="text-muted-foreground max-w-2xl">
        Thoughts, tutorials, and insights about web development, programming,
        and technology.
      </p>
    </header>

    <div className="space-y-6">
      {posts.map((post) => (
        <div
          key={post.slug}
          className="border border-border rounded-lg overflow-hidden hover:border-olive/30 transition-all hover:shadow-sm hover:-translate-y-1 duration-300"
        >
          <div className="p-6">
            <h2 className="text-xl font-medium text-olive mb-2">
              <Link
                href={`/blog/${post.slug}`}
                className="hover:text-olive-dark transition-colors"
              >
                {post.name}
              </Link>
            </h2>

            <div className="flex items-center text-xs text-muted-foreground mb-3">
              <span className="flex items-center">
                <CalendarIcon className="w-3 h-3 mr-1" />
                {post.date}
              </span>
              <span className="mx-2">•</span>
              <span>{post.time}</span>
            </div>

            <p className="text-muted-foreground text-sm mb-4">
              {post.brief}
            </p>

            <Link
              href={`/blog/${post.slug}`}
              className="inline-flex items-center text-sm font-medium text-amber hover:text-amber-dark transition-colors"
            >
              Read More <ArrowRightIcon className="w-3.5 h-3.5 ml-1" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
</main>;
}
