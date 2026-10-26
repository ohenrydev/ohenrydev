import Link from "next/link";
import { ReactNode } from "react";
import { notFound } from "next/navigation";
import { CalendarIcon } from "lucide-react";
import posts from "@/data/posts.json" with { type: "json" };
import { Avatar, AvatarImage } from "@/components/ui/avatar";

interface PostParams {
  slug: string;
}

interface PostContext {
  params: Promise<PostParams>;
}

const INLINE_LINK = /\[([^\]]+)\]\((https?:\/\/[^\s)]+|\/[^\s)]*)\)/g;
const LINK_CLASS =
  "text-olive underline underline-offset-4 decoration-amber hover:text-olive-dark transition-colors";

/** Turns `[label](url)` markers inside post text into links; the rest stays plain text. */
function renderInline(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  let last = 0;

  for (const match of text.matchAll(INLINE_LINK)) {
    const [raw, label, href] = match;
    const start = match.index ?? 0;
    if (start > last) nodes.push(text.slice(last, start));

    const key = `${start}-${href}`;
    nodes.push(
      href.startsWith("http") ? (
        <a key={key} href={href} target="_blank" rel="noopener" className={LINK_CLASS}>
          {label}
        </a>
      ) : (
        <Link key={key} href={href} className={LINK_CLASS}>
          {label}
        </Link>
      )
    );
    last = start + raw.length;
  }

  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
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
    description: post?.brief,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      type: "article",
      title: post?.name,
      description: post?.brief,
      url: `/blog/${slug}`,
      locale: post?.lang
    }
  }
}

export default async function Post(ctx: PostContext) {
  const params = await ctx.params;
  const { slug } = params;

  const post = posts.find((post) => post.slug === slug);

  if (!post) notFound();

  return (
    <main className="pt-24 pb-16 px-4 sm:px-6" id="blog-post">
     <article className="max-w-4xl mx-auto" lang={post.lang}>

      <header className="mb-16">
        
        <div className="flex items-center gap-4 justify-center mb-4">
          <Avatar className="size-16">
            <AvatarImage src="/me_square.png" />
          </Avatar>
          <h1 className="text-3xl md:text-4xl font-bold text-olive">{post.name}</h1>
        </div>

        <div className="flex items-center text-sm text-muted-foreground mb-6">
          <span className="flex items-center">
            <CalendarIcon className="w-4 h-4 mr-1" />
            {post.date}
          </span>
          <span className="mx-2">•</span>
          <span>{post.time}</span>
        </div>

        <p className="text-lg text-muted-foreground border-l-4 border-amber pl-4 italic mb-6">{post.brief}</p>
      </header>

      <div className="prose prose-olive max-w-none">
        {post.contents.map((block, blockIndex) => (
          <section key={blockIndex} className="mb-10">
            <h2 className="text-2xl font-semibold text-olive mb-4">{block.title}</h2>
          {block.sections.map((section, sectionIndex) => {
            switch(section.type) {
              case "paragraph":
                return (
                  <p key={sectionIndex} className="text-foreground mb-4">
                    {renderInline(section.text ?? "")}
                  </p>
                )
              case "list":
                return (
                  <ul key={sectionIndex}>
                     {section.items?.map((item) => (
                        <li key={item.title} className="mb-2 font-bold text-sm md:text-base list-disc list-inside">
                            {renderInline(item.title)}{": "}
                            <span className='font-normal'>{renderInline(item.description)}</span>
                        </li>
                      ))}
                  </ul>
                )
              default:
                return null
            }
          })}
          </section>
        ))}
      </div>

      <div className="mt-12 pt-6 border-t border-border">
        <Link href="/blog" className="inline-flex items-center text-olive hover:text-olive-dark transition-colors">
          ← Back to all posts
        </Link>
      </div>
      </article>
    </main>
  )
}
