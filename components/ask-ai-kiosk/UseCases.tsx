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
    <section className="py-20 md:py-28">
      <div className="mx-auto w-full max-w-[1200px] px-6 sm:px-8">
        <h2 className="text-center text-3xl font-semibold tracking-tight leading-[1.08] text-[#111111] md:text-[2rem]">
          Designed for every store format.
        </h2>
        <div className="mt-10 -mx-4 overflow-x-auto px-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="mx-auto flex w-max min-w-full flex-nowrap justify-start gap-4 md:w-auto md:flex-wrap md:justify-center">
            {useCases.map((item) => (
              <span
                key={item}
                className="inline-flex h-11 items-center rounded-full border border-black/14 bg-white px-6 text-sm font-medium text-black/75"
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
