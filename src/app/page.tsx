import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Portfolio } from "@/components/Portfolio";

export default function Home() {
  return (
    <main className="flex min-h-svh flex-col">
      <Header />
      <Hero />
      <Portfolio />
      <Footer />
    </main>
  );
}
