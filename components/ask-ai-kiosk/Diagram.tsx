"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const storeDataPills = ["Products", "Inventory", "Promotions", "Store Layout", "FAQs"];
const chatOutputs = ["It's on aisle 4.", "This one is better for…", "Yes, it's in stock."];

function FlowConnector({ isHovered }: { isHovered: boolean }) {
  return (
    <div
      className={`relative mx-2 flex h-px flex-1 min-w-[48px] max-w-[80px] items-center transition-colors duration-300 md:mx-4 md:max-w-[100px] ${
        isHovered ? "bg-accent/15" : "bg-neutral-200/60"
      }`}
    >
      <span
        className={`absolute left-0 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full transition-colors duration-300 ${
          isHovered ? "bg-accent/80" : "bg-accent/50"
        }`}
        style={{
          animation: "diagram-flow-dot 4s ease-in-out infinite alternate",
        }}
      />
    </div>
  );
}

export function Diagram() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.4) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(255,255,255,0.9),transparent_60%)]" />

      <div className="relative mx-auto w-full max-w-[1200px] px-6 sm:px-8">
        <header className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-3xl font-semibold tracking-tight leading-[1.06] text-[#111111] md:text-[2.25rem] md:tracking-[-0.02em]"
          >
            Trained on your <span className="text-accent-gradient">store</span>. Not the internet.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.06 }}
            className="mx-auto mt-4 max-w-xl text-base text-black/62 leading-[1.5]"
          >
            Every answer is shaped by your products, policies, layout, and live environment — not generic AI.
          </motion.p>
        </header>

        <div className="mx-auto mt-16 max-w-5xl md:mt-20">
          {/* Desktop: horizontal flow */}
          <div className="hidden items-stretch justify-center gap-0 md:flex">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              onMouseEnter={() => setHoveredIndex(0)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group flex flex-1 max-w-[240px] flex-col rounded-2xl border border-neutral-200/50 bg-white/80 px-5 py-5 shadow-[0_4px_20px_rgba(0,0,0,0.04)] backdrop-blur-md transition-all duration-300 ease-out hover:-translate-y-[3px] hover:border-neutral-300/60 hover:shadow-[0_8px_28px_rgba(0,0,0,0.06)]"
            >
              <h3 className="text-[15px] font-semibold tracking-tight text-[#111111]">Store Data</h3>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {storeDataPills.map((pill) => (
                  <span
                    key={pill}
                    className="rounded-full bg-neutral-100 px-2.5 py-1 text-[11px] font-medium text-neutral-600"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </motion.div>

            <FlowConnector isHovered={hoveredIndex === 0 || hoveredIndex === 1} />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.18 }}
              onMouseEnter={() => setHoveredIndex(1)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative flex flex-1 max-w-[240px] flex-col rounded-2xl border border-neutral-200/50 bg-white/80 px-5 py-5 shadow-[0_4px_20px_rgba(0,0,0,0.04)] backdrop-blur-md transition-all duration-300 ease-out hover:-translate-y-[3px] hover:border-neutral-300/60 hover:shadow-[0_8px_28px_rgba(0,0,0,0.06)]"
            >
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-[0.4]"
                style={{
                  background: "radial-gradient(circle at 50% 50%, rgba(220,38,38,0.06), transparent 70%)",
                  animation: "diagram-node-glow 4s ease-in-out infinite",
                }}
              />
              <h3 className="relative text-[15px] font-semibold tracking-tight text-[#111111]">AI Understanding</h3>
              <p className="relative mt-2 text-[13px] leading-[1.45] text-neutral-600">
                Structured, refined, and continuously updated.
              </p>
            </motion.div>

            <FlowConnector isHovered={hoveredIndex === 1 || hoveredIndex === 2} />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.26 }}
              onMouseEnter={() => setHoveredIndex(2)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group flex flex-1 max-w-[240px] flex-col rounded-2xl border border-neutral-200/50 bg-white/80 px-5 py-5 shadow-[0_4px_20px_rgba(0,0,0,0.04)] backdrop-blur-md transition-all duration-300 ease-out hover:-translate-y-[3px] hover:border-neutral-300/60 hover:shadow-[0_8px_28px_rgba(0,0,0,0.06)]"
            >
              <h3 className="text-[15px] font-semibold tracking-tight text-[#111111]">Customer Interaction</h3>
              <div className="mt-3 space-y-1.5">
                {chatOutputs.map((line) => (
                  <p key={line} className="text-[12px] leading-[1.5] text-neutral-600">
                    “{line}”
                  </p>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Mobile: stacked with vertical connectors */}
          <div className="flex flex-col gap-4 md:hidden">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.1 }}
              className="rounded-2xl border border-neutral-200/50 bg-white/80 px-5 py-5 shadow-[0_4px_20px_rgba(0,0,0,0.04)] backdrop-blur-md"
            >
              <h3 className="text-[15px] font-semibold tracking-tight text-[#111111]">Store Data</h3>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {storeDataPills.map((pill) => (
                  <span
                    key={pill}
                    className="rounded-full bg-neutral-100 px-2.5 py-1 text-[11px] font-medium text-neutral-600"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </motion.div>

            <div className="relative flex h-10 justify-center">
              <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-neutral-200/60" />
              <span
                className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-accent/50"
                style={{ animation: "diagram-flow-vertical 4s ease-in-out infinite alternate" }}
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.2 }}
              className="relative rounded-2xl border border-neutral-200/50 bg-white/80 px-5 py-5 shadow-[0_4px_20px_rgba(0,0,0,0.04)] backdrop-blur-md"
            >
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-[0.4]"
                style={{
                  background: "radial-gradient(circle at 50% 50%, rgba(220,38,38,0.06), transparent 70%)",
                  animation: "diagram-node-glow 4s ease-in-out infinite",
                }}
              />
              <h3 className="relative text-[15px] font-semibold tracking-tight text-[#111111]">AI Understanding</h3>
              <p className="relative mt-2 text-[13px] leading-[1.45] text-neutral-600">
                Structured, refined, and continuously updated.
              </p>
            </motion.div>

            <div className="relative flex h-10 justify-center">
              <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-neutral-200/60" />
              <span
                className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-accent/50"
                style={{ animation: "diagram-flow-vertical 4s ease-in-out 2s infinite alternate" }}
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.3 }}
              className="rounded-2xl border border-neutral-200/50 bg-white/80 px-5 py-5 shadow-[0_4px_20px_rgba(0,0,0,0.04)] backdrop-blur-md"
            >
              <h3 className="text-[15px] font-semibold tracking-tight text-[#111111]">Customer Interaction</h3>
              <div className="mt-3 space-y-1.5">
                {chatOutputs.map((line) => (
                  <p key={line} className="text-[12px] leading-[1.5] text-neutral-600">
                    “{line}”
                  </p>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
