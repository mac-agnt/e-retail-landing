import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { WhoWeHelp } from "@/components/who-we-help";
import { ProductGrid } from "@/components/product-grid";
import { KpiStrip } from "@/components/kpi-strip";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhoWeHelp />
        <ProductGrid />
        <KpiStrip />
      </main>
      <Footer />
    </>
  );
}
