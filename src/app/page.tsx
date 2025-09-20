import Link from 'next/link';
import Image from 'next/image';
import { TechBadge } from '@/components/tech-badge';
import { SocialLinks } from '@/components/social-links';
import { ArrowRightIcon, DownloadIcon, ExternalLinkIcon } from 'lucide-react';
import featured_posts from '@/data/featuring_posts.json' with { type: 'json' };
import featured_projects from '@/data/featuring_projects.json' with { type: 'json' };
import main_technologies from '@/data/main_technologies.json' with { type: 'json' };

import * as motion from 'motion/react-client';

export const metadata = {
  title: 'Henrique Martins - Home'
};

export default async function Home() {
  return (
    <main className="pt-20 pb-16" id="home">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <section className="flex flex-col items-center py-12 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="blob-image relative mb-8 size-48 overflow-hidden transition-transform duration-300 hover:scale-[1.03]"
          >
            <Image fill priority src="/me_square.png" alt="Henrique Martins" className="object-cover" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl"
          >
            <div className="mx-auto max-w-2xl">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-amber mb-2"
              >
                Hello, I&apos;m
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-olive mb-3 text-4xl font-bold"
              >
                Henrique Martins
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-muted-foreground mb-6 text-xl"
              >
                Full Stack Developer
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.1 }}
                className="mb-8 flex justify-center"
              >
                <SocialLinks />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, staggerChildren: 0.2 }}
                className="mb-8 flex flex-wrap justify-center gap-2"
              >
                {main_technologies.map((tech, index) => (
                  <motion.span
                    key={tech.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: index * 0.1 }}
                  >
                    <TechBadge key={tech.name} name={tech.name} variant={tech.variant as 'olive' | 'amber' | 'earth'} />
                  </motion.span>
                ))}
              </motion.div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="bg-amber text-foreground hover:bg-amber-dark rounded-md px-6 py-3 text-center font-medium hover:-translate-y-0.5"
                >
                  <Link href="/blog">View recent posts</Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="bg-olive hover:bg-olive-dark rounded-md px-6 py-3 text-center font-medium text-white hover:-translate-y-0.5"
                >
                  <Link href="/projects">Explore Projects</Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.6 }}
                  className="border-olive text-olive hover:bg-olive/5 cursor-not-allowed items-center justify-center rounded-md border-2 px-6 py-3 text-center font-medium opacity-45 hover:-translate-y-0.5"
                >
                  <Link
                    href="/resume_en.pdf"
                    download="henrique_martins_resume.pdf"
                    className="flex items-center justify-center"
                  >
                    <DownloadIcon className="mr-2 h-4 w-4" />
                    Resume
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </section>

        <motion.section
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          className="py-12"
        >
          <div className="mx-auto max-w-3xl">
            <h2 className="text-olive mb-6 flex items-center text-2xl font-semibold">
              <span className="bg-amber mr-3 h-0.5 w-8"></span>
              About Me
            </h2>
            <div className="max-w-none">
              <p className="text-muted-foreground mb-4">
                Hello! I&apos;m a passionate Full Stack Developer with expertise in building modern web applications. I
                specialize in creating responsive, user-friendly interfaces and robust backend systems.
              </p>
              <p className="text-muted-foreground">
                With a strong foundation in both frontend and backend technologies, I enjoy tackling complex problems
                and turning ideas into reality through clean and efficient code.
              </p>
            </div>
          </div>
        </motion.section>

        <section className="py-12">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-olive mb-6 flex items-center text-2xl font-semibold">
              <span className="bg-amber mr-3 h-0.5 w-8"></span>
              Featured Projects
            </h2>

            <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
              {featured_projects.map((project) => (
                <div
                  key={project.slug}
                  className="border-border hover:border-olive/30 rounded-lg border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-sm"
                >
                  <h3 className="text-olive mb-2 text-xl font-medium">{project.name}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{project.brief}</p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.techs.map((tech) => (
                      <TechBadge
                        key={tech.name}
                        name={tech.name}
                        variant={tech.variant as 'olive' | 'amber' | 'earth'}
                      />
                    ))}
                  </div>
                  <Link
                    href={project.href}
                    className="text-amber hover:text-amber-dark inline-flex items-center text-sm font-medium transition-colors"
                  >
                    View Project <ExternalLinkIcon className="ml-1 h-3.5 w-3.5" />
                  </Link>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/projects"
                className="border-olive text-olive hover:bg-olive/5 inline-flex items-center rounded-md border-2 px-6 py-2 font-medium transition-all"
              >
                View All Projects <ArrowRightIcon className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-olive mb-6 flex items-center text-2xl font-semibold">
              <span className="bg-amber mr-3 h-0.5 w-8"></span>
              Recent Posts
            </h2>

            <div className="mb-6 space-y-6">
              {featured_posts.map((post) => (
                <div
                  key={post.slug}
                  className="border-border hover:border-olive/30 rounded-lg border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-sm"
                >
                  <h3 className="text-olive mb-2 text-xl font-medium">{post.name}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{post.brief}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-amber hover:text-amber-dark inline-flex items-center text-sm font-medium transition-colors"
                  >
                    Read More <ArrowRightIcon className="ml-1 h-3.5 w-3.5" />
                  </Link>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/blog"
                className="border-olive text-olive hover:bg-olive/5 inline-flex items-center rounded-md border-2 px-6 py-2 font-medium transition-all"
              >
                View All Posts <ArrowRightIcon className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
