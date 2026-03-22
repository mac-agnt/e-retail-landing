"use client";

import { motion } from "framer-motion";

const metrics = [
  { value: "–40%", label: "Fewer staff interruptions", accent: true },
  { value: "+12%", label: "Higher average basket value", accent: false },
  { value: "24/7", label: "Always available assistance", accent: false },
  { value: "<2s", label: "Response time", accent: false },
];

export function ROI() {
  return (
    <section
      className="relative overflow-hidden py-24 md:py-32"
      style={{
        background: "linear-gradient(to bottom, #f3f2ef, #ecebea)",
      }}
    >
      <div className="pointer-events-none absolute inset-0 site-grain" />
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 70% 50%, rgba(255,255,255,0.4), transparent 60%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0.85 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto w-full max-w-[1280px] px-6 sm:px-8 lg:px-12"
      >
        <div className="grid gap-12 lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-0">
          {/* Left: messaging */}
          <div className="lg:pr-16">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-xs font-medium uppercase tracking-[0.18em] text-black/50"
            >
              Commercial Value
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.06 }}
              className="mt-4 text-3xl font-semibold tracking-tight leading-[1.08] text-[#111111] md:text-[2.125rem]"
            >
              Built to improve the floor. And the numbers.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.12 }}
              className="mt-6 max-w-md text-[15px] leading-[1.55] text-black/62"
            >
              Reduce interruptions, increase basket value, and operate with more confidence at every checkout.
            </motion.p>
          </div>

          {/* Vertical divider with subtle glow */}
          <div className="hidden w-px flex-shrink-0 self-stretch px-10 lg:block">
            <div
              className="mx-auto h-full w-px"
              style={{
                background: "linear-gradient(to bottom, transparent, rgba(0,0,0,0.08) 10%, rgba(0,0,0,0.08) 90%, transparent)",
                boxShadow: "0 0 24px rgba(220,38,38,0.06)",
              }}
            />
          </div>

          {/* Right: metric blocks */}
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-2 lg:gap-5 lg:pl-16">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.12 + index * 0.1 }}
                className="rounded-xl border border-black/[0.06] bg-white/80 px-6 py-6 shadow-[0_4px_20px_rgba(0,0,0,0.04)] backdrop-blur-sm transition-shadow duration-300 hover:shadow-[0_6px_24px_rgba(0,0,0,0.05)]"
              >
                <p
                  className={`text-2xl font-bold tracking-tight tabular-nums md:text-[1.75rem] ${
                    metric.accent ? "text-accent" : "text-[#111111]"
                  }`}
                >
                  {metric.value}
                </p>
                <p className="mt-1.5 text-[13px] font-medium text-black/62">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
