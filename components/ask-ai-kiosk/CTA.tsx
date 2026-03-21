"use client";

import Link from "next/link";

export function CTA() {
  return (
    <section className="py-16 md:py-24">
      <div className="section-wrapper">
        <div className="rounded-[30px] border border-black/10 bg-[linear-gradient(180deg,#ffffff_0%,#f4f3f1_100%)] px-6 py-14 text-center md:px-10">
          <h2 className="mx-auto max-w-3xl text-3xl font-semibold tracking-tight text-[#111111] md:text-5xl md:leading-tight">
            Turn your store into a guided experience.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-black/62">
            Deploy Ask AI Kiosk and give every customer instant, trusted direction.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-black px-10 text-base font-medium text-white transition duration-200 hover:scale-[1.02] hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/60 focus-visible:ring-offset-2"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
