"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Section } from "@/components/section";
import { GridBg } from "@/components/ornaments/grid-bg";
import { testimonials } from "@/components/sections/TestimonialsStrip";

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-bg">
      <Header />

      <section className="relative pt-32 pb-16 overflow-hidden">
        <GridBg />
        <div className="section-wrapper relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text mb-6">
              Client <span className="text-accent-gradient">Testimonials</span>
            </h1>
            <p className="text-lg text-muted">
              Real feedback from businesses across Ireland that have transformed their cash operations with e-Retail.
            </p>
          </motion.div>
        </div>
      </section>

      <Section>
        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative rounded-xl border border-border bg-panel p-8 shadow-sm"
            >
              <Quote className="absolute right-6 top-6 h-8 w-8 text-accent/20" />
              <p className="text-base leading-relaxed text-text md:text-lg">{t.quote}</p>
              <footer className="mt-6 border-t border-border pt-5">
                <p className="font-semibold text-text">{t.author}</p>
                <p className="text-sm text-muted">
                  {t.title} — {t.company}
                </p>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </Section>

      <Footer />
    </main>
  );
}
