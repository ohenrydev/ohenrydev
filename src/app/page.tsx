import { SocialLinks } from "@/components/social-links";
import { TechBadge } from "@/components/tech-badge";
import { ArrowRightIcon, DownloadIcon, ExternalLinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import featured_posts from "@/data/featuring_posts.json" with { type: "json" };
import featured_projects from "@/data/featuring_projects.json" with { type: "json" };
import main_technologies from "@/data/main_technologies.json" with { type: "json" };

export const metadata = {
  title: "Henrique Martins - Home",
};

export default function Home() {
  return (
    <main className="pt-20 pb-16" id="home">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <section className="py-12 flex flex-col items-center text-center">
          <div className="relative size-48 mb-8 overflow-hidden blob-image hover:scale-[1.03] transition-transform duration-300">
            <Image
              fill
              priority
              src="/me.png"
              alt="Henrique Martins"
              className="object-cover"
            />
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="max-w-2xl mx-auto">
              <p className="text-amber mb-2">Hello, I&apos;m</p>
              <h1 className="text-4xl font-bold text-olive mb-3">
                Henrique Martins
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                Full Stack Developer
              </p>

              <div className="flex justify-center mb-8">
                <SocialLinks />
              </div>

              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {main_technologies.map((tech) => (
                  <TechBadge
                    key={tech.name}
                    name={tech.name}
                    variant={tech.variant as "olive" | "amber" | "earth"}
                  />
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Link
                  href="/blog"
                  className="bg-amber text-foreground hover:bg-amber-dark px-6 py-3 rounded-md font-medium text-center transition-all hover:-translate-y-0.5"
                >
                  View recent posts
                </Link>
                <Link
                  href="/projects"
                  className="bg-olive text-white hover:bg-olive-dark px-6 py-3 rounded-md font-medium text-center transition-all hover:-translate-y-0.5"
                >
                  Explore Projects
                </Link>
                <Link
                  href="#"
                  className="border-2 border-olive text-olive hover:bg-olive/5 px-6 py-3 rounded-md font-medium text-center transition-all hover:-translate-y-0.5 flex items-center justify-center opacity-45 cursor-not-allowed"
                >
                  <DownloadIcon className="w-4 h-4 mr-2" />
                  Resume
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold text-olive mb-6 flex items-center">
              <span className="w-8 h-0.5 bg-amber mr-3"></span>
              About Me
            </h2>
            <div className="max-w-none">
              <p className="text-muted-foreground mb-4">
                Hello! I&apos;m a passionate Full Stack Developer with expertise in
                building modern web applications. I specialize in creating
                responsive, user-friendly interfaces and robust backend systems.
              </p>
              <p className="text-muted-foreground">
                With a strong foundation in both frontend and backend
                technologies, I enjoy tackling complex problems and turning
                ideas into reality through clean and efficient code.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold text-olive mb-6 flex items-center">
              <span className="w-8 h-0.5 bg-amber mr-3"></span>
              Featured Projects
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {featured_projects.map((project) => (
                <div
                  key={project.slug}
                  className="p-6 border border-border rounded-lg hover:border-olive/30 transition-all hover:shadow-sm hover:-translate-y-1 duration-300"
                >
                  <h3 className="text-xl font-medium text-olive mb-2">
                    {project.name}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {project.brief}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techs.map((tech) => (
                      <TechBadge
                        key={tech.name}
                        name={tech.name}
                        variant={tech.variant as "olive" | "amber" | "earth"}
                      />
                    ))}
                  </div>
                  <Link
                    href={project.href}
                    className="inline-flex items-center text-sm font-medium text-amber hover:text-amber-dark transition-colors"
                  >
                    View Project{" "}
                    <ExternalLinkIcon className="w-3.5 h-3.5 ml-1" />
                  </Link>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/projects"
                className="inline-flex items-center border-2 border-olive text-olive hover:bg-olive/5 px-6 py-2 rounded-md font-medium transition-all"
              >
                View All Projects <ArrowRightIcon className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold text-olive mb-6 flex items-center">
              <span className="w-8 h-0.5 bg-amber mr-3"></span>
              Recent Posts
            </h2>

            <div className="space-y-6 mb-6">
              {featured_posts.map((post) => (
                <div
                  key={post.slug}
                  className="p-6 border border-border rounded-lg hover:border-olive/30 transition-all hover:shadow-sm hover:-translate-y-1 duration-300"
                >
                  <h3 className="text-xl font-medium text-olive mb-2">
                    {post.name}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {post.brief}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-sm font-medium text-amber hover:text-amber-dark transition-colors"
                  >
                    Read More <ArrowRightIcon className="w-3.5 h-3.5 ml-1" />
                  </Link>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/blog"
                className="inline-flex items-center border-2 border-olive text-olive hover:bg-olive/5 px-6 py-2 rounded-md font-medium transition-all"
              >
                View All Posts <ArrowRightIcon className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
