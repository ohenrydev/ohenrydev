'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { useLayoutEffect, useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';

import * as motion from 'motion/react-client';

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isActive = (href: string) => (href === pathname ? 'active' : '');

  useLayoutEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        'fixed top-0 left-0 z-10 w-full',
        scrolled ? 'bg-background/95 shadow-sm backdrop-blur-sm' : 'bg-transparent'
      )}
    >
      <div className="mx-6 max-w-4xl sm:mx-auto">
        <div className="flex h-16 items-center justify-end">
          <Link href="/" className="text-olive hover:text-olive-dark mr-auto text-lg font-medium transition-colors">
            ohenry.dev
          </Link>

          <nav className="hidden items-center space-x-6 md:flex">
            <Link href="/" className={`nav-link ${isActive('/')}`}>
              Home
            </Link>
            <Link href="/projects" className={`nav-link ${isActive('/projects')}`}>
              Projects
            </Link>
            <Link href="/blog" className={`nav-link ${isActive('/blog')}`}>
              Blog
            </Link>
          </nav>

          <Button
            size="icon"
            variant={'ghost'}
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="text-olive hover:text-olive-dark cursor-pointer md:hidden"
          >
            {open ? <XIcon className="size-6" /> : <MenuIcon className="size-6" />}
          </Button>
        </div>
      </div>

      {open && (
        <div className="bg-background border-border border-b md:hidden">
          <nav className="flex flex-col px-4 py-3">
            <Link href="/" className={`text-olive py-2 ${isActive('/')}`} onClick={() => setOpen(false)}>
              Home
            </Link>
            <Link
              href="/projects"
              className={`text-olive py-2 ${isActive('/projects')}`}
              onClick={() => setOpen(false)}
            >
              Projects
            </Link>
            <Link href="/blog" className={`text-olive py-2 ${isActive('/blog')}`} onClick={() => setOpen(false)}>
              Blog
            </Link>
          </nav>
        </div>
      )}
    </motion.header>
  );
}
