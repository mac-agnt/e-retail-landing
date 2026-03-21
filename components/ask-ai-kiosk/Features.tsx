"use client";

import { Languages, MessageSquare, ScanLine, Search, ShieldCheck, Sparkles } from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Natural Store Dialogue",
    description: "Answers in clear language that feels human and direct.",
  },
  {
    icon: Search,
    title: "Instant Product Discovery",
    description: "Find location, alternatives, and details in seconds.",
  },
  {
    icon: ScanLine,
    title: "Real-Time Availability",
    description: "Connect shopper questions to live stock confidence.",
  },
  {
    icon: Languages,
    title: "Multilingual Support",
    description: "Help more people in the language they prefer.",
  },
  {
    icon: ShieldCheck,
    title: "Brand-Safe Responses",
    description: "Store-trained answers that stay accurate and on-message.",
  },
  {
    icon: Sparkles,
    title: "Guided Recommendations",
    description: "Suggest better-fit products to lift shopper outcomes.",
  },
];

export function Features() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto w-full max-w-[1200px] px-6 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight leading-[1.08] text-[#111111] md:text-[2rem]">
            Built for modern retail floors.
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="group rounded-[22px] border border-black/10 bg-white/70 p-7 backdrop-blur-sm shadow-[0_8px_20px_rgba(0,0,0,0.04)] transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_12px_26px_rgba(0,0,0,0.06)]"
            >
              <feature.icon className="h-5 w-5 text-[#1f1f1f]" strokeWidth={1.8} />
              <h3 className="mt-4 text-lg font-semibold tracking-tight text-[#111111]">{feature.title}</h3>
              <p className="mt-2 text-sm text-black/62">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
