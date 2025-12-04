import { Zap, Shield, Target, Clock, TrendingUp, Users } from "lucide-react";

export const navItems = [
  { label: "Solutions", href: "#solutions" },
  { label: "Products", href: "#products" },
  { label: "Industries", href: "#industries" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Support", href: "#support" },
  { label: "Contact", href: "#contact" },
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
    blurb: "Compact automated cash management for small to medium retail environments.",
    image: "/images/product-1.png",
    href: "#",
  },
  {
    title: "CashGuard Pro",
    blurb: "Advanced solution with multi-currency support and high-volume capacity.",
    image: "/images/product-2.png",
    href: "#",
  },
  {
    title: "CashGuard Enterprise",
    blurb: "Full-scale deployment for large retail chains with centralized management.",
    image: "/images/product-3.png",
    href: "#",
  },
  {
    title: "CashGuard Compact",
    blurb: "Space-efficient design perfect for hospitality and quick-service restaurants.",
    image: "/images/product-1.png",
    href: "#",
  },
  {
    title: "CashGuard Vault",
    blurb: "Secure back-office solution for end-of-day reconciliation and storage.",
    image: "/images/product-2.png",
    href: "#",
  },
  {
    title: "CashGuard Connect",
    blurb: "Cloud-connected system with real-time analytics and remote monitoring.",
    image: "/images/product-3.png",
    href: "#",
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
    value: "50+",
    label: "Installations",
    note: "Across retail and hospitality",
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
    { label: "CashGuard Pro", href: "#" },
    { label: "CashGuard Enterprise", href: "#" },
    { label: "Accessories", href: "#" },
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
  "50+ installs",
  "Trusted by top retailers",
  "Full installation & support",
];
