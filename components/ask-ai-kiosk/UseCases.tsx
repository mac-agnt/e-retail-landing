"use client";

import { motion } from "framer-motion";

const industries = [
  "Premium Retail",
  "Supermarkets",
  "Convenience",
  "Pharmacy",
  "Hospitality",
  "Electronics",
  "Homeware",
  "Showrooms",
  "Forecourts",
  "Department Stores",
];

const TICKER_SPEED_S = 45;

export function UseCases() {
  return (
    <section className="relative overflow-x-hidden bg-[#f7f7f5] py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 site-grain opacity-[0.4]" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 80% 40% at 50% 50%, rgba(255,255,255,0.5), transparent 70%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1200px] px-6 sm:px-8">
        <header className="mx-auto max-w-2xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-xs font-medium uppercase tracking-[0.2em] text-black/50"
          >
            Designed for real retail environments
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.06 }}
            className="mt-4 text-3xl font-semibold tracking-tight leading-[1.06] text-[#111111] md:text-[2.5rem] md:tracking-[-0.02em]"
          >
            Built for every kind of <span className="text-accent-gradient">floor</span>.
          </motion.h2>
        </header>

        {/* Full-bleed ticker: breaks out to viewport edges for edge fades */}
        <div
          className="relative mt-20 w-screen overflow-hidden md:mt-16"
          style={{ marginLeft: "calc(50% - 50vw)" }}
          role="marquee"
          aria-label="Store types"
        >
          {/* Edge fade masks - flush to viewport edges */}
          <div
            className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 md:w-32 lg:w-40"
            style={{
              background: "linear-gradient(to right, #f7f7f5 0%, rgba(247,247,245,0.95) 40%, transparent 100%)",
            }}
          />
          <div
            className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 md:w-32 lg:w-40"
            style={{
              background: "linear-gradient(to left, #f7f7f5 0%, rgba(247,247,245,0.95) 40%, transparent 100%)",
            }}
          />

          <div
            className="overflow-hidden"
            style={{
              maskImage: "linear-gradient(to right, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.92) 18%, black 35%, black 65%, rgba(0,0,0,0.92) 82%, rgba(0,0,0,0.6) 100%)",
              WebkitMaskImage: "linear-gradient(to right, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.92) 18%, black 35%, black 65%, rgba(0,0,0,0.92) 82%, rgba(0,0,0,0.6) 100%)",
              maskSize: "100% 100%",
              WebkitMaskSize: "100% 100%",
            }}
          >
            <div
              className="flex w-max flex-nowrap gap-14 md:gap-20 lg:gap-24 py-4 will-change-transform"
              style={{
                animation: `use-cases-ticker ${TICKER_SPEED_S}s linear infinite`,
              }}
            >
              {[...industries, ...industries].map((industry, i) => (
                <span
                  key={`${industry}-${i}`}
                  className="flex-shrink-0 whitespace-nowrap text-[1.75rem] font-semibold tracking-tight text-black/85 md:text-[2.25rem] lg:text-[2.5rem]"
                >
                  {industry}
                </span>
              ))}
            </div>
          </div>

        </div>

        <div className="mx-auto mt-12 h-px max-w-5xl bg-black/[0.06]" />
      </div>
    </section>
  );
}
