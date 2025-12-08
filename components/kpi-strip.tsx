"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/section";
import { kpis } from "@/lib/data";

export function KpiStrip() {
  return (
    <Section id="case-studies" className="bg-panel-2/50">
      {/* KPI Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
        {kpis.map((kpi, index) => (
          <motion.div
            key={kpi.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="text-center"
          >
            <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
              {kpi.value}
            </div>
            <div className="text-sm font-medium text-text mb-1">{kpi.label}</div>
            <div className="text-xs text-muted">{kpi.note}</div>
          </motion.div>
        ))}
      </div>

      {/* CTA Cluster */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <Link href="/contact">
          <Button size="lg" className="min-w-[180px]">
            Get in Touch
          </Button>
        </Link>
      </motion.div>
    </Section>
  );
}
