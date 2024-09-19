/* eslint-disable @next/next/no-img-element */
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import posts from '@/database/posts.json'
import { GithubIcon, LinkedinIcon } from 'lucide-react';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { NextResponse } from 'next/server';

interface Post {
    uuid: string;
    title: string;
    description: string;
    slug: string;
    author: {
        name: string;
        github: string;
    };
    date: string;
    state: "published" | "draft";
    tags: string[];
    contents: {
        title: string;
        sections: {
            type: "paragraph" | "image" | "list";
            text?: string;
            alt?: string;
            src?: string;
            items?: {
                title: string;
                description: string;
            }[]
        }[];
    }[];
    related: {
        title: string;
        link: string;
    }[]
}

export async function generateStaticParams() {
    return posts.map((post) => ({ slug: post.slug }));
}

export default function Post({ params }: { params: { slug: string } }) {

    const post = posts.find((post) => post.slug === params.slug) as null | Post

    if (!post) {
        redirect('/404')
    }

    return (
        <main className="w-full max-w-2xl flex flex-col">

            <h1 className="mb-4 mt-16 font-bold text-xl md:text-3xl">{post.title}</h1>

            <div className='flex flex-wrap gap-2 mb-6'>
                {post.tags.map((tag) => (
                    <Badge key={tag} variant='outline' className="shadow-none hover:shadow-sm cursor-pointer">{tag}</Badge>
                ))}
            </div>

            <div className='flex items-center gap-2 mb-10'>
                <Avatar>
                    <AvatarImage src={post.author.github + ".png"} />
                </Avatar>

                <div className="flex flex-col gap-2 text-neutral-500">
                    <p className="text-sm">{post.author.name}</p>
                    <p className="text-sm">{post.date}</p>
                </div>
            </div>

            {post.contents.map((content) => (
                <section key={content.title} className="w-full my-6">
                    <h2 className="mb-2 font-bold text-lg">{content.title}</h2>
                    {content.sections.map((section) => {
                        switch (section.type) {
                            case "paragraph":
                                return <p key={section.text} className="mb-2 font text-sm md:text-base">{section?.text}</p>
                            case "image":
                                return <img key={section?.alt!} src={section?.src!} className="w-full" alt={section?.alt!} />
                            case "list":
                                return <ul key={content.title.concat(section.type)}>
                                    {section.items?.map((item) => (
                                        <li key={item.title} className="mb-2 font-bold text-sm md:text-base list-disc list-inside">
                                            {item.title}{": "}
                                            <span className='font-normal'>{item.description}</span>
                                        </li>
                                    ))}
                                </ul>
                        }
                    })}
                </section>
            ))}

            <div className="flex space-x-6 max-w-2xl mt-auto">
                <Link href="" target="_blank" rel="noopener norefer" className="hover:animate-bounce-once-from-zero">
                    <GithubIcon className="size-6" />
                    <span className="sr-only">GitHub</span>
                </Link>
                <Link href="" target="_blank" rel="noopener norefer" className="hover:animate-bounce-once-from-zero">
                    <LinkedinIcon className="size-6" />
                    <span className="sr-only">LinkedIn</span>
                </Link>
            </div>

        </main>
    )
}