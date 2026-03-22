"use client";

import { useState, useEffect, useCallback } from "react";

const messages = [
  { from: "user" as const, text: "Where can I find lactose-free milk?" },
  { from: "ai" as const, text: "Aisle 4, left side. We also have two organic options available." },
  { from: "user" as const, text: "Do you have this in stock?" },
  { from: "ai" as const, text: "Yes. 18 units available right now in this branch." },
  { from: "user" as const, text: "What's the difference between these two?" },
  { from: "ai" as const, text: "One has higher protein and lower sugar. I can show side-by-side details." },
];

const TYPING_DURATION_MS = 1400;
const AI_RESPONSE_DELAY_MS = 700;
const PAUSE_BETWEEN_EXCHANGES_MS = 900;

function TypingIndicator() {
  return (
    <div className="ml-auto mr-0 flex w-fit animate-[conversation-typing-in_320ms_ease-out_both]">
      <div className="rounded-[20px] rounded-br-[6px] border border-black/[0.06] bg-[#f5f5f3] px-5 py-3.5 shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
        <div className="flex items-center gap-1">
          <span className="h-2 w-2 rounded-full bg-neutral-400 animate-[typing-dot_600ms_ease-in-out_infinite]" style={{ animationDelay: "0ms" }} />
          <span className="h-2 w-2 rounded-full bg-neutral-400 animate-[typing-dot_600ms_ease-in-out_infinite]" style={{ animationDelay: "150ms" }} />
          <span className="h-2 w-2 rounded-full bg-neutral-400 animate-[typing-dot_600ms_ease-in-out_infinite]" style={{ animationDelay: "300ms" }} />
        </div>
      </div>
    </div>
  );
}

export function Conversation() {
  const [visibleCount, setVisibleCount] = useState(0);
  const [showTyping, setShowTyping] = useState(true);

  const advance = useCallback(() => {
    setVisibleCount((c) => Math.min(c + 1, messages.length));
  }, []);

  useEffect(() => {
    if (visibleCount >= messages.length) return;

    if (showTyping) {
      const t = setTimeout(() => {
        setShowTyping(false);
        advance();
      }, TYPING_DURATION_MS);
      return () => clearTimeout(t);
    }

    const msg = messages[visibleCount];
    const isNextUser = msg?.from === "user";

    if (isNextUser) {
      const t = setTimeout(() => setShowTyping(true), PAUSE_BETWEEN_EXCHANGES_MS);
      return () => clearTimeout(t);
    }

    const t = setTimeout(() => advance(), AI_RESPONSE_DELAY_MS);
    return () => clearTimeout(t);
  }, [visibleCount, showTyping, advance]);

  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto w-full max-w-[1200px] px-6 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight leading-[1.08] text-[#111111] md:text-[2rem]">
            Conversation that <span className="text-accent-gradient">guides</span>, not distracts.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-black/60">
            Every response stays focused on what shoppers need in that exact moment.
          </p>
        </div>

        <div
          className="mx-auto mt-14 max-w-3xl overflow-hidden rounded-[24px] border border-black/[0.06] bg-white/80 shadow-[0_8px_40px_rgba(0,0,0,0.06),0_2px_12px_rgba(0,0,0,0.02),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-xl md:mt-16"
        >
          <div className="min-h-[420px] space-y-4 p-6 md:min-h-[450px] md:space-y-5 md:p-8">
            {messages.slice(0, visibleCount).map((message, idx) => (
              <div
                key={`${message.text}-${idx}`}
                className={`w-fit max-w-[85%] rounded-[20px] px-5 py-3.5 text-[15px] leading-[1.45] md:text-[15px] ${
                  message.from === "user"
                    ? "ml-auto rounded-br-[6px] border border-black/[0.06] bg-[#f5f5f3] shadow-[0_2px_8px_rgba(0,0,0,0.03)] animate-[conversation-bubble-in_400ms_ease-out_both]"
                    : "mr-auto rounded-bl-[6px] border border-black/[0.05] bg-white/95 text-black/85 shadow-[0_2px_12px_rgba(0,0,0,0.04)] animate-[conversation-bubble-in_400ms_ease-out_both]"
                }`}
              >
                {message.text}
              </div>
            ))}
            {showTyping && <TypingIndicator />}
          </div>
        </div>

        <div className="mx-auto mt-16 h-px max-w-5xl bg-black/[0.08]" />
      </div>
    </section>
  );
}
