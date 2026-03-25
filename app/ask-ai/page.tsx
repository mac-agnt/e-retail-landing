"use client";

import { useEffect, useState } from "react";
import { MotionConfig } from "framer-motion";
import { Header } from "@/components/header";
import { Hero } from "@/components/ask-ai-kiosk/Hero";
import { Conversation } from "@/components/ask-ai-kiosk/Conversation";
import { Features } from "@/components/ask-ai-kiosk/Features";
import { Diagram } from "@/components/ask-ai-kiosk/Diagram";
import { ROI } from "@/components/ask-ai-kiosk/ROI";
import { UseCases } from "@/components/ask-ai-kiosk/UseCases";
import { CTA } from "@/components/ask-ai-kiosk/CTA";
import { Footer } from "@/components/footer";

export default function AskAiPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");
    const onChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);

    setIsMobile(media.matches);
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  return (
    <>
      <Header />
      <main className={`ask-ai-page ${isMobile ? "" : "animate-page-fade"}`}>
        <MotionConfig reducedMotion={isMobile ? "always" : "user"}>
          <Hero />
          <>
            <Conversation />
            <Features />
            <Diagram />
            <ROI />
            <UseCases />
            <CTA />
          </>
        </MotionConfig>
      </main>
      <Footer />
    </>
  );
}
