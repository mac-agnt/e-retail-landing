"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface BenefitCardProps {
  icon: LucideIcon;
  title: string;
  text: string;
  index?: number;
}

export function BenefitCard({ icon: Icon, title, text, index = 0 }: BenefitCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className={cn(
        "group relative p-6 rounded-xl",
        "bg-panel border border-border",
        "transition-all duration-300",
        "hover:border-accent/30 hover:shadow-accent-glow"
      )}
    >
      {/* Icon */}
      <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10 text-accent">
        <Icon className="w-6 h-6" />
      </div>

      {/* Content */}
      <h3 className="text-lg font-semibold text-text mb-2">{title}</h3>
      <p className="text-sm text-muted leading-relaxed">{text}</p>

      {/* Hover glow effect */}
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 0%, rgba(228, 66, 66, 0.1) 0%, transparent 70%)",
        }}
      />
    </motion.div>
  );
}
