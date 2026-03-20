"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Section } from "@/components/section";
import { GridBg } from "@/components/ornaments/grid-bg";
import { contactInfo as globalContactInfo } from "@/lib/data";

const contactCards = [
  {
    icon: MapPin,
    title: "Visit Us",
    lines: ["Neolith House", "Davitt Road, Dublin 12", "Ireland"],
    href: globalContactInfo.directionsLink,
    action: "Get directions",
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: [globalContactInfo.phone, "Mon-Fri 9am-6pm"],
    href: globalContactInfo.phoneTel,
    action: "Call now",
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: [globalContactInfo.emailMain, globalContactInfo.emailSales],
    href: `mailto:${globalContactInfo.emailMain}`,
    action: "Send email",
  },
  {
    icon: Clock,
    title: "Business Hours",
    lines: ["Monday - Friday: 9am - 6pm", "Saturday: 10am - 2pm", "Sunday: Closed"],
    href: null,
    action: null,
  },
];

export default function ContactPage() {
  const mapEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    globalContactInfo.address
  )}&output=embed`;

  return (
    <main className="min-h-screen bg-bg">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <GridBg />
        <div className="section-wrapper relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text mb-6">
              Get in <span className="text-accent">Touch</span>
            </h1>
            <p className="text-lg text-muted">
              Ready to transform your cash management? Reach out by phone, email,
              or visit us in Dublin.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <Section>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {contactCards.map((card, index) => {
            const isLink = !!card.href;
            const content = (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`relative h-full rounded-2xl border border-border bg-panel p-8 text-center transition-all duration-300 ${
                  isLink
                    ? "hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5 cursor-pointer group"
                    : ""
                }`}
              >
                <div className="inline-flex p-4 rounded-xl bg-accent/10 mb-5">
                  <card.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-text mb-4">{card.title}</h3>
                <div className="space-y-1 mb-4">
                  {card.lines.map((line, i) => (
                    <p key={i} className="text-sm text-muted">
                      {line}
                    </p>
                  ))}
                </div>
                {isLink && (
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-accent group-hover:gap-3 transition-all">
                    {card.action}
                    <ArrowRight className="h-4 w-4" />
                  </span>
                )}
              </motion.div>
            );

            if (isLink) {
              return (
                <a
                  key={card.title}
                  href={card.href!}
                  target={card.href.startsWith("http") ? "_blank" : undefined}
                  rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="block h-full"
                >
                  {content}
                </a>
              );
            }

            return <div key={card.title}>{content}</div>;
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-10 max-w-5xl mx-auto"
        >
          <div className="rounded-2xl border border-border bg-panel p-4 md:p-6">
            <div className="flex items-center justify-between gap-4 mb-4">
              <div>
                <h2 className="text-2xl font-semibold text-text">Find Our Office</h2>
                <p className="text-sm text-muted">{globalContactInfo.address}</p>
              </div>
              <a
                href={globalContactInfo.directionsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 rounded-lg border border-border bg-bg px-4 py-2 text-sm font-medium text-text hover:border-accent/50 hover:text-accent transition-colors"
              >
                Open directions
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="overflow-hidden rounded-xl border border-border">
              <iframe
                title="e-Retail Office Location"
                src={mapEmbedSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[320px] md:h-[420px] w-full"
              />
            </div>
            <a
              href={globalContactInfo.directionsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex sm:hidden items-center gap-2 rounded-lg border border-border bg-bg px-4 py-2 text-sm font-medium text-text hover:border-accent/50 hover:text-accent transition-colors"
            >
              Open directions
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </Section>

      <Footer />
    </main>
  );
}
