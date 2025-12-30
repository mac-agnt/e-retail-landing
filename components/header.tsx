"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navItems } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
    >
      <nav
        className="flex items-center justify-between w-full max-w-5xl h-16 px-6 bg-bg/90 backdrop-blur-md border border-border/50 rounded-full shadow-lg"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-3 focus-ring rounded-md"
        >
          <img
            src="/images/e-retail-logo.png"
            alt="e-Retail automated cash management systems logo"
            className="h-8 w-auto object-contain"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm font-medium text-muted hover:text-text transition-colors focus-ring rounded-md px-2 py-1"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <Link href="/contact">
              <Button size="sm" className="rounded-full px-6">Get in Touch</Button>
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="lg:hidden p-2 text-muted hover:text-text transition-colors focus-ring rounded-md"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        id="mobile-menu"
        initial={false}
        animate={{
          height: mobileMenuOpen ? "auto" : 0,
          opacity: mobileMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={cn(
          "absolute top-20 left-4 right-4 lg:hidden overflow-hidden bg-panel border border-border rounded-2xl shadow-xl",
          !mobileMenuOpen && "pointer-events-none"
        )}
      >
        <div className="section-wrapper py-4 space-y-4">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block py-2 text-muted hover:text-text transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-2 pt-4 border-t border-border">
            <Link href="/contact">
              <Button className="w-full">Get in Touch</Button>
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.header>
  );
}
