"use client";

const metrics = [
  "Reduce staff interruptions",
  "Increase basket size",
  "Improve customer confidence",
  "Modernise experience",
];

export function ROI() {
  return (
    <section className="bg-[#f1f0ee] py-16 md:py-24">
      <div className="section-wrapper">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-black/52">Commercial Value</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#111111] md:text-4xl">
              Built to improve the floor and the numbers.
            </h2>
            <p className="mt-4 max-w-xl text-black/65">
              Ask AI Kiosk removes decision friction for shoppers while giving teams more time back for selling and service.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {metrics.map((metric) => (
              <div
                key={metric}
                className="rounded-2xl border border-black/10 bg-white/75 px-5 py-5 text-sm font-medium tracking-tight text-black/78"
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
