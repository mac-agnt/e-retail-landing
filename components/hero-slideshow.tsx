"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { productsData } from "@/lib/products-data";

const featuredProducts = [
  {
    id: "cashmag-mini",
    image: "/1.png",
    badge: "Compact Solution",
    shortExplainer:
      "Compact all-in-one cash handling designed for pharmacies, cafes, kiosks, and other limited-space counters.",
    pricingSubtext: "Available nationwide across Ireland",
  },
  {
    id: "cashguard-core",
    image: "/2.png",
    badge: "Popular",
    shortExplainer:
      "High-speed note and coin handling with a compact footprint for supermarkets, convenience stores, and forecourts.",
    pricingSubtext: "Book a free store assessment",
  },
  {
    id: "cashguard-uni",
    image: "/3.png",
    badge: "New",
    shortExplainer:
      "Compact front-office cash recycler with secure closed handling and seamless POS integration.",
    pricingSubtext: "Compatible with existing POS integrations",
  },
].map((item) => {
  const product = productsData[item.id as keyof typeof productsData];
  const productName = product?.title ?? item.id;
  const nameParts = productName.split(" ");
  const titleAccent = nameParts.pop() ?? "";
  const titleMain = nameParts.join(" ");

  return {
    ...item,
    name: productName,
    titleMain,
    titleAccent,
    price: product?.price ?? null,
    exploreHref: `/products/${item.id}`,
    orderHref: `/contact?product=${item.id}`,
    imageAlt: `${productName} product showcase`,
  };
});

const AUTOPLAY_MS = 5000;

const getPricingText = (price: string | null) => {
  if (!price) return "Contact for pricing";
  return `From ${price}`;
};

export function HeroSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredProducts.length);
    }, AUTOPLAY_MS);

    return () => clearInterval(timer);
  }, []);

  const currentProduct = featuredProducts[currentIndex];

  const goPrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + featuredProducts.length) % featuredProducts.length
    );
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredProducts.length);
  };

  return (
    <section
      className="bg-bg pb-14 md:pb-16"
      aria-label="Featured products showcase"
      style={{
        fontFamily:
          '"SF Pro Display", "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Inter, sans-serif',
      }}
    >
      <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen overflow-hidden">
        <div className="relative min-h-[420px] md:min-h-[500px] lg:min-h-[560px]">
          {featuredProducts.map((product, index) => (
            <div
              key={product.id}
              className={`absolute inset-0 transition-all duration-500 ${
                index === currentIndex
                  ? "translate-x-0 opacity-100"
                  : "translate-x-2 opacity-0"
              }`}
              aria-hidden={index !== currentIndex}
            >
              <Image
                src={product.image}
                alt={product.imageAlt}
                fill
                className="object-cover object-center md:object-right"
                sizes="100vw"
                priority={index === 0}
              />
            </div>
          ))}

          <div className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-[58%] bg-gradient-to-r from-[#ffffff] via-[#f8f8f8]/90 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-[64%] bg-gradient-to-r from-[#f3f3f2]/88 via-[#f7f7f7]/42 to-transparent" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/22 via-transparent to-white/34" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_74%_48%,rgba(255,255,255,0.42),rgba(255,255,255,0.06)_42%,transparent_64%)]" />

          <div className="relative z-10 px-6 py-10 md:px-12 lg:px-16">
            <div className="max-w-md space-y-5">
              <span className="inline-flex rounded-full border border-accent/20 bg-accent/8 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">
                {currentProduct.badge}
              </span>

              <h2 className="text-4xl font-semibold leading-tight text-zinc-900 md:text-5xl">
                {currentProduct.titleMain}{" "}
                <span className="bg-gradient-to-r from-[#f87171] via-[#ef4444] to-[#b91c1c] bg-clip-text text-transparent">
                  {currentProduct.titleAccent}
                </span>
              </h2>

              <p className="max-w-sm text-sm leading-relaxed text-zinc-700 md:text-base">
                {currentProduct.shortExplainer}
              </p>

              <div className="pt-1">
                <p className="text-2xl font-semibold text-zinc-900 md:text-3xl">
                  {getPricingText(currentProduct.price)}
                </p>
                <p className="mt-1 text-sm text-zinc-600">
                  {currentProduct.pricingSubtext}
                </p>
              </div>

              <div className="h-px w-28 bg-zinc-300/70" />

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <Link href={currentProduct.orderHref}>
                  <Button
                    size="lg"
                    className="rounded-full bg-accent px-7 text-white shadow-[0_10px_26px_-14px_rgba(220,38,38,0.8)] hover:bg-accent/90"
                  >
                    Contact us
                  </Button>
                </Link>
                <Link href={currentProduct.exploreHref}>
                  <Button
                    size="lg"
                    variant="secondary"
                    className="rounded-full border border-zinc-300 bg-white/85 px-7 text-zinc-800 hover:bg-white"
                  >
                    Explore
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="absolute bottom-4 left-1/2 z-20 -translate-x-1/2">
            <div className="flex items-center gap-2 rounded-full border border-zinc-300/80 bg-white/80 px-3 py-1.5 shadow-sm backdrop-blur-md">
              <button
                type="button"
                onClick={goPrev}
                aria-label="Previous featured product"
                className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-zinc-300 bg-white text-zinc-700 transition-colors hover:border-zinc-400 hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/55"
              >
                <ChevronLeft className="h-3.5 w-3.5" />
              </button>

              {featuredProducts.map((product, index) => (
                <button
                  key={product.id}
                  type="button"
                  aria-label={`Show ${product.name}`}
                  aria-current={index === currentIndex ? "true" : "false"}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 w-2 rounded-full border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/55 ${
                    index === currentIndex
                      ? "border-accent/90 bg-accent"
                      : "border-zinc-400/70 bg-zinc-300/60 hover:bg-zinc-400/70"
                  }`}
                />
              ))}

              <button
                type="button"
                onClick={goNext}
                aria-label="Next featured product"
                className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-zinc-300 bg-white text-zinc-700 transition-colors hover:border-zinc-400 hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/55"
              >
                <ChevronRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
