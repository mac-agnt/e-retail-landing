"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { GridBg } from "@/components/ornaments/grid-bg";

const KioskScene = dynamic(
  () => import("./KioskModel").then((mod) => mod.KioskScene),
  { ssr: false }
);

const floatingLabels = [
  { text: "Product Advice", className: "left-[8%] top-[24%] md:left-[16%] md:top-[23%]" },
  { text: "Store Answers", className: "right-[8%] top-[28%] md:right-[18%] md:top-[25%]" },
  { text: "Live Stock Check", className: "left-[10%] bottom-[24%] md:left-[20%] md:bottom-[22%]" },
  { text: "Compare Options", className: "right-[10%] bottom-[26%] md:right-[20%] md:bottom-[24%]" },
  { text: "Guided Discovery", className: "hidden md:block left-1/2 -translate-x-1/2 top-[14%]" },
];

export function Hero() {
  return (
    <section
      className="relative bg-[linear-gradient(180deg,#ffffff_0%,#f7f7f5_48%,#ecebea_100%)] pt-28 pb-20 md:pb-24"
      style={{ overflow: "visible" }}
    >
      <GridBg />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[65%] bg-[radial-gradient(circle_at_50%_8%,rgba(255,255,255,0.95),rgba(255,255,255,0.42)_46%,transparent_72%)]" />

      {floatingLabels.map((label, i) => (
        <span
          key={label.text}
          className={`pointer-events-none absolute z-10 rounded-full border border-black/8 bg-white/45 px-3 py-1 text-[10px] uppercase tracking-[0.14em] text-black/45 backdrop-blur-sm animate-micro-drift-fade ${label.className}`}
          style={{ animationDelay: `${i * 1.1}s` }}
        >
          {label.text}
        </span>
      ))}

      <div className="relative z-20 mx-auto flex w-full max-w-[1200px] flex-col items-center px-6 sm:px-8">
        {/* 3D Kiosk container — full height from nav to text */}
        <div
          style={{
            width: "100%",
            height: "calc(100vh - 160px)",
            minHeight: "500px",
            position: "relative",
            marginBottom: "0px",
          }}
        >
          <KioskScene />
        </div>

        {/* Headline + CTA */}
        <div className="relative z-[5] max-w-[680px] pt-8 text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-[#111111] leading-[1.04] md:text-5xl md:leading-[1.02]">
            The store, now speaks.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-black/65">
            Ask AI Kiosk gives every shopper instant, store-trained answers on products, stock, and smart alternatives.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-full bg-black px-7 py-3 text-sm font-medium text-white transition duration-300 ease-in-out hover:scale-[1.02] hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/60 focus-visible:ring-offset-2"
            >
              Book a Demo
            </Link>
            <Link
              href="/products"
              className="inline-flex h-12 items-center justify-center rounded-full border border-black/20 bg-transparent px-7 py-3 text-sm font-medium text-black transition duration-300 ease-in-out hover:scale-[1.02] hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30 focus-visible:ring-offset-2"
            >
              See Product Fit
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
