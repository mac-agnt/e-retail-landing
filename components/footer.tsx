"use client";

import Link from "next/link";
import { Globe, MapPin, Phone, Mail } from "lucide-react";
import { footerLinks, contactInfo } from "@/lib/data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-panel border-t border-border">
      <div className="section-wrapper py-12 md:py-16">
        {/* Footer Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-text mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-text transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-semibold text-text mb-4">Products</h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-text transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-sm font-semibold text-text mb-4">Industries</h3>
            <ul className="space-y-3">
              {footerLinks.industries.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-text transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold text-text mb-4">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-text transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Address */}
          <div>
            <h3 className="text-sm font-semibold text-text mb-4">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                  className="flex items-start gap-2 text-sm text-muted hover:text-text transition-colors"
                >
                  <Phone className="h-4 w-4 mt-0.5 shrink-0" />
                  <span>{contactInfo.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contactInfo.emailMain}`}
                  className="flex items-start gap-2 text-sm text-muted hover:text-text transition-colors"
                >
                  <Mail className="h-4 w-4 mt-0.5 shrink-0" />
                  <span>{contactInfo.emailMain}</span>
                </a>
              </li>
              <li>
                <a
                  href={contactInfo.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-sm text-muted hover:text-text transition-colors"
                >
                  <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                  <span>{contactInfo.address}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-4">
            <Link href="/" className="text-lg font-bold text-text">
              <span className="text-accent">e</span>-Retail
            </Link>
            <span className="text-sm text-muted">
              © {currentYear} e-Retail. All rights reserved.
            </span>
          </div>

          {/* Legal Links & Language */}
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-sm text-muted hover:text-text transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-sm text-muted hover:text-text transition-colors"
            >
              Terms of Service
            </Link>
            <button
              type="button"
              className="flex items-center gap-2 text-sm text-muted hover:text-text transition-colors"
              aria-label="Select language"
            >
              <Globe className="h-4 w-4" />
              <span>English</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
