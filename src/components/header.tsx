"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useEffect, useLayoutEffect, useState } from "react";
import { MenuIcon, X, XIcon } from "lucide-react";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isActive = (href: string) => (href === pathname ? "active" : "");

  useLayoutEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-10 transition-all duration-300 ",
        scrolled
          ? "bg-background/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            className="text-lg font-medium text-olive hover:text-olive-dark transition-colors"
          >
            ohenry.dev
          </Link>

          <Button
            size="icon"
            variant={"ghost"}
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            className="text-olive hover:text-olive-dark cursor-pointer md:hidden"
          >
            {open ? (
              <XIcon className="size-6" />
            ) : (
              <MenuIcon className="size-6" />
            )}
          </Button>

          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className={`nav-link ${isActive("/")}`}>
              Home
            </Link>
            <Link
              href="/projects"
              className={`nav-link ${isActive("/projects")}`}
            >
              Projects
            </Link>
            <Link href="/blog" className={`nav-link ${isActive("/blog")}`}>
              Blog
            </Link>
          </nav>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-background border-b border-border">
          <nav className="flex flex-col px-4 py-3">
            <Link
              href="/"
              className={`py-2 text-olive ${isActive("/")}`}
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/projects"
              className={`py-2 text-olive ${isActive("/projects")}`}
              onClick={() => setOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="/blog"
              className={`py-2 text-olive ${isActive("/blog")}`}
              onClick={() => setOpen(false)}
            >
              Blog
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
