import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { HeroSlideshow } from "@/components/hero-slideshow";
import { WhoWeHelp } from "@/components/who-we-help";
import { ProductGridApple } from "@/components/sections/ProductGridApple";
import { SupportSection } from "@/components/sections/SupportSection";
import { KpiStrip } from "@/components/kpi-strip";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HeroSlideshow />
        <WhoWeHelp />
        <ProductGridApple />
        <SupportSection />
        <KpiStrip />
      </main>
      <Footer />
    </>
  );
}
