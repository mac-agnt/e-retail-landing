"use client";

import React, { useRef } from "react";
import { cn } from "@/lib/utils";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useAnimationFrame,
} from "framer-motion";

interface InfiniteGridProps {
  className?: string;
  children?: React.ReactNode;
  /** Primary gradient color (top-right) */
  primaryGradientColor?: string;
  /** Secondary gradient color (bottom-left) */
  secondaryGradientColor?: string;
  /** Grid line color class */
  gridColorClass?: string;
  /** Speed of grid animation (default 0.3) */
  speed?: number;
  /** Spotlight radius in px (default 300) */
  spotlightRadius?: number;
}

export function InfiniteGrid({
  className,
  children,
  primaryGradientColor = "rgba(220, 38, 38, 0.15)",
  secondaryGradientColor = "rgba(220, 38, 38, 0.1)",
  gridColorClass = "text-accent/30",
  speed = 0.3,
  spotlightRadius = 350,
}: InfiniteGridProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  const gridOffsetX = useMotionValue(0);
  const gridOffsetY = useMotionValue(0);

  useAnimationFrame(() => {
    const currentX = gridOffsetX.get();
    const currentY = gridOffsetY.get();
    gridOffsetX.set((currentX + speed) % 40);
    gridOffsetY.set((currentY + speed) % 40);
  });

  const maskImage = useMotionTemplate`radial-gradient(${spotlightRadius}px circle at ${mouseX}px ${mouseY}px, black, transparent)`;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className={cn(
        "relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden",
        className
      )}
    >
      {/* Base grid layer - subtle */}
      <div className="absolute inset-0 z-0 opacity-[0.03]">
        <GridPattern
          offsetX={gridOffsetX}
          offsetY={gridOffsetY}
          colorClass={gridColorClass}
        />
      </div>

      {/* Mouse-reveal grid layer */}
      <motion.div
        className="absolute inset-0 z-0 opacity-30"
        style={{ maskImage, WebkitMaskImage: maskImage }}
      >
        <GridPattern
          offsetX={gridOffsetX}
          offsetY={gridOffsetY}
          colorClass={gridColorClass}
        />
      </motion.div>

      {/* Gradient orbs */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="absolute right-[-15%] top-[-15%] w-[35%] h-[35%] rounded-full blur-[120px]"
          style={{ backgroundColor: primaryGradientColor }}
        />
        <div
          className="absolute right-[15%] top-[5%] w-[15%] h-[15%] rounded-full blur-[80px]"
          style={{ backgroundColor: primaryGradientColor }}
        />
        <div
          className="absolute left-[-10%] bottom-[-15%] w-[35%] h-[35%] rounded-full blur-[120px]"
          style={{ backgroundColor: secondaryGradientColor }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
}

function GridPattern({
  offsetX,
  offsetY,
  colorClass = "text-muted",
}: {
  offsetX: any;
  offsetY: any;
  colorClass?: string;
}) {
  return (
    <svg className="w-full h-full">
      <defs>
        <motion.pattern
          id="infinite-grid-pattern"
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
          x={offsetX}
          y={offsetY}
        >
          <path
            d="M 40 0 L 0 0 0 40"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className={colorClass}
          />
        </motion.pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#infinite-grid-pattern)" />
    </svg>
  );
}

export default InfiniteGrid;
