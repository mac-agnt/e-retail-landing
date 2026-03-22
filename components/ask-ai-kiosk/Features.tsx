"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Clock, Languages, LayoutGrid, MessageCircle } from "lucide-react";

const FeaturesKioskScene = dynamic(
  () => import("./KioskModel").then((mod) => mod.FeaturesKioskScene),
  { ssr: false }
);

const features = [
  {
    icon: MessageCircle,
    title: "Instant assistance",
    description: "Answers customer questions the moment they're asked.",
  },
  {
    icon: Clock,
    title: "Always available",
    description: "Operates continuously without adding pressure to staff.",
  },
  {
    icon: LayoutGrid,
    title: "Store-aware intelligence",
    description: "Understands your products, layout, and policies.",
  },
  {
    icon: Languages,
    title: "Multilingual support",
    description: "Help more people in the language they prefer.",
  },
];

export function Features() {
  return (
    <section className="relative border-t border-black/[0.06] bg-gradient-to-b from-[#f7f7f5] to-[#f1f0ee] py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1200px] px-6 sm:px-8">
        <header className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-3xl font-semibold tracking-tight leading-[1.06] text-[#111111] md:text-[2.25rem] md:tracking-[-0.02em]"
          >
            Built for <span className="text-accent-gradient">modern retail</span> floors.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="mx-auto mt-4 max-w-xl text-base text-black/62 leading-[1.5]"
          >
            Designed to operate seamlessly in real-world retail environments — fast, reliable, and always on.
          </motion.p>
        </header>

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-end lg:mt-20">
          {/* Left: black kiosk 3D model, base midway through multilingual card */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative h-[480px] w-full overflow-visible md:h-[560px] lg:mb-6"
          >
            <div className="absolute inset-0 overflow-visible">
              <FeaturesKioskScene />
            </div>
          </motion.div>

          {/* Right: feature stack */}
          <div className="flex flex-col gap-4 md:gap-5">
            {features.map((feature, index) => (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: 0.08 + index * 0.1 }}
                className="group rounded-2xl border border-black/[0.06] bg-white/70 px-6 py-5 shadow-[0_4px_20px_rgba(0,0,0,0.04)] backdrop-blur-sm transition-all duration-300 ease-out hover:-translate-y-[3px] hover:border-accent hover:shadow-[0_8px_28px_rgba(0,0,0,0.06)]"
              >
                <feature.icon
                  className="h-5 w-5 text-[#1f1f1f] transition-colors duration-300 group-hover:text-accent"
                  strokeWidth={1.6}
                />
                <h3 className="mt-4 text-[17px] font-semibold tracking-tight text-[#111111]">
                  {feature.title}
                </h3>
                <p className="mt-1.5 text-[15px] leading-[1.5] text-black/62">
                  {feature.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
