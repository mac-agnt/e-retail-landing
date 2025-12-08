"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { Quote, TrendingUp, Clock, Shield, ArrowRight } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { GridBg } from "@/components/ornaments/grid-bg";
import { BeveledPanel } from "@/components/beveled-panel";

const caseStudies = [
  {
    id: "supermarket-chain",
    title: "National Supermarket Chain",
    industry: "Retail",
    location: "Nationwide, Ireland",
    product: "CashGuard Premium",
    image: "/images/cashguard-premium.jpeg",
    challenge: "A leading Irish supermarket chain with 45 locations was experiencing significant cash discrepancies, averaging €2,000 per store monthly. End-of-day reconciliation was taking staff over 45 minutes per lane.",
    solution: "We deployed CashGuard Premium units across all checkout lanes in their busiest 20 stores, with full POS integration and centralized reporting.",
    results: [
      { metric: "98%", label: "Reduction in cash discrepancies" },
      { metric: "35 min", label: "Saved per lane daily on reconciliation" },
      { metric: "€480K", label: "Annual savings across all stores" },
      { metric: "6 months", label: "Full ROI achieved" },
    ],
    testimonial: {
      quote: "The CashGuard system has transformed our cash handling operations. Our staff love how simple it is, and our finance team finally has accurate real-time data.",
      author: "Operations Director",
      company: "National Supermarket Chain",
    },
  },
  {
    id: "pharmacy-group",
    title: "Independent Pharmacy Group",
    industry: "Healthcare Retail",
    location: "Dublin & Cork",
    product: "CashMag Mini",
    image: "/images/cashmag-mini.jpeg",
    challenge: "A group of 8 pharmacies needed a cash management solution that wouldn't take up valuable counter space. Staff were spending too much time on cash handling instead of customer care.",
    solution: "The compact CashMag Mini was perfect for their limited counter space. We installed units at each location with training completed in under 2 hours per store.",
    results: [
      { metric: "100%", label: "Counter space preserved" },
      { metric: "20 sec", label: "Faster per transaction" },
      { metric: "Zero", label: "Cash discrepancies since install" },
      { metric: "2 hours", label: "Staff training time" },
    ],
    testimonial: {
      quote: "We were worried about finding space for a cash machine, but the CashMag Mini fits perfectly. It's been running flawlessly for over a year now.",
      author: "Pharmacy Owner",
      company: "Independent Pharmacy Group",
    },
  },
  {
    id: "hotel-restaurant",
    title: "Boutique Hotel & Restaurant",
    industry: "Hospitality",
    location: "Galway",
    product: "CashProtect Fusion",
    image: "/images/cashprotect-fusion.jpeg",
    challenge: "A busy hotel restaurant was struggling with cash security during peak service times. Multiple staff accessing the till led to accountability issues and occasional shortages.",
    solution: "CashProtect Fusion provided secure, user-authenticated cash handling with individual staff accountability and drop-box collection for shift changes.",
    results: [
      { metric: "100%", label: "Staff accountability" },
      { metric: "€0", label: "Cash shortages since install" },
      { metric: "15 min", label: "Shift handover time (was 45 min)" },
      { metric: "4.9★", label: "Staff satisfaction rating" },
    ],
    testimonial: {
      quote: "The user authentication feature means every transaction is tracked to the individual. It's given us complete peace of mind and our staff appreciate the clarity.",
      author: "Hotel Manager",
      company: "Boutique Hotel & Restaurant",
    },
  },
];

const stats = [
  { icon: TrendingUp, value: "500+", label: "Successful Installations" },
  { icon: Clock, value: "98%", label: "Customer Retention Rate" },
  { icon: Shield, value: "€2M+", label: "Customer Savings Annually" },
];

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-bg">
      <Header />
      
      {/* Hero Section */}
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
              Customer <span className="text-accent">Success Stories</span>
            </h1>
            <p className="text-lg text-muted">
              See how businesses across Ireland have transformed their cash operations
              with our automated cash management solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <Section className="bg-panel py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <stat.icon className="h-8 w-8 text-accent mx-auto mb-3" />
              <div className="text-4xl font-bold text-text mb-1">{stat.value}</div>
              <div className="text-muted">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Case Studies */}
      {caseStudies.map((study, index) => (
        <Section
          key={study.id}
          id={study.id}
          className={index % 2 === 1 ? "bg-panel" : ""}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Header */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-text">
                {study.title}
              </h2>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-accent/10 rounded-full text-sm text-accent">
                  {study.industry}
                </span>
                <span className="px-3 py-1 bg-panel-2 rounded-full text-sm text-muted">
                  {study.location}
                </span>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left - Image & Product */}
              <div>
                <div className="relative aspect-video mb-6 rounded-lg overflow-hidden bg-panel">
                  <Image
                    src={study.image}
                    alt={study.product}
                    fill
                    className="object-contain p-8"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="text-sm text-muted">
                  Product used: <span className="text-accent font-semibold">{study.product}</span>
                </div>
              </div>

              {/* Right - Challenge & Solution */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-text mb-3">The Challenge</h3>
                  <p className="text-muted">{study.challenge}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text mb-3">Our Solution</h3>
                  <p className="text-muted">{study.solution}</p>
                </div>
              </div>
            </div>

            {/* Results Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
              {study.results.map((result, i) => (
                <BeveledPanel key={i} className="p-6 text-center">
                  <div className="text-3xl font-bold text-accent mb-1">
                    {result.metric}
                  </div>
                  <div className="text-sm text-muted">{result.label}</div>
                </BeveledPanel>
              ))}
            </div>

            {/* Testimonial */}
            <div className="mt-12 p-8 bg-panel rounded-lg border border-border relative">
              <Quote className="absolute top-6 left-6 h-8 w-8 text-accent/20" />
              <blockquote className="text-lg text-text italic mb-4 pl-8">
                "{study.testimonial.quote}"
              </blockquote>
              <div className="pl-8">
                <div className="font-semibold text-text">{study.testimonial.author}</div>
                <div className="text-sm text-muted">{study.testimonial.company}</div>
              </div>
            </div>
          </motion.div>
        </Section>
      ))}

      {/* CTA Section */}
      <Section className="bg-panel">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
            Ready to write your success story?
          </h2>
          <p className="text-muted mb-8">
            Join 500+ Irish businesses that have transformed their cash operations with e-Retail.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="glow-accent">
                Book a Demo
              </Button>
            </Link>
            <Link href="/products">
              <Button variant="secondary" size="lg">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
