import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { GithubIcon, LinkedinIcon } from "lucide-react"
import { Avatar, AvatarImage } from "@/components/ui/avatar"

export default function Home() {
  return (
    <main className="w-full max-w-2xl flex flex-col items-center">
      <Avatar className="size-32 md:size-48 mb-6">
        <AvatarImage src="/me.webp" />
      </Avatar>

      <h2 className="mb-2 font text-sm md:text-xl">Hello, I&apos;m</h2>
      <h1 className="mb-2 font-bold text-xl md:text-3xl">Henrique Martins</h1>
      <h3 className="mb-8 text-base md:text-lg">Full Stack Developer</h3>

      <div className="flex flex-wrap justify-center gap-2 mb-8 max-w-2xl">
        {["React.js", "Next.js", "Tailwind CSS", "TypeScript", "MongoDB", "Node.js", "NestJS", "PostgreSQL", "Vercel", "Git", "Python", "C#", "Docker"].map((tech) => (
          <Badge key={tech} className="md:px-3 md:py-1 shadow-none">{tech}</Badge>
        ))}
      </div>

      <div className="space-y-6 w-full mb-6 max-w-2xl">
        <Button className="w-full h-10" variant="outline" asChild>
          <Link href="/blog">View recent posts</Link>
        </Button>
        <Button className="w-full h-10" variant="outline" asChild>
          <Link href="/projects">Explore Projects</Link>
        </Button>
        <Button className="w-full h-10" asChild>
          <Link href="/resume.pdf" download="henrique-martins-cv.pdf">Download Resume</Link>
        </Button>
      </div>

      <div className="flex space-x-6 max-w-2xl">
        <Link href="" target="_blank" rel="noopener norefer">
          <GithubIcon className="size-6" />
          <span className="sr-only">GitHub</span>
        </Link>
        <Link href="" target="_blank" rel="noopener norefer">
          <LinkedinIcon className="size-6" />
          <span className="sr-only">LinkedIn</span>
        </Link>
      </div>
    </main>
  )
}
