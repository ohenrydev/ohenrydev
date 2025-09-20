import Link from 'next/link';
import { ArrowRightIcon, CalendarIcon } from 'lucide-react';
import posts from '@/data/posts.json' with { type: 'json' };

export default function Blog() {
  return (
    <main className="px-4 pt-24 pb-16 sm:px-6" id="blog">
      <div className="mx-auto max-w-4xl">
        <header className="mb-12">
          <h1 className="text-olive mb-4 text-3xl font-bold md:text-4xl">Blog</h1>
          <p className="text-muted-foreground max-w-2xl">
            Thoughts, tutorials, and insights about web development, programming, and technology.
          </p>
        </header>

        <div className="space-y-6">
          {posts.map((post) => (
            <div
              key={post.slug}
              className="border-border hover:border-olive/30 overflow-hidden rounded-lg border transition-all duration-300 hover:-translate-y-1 hover:shadow-sm"
            >
              <div className="p-6">
                <h2 className="text-olive mb-2 text-xl font-medium">
                  <Link href={`/blog/${post.slug}`} className="hover:text-olive-dark transition-colors">
                    {post.name}
                  </Link>
                </h2>

                <div className="text-muted-foreground mb-3 flex items-center text-xs">
                  <span className="flex items-center">
                    <CalendarIcon className="mr-1 h-3 w-3" />
                    {post.date}
                  </span>
                  <span className="mx-2">•</span>
                  <span>{post.time}</span>
                </div>

                <p className="text-muted-foreground mb-4 text-sm">{post.brief}</p>

                <Link
                  href={`/blog/${post.slug}`}
                  className="text-amber hover:text-amber-dark inline-flex items-center text-sm font-medium transition-colors"
                >
                  Read More <ArrowRightIcon className="ml-1 h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
