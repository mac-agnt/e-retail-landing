export const productsData = {
  "cashguard-core": {
    id: "cashguard-core",
    title: "CashGuard Core",
    price: "€12.5K",
    image: "/images/cashguard-core.jpeg",
    shortDescription: "New generation CashGuard with sleek design and small footprint. Ideal for supermarkets, convenience stores, and forecourts.",
    longDescription: `CashGuard Core is our newest and "smartest" cash management solution. Based on the most popular features of our CashGuard Premium but with a more modern touch, we now offer a slimmed-down version of the Premium, but with the same great core.

Built for speed and safety! Just like Premium, CashGuard Core is built for supermarkets and other industries where speed is of essential importance. The automatic coin feeder offers faster coin payments than CashGuard Premium. The system is scaled-down to better fit into a larger variety of shops and stores.

CashGuard Core also features a note deposit for extra security on your high denomination banknotes.`,
    dimensions: {
      noteUnit: { width: "553mm", height: "248mm", depth: "302mm", weight: "20-40Kg" },
      coinUnit: { width: "190mm", height: "559.5mm", depth: "305mm", weight: "23Kg" },
    },
    idealFor: ["Supermarkets", "Convenience stores", "Forecourts"],
    features: [
      "Open Chute/Multi coin bowl for coin deposit",
      "Smaller collection box - 2 Cassette, High Denominations",
      "Small/Compact Collection Box (High denomination emptying and note separation)",
      "Same format note slot for each denomination as PREMIUM",
      "Fastest cash machine technology for note return on the market",
      "Automatic coin feeder for faster coin payments",
      "Note deposit for high denomination security",
    ],
    benefits: [
      "Reduced cash discrepancies",
      "Faster transaction times",
      "Enhanced security for high-value notes",
      "Compact design fits any counter",
      "Easy staff training",
    ],
    manufacturer: "StrongPoint",
    manufacturerNote: "CashGuard is developed by the Norwegian retail technology company StrongPoint. With more than 20 years experience and more than 35,000 sold systems, it is the market-leading cash management solution.",
    relatedProducts: ["cashguard-premium", "cashprotect-fusion"],
  },
  "cashguard-premium": {
    id: "cashguard-premium",
    title: "CashGuard Premium",
    price: "€11.8K",
    image: "/images/cashguard-premium.jpeg",
    shortDescription: "500+ installations nationwide. Fastest cash machine technology for note return with dedicated slot for each denomination.",
    longDescription: `Cash handling is often an overlooked part of the retail operation that can have an enormous impact on the entire business.

Cash makes the store vulnerable to simple mistakes, shrinkage and theft. Manual cash handling slows down the customer throughput and decreases the service level. As a retailer, you and your staff spend hours every day counting and guarding cash, but theft and shrinkage still appear.

Not with CashGuard. CashGuard Premium is our flagship solution with 500+ installations nationwide, delivering the fastest note return technology on the market.`,
    dimensions: {
      noteUnit: { width: "553mm", height: "248mm", depth: "302mm", weight: "25Kg" },
      coinUnit: { width: "190mm", height: "559.5mm", depth: "305mm", weight: "23Kg" },
    },
    idealFor: ["Supermarkets", "Convenience stores", "Forecourts", "High-volume retail"],
    features: [
      "Note slot for each note denomination ensuring fastest cash machine technology",
      "Single slot coin insertion",
      "Collection box for emptying with note separation",
      "500+ installations nationwide",
      "Rental option available: €6,500+VAT per year for 2 systems including support",
      "Real-time cash position reporting",
      "Full POS integration",
    ],
    benefits: [
      "98% reduction in cash discrepancies",
      "Fastest note return on the market",
      "Eliminates shrinkage and theft",
      "Improves customer throughput",
      "Reduces staff time on cash handling",
    ],
    manufacturer: "StrongPoint",
    manufacturerNote: "CashGuard is developed by the Norwegian retail technology company StrongPoint. With more than 20 years experience and more than 35,000 sold systems, it is the market-leading cash management solution.",
    relatedProducts: ["cashguard-core", "cashprotect-pro"],
  },
  "cashprotect-pro": {
    id: "cashprotect-pro",
    title: "CashProtect Pro",
    price: "€11.5K",
    image: "/images/cashprotect-pro.jpeg",
    shortDescription: "Ideal for supermarkets, convenience stores, forecourts, bars and restaurants. Single note slot for acceptance and return.",
    longDescription: `The PRO AS system is a model designed for points of sale where there is a high currency turnover and where the speed of exchange is a fundamental feature for the business.

This model is the one that satisfies all the needs of a chain of stores in which there is a large volume of operations and a high cash capacity is needed to support full opening hours.

Perfect for businesses that need reliable, high-capacity cash handling without compromise.`,
    dimensions: {
      noteUnit: { width: "490mm", height: "350mm", depth: "590mm", weight: "35Kg" },
      coinUnit: { width: "280mm", height: "450mm", depth: "350mm", weight: "25Kg" },
    },
    idealFor: ["Supermarkets", "Convenience stores", "Forecourts", "Bars", "Restaurants", "High-volume retail"],
    features: [
      "Single Note slot for acceptance and return",
      "Open Chute/Multi coin bowl for coin deposit",
      "Drop box and cassette collection",
      "High cash capacity for full opening hours",
      "Designed for high currency turnover",
      "Speed of exchange optimized",
    ],
    benefits: [
      "Handles high transaction volumes",
      "Supports full-day operations",
      "Secure drop box collection",
      "Fast and efficient exchanges",
      "Suitable for chain deployments",
    ],
    manufacturer: "e-Retail",
    manufacturerNote: "E-Retail has deployed multiple installations across different sectors in Ireland, including petrol stations, supermarkets, convenience stores, hospitality venues, pharmacies, and various other sectors.",
    relatedProducts: ["cashguard-premium", "cashprotect-fusion"],
  },
  "cashprotect-fusion": {
    id: "cashprotect-fusion",
    title: "CashProtect Fusion",
    price: "€8.5K",
    image: "/images/cashprotect-fusion.jpeg",
    shortDescription: "Perfect for small convenience shops, pharmacy, hospitality. All-in-one note and coin acceptance and return.",
    longDescription: `The new Cash Protect Fusion introduces a revolutionary single-modular device designed for efficient management either by employees or, ideally, by clients themselves. Clients have the autonomy to input bills and coins independently, enhancing convenience and flexibility.

With high-performance capabilities catering to businesses with up to 500 daily operations, the Fusion system ensures seamless operation even during peak times.

FUSION is the latest launch of the entire e-Retail range, designed for cashier entry and/or self-payment by the customer. This model has the perfect size and capacity for thousands of businesses that do not want a bulky system in their store but don't want to give up on efficient and reliable cash management at the point of sale.`,
    dimensions: {
      combined: { width: "490mm", height: "300mm", depth: "590mm", weight: "30Kg" },
    },
    idealFor: ["Small Convenience shops", "Pharmacy", "Hospitality", "Bars", "Restaurants", "Limited Space"],
    features: [
      "All in one note and coin acceptance and return",
      "Open Chute for coin deposit",
      "Drop box and cassette collection",
      "Rapid Coin Processing: Accepts and validates 10 coins per second",
      "Dispenses up to 6 coins per second",
      "Individual Banknote Handling for accuracy",
      "Convenient Stacker for easy banknote collection",
      "Up to 500 daily operations capacity",
    ],
    benefits: [
      "Best value for speed, price, and size",
      "Customer self-service capable",
      "Compact design for limited space",
      "High performance during peak times",
      "Employee or customer operated",
    ],
    manufacturer: "e-Retail",
    manufacturerNote: "E-Retail has deployed multiple installations across different sectors in Ireland, including petrol stations, supermarkets, convenience stores, hospitality venues, pharmacies, and various other sectors.",
    relatedProducts: ["cashmag-mini", "cashguard-uni"],
  },
  "cashmag-mini": {
    id: "cashmag-mini",
    title: "CashMag Mini",
    price: "€6.5K",
    image: "/images/cashmag-mini.jpeg",
    shortDescription: "Ideal for pharmacy, restaurants, and limited space environments. Compact all-in-one solution.",
    longDescription: `Mini is our ultra-compact one-unit cash solution, designed for effortless integration directly on the checkout counter. With its automatic coin feeder and user-friendly interface, the customer handles all transactions independently.

Ideal when space is tight! Small footprint, big on performance.

Mini is the perfect fit for cafés, kiosks, pharmacies, and bakeries—anywhere that requires efficient, hygienic cash handling without sacrificing valuable counter space. Crafted from durable steel, the Mini offers a robust and secure experience, built to withstand the demands of busy environments.`,
    dimensions: {
      combined: { width: "280mm", height: "380mm", depth: "320mm", weight: "18Kg" },
    },
    idealFor: ["Pharmacy", "Restaurants", "Cafés", "Kiosks", "Bakeries", "Limited Space environments"],
    features: [
      "All in one note and coin acceptance and return",
      "Open Chute for coin deposit",
      "Drop box and cassette collection",
      "Ultra-compact footprint",
      "Automatic coin feeder",
      "User-friendly interface",
      "Durable steel construction",
      "Customer self-service capable",
    ],
    benefits: [
      "Perfect for small counters",
      "Hygienic cash handling",
      "Customer handles transactions independently",
      "Robust and secure",
      "Built for busy environments",
    ],
    manufacturer: "e-Retail",
    manufacturerNote: "E-Retail has deployed multiple installations across different sectors in Ireland, including petrol stations, supermarkets, convenience stores, hospitality venues, pharmacies, and various other sectors.",
    relatedProducts: ["cashguard-uni", "cashprotect-fusion"],
  },
  "cashguard-uni": {
    id: "cashguard-uni",
    title: "CashGuard Uni",
    price: "€6.5K",
    image: "/images/cashguard-uni.jpeg",
    shortDescription: "Compact front-office cash recycling solution. Accepts, validates, and dispenses both notes and coins.",
    longDescription: `CashGuard Uni is the new compact, simple, and reliable cash management solution. Boost efficiency and enhance security in your store at a low cost. Easy to install, it can be used as a standalone desktop unit or integrated into checkout furniture.

Ideal for restaurants, pharmacies, bakeries, and petrol stations looking for a fast, cost-effective solution that still delivers the efficiency and safety they need.

Fast to get started, fast to count the cash! CashGuard UNI is a cash recycler with a compact and cost-efficient design. It allows customers to insert both coins and banknotes themselves. The system features a 3mm steel cabinet for both coins and notes, offering easy installation and high security.

Full service access is provided through telescopic, slide-mounted inner modules. Its compact design makes it ideal for desktop installation. Compatible with all existing CashGuard POS integrations and Store Manager. As the system is easy for customers to use, it can also serve as a payment solution for your self-checkouts.`,
    dimensions: {
      combined: { width: "320mm", height: "515mm", depth: "375mm", weight: "35Kg" },
    },
    idealFor: ["Restaurants", "Pharmacies", "Bakeries", "Petrol stations", "Self-checkouts", "All retail environments"],
    features: [
      "Accepts, validates, and dispenses both notes and coins",
      "Secure closed cash handling with user authentication",
      "Streamlined integration with POS systems",
      "3mm steel cabinet for high security",
      "Standalone desktop or integrated installation",
      "Telescopic, slide-mounted inner modules",
      "Compatible with all CashGuard POS integrations",
      "Self-checkout compatible",
    ],
    benefits: [
      "Low cost, high efficiency",
      "Easy installation",
      "Customer self-service capable",
      "Fast to get started",
      "Real-time cash position reporting",
    ],
    manufacturer: "StrongPoint",
    manufacturerNote: "CashGuard is developed by the Norwegian retail technology company StrongPoint. With more than 20 years experience and more than 35,000 sold systems, it is the market-leading cash management solution.",
    relatedProducts: ["cashmag-mini", "cashprotect-fusion"],
  },
};

export type ProductData = typeof productsData[keyof typeof productsData];
export const productSlugs = Object.keys(productsData) as Array<keyof typeof productsData>;
