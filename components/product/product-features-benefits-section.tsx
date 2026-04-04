"use client";

import { motion } from "framer-motion";
import { Check, Package, Sparkles } from "lucide-react";
import { Section } from "@/components/section";
import { BeveledPanel } from "@/components/beveled-panel";
import { ProductPageHeading } from "@/components/product/product-page-heading";

type Props = {
  features: string[];
  benefits: string[];
};

export function ProductFeaturesBenefitsSection({ features, benefits }: Props) {
  return (
    <Section id="features-benefits">
      <div className="mb-12 text-center md:mb-14">
        <ProductPageHeading
          as="h2"
          text="Key Features & Benefits"
          highlight="Benefits"
          align="center"
        />
        <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
          What the system does — and the outcomes you should expect.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <BeveledPanel className="h-full p-6 md:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-lg bg-accent/10 p-2.5">
                <Package className="h-6 w-6 text-accent" aria-hidden />
              </div>
              <h3 className="text-xl font-bold text-text md:text-2xl">Key features</h3>
            </div>
            <ul className="space-y-3.5">
              {features.map((feature, i) => (
                <li key={i} className="flex gap-3 text-muted">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden />
                  <span className="leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </BeveledPanel>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.06 }}
        >
          <BeveledPanel className="h-full border-accent/15 p-6 md:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-lg bg-accent/10 p-2.5">
                <Sparkles className="h-6 w-6 text-accent" aria-hidden />
              </div>
              <h3 className="text-xl font-bold text-text md:text-2xl">Benefits</h3>
            </div>
            <ul className="space-y-3.5">
              {benefits.map((benefit, i) => (
                <li key={i} className="flex gap-3 text-muted">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden />
                  <span className="leading-relaxed font-medium text-text/90">{benefit}</span>
                </li>
              ))}
            </ul>
          </BeveledPanel>
        </motion.div>
      </div>
    </Section>
  );
}
