import Link from "next/link";
import { Wordmark } from "@/components/wordmark";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-ink px-6 py-8 text-warm">
      <Wordmark />
      <div className="mx-auto flex w-full max-w-[36rem] flex-1 flex-col justify-center">
        <p className="kicker">Unavailable</p>
        <h1 className="mt-6 font-serif text-5xl">This page is not published.</h1>
        <Link href="/" className="anchor mt-12 text-paper">
          Return to Protostellar
        </Link>
      </div>
    </div>
  );
}
