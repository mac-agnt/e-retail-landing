 "use client";

import { useCallback, useEffect, useState } from "react";
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
  const [heroReady, setHeroReady] = useState(false);

  const handleHeroReady = useCallback(() => {
    setHeroReady(true);
  }, []);

  useEffect(() => {
    const fallback = window.setTimeout(() => setHeroReady(true), 3000);
    return () => window.clearTimeout(fallback);
  }, []);

  return (
    <>
      <Header />
      <main className="animate-page-fade">
        <Hero onSceneReady={handleHeroReady} />
        {heroReady && (
          <>
            <Conversation />
            <Features />
            <Diagram />
            <ROI />
            <UseCases />
            <CTA />
          </>
        )}
      </main>
      <Footer />
    </>
  );
}
