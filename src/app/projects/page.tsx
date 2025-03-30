import Link from "next/link";
import { TechBadge } from "@/components/tech-badge";
import projects from "@/data/projects.json" with { type: "json" };
import { ExternalLinkIcon, GithubIcon, LockIcon } from "lucide-react";

export default function Projects() {
  return (
    <main className="pt-24 pb-16 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-olive mb-4">
            Projects
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            A collection of projects I've worked on, showcasing my skills and
            experience in web development.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => {
            const isNda = project.nda === true;
            return (
              <div
                key={project.slug}
                className={`border border-border rounded-lg overflow-hidden ${
                  isNda
                    ? "opacity-80"
                    : "hover:border-olive/30 hover:shadow-sm hover:-translate-y-1"
                } transition-all duration-300 `}
              >
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <h2 className="text-xl font-medium text-olive mr-2">
                      {project.title}
                    </h2>
                    {isNda && <LockIcon className="w-4 h-4 text-amber" />}
                  </div>

                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techs.map((tech) => (
                      <TechBadge
                        key={tech.name}
                        name={tech.name}
                        variant={tech.variant as any}
                      />
                    ))}
                  </div>

                  <div className="flex items-center space-x-4">
                    {!isNda && project.repo && (
                      <Link
                        href={project.repo}
                        className="inline-flex items-center text-sm font-medium text-olive hover:text-olive-dark transition-colors"
                        aria-label="GitHub Repository"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <GithubIcon className="w-4 h-4 mr-1" />
                        Code
                      </Link>
                    )}

                    {!isNda && project.link && (
                      <Link
                        href={project.link}
                        className="inline-flex items-center text-sm font-medium text-amber hover:text-amber-dark transition-colors"
                        aria-label="Live Demo"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLinkIcon className="w-4 h-4 mr-1" />
                        Live
                      </Link>
                    )}

                    {isNda && (
                      <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-earth/10 text-amber-dark border border-earth/20">
                        More info upon request
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
