"use client";

import Image from "next/image";
import Link from "next/link";

const floatingLabels = [
  { text: "Product Advice", className: "left-[8%] top-[24%] md:left-[16%] md:top-[23%]" },
  { text: "Store Answers", className: "right-[8%] top-[28%] md:right-[18%] md:top-[25%]" },
  { text: "Live Stock Check", className: "left-[10%] bottom-[24%] md:left-[20%] md:bottom-[22%]" },
  { text: "Compare Options", className: "right-[10%] bottom-[26%] md:right-[20%] md:bottom-[24%]" },
  { text: "Guided Discovery", className: "hidden md:block left-1/2 -translate-x-1/2 top-[14%]" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f7f7f5_48%,#ecebea_100%)] pt-28 pb-16 md:pb-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[65%] bg-[radial-gradient(circle_at_50%_8%,rgba(255,255,255,0.95),rgba(255,255,255,0.42)_46%,transparent_72%)]" />

      {floatingLabels.map((label, i) => (
        <span
          key={label.text}
          className={`pointer-events-none absolute z-10 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-[10px] uppercase tracking-[0.14em] text-black/55 backdrop-blur-sm animate-micro-drift-fade ${label.className}`}
          style={{ animationDelay: `${i * 1.1}s` }}
        >
          {label.text}
        </span>
      ))}

      <div className="section-wrapper relative z-20 flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center">
        <div className="relative w-full max-w-[420px]">
          <div className="pointer-events-none absolute left-1/2 top-[84%] h-16 w-52 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(0,0,0,0.12)_0%,rgba(0,0,0,0)_72%)]" />
          <div className="pointer-events-none absolute left-1/2 top-[72%] h-24 w-60 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(225,29,46,0.1)_0%,rgba(225,29,46,0)_72%)]" />
          <Image
            src="/White Kiosk.png"
            alt="Ask AI Kiosk"
            width={840}
            height={1200}
            priority
            className="mx-auto h-auto w-full animate-kiosk-float drop-shadow-[0_40px_80px_rgba(0,0,0,0.2)]"
          />
        </div>

        <div className="mt-10 max-w-[700px] text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-[#111111] md:text-6xl md:leading-[1.02]">
            The store, now speaks.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-black/65 md:text-lg">
            Ask AI Kiosk gives every shopper instant, store-trained answers on products, stock, and smart alternatives.
          </p>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-full bg-black px-7 text-sm font-medium text-white transition duration-200 hover:scale-[1.02] hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/60 focus-visible:ring-offset-2"
            >
              Book a Demo
            </Link>
            <Link
              href="/products"
              className="inline-flex h-12 items-center justify-center rounded-full border border-black/20 bg-transparent px-7 text-sm font-medium text-black transition duration-200 hover:scale-[1.02] hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30 focus-visible:ring-offset-2"
            >
              See Product Fit
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
