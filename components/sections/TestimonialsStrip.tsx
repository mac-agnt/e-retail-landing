"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Link from "next/link";
import { Section } from "@/components/section";

export const testimonials = [
  {
    quote:
      "We recently purchased two CashProtect Fusion machines from Cash Guard, and they have already proven to be a valuable asset to our Supermacs business. Their implementation has strengthened our security measures, improved operational efficiency, and significantly reduced cash-handling errors. By automating cash counting, removing the need for manual floats, and providing real-time visibility of cash levels, the Fusion system has enabled us to streamline our cash-handling processes and allow staff to dedicate more time to customer service. As Financial Controller, the enhanced control and transparency provided by the Fusion gives me real peace of mind in the management of our business operations.",
    author: "John Haughey",
    title: "Financial Controller",
    company: "Supermacs",
  },
];

export function TestimonialsStrip() {
  return (
    <Section id="testimonials" className="bg-panel">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted">
            Client Testimonials
          </p>
          <h2 className="text-3xl font-bold text-text md:text-4xl">
            What Our <span className="text-accent-gradient">Customers Say</span>
          </h2>
        </div>
        <Link
          href="/testimonials"
          className="hidden text-sm font-medium text-accent underline-offset-4 hover:underline sm:block"
        >
          View all →
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <motion.blockquote
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            className="relative rounded-xl border border-border bg-bg p-6 shadow-sm"
          >
            <Quote className="absolute right-5 top-5 h-6 w-6 text-accent/20" />
            <p className="text-[0.95rem] leading-relaxed text-text">{t.quote}</p>
            <footer className="mt-5 border-t border-border pt-4">
              <p className="text-sm font-semibold text-text">{t.author}</p>
              <p className="text-xs text-muted">
                {t.title} — {t.company}
              </p>
            </footer>
          </motion.blockquote>
        ))}
      </div>
    </Section>
  );
}
