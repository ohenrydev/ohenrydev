import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { GithubIcon, LinkedinIcon } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import techs from "@/database/techs.json"


export default function Home() {
  return (
    <main className="w-full max-w-2xl flex flex-col items-center">
      <Avatar className="size-32 md:size-40 mb-6">
        <AvatarImage src="/me.webp" />
        <AvatarFallback className="text-7xl">h.</AvatarFallback>
      </Avatar>

      <h2 className="mb-2 font text-sm md:text-lg">Hello, I&apos;m</h2>
      <h1 className="mb-2 font-bold text-xl md:text-2xl">Henrique Martins</h1>
      <h3 className="mb-8 text-base">Full Stack Developer</h3>

      <div className="flex flex-wrap justify-center gap-2 mb-8 max-w-2xl">
        {techs.map((tech) => (
          <Badge key={tech.uuid} className="shadow-none hover:-translate-y-0.5 hover:shadow-sm cursor-pointer">{tech.desc}</Badge>
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
          <Link href="/Henrique_Martins_ohenrydev_Resume.pdf" target="_blank" download="henrique-martins-cv.pdf">Download Resume</Link>
        </Button>
      </div>

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
