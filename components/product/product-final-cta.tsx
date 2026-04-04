"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { ProductPageHeading } from "@/components/product/product-page-heading";

type Props = {
  productTitle: string;
};

export function ProductFinalCta({ productTitle }: Props) {
  return (
    <Section id="product-cta" className="bg-panel">
      <div className="mx-auto max-w-2xl text-center">
        <ProductPageHeading
          as="h2"
          text={`Ready to move forward with ${productTitle}?`}
          highlight={`${productTitle}?`}
          align="center"
          className="!max-w-none"
        />
        <p className="mt-4 text-lg text-muted">
          Book a demo or speak with our team about fit, rollout, and support.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
          <Link href="/contact">
            <Button size="lg" className="glow-accent min-w-[200px]">
              Book a demo
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="secondary" size="lg" className="min-w-[200px]">
              Get in touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <p className="mt-10 text-sm text-muted">
          <span className="block sm:inline">Need a lighter commitment?</span>{" "}
          <Link
            href="/contact?topic=rental-refurbished"
            className="text-text underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent/40"
          >
            Ask about rental or refurbished availability
          </Link>
          <span className="text-muted/80"> — we&apos;ll route you to the right option.</span>
        </p>
      </div>
    </Section>
  );
}
