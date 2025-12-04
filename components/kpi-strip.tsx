"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/section";
import { kpis, logos } from "@/lib/data";

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

      {/* Logos Row */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mb-16"
      >
        <p className="text-center text-sm text-muted mb-8">
          Trusted by leading retailers and hospitality brands
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {logos.map((logo, index) => (
            <div
              key={logo.src}
              className="opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
            >
              {/* Replace with final partner logos */}
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </div>
          ))}
        </div>
      </motion.div>

      {/* CTA Cluster */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <Button size="lg" className="min-w-[180px]">
          Book a Demo
        </Button>
        <Button variant="secondary" size="lg" className="min-w-[180px]">
          Request a Quote
        </Button>
      </motion.div>
    </Section>
  );
}
