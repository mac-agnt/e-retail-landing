"use client";

const messages = [
  { from: "user", text: "Where can I find lactose-free milk?" },
  { from: "ai", text: "Aisle 4, left side. We also have two organic options available." },
  { from: "user", text: "Do you have this in stock?" },
  { from: "ai", text: "Yes. 18 units available right now in this branch." },
  { from: "user", text: "What’s the difference between these two?" },
  { from: "ai", text: "One has higher protein and lower sugar. I can show side-by-side details." },
];

export function Conversation() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto w-full max-w-[1200px] px-6 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight leading-[1.08] text-[#111111] md:text-[2rem]">
            Conversations that guide, not distract.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-black/60">
            Every response stays focused on what shoppers need in that exact moment.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl rounded-[30px] border border-black/10 bg-white/75 p-5 backdrop-blur-sm md:p-8">
          <div className="space-y-4 md:space-y-5">
            {messages.map((message, idx) => (
              <div
                key={`${message.text}-${idx}`}
                className={`max-w-[85%] rounded-[20px] px-4 py-3 text-sm text-black/80 shadow-[0_4px_16px_rgba(0,0,0,0.04)] md:text-[15px] ${
                  message.from === "user"
                    ? "ml-auto bg-[#f0f0ee]"
                    : "mr-auto border border-black/10 bg-white"
                } animate-[page-fade_280ms_ease-out_both]`}
                style={{ animationDelay: `${idx * 120}ms` }}
              >
                {message.text}
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-16 h-px max-w-5xl bg-black/10" />
      </div>
    </section>
  );
}
