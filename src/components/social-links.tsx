"use client";

import { GithubIcon, LinkedinIcon } from "lucide-react";
import Link from "next/link";

export function SocialLinks() {
  return (
    <div className="flex items-center space-x-4">
      <Link
        href="https://github.com/ohenrydev"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-olive transition-colors hover:rotate-6"
        aria-label="GitHub"
      >
        <GithubIcon className="w-5 h-5" />
      </Link>
      <Link
        href="https://linkedin.com/in/ohenrydev"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-olive transition-colors hover:rotate-6"
        aria-label="LinkedIn"
      >
        <LinkedinIcon className="w-5 h-5" />
      </Link>
    </div>
  );
}
