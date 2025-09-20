import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CalendarIcon } from 'lucide-react';
import posts from '@/data/posts.json' with { type: 'json' };
import { Avatar, AvatarImage } from '@/components/ui/avatar';

interface PostParams {
  slug: string;
}

interface PostContext {
  params: Promise<PostParams>;
}

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug
  }));
}

export async function generateMetadata(ctx: PostContext) {
  const params = await ctx.params;
  const { slug } = params;
  const post = posts.find((post) => post.slug === slug);

  return {
    title: post?.name,
    author: post?.author,
    description: post?.brief
  };
}

export default async function Post(ctx: PostContext) {
  const params = await ctx.params;
  const { slug } = params;

  const post = posts.find((post) => post.slug === slug);

  if (!post) notFound();

  return (
    <main className="px-4 pt-24 pb-16 sm:px-6" id="blog-post">
      <article className="mx-auto max-w-4xl">
        <header className="mb-16">
          <div className="mb-4 flex items-center justify-center gap-4">
            <Avatar className="size-16">
              <AvatarImage src="/me_square.png" />
            </Avatar>
            <h1 className="text-olive text-3xl font-bold md:text-4xl">{post.name}</h1>
          </div>

          <div className="text-muted-foreground mb-6 flex items-center text-sm">
            <span className="flex items-center">
              <CalendarIcon className="mr-1 h-4 w-4" />
              {post.date}
            </span>
            <span className="mx-2">•</span>
            <span>{post.time}</span>
          </div>

          <p className="text-muted-foreground border-amber mb-6 border-l-4 pl-4 text-lg italic">{post.brief}</p>
        </header>

        <div className="prose prose-olive max-w-none">
          {post.contents.map((block, blockIndex) => (
            <section key={blockIndex} className="mb-10">
              <h2 className="text-olive mb-4 text-2xl font-semibold">{block.title}</h2>
              {block.sections.map((section) => {
                switch (section.type) {
                  case 'paragraph':
                    return (
                      <p key={section.text} className="text-foreground mb-4">
                        {section.text}
                      </p>
                    );
                  case 'image':
                  // return <Image src={section.src} alt={section.alt} fill />
                  case 'list':
                    return (
                      <ul key={section.type}>
                        {section.items?.map((item) => (
                          <li key={item.title} className="mb-2 list-inside list-disc text-sm font-bold md:text-base">
                            {item.title}
                            {': '}
                            <span className="font-normal">{item.description}</span>
                          </li>
                        ))}
                      </ul>
                    );
                }
              })}
              {/* {block.sections.map((section, sectionIndex) => {
              if (section.type === "paragraph") {
                return (
                  <p key={sectionIndex} className="text-foreground mb-4">
                    {section.text}
                  </p>
                )
              } else if (section.type === "list" && section.items) {
                return (
                  <div key={sectionIndex} className="space-y-4 my-6">
                    {section.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="bg-background border border-border rounded-lg p-4">
                        <h3 className="text-lg font-medium text-olive mb-2">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    ))}
                  </div>
                )
              }
              return null
            })} */}
            </section>
          ))}
        </div>

        <div className="border-border mt-12 border-t pt-6">
          <Link href="/blog" className="text-olive hover:text-olive-dark inline-flex items-center transition-colors">
            ← Back to all posts
          </Link>
        </div>
      </article>
    </main>
  );
}
