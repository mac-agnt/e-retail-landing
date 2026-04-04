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
      className="relative overflow-hidden py-16 md:py-24"
    >
      <img
        src="/Untitled%20design%20(1).gif"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.2),rgba(255,255,255,0.08)_46%,rgba(255,255,255,0.16))]" />

      <div className="section-wrapper relative flex w-full flex-col items-center">
        {/* Stats: supporting layer — lighter weight, does not compete with headline */}
        <div className="w-full opacity-[0.82] md:opacity-90">
          <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-4 md:gap-x-6 md:gap-y-0">
            {kpis.map((kpi, index) => (
              <motion.div
                key={kpi.headline}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="flex flex-col items-center text-center"
              >
                <div className="text-sm font-medium leading-snug tracking-tight text-white/80 md:text-[0.95rem]">
                  {kpi.headline}
                </div>
                <div className="mt-2.5 text-[11px] leading-relaxed text-white/60 md:mt-3 md:text-xs md:leading-relaxed">
                  {kpi.subline}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Focal conversion block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="mt-16 flex w-full flex-col items-center text-center md:mt-20 lg:mt-24"
        >
          <h2 className="max-w-3xl text-3xl font-bold leading-tight tracking-tight text-white drop-shadow-[0_1px_12px_rgba(0,0,0,0.25)] md:text-4xl md:leading-[1.12] lg:text-[2.5rem]">
            Ready to modernise your cash handling?
          </h2>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/75 md:mt-7 md:text-[0.95rem] md:leading-relaxed lg:text-base">
            Reduce errors. Move customers faster. Keep every euro accounted for.
          </p>

          <Link href="/contact" className="mt-10 md:mt-11">
            <Button
              size="lg"
              className="h-12 min-w-[200px] rounded-full border border-white/50 bg-white px-10 text-base font-semibold text-accent shadow-[0_18px_40px_-18px_rgba(0,0,0,0.5)] hover:bg-[#fffaf2] hover:text-accent md:h-14 md:min-w-[220px] md:px-11"
            >
              Get in Touch
            </Button>
          </Link>
        </motion.div>
      </div>
    </Section>
  );
}
