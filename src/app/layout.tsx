import "@/css/globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AmbieProvider } from "@/providers/ambie";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter-sans" });

export const metadata: Metadata = {
  title: "Henrique Martins - Tech Lead | Full Stack Developer",
  description: "I am a Developer from Brazil to the world",
  openGraph: {
    type: "website",
    locale: "en-US",
    countryName: "Brazil",
    title: "Henrique Martins",
    url: "https://ohenry.dev",
    alternateLocale: ["pt-BR"],
    emails: ["ohenrydevopr@gmail.com"],
    phoneNumbers: ["+55 41 99949-3522"],
    siteName: "Henrique Martins - Tech Lead at Atento",
    description: "I am a Developer from Brazil to the world",
  },
};

type RootLayoutProps = Readonly<{ children: ReactNode }>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body id="father" className={`${inter.variable} antialiased`}>
        <AmbieProvider>
          <Header />
          {children}
          <Footer />
        </AmbieProvider>
      </body>
    </html>
  );
}
