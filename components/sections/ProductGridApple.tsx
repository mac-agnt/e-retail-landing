"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { productsData } from "@/lib/products-data";

type ProductTileConfig = {
  id:
    | "cashguard-core"
    | "cashguard-premium"
    | "cashprotect-pro"
    | "cashprotect-fusion"
    | "cashmag-mini"
    | "cashguard-uni";
  title: string;
  explainer: string;
  categories: [string, string, string];
};

const productGridData: ProductTileConfig[] = [
  {
    id: "cashguard-core",
    title: "CashGuard Core",
    explainer: "High-speed automated cash handling for busy retail checkouts.",
    categories: ["Supermarkets", "Convenience Stores", "High-Volume Retail"],
  },
  {
    id: "cashguard-premium",
    title: "CashGuard Premium",
    explainer:
      "A larger-capacity solution for demanding front-end retail environments.",
    categories: ["Supermarkets", "Forecourts", "High-Volume Retail"],
  },
  {
    id: "cashprotect-pro",
    title: "CashProtect Pro",
    explainer:
      "Secure, efficient note and cash handling built for faster service.",
    categories: ["Hospitality", "Convenience Stores", "Front-of-House"],
  },
  {
    id: "cashprotect-fusion",
    title: "CashProtect Fusion",
    explainer:
      "A compact automated solution for smaller counters and tighter spaces.",
    categories: ["Pharmacies", "Compact Counters", "Convenience Stores"],
  },
  {
    id: "cashmag-mini",
    title: "CashMag Mini",
    explainer:
      "Slim, space-saving cash automation for customer-facing service points.",
    categories: ["Hospitality", "Restaurants", "Pharmacies"],
  },
  {
    id: "cashguard-uni",
    title: "CashGuard Uni",
    explainer:
      "Flexible automated cash handling for compact hospitality and retail setups.",
    categories: ["Hospitality", "Restaurants", "Pharmacies"],
  },
];

const tiles = productGridData.map((item) => {
  const product = productsData[item.id];
  const parts = item.title.split(" ");
  const accent = parts.pop() ?? "";
  const base = parts.join(" ");

  return {
    ...item,
    image: product.image,
    titleBase: base,
    titleAccent: accent,
    exploreHref: `/products/${item.id}`,
    buyHref: `/contact?product=${item.id}`,
  };
});

export function ProductGridApple() {
  return (
    <section
      id="products"
      className="relative overflow-hidden bg-[#F3F1ED] py-20 md:py-24 lg:py-32"
      style={{
        fontFamily:
          '"SF Pro Display", "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Inter, sans-serif',
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_14%,rgba(255,255,255,0.85),transparent_46%),radial-gradient(circle_at_84%_76%,rgba(142,31,36,0.09),transparent_40%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/45" />

      <div className="section-wrapper relative max-w-7xl">
        <div className="mx-auto mb-14 max-w-4xl text-center md:mb-16 lg:mb-20">
          <p className="text-[11px] uppercase tracking-[0.22em] text-zinc-500">
            Built for busy tills.
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-900 md:text-5xl lg:text-6xl">
            POS hardware that works{" "}
            <span className="bg-gradient-to-r from-[#ff6f6f] via-[#e63333] to-[#a3151b] bg-clip-text text-transparent">
              beautifully
            </span>{" "}
            under pressure.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
          {tiles.map((product) => (
            <article
              key={product.id}
              className="group relative overflow-hidden rounded-[28px] border border-zinc-200/85 bg-white/55 px-7 py-8 md:px-9 md:py-10 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-accent/25 hover:bg-white/70 hover:shadow-xl"
            >
              <GlowingEffect
                disabled={false}
                proximity={80}
                spread={44}
                borderWidth={2}
                inactiveZone={0.2}
                movementDuration={0.3}
              />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_82%,rgba(142,31,36,0.1),transparent_56%)] opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative z-10 flex h-[260px] items-center justify-center md:h-[300px]">
                <div className="relative h-full w-full transition-transform duration-300 ease-out group-hover:scale-[1.02]">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-contain mix-blend-multiply drop-shadow-[0_10px_18px_rgba(15,23,42,0.18)]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

              <div className="relative z-10 mt-8">
                <h3 className="text-2xl font-semibold tracking-tight text-zinc-900">
                  {product.titleBase}{" "}
                  <span className="bg-gradient-to-r from-[#ff6f6f] via-[#e63333] to-[#a3151b] bg-clip-text text-transparent">
                    {product.titleAccent}
                  </span>
                </h3>
                <p className="mt-2 text-sm text-zinc-600">{product.explainer}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {product.categories.map((category) => (
                    <span
                      key={category}
                      className="rounded-full border border-zinc-300 bg-white/65 px-3 py-1 text-xs text-zinc-700"
                    >
                      {category}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Link href={product.buyHref}>
                    <Button
                      size="lg"
                      className="rounded-full bg-accent px-7 text-white shadow-[0_10px_26px_-14px_rgba(220,38,38,0.8)] hover:bg-accent/90"
                    >
                      Contact us
                    </Button>
                  </Link>
                  <Link href={product.exploreHref}>
                    <Button
                      size="lg"
                      variant="secondary"
                      className="rounded-full border border-zinc-300 bg-white/90 px-7 text-zinc-800 hover:bg-white"
                    >
                      Explore
                    </Button>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
