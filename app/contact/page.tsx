"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Send,
  CheckCircle,
  Building,
  Users,
  Wrench
} from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GridBg } from "@/components/ornaments/grid-bg";
import { BeveledPanel } from "@/components/beveled-panel";
import { contactInfo as globalContactInfo } from "@/lib/data";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    lines: ["Neolith House", "Davitt Road, Dublin 12", "Ireland"],
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: [globalContactInfo.phone, "Mon-Fri 9am-6pm"],
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: [globalContactInfo.emailMain, globalContactInfo.emailSales],
  },
  {
    icon: Clock,
    title: "Business Hours",
    lines: ["Monday - Friday: 9am - 6pm", "Saturday: 10am - 2pm", "Sunday: Closed"],
  },
];

const inquiryTypes = [
  { value: "sales", label: "Sales Inquiry", icon: Building },
  { value: "demo", label: "Book a Demo", icon: Users },
  { value: "support", label: "Technical Support", icon: Wrench },
  { value: "other", label: "Other", icon: Mail },
];

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    inquiryType: "sales",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to an API
    console.log("Form submitted:", formState);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

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
              Ready to transform your cash management? Contact our team for a consultation,
              demo, or any questions you may have.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <Section>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <BeveledPanel className="p-6 h-full text-center">
                <info.icon className="h-8 w-8 text-accent mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-text mb-3">{info.title}</h3>
                {info.lines.map((line, i) => (
                  <p key={i} className="text-sm text-muted">
                    {line}
                  </p>
                ))}
              </BeveledPanel>
            </motion.div>
          ))}
        </div>

        {/* Contact Form & Map */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-text mb-6">Send us a message</h2>
            
            {isSubmitted ? (
              <BeveledPanel className="p-8 text-center">
                <CheckCircle className="h-16 w-16 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-text mb-2">Thank you!</h3>
                <p className="text-muted mb-6">
                  We've received your message and will get back to you within 24 hours.
                </p>
                <Button
                  variant="secondary"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormState({
                      name: "",
                      email: "",
                      phone: "",
                      company: "",
                      inquiryType: "sales",
                      message: "",
                    });
                  }}
                >
                  Send Another Message
                </Button>
              </BeveledPanel>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Inquiry Type */}
                <div>
                  <label className="block text-sm font-medium text-text mb-3">
                    What can we help you with?
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {inquiryTypes.map((type) => (
                      <label
                        key={type.value}
                        className={`flex items-center gap-3 p-4 rounded-lg border cursor-pointer transition-all ${
                          formState.inquiryType === type.value
                            ? "border-accent bg-accent/10"
                            : "border-border bg-panel hover:border-accent/50"
                        }`}
                      >
                        <input
                          type="radio"
                          name="inquiryType"
                          value={type.value}
                          checked={formState.inquiryType === type.value}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <type.icon className={`h-5 w-5 ${
                          formState.inquiryType === type.value ? "text-accent" : "text-muted"
                        }`} />
                        <span className={`text-sm ${
                          formState.inquiryType === type.value ? "text-text" : "text-muted"
                        }`}>
                          {type.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Name & Email */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-text mb-2">
                      Your Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="john@company.ie"
                    />
                  </div>
                </div>

                {/* Phone & Company */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-text mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formState.phone}
                      onChange={handleChange}
                      placeholder="+353 1 XXX XXXX"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-text mb-2">
                      Company Name
                    </label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formState.company}
                      onChange={handleChange}
                      placeholder="Your Company Ltd"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Tell us about your business and how we can help..."
                    className="w-full px-4 py-3 bg-panel border border-border rounded-lg text-text placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors resize-none"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full glow-accent">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            )}
          </motion.div>

          {/* Map / Additional Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-text mb-6">Find Us</h2>
            
            {/* Map Placeholder */}
            <a 
              href={globalContactInfo.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <BeveledPanel className="aspect-video mb-8 overflow-hidden hover:opacity-90 transition-opacity">
                <div className="w-full h-full bg-panel-2 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-accent mx-auto mb-3" />
                    <p className="text-muted">Open in Google Maps</p>
                    <p className="text-sm text-muted mt-2">Neolith House, Davitt Road, Dublin 12</p>
                  </div>
                </div>
              </BeveledPanel>
            </a>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-text">Quick Actions</h3>
              <div className="grid gap-3">
                <a
                  href="/products"
                  className="flex items-center gap-3 p-4 bg-panel rounded-lg border border-border hover:border-accent/50 transition-colors"
                >
                  <Building className="h-5 w-5 text-accent" />
                  <div>
                    <div className="text-text font-medium">View Our Products</div>
                    <div className="text-sm text-muted">Explore our full range of solutions</div>
                  </div>
                </a>
                <a
                  href="/case-studies"
                  className="flex items-center gap-3 p-4 bg-panel rounded-lg border border-border hover:border-accent/50 transition-colors"
                >
                  <Users className="h-5 w-5 text-accent" />
                  <div>
                    <div className="text-text font-medium">Read Case Studies</div>
                    <div className="text-sm text-muted">See how we've helped other businesses</div>
                  </div>
                </a>
                <a
                  href="/support"
                  className="flex items-center gap-3 p-4 bg-panel rounded-lg border border-border hover:border-accent/50 transition-colors"
                >
                  <Wrench className="h-5 w-5 text-accent" />
                  <div>
                    <div className="text-text font-medium">Get Support</div>
                    <div className="text-sm text-muted">Access documentation and help</div>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
