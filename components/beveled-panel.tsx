"use client";

import { cn } from "@/lib/utils";

interface BeveledPanelProps {
  children: React.ReactNode;
  className?: string;
}

export function BeveledPanel({ children, className }: BeveledPanelProps) {
  return (
    <div
      className={cn(
        "panel-bevel rounded-lg p-6 md:p-8",
        className
      )}
    >
      {children}
    </div>
  );
}
