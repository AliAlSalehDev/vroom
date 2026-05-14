"use client";

import { useState, useRef, useEffect } from "react";

/* ── Custom filter select ───────────────────────────────────────────────────── */
interface Option {
  value: string;
  label: string;
}

function FilterSelect({
  label,
  options,
}: {
  label: string;
  options: Option[];
}) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(options[0]);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node))
        setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative mb-2">
      <p className="text-lg font-normal">{label}</p>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full border-b border-black py-2 flex items-center justify-between text-[15px] text-[#3e3e3e] outline-none bg-transparent cursor-pointer"
      >
        <span>{selected.label}</span>
        <i
          className={`fa-solid fa-chevron-down text-[10px] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="absolute z-50 top-full left-0 right-0 bg-white border border-gray-200 shadow-md max-h-[220px] overflow-y-auto">
          {options.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => {
                setSelected(opt);
                setOpen(false);
              }}
              className={`w-full text-left px-4 py-2 text-[14px] hover:bg-gray-50 transition-colors ${
                selected.value === opt.value
                  ? "text-[#00f7ef] font-medium"
                  : "text-[#3e3e3e]"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/* ── Car card ───────────────────────────────────────────────────────────────── */
const CAR_CARD = {
  brand: "Mercedes Benz",
  model: "CLA 45s AMG",
  specs: "GCC",
  fuel: "Petrol",
  mileage: "22,100 KM",
  year: "2023",
  inspection: "Advanced",
  gear: "Automatic",
};

function CarCard() {
  return (
    <div className="w-full max-w-[300px] mx-auto bg-[#1C1C1E] rounded-[40px] overflow-hidden flex flex-col shadow-xl h-fit">
      <div className="bg-[#BCBCBC] h-48 flex items-center justify-center p-4">
        <img
          src="/assets/car-sample.png"
          alt="Mercedes Benz"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="px-6 pt-6 pb-6 flex flex-col gap-4">
        <div className="space-y-1">
          <h3 className="text-white text-2xl font-semibold leading-none">
            {CAR_CARD.brand}
          </h3>
          <p className="text-white text-lg opacity-70">{CAR_CARD.model}</p>
        </div>

        <div className="border-t border-white/10"></div>

        <div className="flex gap-10">
          <div className="flex flex-col items-start gap-4">
            <img src="/assets/specs.svg" className="w-6 h-6" alt="Specs" />
            <span className="text-white text-sm" style={{ fontWeight: 300 }}>
              {CAR_CARD.specs}
            </span>
          </div>
          <div className="flex flex-col items-start gap-4">
            <img src="/assets/fuel.svg" className="w-6 h-6" alt="Fuel" />
            <span className="text-white text-sm" style={{ fontWeight: 300 }}>
              {CAR_CARD.fuel}
            </span>
          </div>
          <div className="flex flex-col items-start gap-4">
            <img src="/assets/mileage.svg" className="w-6 h-6" alt="Mileage" />
            <span className="text-white text-sm" style={{ fontWeight: 300 }}>
              {CAR_CARD.mileage}
            </span>
          </div>
        </div>

        <div className="border-t border-white/10"></div>

        <div className="text-white text-md">
          <p className="opacity-70">
            Year:{" "}
            <span className="font-semibold text-white">{CAR_CARD.year}</span>
          </p>
          <p className="opacity-70">
            Inspection:{" "}
            <span className="font-semibold text-white">
              {CAR_CARD.inspection}
            </span>
          </p>
          <p className="opacity-70">
            Gear:{" "}
            <span className="font-semibold text-white">{CAR_CARD.gear}</span>
          </p>
        </div>

        <div className="border-t border-white/10"></div>

        <a
          href="#"
          className="text-white text-lg font-normal hover:text-[#00F7EF] transition-colors"
        >
          Inspect this car
        </a>
      </div>
    </div>
  );
}

/* ── Filter data ────────────────────────────────────────────────────────────── */
const YEAR_OPTIONS: Option[] = [
  { value: "all", label: "All" },
  ...Array.from({ length: 27 }, (_, i) => 2026 - i).map((y) => ({
    value: String(y),
    label: String(y),
  })),
];

const FILTERS: { label: string; options: Option[] }[] = [
  {
    label: "Brand",
    options: [
      { value: "", label: "All Brands" },
      { value: "Audi", label: "Audi" },
      { value: "Mercedes", label: "Mercedes" },
      { value: "Nissan", label: "Nissan" },
      { value: "Toyota", label: "Toyota" },
      { value: "BMW", label: "BMW" },
      { value: "Porsche", label: "Porsche" },
      { value: "Lexus", label: "Lexus" },
      { value: "Honda", label: "Honda" },
      { value: "Tesla", label: "Tesla" },
      { value: "Ford", label: "Ford" },
      { value: "Hyundai", label: "Hyundai" },
    ],
  },
  {
    label: "Specs",
    options: [
      { value: "all", label: "All" },
      { value: "gcc", label: "GCC" },
      { value: "usa", label: "USA" },
      { value: "europe", label: "Europe" },
      { value: "chinese", label: "Chinese" },
      { value: "other", label: "Other" },
    ],
  },
  { label: "Year Model", options: YEAR_OPTIONS },
  {
    label: "Mileage",
    options: [
      { value: "all", label: "All" },
      { value: "0-50k", label: "0 – 50,000 KM" },
      { value: "30-50k", label: "30,000 – 50,000 KM" },
      { value: "50-100k", label: "50,000 – 100,000 KM" },
      { value: "100k+", label: "100,000+ KM" },
    ],
  },
  {
    label: "Fuel Type",
    options: [
      { value: "all", label: "All" },
      { value: "petrol", label: "Petrol" },
      { value: "hybrid", label: "Hybrid" },
      { value: "electric", label: "Electric" },
    ],
  },
  {
    label: "Last Inspection",
    options: [
      { value: "1w", label: "1 week ago" },
      { value: "2w", label: "2 weeks ago" },
      { value: "2w+", label: "More than 2 weeks" },
    ],
  },
];

/* ── Page ───────────────────────────────────────────────────────────────────── */
export default function CarsPage() {
  return (
    <div className="px-6 md:px-12 lg:px-20 py-4">
      <div className="max-w-7xl mx-auto pb-8 pt-4 mb-8">
        {/* ── Header ────────────────────────────────────────────────────────── */}
        <section className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="page-header mb-8">
                Inspected Cars
                <br />
                we recommend
              </h1>
              <div className="space-y-6 page-p">
                <p>
                  Each vehicle listed below includes its most recent inspection
                  date. We strongly recommend a fresh inspection immediately
                  prior to purchase for the most accurate results.
                </p>
                <p>
                  <span className="font-medium">Please note:</span> We are an
                  independent inspection service, not the seller. We display
                  these vehicles as a record of our previous technical
                  assessments.
                </p>
              </div>
            </div>
            <div className="relative flex justify-center lg:justify-end">
              <img
                src="/assets/car-discount.svg"
                alt="Porsche Illustration"
                className="w-full max-w-[600px] h-auto object-contain"
              />
            </div>
          </div>
        </section>

        {/* ── Filter + Grid ─────────────────────────────────────────────────── */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-28">
          {/* Sidebar filters */}
          <aside className="w-full lg:w-60 flex-shrink-0">
            {FILTERS.map(({ label, options }) => (
              <FilterSelect key={label} label={label} options={options} />
            ))}

            <button className="relative group overflow-hidden bg-[#00F7EF] w-full py-2 rounded-full font-semibold text-black text-lg border border-black mt-6">
              <span className="absolute inset-0 w-0 bg-[#80fff3] transition-all duration-[1.5s] ease-out group-hover:w-full"></span>
              <span className="relative z-10">Apply</span>
            </button>
          </aside>

          {/* Car grid */}
          <main className="flex-grow grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 gap-y-10 items-start mb-10">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <CarCard key={i} />
            ))}
          </main>
        </div>
      </div>
    </div>
  );
}
