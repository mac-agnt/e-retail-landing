"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { InfiniteGrid } from "@/components/ui/infinite-grid";
import { trustBullets } from "@/lib/data";

export function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");
    const onChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    setIsMobile(media.matches);
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  const content = (
    <div className="section-wrapper">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h1
          initial={isMobile ? false : { opacity: 0, y: 20 }}
          animate={isMobile ? undefined : { opacity: 1, y: 0 }}
          transition={isMobile ? undefined : { duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-text leading-tight mb-6"
        >
          Save money saving time, giving you more time to{" "}
          <span className="bg-gradient-to-r from-[#ff6f6f] via-[#e63333] to-[#a3151b] bg-clip-text text-transparent">
            concentrate on your business
          </span>
        </motion.h1>

        <motion.p
          initial={isMobile ? false : { opacity: 0, y: 20 }}
          animate={isMobile ? undefined : { opacity: 1, y: 0 }}
          transition={isMobile ? undefined : { duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-muted mb-10 max-w-3xl mx-auto"
        >
          e-Retail automated cash management systems mean no overs/no unders and the end of day figures always matching the physical cash. No errors, no discrepancies, no staff stress/no manager stress/no owner stress.{" "}
          <span className="text-zinc-700">
            Trusted in 500+ stores across Ireland
          </span>
          .
        </motion.p>

        <motion.div
          initial={isMobile ? false : { opacity: 0, y: 20 }}
          animate={isMobile ? undefined : { opacity: 1, y: 0 }}
          transition={isMobile ? undefined : { duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
        >
          <Link href="/contact">
            <Button
              size="lg"
              className="rounded-full bg-accent px-8 text-white shadow-[0_10px_26px_-14px_rgba(220,38,38,0.8)] hover:bg-accent/90"
            >
              Get in touch
            </Button>
          </Link>
          <Link href="/products">
            <Button
              size="lg"
              variant="secondary"
              className="rounded-full border border-zinc-300 bg-white/90 px-8 text-zinc-800 hover:bg-white"
            >
              View products
            </Button>
          </Link>
        </motion.div>

        <motion.div
          initial={isMobile ? false : { opacity: 0, y: 20 }}
          animate={isMobile ? undefined : { opacity: 1, y: 0 }}
          transition={isMobile ? undefined : { duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-x-8 gap-y-3"
        >
          {trustBullets.map((bullet, index) => (
            <div key={index} className="flex items-center gap-2 text-sm text-muted">
              <Check className="h-4 w-4 text-accent" />
              <span>{bullet}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );

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
        {content}
      </InfiniteGrid>
    </section>
  );
}
