"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowLeft, ArrowRight, Package, Ruler, Building } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { GridBg } from "@/components/ornaments/grid-bg";
import { BeveledPanel } from "@/components/beveled-panel";
import { productsData, productSlugs } from "@/lib/products-data";

export default function ProductPage() {
  const params = useParams();
  const slug = params.slug as string;
  const product = productsData[slug as keyof typeof productsData];

  if (!product) {
    return (
      <main className="min-h-screen bg-bg">
        <Header />
        <Section className="pt-32">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-text mb-4">Product Not Found</h1>
            <p className="text-muted mb-8">The product you're looking for doesn't exist.</p>
            <Link href="/products">
              <Button>View All Products</Button>
            </Link>
          </div>
        </Section>
        <Footer />
      </main>
    );
  }

  const relatedProducts = product.relatedProducts
    .map((id) => productsData[id as keyof typeof productsData])
    .filter(Boolean);

  return (
    <main className="min-h-screen bg-bg">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <GridBg />
        <div className="section-wrapper relative z-10">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Products
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative aspect-square max-w-lg mx-auto">
                <div
                  className="absolute inset-0 blur-3xl opacity-20"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(228, 66, 66, 0.4) 0%, transparent 70%)",
                  }}
                />
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <h1 className="text-4xl md:text-5xl font-bold text-text">
                  {product.title}
                </h1>
              </div>
              <div className="text-3xl font-bold text-accent mb-6">{product.price}</div>

              <p className="text-lg text-muted mb-8">{product.shortDescription}</p>

              {/* Ideal For Tags */}
              <div className="mb-8">
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

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="glow-accent w-full sm:w-auto">
                    Book a Demo
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-text mb-6">About {product.title}</h2>
            <div className="prose prose-invert max-w-none">
              {product.longDescription.split("\n\n").map((paragraph, i) => (
                <p key={i} className="text-muted mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {/* Dimensions */}
            <BeveledPanel className="p-6 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <Ruler className="h-6 w-6 text-accent" />
                <h3 className="text-xl font-semibold text-text">Dimensions</h3>
              </div>
              {"noteUnit" in product.dimensions && product.dimensions.noteUnit && (
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-accent mb-2">Note Unit</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="text-muted">Width: <span className="text-text">{product.dimensions.noteUnit.width}</span></div>
                    <div className="text-muted">Height: <span className="text-text">{product.dimensions.noteUnit.height}</span></div>
                    <div className="text-muted">Depth: <span className="text-text">{product.dimensions.noteUnit.depth}</span></div>
                    <div className="text-muted">Weight: <span className="text-text">{product.dimensions.noteUnit.weight}</span></div>
                  </div>
                </div>
              )}
              {"coinUnit" in product.dimensions && product.dimensions.coinUnit && (
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-accent mb-2">Coin Unit</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="text-muted">Width: <span className="text-text">{product.dimensions.coinUnit.width}</span></div>
                    <div className="text-muted">Height: <span className="text-text">{product.dimensions.coinUnit.height}</span></div>
                    <div className="text-muted">Depth: <span className="text-text">{product.dimensions.coinUnit.depth}</span></div>
                    <div className="text-muted">Weight: <span className="text-text">{product.dimensions.coinUnit.weight}</span></div>
                  </div>
                </div>
              )}
              {"combined" in product.dimensions && product.dimensions.combined && (
                <div>
                  <h4 className="text-sm font-medium text-accent mb-2">Unit Dimensions</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="text-muted">Width: <span className="text-text">{product.dimensions.combined.width}</span></div>
                    <div className="text-muted">Height: <span className="text-text">{product.dimensions.combined.height}</span></div>
                    <div className="text-muted">Depth: <span className="text-text">{product.dimensions.combined.depth}</span></div>
                    <div className="text-muted">Weight: <span className="text-text">{product.dimensions.combined.weight}</span></div>
                  </div>
                </div>
              )}
            </BeveledPanel>

            {/* Manufacturer */}
            <BeveledPanel className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Building className="h-6 w-6 text-accent" />
                <h3 className="text-xl font-semibold text-text">A Solution by {product.manufacturer}</h3>
              </div>
              <p className="text-muted text-sm">{product.manufacturerNote}</p>
            </BeveledPanel>
          </motion.div>
        </div>
      </Section>

      {/* Features & Benefits */}
      <Section className="bg-panel">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Package className="h-6 w-6 text-accent" />
              <h2 className="text-2xl font-bold text-text">Key Features</h2>
            </div>
            <ul className="space-y-3">
              {product.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-muted">
                  <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Check className="h-6 w-6 text-accent" />
              <h2 className="text-2xl font-bold text-text">Benefits</h2>
            </div>
            <ul className="space-y-3">
              {product.benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-3 text-muted">
                  <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </Section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <Section>
          <h2 className="text-3xl font-bold text-text mb-8 text-center">Related Products</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedProducts.map((related) => (
              <motion.div
                key={related.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Link href={`/products/${related.id}`}>
                  <BeveledPanel className="p-6 h-full hover:shadow-panel-hover transition-all cursor-pointer group">
                    <div className="relative aspect-square mb-4">
                      <Image
                        src={related.image}
                        alt={related.title}
                        fill
                        className="object-contain group-hover:scale-105 transition-transform"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-text mb-2 group-hover:text-accent transition-colors">
                      {related.title}
                    </h3>
                    <p className="text-accent font-bold mb-2">{related.price}</p>
                    <p className="text-sm text-muted line-clamp-2">{related.shortDescription}</p>
                  </BeveledPanel>
                </Link>
              </motion.div>
            ))}
          </div>
        </Section>
      )}

      {/* CTA Section */}
      <Section className="bg-panel">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
            Ready to get started with {product.title}?
          </h2>
          <p className="text-muted mb-8">
            Contact our team to schedule a demo.
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
