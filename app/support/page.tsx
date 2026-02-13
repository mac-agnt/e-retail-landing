"use client";

import { motion } from "framer-motion";
import { 
  FileText, 
  Wrench, 
  Phone, 
  HelpCircle,
  Clock,
  Shield,
  Users
} from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { GridBg } from "@/components/ornaments/grid-bg";
import { BeveledPanel } from "@/components/beveled-panel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { contactInfo } from "@/lib/data";

const supportOptions = [
  {
    icon: Phone,
    title: "Phone Support",
    description: "Speak directly with our technical team",
    detail: contactInfo.phone,
    availability: "Mon-Fri 9am-6pm",
  },
  {
    icon: Wrench,
    title: "On-Site Service",
    description: "Engineer visits for repairs and maintenance",
    detail: "Request Visit",
    availability: "24-48 hour response",
  },
  {
    icon: FileText,
    title: "Submit Ticket",
    description: "Log an issue for our team to investigate",
    detail: "Create Ticket",
    availability: "24/7 submission",
  },
];

const faqs = [
  {
    question: "How often should I clean my CashGuard unit?",
    answer: "We recommend cleaning the coin and note paths weekly for optimal performance. Use the cleaning cards provided in your maintenance kit. For high-volume environments, consider cleaning twice weekly.",
  },
  {
    question: "What should I do if a note gets jammed?",
    answer: "First, do not force the note out. Open the front panel using your supervisor key, locate the jammed note, and gently remove it following the direction of the note path. If the issue persists, contact our support team.",
  },
  {
    question: "How do I add a new user to the system?",
    answer: "Access the Manager Menu using your supervisor credentials, navigate to User Management, and select 'Add New User'. You'll need to set their access level, create their PIN, and optionally register their fingerprint if biometric authentication is enabled.",
  },
  {
    question: "Can I integrate with my existing POS system?",
    answer: "Yes, our systems integrate with all major POS providers in Ireland. We provide integration drivers and our technical team can assist with setup. Integration typically takes 1-2 hours per lane.",
  },
  {
    question: "What is included in the maintenance contract?",
    answer: "Our standard maintenance contract includes quarterly preventive maintenance visits, unlimited remote support, priority on-site response (within 24 hours), all parts and labour for repairs, and software updates.",
  },
  {
    question: "How do I empty the collection cassette?",
    answer: "Use your supervisor key to access the collection area. Remove the cassette and transport it to your secure counting area. Replace with an empty cassette and log the collection in the system. If you need step-by-step guidance, contact our support team.",
  },
  {
    question: "What happens if the system goes offline?",
    answer: "Our systems can operate in offline mode, storing all transaction data locally. Once connectivity is restored, data automatically syncs to the central server. No transactions are lost during offline periods.",
  },
  {
    question: "How long is the warranty period?",
    answer: "All new installations come with a 2-year comprehensive warranty covering parts and labour. Extended warranty options are available. Refurbished units come with a 1-year warranty.",
  },
];

const serviceFeatures = [
  {
    icon: Clock,
    title: "24/7 Monitoring",
    description: "Remote system monitoring to catch issues before they impact your business",
  },
  {
    icon: Shield,
    title: "Preventive Maintenance",
    description: "Quarterly visits to keep your systems running at peak performance",
  },
  {
    icon: Users,
    title: "Dedicated Account Manager",
    description: "A single point of contact who knows your business and systems",
  },
];

export default function SupportPage() {
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
              Support & <span className="text-accent">Resources</span>
            </h1>
            <p className="text-lg text-muted">
              We're here to help. Get technical support,
              or speak with our team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Support Options */}
      <Section>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {supportOptions.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <BeveledPanel className="p-6 h-full hover:shadow-panel-hover transition-shadow cursor-pointer">
                <option.icon className="h-10 w-10 text-accent mb-4" />
                <h3 className="text-lg font-semibold text-text mb-2">{option.title}</h3>
                <p className="text-sm text-muted mb-4">{option.description}</p>
                <div className="text-accent font-semibold mb-1">{option.detail}</div>
                <div className="text-xs text-muted">{option.availability}</div>
              </BeveledPanel>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Service Features */}
      <Section className="bg-panel">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-text mb-4">Our Service Promise</h2>
          <p className="text-muted max-w-2xl mx-auto">
            Every e-Retail installation comes with comprehensive support to keep your business running smoothly.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {serviceFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex p-4 bg-accent/10 rounded-full mb-4">
                <feature.icon className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-text mb-2">{feature.title}</h3>
              <p className="text-muted">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* FAQs */}
      <Section className="bg-panel">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <HelpCircle className="h-12 w-12 text-accent mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-text mb-4">Frequently Asked Questions</h2>
            <p className="text-muted">Quick answers to common questions</p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="bg-bg border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left text-text hover:text-accent">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
            Can't find what you're looking for?
          </h2>
          <p className="text-muted mb-8">
            Our support team is ready to help with any questions or issues.
          </p>
          <Button size="lg" className="glow-accent">
            Contact Support
          </Button>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
