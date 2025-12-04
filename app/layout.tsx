import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "e-Retail | Automated Cash Management Systems",
  description:
    "Streamline your cash operations with intelligent automation. Reduce errors, save time, and enhance security across all your retail and hospitality locations.",
  keywords: [
    "cash management",
    "automated cash handling",
    "retail solutions",
    "hospitality",
    "POS integration",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="min-h-screen bg-bg antialiased">{children}</body>
    </html>
  );
}
