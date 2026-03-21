"use client";

import { motion } from "framer-motion";

const supportPoints = [
  "Nationwide coverage",
  "Dedicated field engineers",
  "On-site response",
];

export function SupportSection() {
  return (
    <section
      className="relative overflow-hidden bg-[#f7f6f3] py-16 md:py-20 lg:py-24"
      aria-labelledby="support-excellence-heading"
      style={{
        fontFamily:
          '"SF Pro Display", "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Inter, sans-serif',
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_22%,rgba(255,255,255,0.92),transparent_54%),radial-gradient(circle_at_82%_74%,rgba(142,31,36,0.1),transparent_50%),linear-gradient(180deg,rgba(255,255,255,0.42),rgba(255,255,255,0.2)_45%,rgba(255,255,255,0.4))]" />

      <div className="section-wrapper relative max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="relative lg:col-start-1 lg:row-start-1">
            <div className="pointer-events-none absolute -left-10 top-8 h-72 w-72 bg-[radial-gradient(circle_at_20%_35%,rgba(255,90,90,0.08),transparent_58%)]" />

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              <p className="text-[11px] uppercase tracking-[0.22em] text-zinc-500">
                <span className="bg-gradient-to-r from-[#ff6f6f] via-[#e63333] to-[#a3151b] bg-clip-text text-transparent">
                  SUPPORT
                </span>
              </p>
              <h2
                id="support-excellence-heading"
                className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900"
              >
                Support that doesn&apos;t wait.
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.1, ease: "easeOut" }}
              className="mt-2.5 max-w-2xl text-base text-zinc-600"
            >
              When something stops, we don&apos;t schedule it. We solve it.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.2, ease: "easeOut" }}
              className="mt-5 text-7xl lg:text-[96px] leading-[0.9] tracking-tight font-semibold bg-gradient-to-r from-[#ff6f6f] via-[#e63333] to-[#a3151b] bg-clip-text text-transparent italic"
            >
              24/7
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.3, ease: "easeOut" }}
              className="mt-0.5 text-5xl lg:text-[64px] leading-[0.95] tracking-tight font-medium bg-gradient-to-r from-[#ff6f6f] via-[#e63333] to-[#a3151b] bg-clip-text text-transparent italic"
            >
              364 days a year.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.36 }}
            className="relative order-2 lg:order-none lg:col-start-2 lg:row-span-2 h-[300px] sm:h-[350px] lg:h-[420px] flex items-end justify-center lg:justify-end"
          >
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/8 via-transparent to-transparent" />
            <img
              src="/eretail-van.png"
              alt="e-Retail service van"
              loading="lazy"
              className="absolute bottom-0 right-auto left-1/2 -translate-x-1/2 lg:left-auto lg:right-0 lg:translate-x-0 w-auto h-[95%] object-contain scale-105 lg:scale-[1.12] drop-shadow-[0_20px_30px_rgba(0,0,0,0.25)]"
            />
          </motion.div>

          <div className="order-3 lg:order-none lg:col-start-1 lg:row-start-2">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.42, ease: "easeOut" }}
            >
              <div className="flex flex-wrap gap-3 lg:hidden">
                {supportPoints.map((point) => (
                  <p
                    key={point}
                    className="rounded-full border border-zinc-300 bg-white/75 px-4 py-2 text-sm font-medium tracking-[0.12em] uppercase text-zinc-800"
                  >
                    {point}
                  </p>
                ))}
              </div>

              <div className="hidden lg:flex lg:flex-row lg:gap-12">
                {supportPoints.map((point, index) => (
                  <p
                    key={point}
                    className={`text-sm lg:text-base uppercase tracking-[0.12em] text-black/65 ${
                      index > 0 ? "lg:border-l lg:border-black/10 lg:pl-6" : ""
                    }`}
                  >
                    {point}
                  </p>
                ))}
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.5, ease: "easeOut" }}
              className="text-base text-black/55 mt-6"
            >
              When your tills stop, we&apos;re already on the way.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
