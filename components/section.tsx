"use client";

import { motion } from "framer-motion";
import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  fullWidth?: boolean;
  style?: CSSProperties;
}

export function Section({ children, className, id, fullWidth = false, style }: SectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "py-16 md:py-24",
        !fullWidth && "section-wrapper",
        className
      )}
      style={style}
    >
      {children}
    </motion.section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeader({ title, subtitle, className, align = "center" }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className={cn(
        "mb-12",
        align === "center" && "text-center",
        align === "left" && "text-left",
        className
      )}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">{title}</h2>
      {subtitle && (
        <p
          className={cn(
            "text-muted text-lg max-w-2xl",
            align === "center" && "mx-auto",
            align === "left" && "mr-auto"
          )}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
