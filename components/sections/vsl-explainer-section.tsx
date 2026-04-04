"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { ProductPageHeading } from "@/components/product";
import { cn } from "@/lib/utils";

/**
 * Premium 16:9 shell for a future VSL embed. Replace the inner placeholder with
 * an iframe, React Player, or <video>; keep the outer classes for aspect + radius.
 */
function VslVideoPlaceholder({ className }: { className?: string }) {
  return (
    <div
      id="vsl-embed-slot"
      className={cn(
        "relative w-full overflow-hidden rounded-xl border border-border",
        "aspect-video bg-gradient-to-br from-panel-2 via-panel to-bg",
        "shadow-[0_1px_0_rgba(0,0,0,0.06)_inset,0_12px_40px_-18px_rgba(0,0,0,0.12)]",
        className
      )}
    >
      {/* Swap this inner block for embedded VSL when ready */}
      <div
        className="flex h-full w-full flex-col items-center justify-center gap-5 px-6 text-center"
        role="region"
        aria-label="Explainer video placeholder. Video coming soon."
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-border bg-bg/90 text-accent shadow-sm ring-1 ring-black/[0.04]">
          <Play className="h-7 w-7 fill-current pl-1" aria-hidden />
        </div>
        <div>
          <p className="text-base font-semibold text-text">Explainer video coming soon</p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
            Full walkthrough of the e-Retail approach for your trading environment, available here
            soon.
          </p>
        </div>
      </div>
    </div>
  );
}

export function VslExplainerSection() {
  return (
    <section
      id="vsl-explainer"
      className="border-y border-border/60 bg-panel py-16 md:py-24"
      aria-labelledby="vsl-explainer-heading"
    >
      <div className="section-wrapper">
        {/*
          Mobile: row1 heading → row2 video → row3 copy (VSL directly under headline).
          lg+: col1 heading + copy stacked; col2 video sticky spanning both rows.
        */}
        <div className="grid grid-cols-1 grid-rows-[auto_auto_auto] gap-y-4 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-x-14 xl:gap-x-16 lg:gap-y-8 lg:items-start">
          <ProductPageHeading
            id="vsl-explainer-heading"
            as="h2"
            text="Cash Is Still Manual, and Manual Does Not Scale."
            highlight="Manual Does Not Scale."
            highlightClassName="text-gradient-premium"
            align="left"
            className="col-start-1 row-start-1 lg:max-w-none"
          />

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.06, ease: "easeOut" }}
            className="col-start-1 row-start-2 min-w-0 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:sticky lg:top-28"
          >
            <VslVideoPlaceholder />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="col-start-1 row-start-3 mt-6 min-w-0 max-w-2xl lg:mt-0 lg:max-w-none lg:row-start-2"
          >
            <p className="text-lg font-medium leading-snug text-text md:text-xl">
              When customers still pay in notes and coins, the weak link is rarely the POS. It is
              everything that happens between the sale and the safe. That friction shows up as
              slower lanes, recurring discrepancies, avoidable shrinkage, and staff time burned on
              counts instead of customers.
            </p>

            <div className="mt-10 space-y-8 text-base leading-relaxed text-muted md:text-[1.05rem]">
              <p>
                <span className="font-semibold text-text">At scale,</span> the pain compounds: more
                sites mean more variance, harder audits, and cash exposure that grows with
                footfall, exactly when you need consistency most.
              </p>
              <p>
                <span className="font-semibold text-text">In smaller operations,</span> the same
                leaks hit the P&amp;L harder in pharmacies, forecourts, cafés, bakeries, and
                hospitality.
                There are fewer people to absorb losses, and every hour on cash admin is an hour
                not on the floor.
              </p>
              <p>
                <span className="font-semibold text-text">e-Retail supplies automated cash</span>{" "}
                management systems built for real trading environments, not demos. You get faster
                throughput at the till, tighter physical control, fewer opportunities for loss,
                and a repeatable front-of-house rhythm that still works when queues spike.
              </p>
              <p>
                <span className="font-semibold text-text">One counter or a nationwide estate:</span>{" "}
                the operating idea is the same: standardise how cash moves, cut till mismatches,
                reduce exposure, and give teams a clear process instead of a nightly reconciliation
                firefight.
              </p>
            </div>

            <p className="mt-10 border-t border-border pt-8 text-base font-medium leading-relaxed text-text md:text-lg">
              Everything below is the how: products, proof, and support, so you can see the hardware
              and the rollout model, not a slide deck.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
