"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Section } from "@/components/section";
import { ProductPageHeading } from "@/components/product/product-page-heading";
import type { ProductWrittenTestimonial } from "@/lib/products-data";
import { cn } from "@/lib/utils";

const DEFAULT_WRITTEN: ProductWrittenTestimonial[] = [
  {
    quote:
      "This area is reserved for approved customer quotes. Replace this placeholder with verified wording when your marketing team is ready.",
    roleLine: "Placeholder — replace with role and organisation",
  },
  {
    quote:
      "A second slot keeps the layout balanced when you add a paired quote. Delete this card if you only need one testimonial.",
    roleLine: "Placeholder — optional second quote",
  },
];

function WrittenCard({ quote, roleLine }: ProductWrittenTestimonial) {
  return (
    <blockquote className="rounded-xl border border-border bg-bg p-6 md:p-7 shadow-sm">
      <p className="text-[1.05rem] leading-relaxed text-text md:text-lg">
        <span className="font-serif text-4xl leading-none text-accent/80" aria-hidden>
          &ldquo;
        </span>
        <span className="pl-1">{quote}</span>
        <span className="font-serif text-4xl leading-none text-accent/80" aria-hidden>
          &rdquo;
        </span>
      </p>
      {roleLine && (
        <footer className="mt-5 border-t border-border pt-4 text-sm text-muted">
          {roleLine}
        </footer>
      )}
    </blockquote>
  );
}

function VideoFrame({ videoSrc }: { videoSrc?: string }) {
  const hasVideo = Boolean(videoSrc);

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-xl border border-border bg-gradient-to-br from-panel-2 to-panel",
        "aspect-video shadow-[inset_0_1px_0_rgba(0,0,0,0.04)]"
      )}
    >
      {hasVideo && videoSrc ? (
        <video
          src={videoSrc}
          controls
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          Your browser does not support the video tag.
        </video>
      ) : (
        <div
          className="flex h-full w-full flex-col items-center justify-center gap-4 px-6 text-center"
          role="region"
          aria-label="Video testimonial placeholder. Video coming soon."
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-border bg-bg/80 text-accent shadow-sm">
            <Play className="h-7 w-7 fill-current pl-1" aria-hidden />
          </div>
          <div>
            <p className="text-sm font-medium text-text">Video testimonial</p>
            <p className="mt-1 max-w-xs text-sm text-muted">
              Coming soon — drop in a 16:9 file here when your clip is ready.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export type ProductTestimonialsSectionProps = {
  videoSrc?: string;
  writtenTestimonials?: ProductWrittenTestimonial[];
};

export function ProductTestimonialsSection({
  videoSrc,
  writtenTestimonials,
}: ProductTestimonialsSectionProps) {
  const quotes =
    writtenTestimonials && writtenTestimonials.length > 0
      ? writtenTestimonials.slice(0, 2)
      : DEFAULT_WRITTEN;

  return (
    <Section id="customer-proof" className="bg-panel">
      <div className="mb-10 md:mb-14">
        <ProductPageHeading
          as="h2"
          text="What Our Customers Say"
          highlight="Customers"
          align="left"
        />
      </div>

      <div className="grid gap-10 md:grid-cols-2 md:gap-10 lg:gap-12 xl:gap-16 md:items-start">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="min-w-0"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted">
            Video
          </p>
          <VideoFrame videoSrc={videoSrc} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.08 }}
          className="flex min-w-0 flex-col gap-6"
        >
          <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-muted">
            Written
          </p>
          {quotes.map((t, i) => (
            <WrittenCard key={i} quote={t.quote} roleLine={t.roleLine} />
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
