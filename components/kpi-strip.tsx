"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/section";
import { kpis } from "@/lib/data";

export function KpiStrip() {
  return (
    <Section
      id="case-studies"
      fullWidth
      className="relative overflow-hidden py-14 md:py-20"
    >
      <img
        src="/Untitled%20design%20(1).gif"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.2),rgba(255,255,255,0.08)_46%,rgba(255,255,255,0.16))]" />

      <div className="section-wrapper relative">
        {/* KPI Stats */}
        <div className="grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-6">
          {kpis.map((kpi, index) => (
            <motion.div
              key={kpi.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="px-3 py-3 text-center"
            >
              <div className="mb-1.5 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight bg-gradient-to-r from-white via-[#fff3e0] to-[#f3ead8] bg-clip-text text-transparent">
                {kpi.value}
              </div>
              <div className="mb-1 text-xs md:text-sm font-semibold uppercase tracking-[0.14em] text-white">
                {kpi.label}
              </div>
              <div className="text-xs text-white/90">{kpi.note}</div>
            </motion.div>
          ))}
        </div>

        {/* CTA Cluster */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.28 }}
          className="mt-10 flex flex-col items-center justify-center text-center"
        >
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight bg-gradient-to-r from-white via-[#f6e6d2] to-[#e9eaee] bg-clip-text text-transparent">
            Ready to modernise your cash handling?
          </h2>
          <p className="mt-3 max-w-2xl text-sm md:text-base text-white/82">
            See how automation can reduce errors, speed up transactions, and keep every till protected.
          </p>

          <Link href="/contact" className="mt-6">
            <Button
              size="lg"
              className="min-w-[190px] rounded-full border border-white/45 bg-white px-8 text-accent shadow-[0_18px_38px_-22px_rgba(0,0,0,0.45)] hover:bg-[#fffaf2] hover:text-accent"
            >
              Get in Touch
            </Button>
          </Link>
        </motion.div>
      </div>
    </Section>
  );
}
