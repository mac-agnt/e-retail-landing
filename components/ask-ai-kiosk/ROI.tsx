"use client";

const metrics = [
  "Reduce staff interruptions",
  "Increase basket size",
  "Improve customer confidence",
  "Modernise experience",
];

export function ROI() {
  return (
    <section className="bg-[#f1f0ee] py-20 md:py-28">
      <div className="mx-auto w-full max-w-[1200px] px-6 sm:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-black/52">Commercial Value</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight leading-[1.08] text-[#111111] md:text-[2rem]">
              Built to improve the floor and the numbers.
            </h2>
            <p className="mt-4 max-w-lg text-black/65">
              Ask AI Kiosk removes decision friction for shoppers while giving teams more time back for selling and service.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {metrics.map((metric) => (
              <div
                key={metric}
                className="rounded-[20px] border border-black/10 bg-white/75 px-6 py-6 text-sm font-medium tracking-tight text-black/78 shadow-[0_4px_14px_rgba(0,0,0,0.03)]"
              >
                {metric}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
