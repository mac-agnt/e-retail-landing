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

type Testimonial = {
  quote: string;
  author: string;
  company: string;
};

type CaseStudy = {
  id: string;
  title: string;
  industry: string;
  location: string;
  product: string;
  image: string;
  challenge: string;
  solution: string;
  testimonial?: Testimonial;
  placeholder?: boolean;
};

const caseStudies: CaseStudy[] = [
  {
    id: "supermacs",
    title: "Supermacs",
    industry: "Quick Service Restaurant",
    location: "Ireland",
    product: "CashProtect Fusion",
    image: "/images/cashprotect-fusion.png",
    challenge: "Supermacs needed to strengthen cash security, reduce manual float management, and give their Financial Controller real-time visibility of cash levels across their busy QSR locations.",
    solution: "Two CashProtect Fusion machines were deployed, automating cash counting and eliminating manual floats. The system integrates directly into their operations, providing real-time cash level reporting and full staff accountability.",
    testimonial: {
      quote: "We recently purchased two CashProtect Fusion machines from Cash Guard, and they have already proven to be a valuable asset to our Supermacs business. Their implementation has strengthened our security measures, improved operational efficiency, and significantly reduced cash-handling errors. By automating cash counting, removing the need for manual floats, and providing real-time visibility of cash levels, the Fusion system has enabled us to streamline our cash-handling processes and allow staff to dedicate more time to customer service. As Financial Controller, the enhanced control and transparency provided by the Fusion gives me real peace of mind in the management of our business operations.",
      author: "John Haughey, Financial Controller",
      company: "Supermacs",
    },
  },
  {
    id: "aran-bakeries",
    title: "Aran Bakeries",
    industry: "Bakery",
    location: "Ireland",
    product: "CashGuard Uni",
    image: "/images/cashguard-uni.png",
    challenge: "Case study coming soon — interview pending.",
    solution: "Details coming soon.",
    placeholder: true,
  },
  {
    id: "vegetable-store",
    title: "Vegetable Store",
    industry: "Greengrocer",
    location: "Ireland",
    product: "CashProtect Touch",
    image: "/images/cashprotect-touch.png",
    challenge: "Case study coming soon — interview pending.",
    solution: "Details coming soon.",
    placeholder: true,
  },
  {
    id: "centra-scallys",
    title: "CENTRA Scallys, Summerhill",
    industry: "Convenience",
    location: "Ireland",
    product: "CashGuard Core",
    image: "/images/cashguard-core.png",
    challenge: "Case study coming soon — interview pending.",
    solution: "Details coming soon.",
    placeholder: true,
  },
  {
    id: "spar-aran",
    title: "SPAR Aran Islands",
    industry: "Convenience",
    location: "Ireland",
    product: "CashGuard Core",
    image: "/images/cashguard-core.png",
    challenge: "Case study coming soon — interview pending.",
    solution: "Details coming soon.",
    placeholder: true,
  },
  {
    id: "opw",
    title: "OPW",
    industry: "Public Sector",
    location: "Ireland",
    product: "CashMag Mini",
    image: "/images/cashmag-mini.png",
    challenge: "Case study coming soon — interview pending.",
    solution: "Details coming soon.",
    placeholder: true,
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
              Customer <span className="text-accent-gradient">Success Stories</span>
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
                <span className="px-3 py-1 bg-accent/10 rounded-full text-sm text-accent-gradient">
                  {study.industry}
                </span>
                <span className="px-3 py-1 bg-panel-2 rounded-full text-sm text-muted">
                  {study.location}
                </span>
              </div>
            </div>

            {study.placeholder ? (
              <div className="rounded-lg border border-border bg-panel/40 p-8">
                <div className="grid md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] gap-8 items-center">
                  <div className="relative aspect-video rounded-lg overflow-hidden bg-panel">
                    <Image
                      src={study.image}
                      alt={study.product}
                      fill
                      className="object-contain p-8"
                      sizes="(max-width: 768px) 100vw, 40vw"
                    />
                  </div>
                  <div className="space-y-3">
                    <div className="text-sm text-muted">
                      Product: <span className="text-accent-gradient font-semibold">{study.product}</span>
                    </div>
                    <p className="text-muted italic">Case study coming soon — full write-up and on-site video pending.</p>
                  </div>
                </div>
              </div>
            ) : (
              <>
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
                      Product used: <span className="text-accent-gradient font-semibold">{study.product}</span>
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

                {/* Testimonial */}
                {study.testimonial && (
                  <div className="mt-12 p-8 bg-panel rounded-lg border border-border relative">
                    <Quote className="absolute top-6 left-6 h-8 w-8 text-accent/20" />
                    <blockquote className="text-lg text-text italic mb-4 pl-8">
                      &ldquo;{study.testimonial.quote}&rdquo;
                    </blockquote>
                    <div className="pl-8">
                      <div className="font-semibold text-text">{study.testimonial.author}</div>
                      <div className="text-sm text-muted">{study.testimonial.company}</div>
                    </div>
                  </div>
                )}
              </>
            )}
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
