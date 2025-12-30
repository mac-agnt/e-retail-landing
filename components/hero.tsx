"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { InfiniteGrid } from "@/components/ui/infinite-grid";
import { trustBullets } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative">
      <InfiniteGrid
        className="min-h-screen pt-20 bg-bg"
        primaryGradientColor="rgba(220, 38, 38, 0.12)"
        secondaryGradientColor="rgba(220, 38, 38, 0.08)"
        gridColorClass="text-accent"
        speed={0.25}
        spotlightRadius={400}
      >
        <div className="section-wrapper">
          <div className="max-w-4xl mx-auto text-center">
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-text leading-tight mb-6"
            >
              Your Tills Are Leaking Cash.{" "}
              <span className="text-accent">We Stop It.</span>
            </motion.h1>

            {/* Subcopy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted mb-10 max-w-2xl mx-auto"
            >
              e-Retail&apos;s automated cash systems eliminate till discrepancies,
              cut cash-handling labour by 80%, and pay for themselves in under
              18 months. Trusted by 500+ stores across Ireland.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
            >
              <Link href="/contact">
                <Button size="lg" className="glow-accent">
                  Book a Free Store Assessment
                </Button>
              </Link>
              <Link href="/roi-calculator">
                <Button size="lg" variant="outline">
                  Calculate Your Cash Handling Costs →
                </Button>
              </Link>
            </motion.div>

            {/* Trust Bullets */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-x-8 gap-y-3"
            >
              {trustBullets.map((bullet, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-sm text-muted"
                >
                  <Check className="h-4 w-4 text-accent" />
                  <span>{bullet}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </InfiniteGrid>
    </section>
  );
}
