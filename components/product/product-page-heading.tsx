"use client";

import { createElement } from "react";
import { cn } from "@/lib/utils";

/** Same red gradient treatment as the homepage hero (“We Stop It.”). */
const HIGHLIGHT_CLASS =
  "bg-gradient-to-r from-[#ff6f6f] via-[#e63333] to-[#a3151b] bg-clip-text text-transparent";

export type ProductPageHeadingProps = {
  /** Semantic level */
  as?: "h1" | "h2" | "h3";
  /** Full visible heading string */
  text: string;
  /** Exact substring to style with the gradient (matched with lastIndexOf so the closing occurrence wins) */
  highlight: string;
  /** Override gradient span (e.g. `text-gradient-premium`). Defaults to standard accent gradient. */
  highlightClassName?: string;
  /** Hero is larger and punchier; section titles match site hierarchy */
  variant?: "hero" | "section";
  align?: "left" | "center";
  className?: string;
  id?: string;
};

function renderHighlighted(
  text: string,
  highlight: string,
  highlightClassName?: string
) {
  const h = highlight.trim();
  if (!h) {
    return text;
  }
  const idx = text.lastIndexOf(highlight);
  if (idx === -1) {
    return text;
  }
  const before = text.slice(0, idx);
  const after = text.slice(idx + highlight.length);
  const spanClass = cn(highlightClassName ?? HIGHLIGHT_CLASS);
  return (
    <>
      {before}
      <span className={spanClass}>{highlight}</span>
      {after}
    </>
  );
}

/**
 * Product detail pages: black text + one intentional gradient span (conversion-led closing phrase or word).
 */
export function ProductPageHeading({
  as: Tag = "h2",
  text,
  highlight,
  highlightClassName,
  variant = "section",
  align = "left",
  className,
  id,
}: ProductPageHeadingProps) {
  const sizeClass =
    variant === "hero"
      ? "text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.06] tracking-[-0.025em] text-text"
      : "text-3xl sm:text-4xl lg:text-[2.65rem] font-bold leading-[1.08] tracking-[-0.02em] text-text";

  return createElement(
    Tag,
    {
      id,
      className: cn(
        sizeClass,
        "text-balance",
        variant === "section" && "max-w-4xl",
        align === "center" && "mx-auto text-center",
        align === "left" && "text-left",
        className
      ),
    },
    renderHighlighted(text, highlight, highlightClassName)
  );
}

/** Default hero highlight: last word of product title (model name). */
export function productHeroHighlightFromTitle(title: string): string {
  const parts = title.trim().split(/\s+/);
  if (parts.length === 0) {
    return title;
  }
  return parts[parts.length - 1] ?? title;
}
