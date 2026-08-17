import type { Metadata } from "next";
import { Hero } from "@/components/hero";

export const metadata: Metadata = {
  title: "Protostellar",
  robots: { index: false, follow: false },
};

export default function CoverPage() {
  return (
    <main>
      <Hero title="Protostellar." mark />
    </main>
  );
}
