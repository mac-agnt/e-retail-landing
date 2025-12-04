"use client";

import { ProductCard } from "@/components/product-card";
import { Section, SectionHeader } from "@/components/section";
import { products } from "@/lib/data";

export function ProductGrid() {
  return (
    <Section id="products">
      <SectionHeader
        title="Our Product Range"
        subtitle="Comprehensive cash management solutions designed for every retail environment"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <ProductCard
            key={product.title}
            title={product.title}
            blurb={product.blurb}
            image={product.image}
            href={product.href}
            index={index}
          />
        ))}
      </div>
    </Section>
  );
}
