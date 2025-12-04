"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { BenefitCard } from "@/components/benefit-card";
import { BeveledPanel } from "@/components/beveled-panel";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { benefits } from "@/lib/data";

export function WhoWeHelp() {
  return (
    <Section id="solutions" className="bg-panel-2/30">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Left - Benefit Cards */}
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              Why Choose e-Retail?
            </h2>
            <p className="text-muted mb-8">
              Our automated cash management solutions deliver measurable results
              for businesses of all sizes.
            </p>
          </motion.div>

          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <BenefitCard
                key={benefit.title}
                icon={benefit.icon}
                title={benefit.title}
                text={benefit.text}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Right - Product Grid Intro Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <BeveledPanel className="h-full">
            <div className="flex flex-col h-full">
              <div className="mb-6">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full mb-4">
                  Product Range
                </span>
                <h3 className="text-2xl font-bold text-text mb-3">
                  Complete Cash Management Solutions
                </h3>
                <p className="text-muted leading-relaxed">
                  From compact countertop units to enterprise-grade systems, we
                  offer a comprehensive range of automated cash handling
                  solutions tailored to your specific needs.
                </p>
              </div>

              {/* Feature list */}
              <ul className="space-y-3 mb-8 flex-1">
                {[
                  "Multi-currency support",
                  "Real-time reporting & analytics",
                  "Seamless POS integration",
                  "Cloud-connected management",
                  "24/7 technical support",
                ].map((feature, index) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                    className="flex items-center gap-3 text-sm text-muted"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {feature}
                  </motion.li>
                ))}
              </ul>

              <Button className="w-full group">
                Explore Products
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </BeveledPanel>
        </motion.div>
      </div>
    </Section>
  );
}
