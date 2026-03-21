"use client";

const useCases = [
  "Retail",
  "Supermarket",
  "Pharmacy",
  "Hospitality",
  "Forecourt",
  "Department Store",
  "Travel Retail",
];

export function UseCases() {
  return (
    <section className="py-16 md:py-24">
      <div className="section-wrapper">
        <h2 className="text-center text-3xl font-semibold tracking-tight text-[#111111] md:text-4xl">
          Designed for every store format.
        </h2>
        <div className="mt-8 -mx-4 overflow-x-auto px-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="mx-auto flex w-max min-w-full flex-nowrap justify-start gap-3 md:w-auto md:flex-wrap md:justify-center">
            {useCases.map((item) => (
              <span
                key={item}
                className="inline-flex h-10 items-center rounded-full border border-black/14 bg-white px-5 text-sm font-medium text-black/75"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
