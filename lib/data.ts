import { Zap, Shield, Target, Clock, TrendingUp, Users } from "lucide-react";

export const navItems = [
  { label: "Products", href: "/products" },
  { label: "Industries", href: "/industries" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Support", href: "/support" },
  { label: "Contact", href: "/contact" },
];

export const benefits = [
  {
    icon: Zap,
    title: "Speed",
    text: "Process transactions in under 20 seconds with automated cash handling that keeps lines moving.",
  },
  {
    icon: Target,
    title: "Zero Till Discrepancies",
    text: "Eliminate human error with precise automated counting and secure cash storage systems.",
  },
  {
    icon: Shield,
    title: "Security",
    text: "Bank-grade security with real-time monitoring, tamper detection, and encrypted data transmission.",
  },
];

export const products = [
  {
    title: "CashGuard Core",
    blurb: "New generation CashGuard with sleek design and small footprint. Ideal for supermarkets, convenience stores, and forecourts.",
    image: "/images/cashguard-core.jpeg",
    href: "/products/cashguard-core",
    price: "€12.5K",
  },
  {
    title: "CashGuard Premium",
    blurb: "500+ installations nationwide. Fastest cash machine technology for note return with dedicated slot for each denomination.",
    image: "/images/cashguard-premium.jpeg",
    href: "/products/cashguard-premium",
    price: "€11.8K",
  },
  {
    title: "CashProtect Pro",
    blurb: "Ideal for supermarkets, convenience stores, forecourts, bars and restaurants. Single note slot for acceptance and return.",
    image: "/images/cashprotect-pro.jpeg",
    href: "/products/cashprotect-pro",
    price: "€11.5K",
  },
  {
    title: "CashProtect Fusion",
    blurb: "Perfect for small convenience shops, pharmacy, hospitality. All-in-one note and coin acceptance and return.",
    image: "/images/cashprotect-fusion.jpeg",
    href: "/products/cashprotect-fusion",
    price: "€8.5K",
  },
  {
    title: "CashMag Mini",
    blurb: "Ideal for pharmacy, restaurants, and limited space environments. Compact all-in-one solution.",
    image: "/images/cashmag-mini.jpeg",
    href: "/products/cashmag-mini",
    price: "€6.5K",
  },
  {
    title: "CashGuard Uni",
    blurb: "Compact front-office cash recycling solution. Accepts, validates, and dispenses both notes and coins.",
    image: "/images/cashguard-uni.jpeg",
    href: "/products/cashguard-uni",
    price: "€6.5K",
  },
];

export const kpis = [
  {
    value: "98%",
    label: "Reduction in Discrepancies",
    note: "Compared to manual cash handling",
  },
  {
    value: "20s",
    label: "Faster Per Customer",
    note: "Average transaction time saved",
  },
  {
    value: "500+",
    label: "Installations",
    note: "Nationwide across Ireland",
  },
  {
    value: "24/7",
    label: "Support Available",
    note: "Full installation & maintenance",
  },
];

export const logos = [
  { src: "/logos/logo-1.svg", alt: "Partner 1" },
  { src: "/logos/logo-2.svg", alt: "Partner 2" },
  { src: "/logos/logo-3.svg", alt: "Partner 3" },
  { src: "/logos/logo-4.svg", alt: "Partner 4" },
  { src: "/logos/logo-5.svg", alt: "Partner 5" },
  { src: "/logos/logo-6.svg", alt: "Partner 6" },
];

export const footerLinks = {
  company: [
    { label: "About Us", href: "#" },
    { label: "Careers", href: "#" },
    { label: "News", href: "#" },
    { label: "Partners", href: "#" },
  ],
  products: [
    { label: "CashGuard Core", href: "#" },
    { label: "CashGuard Premium", href: "#" },
    { label: "CashProtect Pro", href: "#" },
    { label: "CashProtect Fusion", href: "#" },
    { label: "CashMag Mini", href: "#" },
    { label: "CashGuard Uni", href: "#" },
  ],
  industries: [
    { label: "Retail", href: "#" },
    { label: "Hospitality", href: "#" },
    { label: "Quick Service", href: "#" },
    { label: "Entertainment", href: "#" },
  ],
  support: [
    { label: "Documentation", href: "#" },
    { label: "Installation", href: "#" },
    { label: "Training", href: "#" },
    { label: "Contact Support", href: "#" },
  ],
  contact: [
    { label: "Sales Inquiry", href: "#" },
    { label: "Request Demo", href: "#" },
    { label: "Get a Quote", href: "#" },
    { label: "Find a Partner", href: "#" },
  ],
};

export const trustBullets = [
  "500+ installations nationwide",
  "Trusted by Irish retailers",
  "Full installation & support",
];
