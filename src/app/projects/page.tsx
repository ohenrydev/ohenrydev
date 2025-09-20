import Link from 'next/link';
import { TechBadge } from '@/components/tech-badge';
import projects from '@/data/projects.json' with { type: 'json' };
import { ExternalLinkIcon, GithubIcon, LockIcon } from 'lucide-react';

import * as motion from 'motion/react-client';

export default function Projects() {
  return (
    <main className="px-4 pt-24 pb-16 sm:px-6" id="projects">
      <div className="mx-auto max-w-4xl">
        <motion.header
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-olive mb-4 text-3xl font-bold md:text-4xl">Projects</h1>
          <p className="text-muted-foreground max-w-2xl">
            A collection of projects I&apos;ve worked on, showcasing my skills and experience in web development.
          </p>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          {projects.map((project, index) => {
            const isNda = project.nda === true;
            return (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                className={`border-border overflow-hidden rounded-lg border ${
                  isNda ? 'opacity-80' : 'hover:border-olive/30 hover:-translate-y-1 hover:shadow-sm'
                } transition-transform duration-300`}
              >
                <div className="p-6">
                  <div className="mb-3 flex items-center">
                    <h2 className="text-olive mr-2 text-xl font-medium">{project.title}</h2>
                    {isNda && <LockIcon className="text-amber h-4 w-4" />}
                  </div>

                  <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>

                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.techs.map((tech) => (
                      <TechBadge
                        key={tech.name}
                        name={tech.name}
                        variant={tech.variant as 'olive' | 'amber' | 'earth'}
                      />
                    ))}
                  </div>

                  <div className="flex items-center space-x-4">
                    {!isNda && project.repo && (
                      <Link
                        href={project.repo}
                        className="text-olive hover:text-olive-dark inline-flex items-center text-sm font-medium transition-colors"
                        aria-label="GitHub Repository"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <GithubIcon className="mr-1 h-4 w-4" />
                        Code
                      </Link>
                    )}

                    {!isNda && project.link && (
                      <Link
                        href={project.link}
                        className="text-amber hover:text-amber-dark inline-flex items-center text-sm font-medium transition-colors"
                        aria-label="Live Demo"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLinkIcon className="mr-1 h-4 w-4" />
                        Live
                      </Link>
                    )}

                    {isNda && (
                      <span className="bg-earth/10 text-amber-dark border-earth/20 inline-block rounded-full border px-3 py-1 text-xs font-medium">
                        More info upon request
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </main>
  );
}
