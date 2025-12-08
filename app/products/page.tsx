"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Section, SectionHeader } from "@/components/section";
import { Button } from "@/components/ui/button";
import { GridBg } from "@/components/ornaments/grid-bg";

const products = [
  {
    id: "cashguard-core",
    title: "CashGuard Core",
    price: "€12.5K",
    image: "/images/cashguard-core.jpeg",
    description: "New generation CashGuard with new sleek design and small footprint to fit all counter sizes.",
    idealFor: ["Supermarkets", "Convenience stores", "Forecourts"],
    features: [
      "Open Chute/Multi coin bowl for coin deposit",
      "Smaller collection box - 2 Cassette, High Denominations",
      "Small/Compact Collection Box (High denomination emptying and note separation)",
      "Same format note slot for each denomination as PREMIUM",
      "Fastest cash machine technology for note return on the market",
    ],
  },
  {
    id: "cashguard-premium",
    title: "CashGuard Premium",
    price: "€11.8K",
    image: "/images/cashguard-premium.jpeg",
    description: "500+ Installations Nationwide. The fastest cash machine technology for note return on market.",
    idealFor: ["Supermarkets", "Convenience stores", "Forecourts"],
    features: [
      "Note slot for each note denomination ensuring fastest cash machine technology",
      "Single slot coin insertion",
      "Collection box for emptying with note separation",
      "Rental per year of 2 systems (including support charges) Total - €6,500+VAT",
      "500+ installations nationwide",
    ],
  },
  {
    id: "cashprotect-pro",
    title: "CashProtect Pro",
    price: "€11.5K",
    image: "/images/cashprotect-pro.jpeg",
    description: "Versatile solution ideal for retail and hospitality environments with single note slot for acceptance and return.",
    idealFor: ["Supermarkets", "Convenience stores", "Forecourts", "Bars", "Restaurants"],
    features: [
      "Single Note slot for acceptance and return",
      "Open Chute/Multi coin bowl for coin deposit",
      "Drop box and cassette collection",
      "Secure closed cash handling",
      "Easy integration with POS systems",
    ],
  },
  {
    id: "cashprotect-fusion",
    title: "CashProtect Fusion",
    price: "€8.5K",
    image: "/images/cashprotect-fusion.jpeg",
    description: "All-in-one note and coin acceptance and return. For speed/price/size - surpasses all expectations.",
    idealFor: ["Small Convenience shops", "Pharmacy", "Hospitality", "Bars", "Restaurants", "Limited Space"],
    features: [
      "All in one note and coin acceptance and return",
      "Open Chute for coin deposit",
      "Drop box and cassette collection",
      "Compact design for limited space",
      "Best value for speed, price, and size",
    ],
  },
  {
    id: "cashmag-mini",
    title: "CashMag Mini",
    price: "€6.5K",
    image: "/images/cashmag-mini.jpeg",
    description: "Compact all-in-one solution ideal for environments with limited counter space.",
    idealFor: ["Pharmacy", "Restaurants", "Limited Space environments"],
    features: [
      "All in one note and coin acceptance and return",
      "Open Chute for coin deposit",
      "Drop box and cassette collection",
      "Ultra-compact footprint",
      "Perfect for small counters",
    ],
  },
  {
    id: "cashguard-uni",
    title: "CashGuard Uni",
    price: "€6.5K",
    image: "/images/cashguard-uni.jpeg",
    description: "Compact, front-office cash recycling solution that accepts, validates, and dispenses both notes and coins.",
    idealFor: ["All retail environments", "Front-office operations", "Multi-lane deployments"],
    features: [
      "Accepts, validates, and dispenses both notes and coins",
      "Secure closed cash handling with user authentication",
      "Streamlined integration with POS systems for efficiency",
      "Compact front-office design",
      "Real-time cash position reporting",
    ],
  },
];

export default function ProductsPage() {
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
              Our <span className="text-accent">Products</span>
            </h1>
            <p className="text-lg text-muted">
              Navigate cash with confidence. Tailored solutions for your business needs,
              from compact units for small spaces to high-capacity systems for busy retail environments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <Section id="products-list">
        <div className="space-y-24">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="relative aspect-square max-w-md mx-auto">
                  <div
                    className="absolute inset-0 blur-3xl opacity-20"
                    style={{
                      background: "radial-gradient(circle, rgba(228, 66, 66, 0.4) 0%, transparent 70%)",
                    }}
                  />
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-contain drop-shadow-2xl"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <div className="flex items-center gap-4 mb-4">
                  <h2 className="text-3xl md:text-4xl font-bold text-text">
                    {product.title}
                  </h2>
                  <span className="text-2xl font-bold text-accent">{product.price}</span>
                </div>
                
                <p className="text-lg text-muted mb-6">{product.description}</p>

                {/* Ideal For */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
                    Ideal For
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {product.idealFor.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 bg-panel rounded-full text-sm text-muted border border-border"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h3 className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
                    Key Features
                  </h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted">
                        <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-panel">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
            Not sure which product is right for you?
          </h2>
          <p className="text-muted mb-8">
            Our team can help you find the perfect cash management solution for your business needs and budget.
          </p>
          <Link href="/contact">
            <Button size="lg" className="glow-accent">
              Book a Consultation
            </Button>
          </Link>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
