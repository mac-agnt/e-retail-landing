"use client";

const nodes = ["Store Data", "AI Training", "Customer Interaction"];

export function Diagram() {
  return (
    <section className="py-16 md:py-24">
      <div className="section-wrapper">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-[#111111] md:text-4xl">
            Intelligence that stays grounded in your store.
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-5xl">
          <div className="hidden items-center justify-between gap-4 md:flex">
            {nodes.map((node, index) => (
              <div key={node} className="relative flex items-center">
                <div className="w-[180px] rounded-2xl border border-black/12 bg-white px-4 py-4 text-center text-sm font-medium text-black/78 shadow-[0_8px_22px_rgba(0,0,0,0.05)]">
                  {node}
                </div>
                {index < nodes.length - 1 && (
                  <div className="relative mx-4 h-px w-24 bg-black/15">
                    <span className="absolute -top-1.5 h-3 w-3 rounded-full bg-[#e11d2e] animate-line-pulse" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="space-y-4 md:hidden">
            {nodes.map((node, index) => (
              <div key={node} className="relative">
                <div className="rounded-2xl border border-black/12 bg-white px-4 py-4 text-center text-sm font-medium text-black/78 shadow-[0_8px_22px_rgba(0,0,0,0.05)]">
                  {node}
                </div>
                {index < nodes.length - 1 && <div className="mx-auto my-3 h-6 w-px bg-black/15" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
