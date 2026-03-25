"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect, useState } from "react";
import { GridBg } from "@/components/ornaments/grid-bg";

const KioskScene = dynamic(
  () => import("./KioskModel").then((mod) => mod.KioskScene),
  { ssr: false }
);

const floatingLabels = [
  { text: "Product Advice", className: "left-[2%] top-[22%] md:left-[4%] md:top-[20%]" },
  { text: "Live Stock Check", className: "left-[2%] top-[42%] md:left-[4%] md:top-[40%]" },
  { text: "Store Answers", className: "right-[2%] top-[26%] md:right-[4%] md:top-[24%]" },
  { text: "Compare Options", className: "right-[2%] top-[46%] md:right-[4%] md:top-[44%]" },
  { text: "Guided Discovery", className: "hidden md:block left-[2%] top-[62%] md:left-[4%] md:top-[60%]" },
];

export function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");
    const onChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    setIsMobile(media.matches);
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  return (
    <section
      className="relative bg-[linear-gradient(180deg,#ffffff_0%,#f7f7f5_48%,#ecebea_100%)] pt-28 pb-20 md:pb-24"
      style={{ overflow: "visible" }}
    >
      {!isMobile && <GridBg />}
      {!isMobile && (
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[65%] bg-[radial-gradient(circle_at_50%_8%,rgba(255,255,255,0.95),rgba(255,255,255,0.42)_46%,transparent_72%)]" />
      )}

      <div className="relative z-20 mx-auto flex w-full max-w-[1200px] flex-col items-center px-6 sm:px-8">
        {/* 3D Kiosk container - pills constrained to this area only */}
        <div
          className="relative"
          style={{
            width: "100%",
            height: "75vh",
            maxHeight: "680px",
            minHeight: "460px",
          }}
        >
          {!isMobile &&
            floatingLabels.map((label, i) => (
              <span
                key={label.text}
                className={`pointer-events-none absolute z-10 rounded-full border border-black/8 bg-white/45 px-3 py-1 text-[10px] uppercase tracking-[0.14em] text-black/45 backdrop-blur-sm animate-micro-drift-fade ${label.className}`}
                style={{ animationDelay: `${i * 1.1}s` }}
              >
                {label.text}
              </span>
            ))}
          <KioskScene animate={!isMobile} mobileOptimized={isMobile} />
        </div>

        {/* Headline + CTA */}
        <div className="relative z-[5] max-w-[680px] pt-6 text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-[#111111] leading-[1.04] md:text-5xl md:leading-[1.02]">
            The store, now <span className="text-accent-gradient">speaks.</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-black/65">
            Ask AI Kiosk gives every shopper instant, store-trained answers on products, stock, and smart alternatives.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-7 py-3 text-sm font-medium text-white shadow-[0_10px_26px_-14px_rgba(220,38,38,0.8)] md:transition md:duration-300 md:ease-in-out md:hover:scale-[1.02] md:hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2"
            >
              Book a Demo
            </Link>
            <Link
              href="/products"
              className="inline-flex h-12 items-center justify-center rounded-full border border-black/20 bg-transparent px-7 py-3 text-sm font-medium text-black md:transition md:duration-300 md:ease-in-out md:hover:scale-[1.02] md:hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30 focus-visible:ring-offset-2"
            >
              See Product Fit
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
