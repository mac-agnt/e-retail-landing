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
  return (
    <>
      <Header />
      <main className="animate-page-fade">
        <Hero />
        <Conversation />
        <Features />
        <Diagram />
        <ROI />
        <UseCases />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
