import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="w-full max-w-2xl flex flex-col items-center justify-center mt-40 space-y-8">
      <h1 className="text-3xl">Not Found</h1>
      <p>This page could not be found.</p>
      <Button>
        <Link href="/">Go Home</Link>
      </Button>
    </main>
  )
}