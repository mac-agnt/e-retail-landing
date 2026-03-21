"use client";

import Image from "next/image";

export function InTheWild() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto w-full max-w-[1200px] px-6 sm:px-8">
        <div className="relative overflow-hidden rounded-[30px] border border-black/10">
          <div
            className="absolute inset-0 scale-105 bg-cover bg-center blur-[2px] md:bg-fixed"
            style={{ backgroundImage: "url('/e-retail%20abstract%20background.png')" }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.55),rgba(236,235,234,0.78))]" />

          <div className="relative z-10 grid min-h-[460px] items-end gap-8 p-8 md:grid-cols-2 md:p-12">
            <div className="max-w-md">
              <p className="text-xs uppercase tracking-[0.16em] text-black/52">In The Wild</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight leading-[1.08] text-[#111111] md:text-[2rem]">
                Built for real store rhythm.
              </h2>
              <p className="mt-3 max-w-sm text-black/62">
                From first query to final decision, Ask AI Kiosk stays calm, clear, and useful right on the floor.
              </p>
            </div>
            <div className="relative ml-auto w-full max-w-[300px] md:max-w-[360px]">
              <Image
                src="/kiosk.png"
                alt="Ask AI Kiosk on a retail floor"
                width={720}
                height={1024}
                loading="lazy"
                className="h-auto w-full drop-shadow-[0_26px_48px_rgba(0,0,0,0.2)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
