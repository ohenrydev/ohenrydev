import "@/styles/globals.css"

import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import type { ReactNode } from "react"
import { Inter } from "next/font/google"
import { Header } from "@/components/header"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: "Henrique Martins"
}

interface RootLayoutProps { children: ReactNode }

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={cn('antialiased text-stone-800 min-h-screen bg-white flex flex-col items-center px-4 py-8 gap-y-12', inter.variable)}>
        <Header />
        {children}
      </body>
    </html>
  )
}
