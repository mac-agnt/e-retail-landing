"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { GridBg } from "@/components/ornaments/grid-bg";
import { BeveledPanel } from "@/components/beveled-panel";
import {
  ProductTestimonialsSection,
  ProductFeaturesBenefitsSection,
  ProductDimensionsSection,
  ProductFinalCta,
  ProductPageHeading,
  productHeroHighlightFromTitle,
} from "@/components/product";
import { productsData, type ProductData } from "@/lib/products-data";

export default function ProductPage() {
  const params = useParams();
  const slug = params.slug as string;
  const product = productsData[slug as keyof typeof productsData] as ProductData | undefined;

  if (!product) {
    return (
      <main className="min-h-screen bg-bg">
        <Header />
        <Section className="pt-32">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-text mb-4">Product Not Found</h1>
            <p className="text-muted mb-8">The product you&apos;re looking for doesn&apos;t exist.</p>
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

  const videoSrc = product.videoTestimonialSrc;
  const written =
    product.writtenTestimonials && product.writtenTestimonials.length > 0
      ? product.writtenTestimonials
      : undefined;

  return (
    <main className="min-h-screen bg-bg">
      <Header />

      {/* 1. Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <GridBg />
        <div className="section-wrapper relative z-10">
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

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <ProductPageHeading
                as="h1"
                variant="hero"
                text={product.title}
                highlight={productHeroHighlightFromTitle(product.title)}
                className="mb-4"
              />
              <div className="text-3xl font-bold text-accent mb-6">{product.price}</div>

              <p className="text-lg text-muted mb-8">{product.shortDescription}</p>

              <div className="mb-8">
                <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
                  Ideal For
                </p>
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

      {/* 2. About */}
      <Section id="about">
        <ProductPageHeading
          as="h2"
          text={`About ${product.title}`}
          highlight={product.title}
          align="left"
          className="mb-6 md:mb-8"
        />
        <div className="max-w-3xl">
          {product.longDescription.split("\n\n").map((paragraph, i) => (
            <p key={i} className="text-muted mb-4 text-lg leading-relaxed last:mb-0">
              {paragraph}
            </p>
          ))}
        </div>
      </Section>

      {/* 3–4. What Our Customers Say + Testimonials (video + written) */}
      <ProductTestimonialsSection videoSrc={videoSrc} writtenTestimonials={written} />

      {/* 5. Key Features & Benefits */}
      <ProductFeaturesBenefitsSection features={product.features} benefits={product.benefits} />

      {/* 6. Dimensions & A Solution by */}
      <ProductDimensionsSection product={product} />

      {/* 7. Related Products */}
      {relatedProducts.length > 0 && (
        <Section id="related-products">
          <div className="mb-8 text-center md:mb-10">
            <ProductPageHeading
              as="h2"
              text="Related Products"
              highlight="Products"
              align="center"
            />
            <p className="mt-4 text-muted text-lg max-w-xl mx-auto">
              Explore alternatives and complementary systems.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {relatedProducts.map((related) => (
              <motion.div
                key={related.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Link href={`/products/${related.id}`}>
                  <BeveledPanel className="h-full p-5 transition-all hover:shadow-md md:p-6 cursor-pointer group border-border/80">
                    <div className="relative aspect-square mb-4 max-h-[220px] mx-auto">
                      <Image
                        src={related.image}
                        alt={related.title}
                        fill
                        className="object-contain group-hover:scale-[1.02] transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-text mb-1 group-hover:text-accent transition-colors md:text-xl">
                      {related.title}
                    </h3>
                    <p className="text-accent font-bold mb-2 text-sm">{related.price}</p>
                    <p className="text-sm text-muted line-clamp-2">{related.shortDescription}</p>
                  </BeveledPanel>
                </Link>
              </motion.div>
            ))}
          </div>
        </Section>
      )}

      {/* 8. Final CTA */}
      <ProductFinalCta productTitle={product.title} />

      {/* 9. Footer */}
      <Footer />
    </main>
  );
}
