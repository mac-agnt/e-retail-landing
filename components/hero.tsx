"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Check, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GridBg } from "@/components/ornaments/grid-bg";
import { Cubes } from "@/components/ornaments/cubes";
import { trustBullets } from "@/lib/data";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Mouse position for parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Smooth spring animation
  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);
  
  // Transform for parallax effect
  const rotateX = useTransform(y, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-5, 5]);
  const translateX = useTransform(x, [-0.5, 0.5], [-20, 20]);
  const translateY = useTransform(y, [-0.5, 0.5], [-20, 20]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set((e.clientX - centerX) / rect.width);
    mouseY.set((e.clientY - centerY) / rect.height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <GridBg />
        <Cubes />
        {/* Red gradient sweep */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              "linear-gradient(135deg, rgba(228, 66, 66, 0.15) 0%, transparent 40%, transparent 60%, rgba(228, 66, 66, 0.05) 100%)",
          }}
        />
      </div>

      <div className="section-wrapper relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-text leading-tight mb-6"
            >
              Automated Cash Management Systems for{" "}
              <span className="text-accent">Retail & Hospitality</span>
            </motion.h1>

            {/* Subcopy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted mb-8 max-w-lg"
            >
              Streamline your cash operations with intelligent automation. Reduce
              errors, save time, and enhance security across all your locations.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <Button size="lg" className="glow-accent">
                Book a Demo
              </Button>
              <Button variant="secondary" size="lg">
                <Download className="mr-2 h-4 w-4" />
                Download Product Catalogue
              </Button>
            </motion.div>

            {/* Trust Bullets */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-x-6 gap-y-2"
            >
              {trustBullets.map((bullet, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-sm text-muted"
                >
                  <Check className="h-4 w-4 text-accent" />
                  <span>{bullet}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Product Image with Parallax */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative lg:h-[600px] flex items-center justify-center"
          >
            <motion.div
              style={{
                rotateX,
                rotateY,
                x: translateX,
                y: translateY,
              }}
              className="relative w-full max-w-lg perspective-1000"
            >
              {/* Glow effect behind image */}
              <div
                className="absolute inset-0 blur-3xl opacity-30"
                style={{
                  background:
                    "radial-gradient(circle, rgba(228, 66, 66, 0.4) 0%, transparent 70%)",
                }}
              />
              
              {/* Product image placeholder */}
              <div className="relative aspect-square">
                {/* Replace with final product render */}
                <Image
                  src="/images/product-core.png"
                  alt="CashGuard Automated Cash Management System"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
