"use client";

import { motion } from "framer-motion";
import { ShoppingCart, UtensilsCrossed, Zap, Ticket, Check, ArrowRight } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { GridBg } from "@/components/ornaments/grid-bg";
import { BeveledPanel } from "@/components/beveled-panel";

const industries = [
  {
    id: "retail",
    title: "Retail",
    icon: ShoppingCart,
    description: "From supermarkets to convenience stores, our cash management solutions help retailers reduce shrinkage, speed up transactions, and improve accuracy.",
    challenges: [
      "High transaction volumes during peak hours",
      "Cash discrepancies and shrinkage",
      "Time-consuming end-of-day reconciliation",
      "Staff training and turnover",
    ],
    solutions: [
      "Automated cash handling reduces human error by 98%",
      "Faster transactions with dedicated note slots",
      "Real-time cash position reporting",
      "Secure closed cash handling with audit trails",
    ],
    products: ["CashGuard Core", "CashGuard Premium", "CashProtect Pro"],
    stats: { value: "500+", label: "Retail installations nationwide" },
  },
  {
    id: "hospitality",
    title: "Hospitality",
    icon: UtensilsCrossed,
    description: "Bars, restaurants, and hotels benefit from our compact solutions designed for busy service environments with limited counter space.",
    challenges: [
      "Limited counter space",
      "Fast-paced service environment",
      "Multiple payment points",
      "Cash security during busy periods",
    ],
    solutions: [
      "Compact units fit any counter configuration",
      "All-in-one note and coin handling",
      "Quick staff training with intuitive interface",
      "Secure drop box collection",
    ],
    products: ["CashProtect Fusion", "CashMag Mini", "CashGuard Uni"],
    stats: { value: "28 seconds", label: "Average time saved per transaction" },
  },
  {
    id: "quick-service",
    title: "Quick Service",
    icon: Zap,
    description: "QSR environments demand speed and efficiency. Our solutions integrate seamlessly with POS systems to keep lines moving.",
    challenges: [
      "Speed of service is critical",
      "High staff turnover",
      "Multiple lanes to manage",
      "Consistent cash handling across locations",
    ],
    solutions: [
      "Fastest note return technology on the market",
      "Simple operation reduces training time",
      "Centralized reporting across all locations",
      "Standardized cash handling procedures",
    ],
    products: ["CashGuard Core", "CashGuard Uni", "CashProtect Fusion"],
    stats: { value: "98%", label: "Reduction in cash discrepancies" },
  },
  {
    id: "entertainment",
    title: "Entertainment",
    icon: Ticket,
    description: "Cinemas, arcades, and entertainment venues handle high cash volumes during events. Our solutions ensure accuracy and security.",
    challenges: [
      "Peak demand during events",
      "Multiple cash points",
      "Security concerns with large cash volumes",
      "Quick reconciliation needed",
    ],
    solutions: [
      "High-capacity cash storage",
      "Secure cassette collection system",
      "Real-time monitoring and alerts",
      "Fast end-of-day reconciliation",
    ],
    products: ["CashGuard Premium", "CashProtect Pro", "CashGuard Core"],
    stats: { value: "24/7", label: "Support and monitoring available" },
  },
];

export default function IndustriesPage() {
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
              Industries We <span className="text-accent">Serve</span>
            </h1>
            <p className="text-lg text-muted">
              Tailored cash management solutions for every business environment.
              From high-volume retail to intimate hospitality settings.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries */}
      {industries.map((industry, index) => (
        <Section
          key={industry.id}
          id={industry.id}
          className={index % 2 === 0 ? "" : "bg-panel"}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={index % 2 === 1 ? "lg:order-2" : ""}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <industry.icon className="h-8 w-8 text-accent" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-text">
                  {industry.title}
                </h2>
              </div>
              
              <p className="text-lg text-muted mb-8">{industry.description}</p>

              {/* Stat */}
              <div className="mb-8 p-6 bg-bg rounded-lg border border-border">
                <div className="text-4xl font-bold text-accent mb-1">
                  {industry.stats.value}
                </div>
                <div className="text-muted">{industry.stats.label}</div>
              </div>

              {/* Recommended Products */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
                  Recommended Products
                </h3>
                <div className="flex flex-wrap gap-2">
                  {industry.products.map((product) => (
                    <span
                      key={product}
                      className="px-3 py-1 bg-accent/10 rounded-full text-sm text-accent border border-accent/20"
                    >
                      {product}
                    </span>
                  ))}
                </div>
              </div>

              <Button size="lg" className="glow-accent">
                Get Industry Solution
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>

            {/* Challenges & Solutions */}
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? 40 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}
            >
              <BeveledPanel className="p-6">
                <h3 className="text-lg font-semibold text-text mb-4">
                  Industry Challenges
                </h3>
                <ul className="space-y-3">
                  {industry.challenges.map((challenge, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted">
                      <div className="h-2 w-2 rounded-full bg-accent/50 mt-2 shrink-0" />
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </BeveledPanel>

              <BeveledPanel className="p-6">
                <h3 className="text-lg font-semibold text-text mb-4">
                  Our Solutions
                </h3>
                <ul className="space-y-3">
                  {industry.solutions.map((solution, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted">
                      <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span>{solution}</span>
                    </li>
                  ))}
                </ul>
              </BeveledPanel>
            </motion.div>
          </div>
        </Section>
      ))}

      {/* CTA Section */}
      <Section className="bg-panel">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
            Don't see your industry?
          </h2>
          <p className="text-muted mb-8">
            We work with businesses across many sectors. Contact us to discuss your specific cash management needs.
          </p>
          <Button size="lg" className="glow-accent">
            Contact Our Team
          </Button>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
