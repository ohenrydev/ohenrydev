import Link from "next/link";
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

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug
  }));
}

export default async function Post(ctx: PostContext) {
  const params = await ctx.params;
  const { slug } = params;

  const post = posts.find((post) => post.slug === slug);

  if (!post) notFound();

  return (
    <main className="pt-24 pb-16 px-4 sm:px-6" id="blog-post">
     <article className="max-w-4xl mx-auto">

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
          {block.sections.map((section) => {
            switch(section.type) {
              case "paragraph":
                return <p key={section.text} className="text-foreground mb-4">{section.text}</p>
              case "image":
                // return <Image src={section.src} alt={section.alt} fill />
              case "list":
                return (
                  <ul key={section.type}>
                     {section.items?.map((item) => (
                        <li key={item.title} className="mb-2 font-bold text-sm md:text-base list-disc list-inside">
                            {item.title}{": "}
                            <span className='font-normal'>{item.description}</span>
                        </li>
                      ))}
                  </ul>
                )
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

      <div className="mt-12 pt-6 border-t border-border">
        <Link href="/blog" className="inline-flex items-center text-olive hover:text-olive-dark transition-colors">
          ← Back to all posts
        </Link>
      </div>
      </article>
    </main>
  )
}
