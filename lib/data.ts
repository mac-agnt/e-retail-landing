import { Zap, Shield, Target, Clock, TrendingUp, Users } from "lucide-react";

export const navItems = [
  { label: "Products", href: "/products" },
  { label: "Ask-Ai", href: "/ask-ai" },
  { label: "Industries", href: "/industries" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Support", href: "/support" },
  { label: "Get in Touch", href: "/contact" },
];

export const benefits = [
  {
    icon: Zap,
    title: "Throughput",
    text: "Move customers through the till faster without bottlenecks or manual delays.",
  },
  {
    icon: Target,
    title: "Accuracy",
    text: "Reduce discrepancies with automated cash validation and controlled handling.",
  },
  {
    icon: Shield,
    title: "Security",
    text: "Limit exposure with closed cash handling and controlled access.",
  },
];

export const contactInfo = {
  phone: "+353 1 455 9511",
  phoneTel: "tel:+35314559511",
  emailMain: "info@e-retail.ie",
  emailSales: "pturner@e-retail.ie",
  address: "Neolith House, Davitt Road, Dublin 12, Ireland",
  mapLink: "https://www.google.com/maps/search/?api=1&query=Neolith+House,+Davitt+Road,+Dublin+12,+Ireland",
  directionsLink: "https://www.google.com/maps/dir/?api=1&destination=Neolith+House,+Davitt+Road,+Dublin+12,+Ireland",
};

export const products = [
  {
    title: "CashGuard Core",
    blurb: "New generation CashGuard with sleek design and small footprint. Ideal for supermarkets, convenience stores, and forecourts.",
    image: "/images/cashguard-core.png",
    href: "/products/cashguard-core",
    price: "€12.5K",
  },
  {
    title: "CashGuard Premium",
    blurb: "500+ installations nationwide. Fastest cash machine technology for note return with dedicated slot for each denomination.",
    image: "/images/cashguard-premium.png",
    href: "/products/cashguard-premium",
    price: "€11.8K",
  },
  {
    title: "CashProtect Pro",
    blurb: "Ideal for supermarkets, convenience stores, forecourts, bars and restaurants. Single note slot for acceptance and return.",
    image: "/images/cashprotect-pro.png",
    href: "/products/cashprotect-pro",
    price: "€11.5K",
  },
  {
    title: "CashProtect Fusion",
    blurb: "Perfect for small convenience shops, pharmacy, hospitality. All-in-one note and coin acceptance and return.",
    image: "/images/cashprotect-fusion.png",
    href: "/products/cashprotect-fusion",
    price: "€8.5K",
  },
  {
    title: "CashMag Mini",
    blurb: "Ideal for pharmacy, restaurants, and limited space environments. Compact all-in-one solution.",
    image: "/images/cashmag-mini.png",
    href: "/products/cashmag-mini",
    price: "€6.5K",
  },
  {
    title: "CashGuard Uni",
    blurb: "Compact front-office cash recycling solution. Accepts, validates, and dispenses both notes and coins.",
    image: "/images/cashguard-uni.png",
    href: "/products/cashguard-uni",
    price: "€6.5K",
  },
];

/** Homepage KPI strip: outcome-led copy, no unverified performance numbers */
export const kpis = [
  {
    headline: "Significantly fewer discrepancies",
    subline: "Automated cash validation reduces human error at the till",
  },
  {
    headline: "Faster transaction handling",
    subline: "Streamlined note and coin processing improves checkout flow",
  },
  {
    headline: "500+ Installations",
    subline: "Trusted by retailers across Ireland",
  },
  {
    headline: "24/7 Support Available",
    subline: "Full installation, training & maintenance included",
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
    { label: "About Us", href: "/about" },
    { label: "News", href: "/news" },
    { label: "Partners", href: "/partners" },
  ],
  products: [
    { label: "CashGuard Core", href: "/products/cashguard-core" },
    { label: "CashGuard Premium", href: "/products/cashguard-premium" },
    { label: "CashProtect Pro", href: "/products/cashprotect-pro" },
    { label: "CashProtect Fusion", href: "/products/cashprotect-fusion" },
    { label: "CashMag Mini", href: "/products/cashmag-mini" },
    { label: "CashGuard Uni", href: "/products/cashguard-uni" },
  ],
  industries: [
    { label: "Retail", href: "/industries/retail" },
    { label: "Hospitality", href: "/industries/hospitality" },
    { label: "Quick Service", href: "/industries/quick-service" },
    { label: "Entertainment", href: "/industries/entertainment" },
  ],
  support: [
    { label: "Support Overview", href: "/support" },
    { label: "Service Coverage", href: "/support" },
    { label: "Training", href: "/support" },
    { label: "Contact Support", href: "/contact" },
  ],
  contact: [
    { label: "Sales Inquiry", href: "/contact?salesInquiry=true" },
    { label: "Request Demo", href: "/contact?demo=true" },
    { label: "Get a Quote", href: "/contact?quote=true" },
    { label: "Find a Partner", href: "/contact?partner=true" },
  ],
};

export const trustBullets = [
  "Fewer discrepancies with automated cash validation",
  "Faster transaction handling at the till",
  "Full installation, training & 24/7 support",
];
