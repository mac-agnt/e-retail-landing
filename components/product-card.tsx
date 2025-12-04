"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  title: string;
  blurb: string;
  image: string;
  href: string;
  index?: number;
}

export function ProductCard({ title, blurb, image, href, index = 0 }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-xl",
        "bg-panel border border-border",
        "transition-all duration-300",
        "hover:border-accent/40 hover:shadow-panel-hover"
      )}
    >
      {/* Image Area */}
      <div className="relative aspect-[16/12] bg-gradient-to-br from-panel-2 to-panel overflow-hidden">
        {/* Placeholder gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-panel-2 via-panel to-bg" />
        
        {/* Product image placeholder */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-3/4 h-3/4">
            {/* Replace with final product image */}
            <Image
              src={image}
              alt={title}
              fill
              className="object-contain opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>

        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-panel via-transparent to-transparent opacity-60" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="text-lg font-semibold text-text mb-2 group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted leading-relaxed mb-4 flex-1">{blurb}</p>
        
        {/* CTA */}
        <Button
          asChild
          variant="default"
          size="sm"
          className="w-full group/btn"
        >
          <Link href={href}>
            View Product
            <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>

      {/* Hover ring effect */}
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          boxShadow: "inset 0 0 0 1px rgba(228, 66, 66, 0.2)",
        }}
      />
    </motion.div>
  );
}
