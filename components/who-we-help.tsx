"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Gauge, Target, Shield } from "lucide-react";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const featureCards = [
  {
    title: "Throughput",
    outcome:
      "Move customers through the till faster without bottlenecks or manual delays.",
    icon: Gauge,
  },
  {
    title: "Accuracy",
    outcome:
      "Reduce discrepancies with automated cash validation and controlled handling.",
    icon: Target,
  },
  {
    title: "Security",
    outcome: "Limit exposure with closed cash handling and controlled access.",
    icon: Shield,
  },
];

export function WhoWeHelp() {
  return (
    <Section
      id="solutions"
      className="relative overflow-hidden bg-gradient-to-b from-[#ffffff] via-[#f8f8f8] to-[#fbfbfb] py-20 md:py-24"
      style={{
        fontFamily:
          '"SF Pro Display", "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Inter, sans-serif',
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.95),rgba(245,245,246,0.55)_45%,transparent_75%)]" />

      <div className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-4xl font-bold leading-tight tracking-tight text-zinc-900 md:text-5xl">
            Why Businesses Choose{" "}
            <span className="inline-flex items-baseline">
              <span className="bg-gradient-to-b from-[#f87171] via-[#ef4444] to-[#b91c1c] bg-clip-text text-transparent text-[1.18em] font-extrabold">
                e
              </span>
              <span className="bg-gradient-to-b from-[#f87171] via-[#ef4444] to-[#b91c1c] bg-clip-text text-transparent">
                -Retail
              </span>
            </span>
          </h2>
          <p className="mt-5 text-base text-zinc-600 md:text-lg">
            Built to eliminate errors, accelerate transactions, and secure every
            euro.
          </p>
        </motion.div>

        <div className="mx-auto mt-10 h-px w-20 bg-zinc-300/80" />

        <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-5 md:mt-12 md:grid-cols-3 md:gap-6">
          {featureCards.map((card, index) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="group relative overflow-hidden rounded-2xl border border-zinc-200/90 bg-[#f7f7f8] px-6 py-7 shadow-[0_14px_28px_-20px_rgba(15,23,42,0.35)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/25 hover:shadow-[0_20px_38px_-22px_rgba(15,23,42,0.32),0_0_0_1px_rgba(220,38,38,0.08),0_0_14px_rgba(220,38,38,0.12)]"
            >
              <GlowingEffect
                disabled={false}
                proximity={72}
                spread={40}
                borderWidth={2}
                inactiveZone={0.24}
                movementDuration={0.3}
              />
              <card.icon className="h-5 w-5 text-zinc-700 mb-5" strokeWidth={1.6} />
              <h3 className="text-xl font-semibold tracking-tight text-zinc-900">
                {card.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                {card.outcome}
              </p>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.12 }}
          className="mx-auto mt-12 flex flex-wrap items-center justify-center gap-3"
        >
          <Link href="/products">
            <Button
              size="lg"
              variant="secondary"
              className="rounded-full border border-zinc-300 bg-white/90 px-7 text-zinc-800 hover:bg-white"
            >
              Explore
            </Button>
          </Link>
          <Link href="/contact">
            <Button
              size="lg"
              className="rounded-full bg-accent px-7 text-white shadow-[0_10px_26px_-14px_rgba(220,38,38,0.8)] hover:bg-accent/90"
            >
              Contact us
            </Button>
          </Link>
        </motion.div>
      </div>
    </Section>
  );
}
