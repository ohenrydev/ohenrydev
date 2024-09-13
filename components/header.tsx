'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useState } from "react";

export function Header() {

    const [isAnimating, setIsAnimating] = useState(false)
    const pathname = usePathname()

    const handleLogoClick = useCallback(() => {
        setIsAnimating(true)
        setTimeout(() => setIsAnimating(false), 500)
    }, [])

    return (
        <header className="w-full max-w-2xl  flex justify-between items-center">
            <h1 className="text-xl font-bold cursor-pointer" onClick={handleLogoClick}>
                {"ohenry."}
                <span data-is-animating={isAnimating} className="inline-block transition-transform delay-0 duration-300 data-[is-animating=true]:animate-bounce-right">
                    {"dev"}
                </span>
            </h1>

            <nav className="space-x-4">
                <Link
                    data-active={pathname === "/"}
                    href="/"
                    className="hover:underline data-[active=true]:underline data-[active=true]:font-bold underline-offset-8 decoration-2 transition-all duration-200"
                >
                    Home
                </Link>
                <Link
                    data-active={pathname === "/projects"}
                    href="/projects"
                    className="hover:underline data-[active=true]:underline data-[active=true]:font-bold underline-offset-8 decoration-2 transition-all duration-200"
                >
                    Projects
                </Link>
                <Link
                    data-active={pathname === "/blog"}
                    href="/blog"
                    className="hover:underline data-[active=true]:underline data-[active=true]:font-bold underline-offset-8 decoration-2 transition-all duration-200"
                >
                    Blog
                </Link>
            </nav>
        </header>
    )
}