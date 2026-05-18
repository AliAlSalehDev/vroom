"use client";

import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

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

/* ── Car image carousel ─────────────────────────────────────────────────────── */
const CAR_IMAGES = [
  "https://dbz-images.dubizzle.com/images/2026/04/01/97345bdae5c24dcebc09f6526302de00-.jpeg",
  "https://wrench.com/blog/content/images/2020/07/usedcarinspection-1.jpg",
  "https://dbz-images.dubizzle.com/images/2026/03/18/4ba6fb857644498382869fe8d9974006-.jpeg",
];

function CarImageCarousel() {
  const [active, setActive] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalActive, setModalActive] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const dragStart = useRef<number | null>(null);

  const goTo = (idx: number) => {
    if (!ref.current) return;
    ref.current.scrollTo({
      left: idx * ref.current.offsetWidth,
      behavior: "smooth",
    });
  };

  const modalGoTo = (idx: number) => {
    const clamped = Math.max(0, Math.min(CAR_IMAGES.length - 1, idx));
    if (!modalRef.current) return;
    modalRef.current.scrollTo({
      left: clamped * modalRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (!ref.current) return;
    setActive(Math.round(ref.current.scrollLeft / ref.current.offsetWidth));
  };

  const handleModalScroll = () => {
    if (!modalRef.current) return;
    setModalActive(
      Math.round(modalRef.current.scrollLeft / modalRef.current.offsetWidth),
    );
  };

  const onMouseDown = (e: React.MouseEvent) => {
    dragStart.current = e.pageX;
  };
  const onMouseUp = (e: React.MouseEvent) => {
    if (dragStart.current === null) return;
    const delta = dragStart.current - e.pageX;
    dragStart.current = null;
    if (Math.abs(delta) < 20) return;
    if (delta > 0) goTo(Math.min(CAR_IMAGES.length - 1, active + 1));
    else goTo(Math.max(0, active - 1));
  };

  const openModal = () => {
    setModalActive(active);
    setModalOpen(true);
  };

  // Jump modal scroll to correct slide when it opens
  useEffect(() => {
    if (modalOpen && modalRef.current) {
      modalRef.current.scrollLeft = modalActive * modalRef.current.offsetWidth;
    }
  }, [modalOpen]); // eslint-disable-line react-hooks/exhaustive-deps

  // Keyboard navigation for modal
  useEffect(() => {
    if (!modalOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") modalGoTo(modalActive + 1);
      else if (e.key === "ArrowLeft") modalGoTo(modalActive - 1);
      else if (e.key === "Escape") setModalOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [modalOpen, modalActive]); // eslint-disable-line react-hooks/exhaustive-deps

  // Lock body scroll while modal is open
  useEffect(() => {
    document.body.style.overflow = modalOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [modalOpen]);

  return (
    <>
      {/* ── Carousel ───────────────────────────────────────────────────────── */}
      <div
        className="group relative h-28 md:h-48 flex-shrink-0"
        style={{
          background: "linear-gradient(160deg, #c8c8c8 0%, #e8e8e8 100%)",
        }}
      >
        <div
          ref={ref}
          onScroll={handleScroll}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          className="flex h-full overflow-x-auto no-scrollbar snap-x snap-mandatory cursor-grab active:cursor-grabbing select-none"
        >
          {CAR_IMAGES.map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-full h-full flex items-end md:items-center justify-center p-2 md:p-0 snap-start"
            >
              <img
                src={src}
                alt={`Car view ${i + 1}`}
                className="w-full h-full object-contain drop-shadow pointer-events-none"
              />
            </div>
          ))}
        </div>

        {/* Fullscreen button — top left */}
        <button
          onClick={openModal}
          className="absolute top-2 left-2 md:left-4 w-6 h-6 md:w-7 md:h-7 rounded-full bg-black/25 hover:bg-black/45 flex items-center justify-center text-white transition-colors"
        >
          <i className="fa-solid fa-expand text-[9px] md:text-[10px]" />
        </button>

        {/* Arrow buttons — desktop on hover */}
        {active > 0 && (
          <button
            onClick={() => goTo(active - 1)}
            className="hidden md:flex absolute left-8 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/30 hover:bg-black/50 items-center justify-center text-white transition-colors opacity-0 group-hover:opacity-100"
          >
            <i className="fa-solid fa-chevron-left text-[10px]" />
          </button>
        )}
        {active < CAR_IMAGES.length - 1 && (
          <button
            onClick={() => goTo(active + 1)}
            className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/30 hover:bg-black/50 items-center justify-center text-white transition-colors opacity-0 group-hover:opacity-100"
          >
            <i className="fa-solid fa-chevron-right text-[10px]" />
          </button>
        )}

        {/* Dots */}
        <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5">
          {CAR_IMAGES.map((_, i) => (
            <div
              key={i}
              className={`rounded-full transition-all duration-200 ${i === active ? "w-3.5 h-1.5 bg-gray-700" : "w-1.5 h-1.5 bg-gray-500/50"}`}
            />
          ))}
        </div>
      </div>

      {/* ── Fullscreen modal ────────────────────────────────────────────────── */}
      <div
        className={`fixed inset-0 z-[300] flex flex-col transition-opacity duration-300 ${modalOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        style={{ background: "rgba(0,0,0,0.93)" }}
        onClick={() => setModalOpen(false)}
      >
        {/* Top bar */}
        <div
          className="flex items-center justify-between px-6 py-5 flex-shrink-0"
          onClick={(e) => e.stopPropagation()}
        >
          <span className="text-white/40 text-sm tracking-widest font-light">
            {modalActive + 1} &nbsp;/&nbsp; {CAR_IMAGES.length}
          </span>
          <button
            onClick={() => setModalOpen(false)}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            <i className="fa-solid fa-xmark text-base" />
          </button>
        </div>

        {/* Slider */}
        <div
          className="flex-1 relative flex items-center min-h-0"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => modalGoTo(modalActive - 1)}
            disabled={modalActive === 0}
            className="absolute left-4 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors disabled:opacity-20 disabled:cursor-not-allowed"
          >
            <i className="fa-solid fa-chevron-left" />
          </button>

          <div
            ref={modalRef}
            onScroll={handleModalScroll}
            className="flex w-full h-full overflow-x-auto no-scrollbar snap-x snap-mandatory"
          >
            {CAR_IMAGES.map((src, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-full h-full flex items-center justify-center px-16 snap-start"
              >
                <img
                  src={src}
                  alt={`Car view ${i + 1}`}
                  className="max-h-[65vh] max-w-full object-contain select-none"
                  draggable={false}
                />
              </div>
            ))}
          </div>

          <button
            onClick={() => modalGoTo(modalActive + 1)}
            disabled={modalActive === CAR_IMAGES.length - 1}
            className="absolute right-4 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors disabled:opacity-20 disabled:cursor-not-allowed"
          >
            <i className="fa-solid fa-chevron-right" />
          </button>
        </div>

        {/* Bottom dots */}
        <div
          className="flex justify-center gap-2 py-6 flex-shrink-0"
          onClick={(e) => e.stopPropagation()}
        >
          {CAR_IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => modalGoTo(i)}
              className={`rounded-full transition-all duration-200 ${i === modalActive ? "w-6 h-2 bg-[#00F7EF]" : "w-2 h-2 bg-white/25 hover:bg-white/50"}`}
            />
          ))}
        </div>
      </div>
    </>
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
    <div className="w-full md:max-w-[300px] md:mx-auto bg-[#1C1C1E] rounded-[20px] md:rounded-[40px] overflow-hidden flex flex-col shadow-xl h-fit">
      <CarImageCarousel />

      <div className="px-3 pt-3 pb-3 md:px-6 md:pt-6 md:pb-6 flex flex-col gap-2 md:gap-4">
        <div className="space-y-0.5 md:space-y-1">
          <h3 className="text-white text-xs md:text-2xl font-semibold leading-none truncate">
            {CAR_CARD.brand}
          </h3>
          <p className="text-white text-[10px] md:text-lg opacity-70 truncate">
            {CAR_CARD.model}
          </p>
        </div>

        <div className="border-t border-white/10"></div>

        <div className="flex gap-2 md:gap-10">
          <div className="flex flex-col items-start gap-1 md:gap-4">
            <img
              src="/assets/specs.svg"
              className="w-3.5 h-3.5 md:w-6 md:h-6"
              alt="Specs"
            />
            <span
              className="text-white text-[9px] md:text-sm"
              style={{ fontWeight: 300 }}
            >
              {CAR_CARD.specs}
            </span>
          </div>
          <div className="flex flex-col items-start gap-1 md:gap-4">
            <img
              src="/assets/fuel.svg"
              className="w-3.5 h-3.5 md:w-6 md:h-6"
              alt="Fuel"
            />
            <span
              className="text-white text-[9px] md:text-sm"
              style={{ fontWeight: 300 }}
            >
              {CAR_CARD.fuel}
            </span>
          </div>
          <div className="flex flex-col items-start gap-1 md:gap-4">
            <img
              src="/assets/mileage.svg"
              className="w-3.5 h-3.5 md:w-6 md:h-6"
              alt="Mileage"
            />
            <span
              className="text-white text-[9px] md:text-sm"
              style={{ fontWeight: 300 }}
            >
              {CAR_CARD.mileage}
            </span>
          </div>
        </div>

        <div className="border-t border-white/10"></div>

        <div className="text-white text-[9px] md:text-[16px] leading-tight md:leading-normal">
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
          className="text-white text-[10px] md:text-lg font-normal hover:text-[#00F7EF] transition-colors flex items-center gap-1"
        >
          Inspect this car
        </a>
      </div>
    </div>
  );
}

/* ── Car card skeleton ──────────────────────────────────────────────────────── */
function CarCardSkeleton() {
  return (
    <div className="w-full md:max-w-[300px] md:mx-auto bg-gray-100 rounded-[20px] md:rounded-[40px] overflow-hidden flex flex-col shadow-sm h-fit">
      <div className="skeleton-block h-28 md:h-48" />

      <div className="px-3 pt-3 pb-3 md:px-6 md:pt-6 md:pb-6 flex flex-col gap-2 md:gap-4">
        <div className="space-y-1 md:space-y-2">
          <div className="skeleton-block h-3 md:h-6 w-3/4 rounded-full" />
          <div className="skeleton-block h-2.5 md:h-4 w-1/2 rounded-full" />
        </div>

        <div className="border-t border-gray-200" />

        <div className="flex gap-2 md:gap-10">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex flex-col items-start gap-1 md:gap-4">
              <div className="skeleton-block w-3.5 h-3.5 md:w-6 md:h-6 rounded" />
              <div className="skeleton-block h-2 md:h-3 w-5 md:w-8 rounded-full" />
            </div>
          ))}
        </div>

        <div className="border-t border-gray-200" />

        <div className="space-y-1 md:space-y-2">
          <div className="skeleton-block h-2 md:h-3 w-2/3 rounded-full" />
          <div className="skeleton-block h-2 md:h-3 w-3/4 rounded-full" />
          <div className="skeleton-block h-2 md:h-3 w-1/2 rounded-full" />
        </div>

        <div className="border-t border-gray-200" />

        <div className="skeleton-block h-2 md:h-4 w-1/3 rounded-full" />
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
const TOTAL_PAGES = 8;

export default function CarsPage() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(t);
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    setLoading(true);
  };

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
            <Link
              href="/packages"
              className="relative inline-flex w-fit group overflow-hidden bg-[#00F7EF] md:hidden text-black py-2 px-6 rounded-xl border border-black text-md transition-colors duration-300 header-cta -mt-5"
            >
              <span className="absolute inset-0 w-0 bg-[#80fff3] transition-all duration-[1.5s] ease-out group-hover:w-full"></span>
              <span className="relative z-10">Book Inspection</span>
            </Link>
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

        {/* Mobile filter toggle — hidden on desktop */}
        <div className="lg:hidden mb-6">
          <button
            type="button"
            onClick={() => setMobileFiltersOpen((v) => !v)}
            className="w-full bg-[#00F7EF] rounded-full py-4 px-6 flex items-center justify-between text-black font-medium text-lg"
          >
            <span>Filters</span>
            <i className="fa-solid fa-sliders text-xl" />
          </button>

          <AnimatePresence initial={false}>
            {mobileFiltersOpen && (
              <motion.div
                key="mobile-filters"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div className="mt-4 border border-gray-200 rounded-[24px] p-6">
                  {FILTERS.map(({ label, options }) => (
                    <FilterSelect key={label} label={label} options={options} />
                  ))}
                  <button
                    type="button"
                    onClick={() => setMobileFiltersOpen(false)}
                    className="relative group overflow-hidden bg-[#00F7EF] w-full py-2 rounded-full font-semibold text-black text-lg border border-black mt-6"
                  >
                    <span className="absolute inset-0 w-0 bg-[#80fff3] transition-all duration-[1.5s] ease-out group-hover:w-full" />
                    <span className="relative z-10">Apply</span>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-28">
          {/* Sidebar filters — desktop only */}
          <aside className="hidden lg:block w-60 flex-shrink-0">
            {FILTERS.map(({ label, options }) => (
              <FilterSelect key={label} label={label} options={options} />
            ))}

            <button className="relative group overflow-hidden bg-[#00F7EF] w-full py-2 rounded-full font-semibold text-black text-lg border border-black mt-6">
              <span className="absolute inset-0 w-0 bg-[#80fff3] transition-all duration-[1.5s] ease-out group-hover:w-full"></span>
              <span className="relative z-10">Apply</span>
            </button>
          </aside>

          {/* Car grid */}
          <div className="flex-grow flex flex-col">
            <main className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-3 gap-y-4 md:gap-6 md:gap-y-10 items-start mb-10">
              {loading
                ? [1, 2, 3, 4, 5, 6].map((i) => <CarCardSkeleton key={i} />)
                : [1, 2, 3, 4, 5, 6].map((i) => <CarCard key={i} />)}
            </main>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-2 py-6">
              {/* Prev */}
              <button
                onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-300 text-gray-400 hover:border-[#00f7ef] hover:text-[#00f7ef] disabled:opacity-30 disabled:cursor-not-allowed transition-colors duration-200"
              >
                <i className="fa-solid fa-chevron-left text-[11px]" />
              </button>

              {/* Page numbers */}
              {Array.from({ length: TOTAL_PAGES }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`w-9 h-9 flex items-center justify-center rounded-full text-sm font-medium transition-colors duration-200 ${
                      currentPage === page
                        ? "bg-[#00f7ef] text-black border border-[#00f7ef]"
                        : "border border-gray-300 text-gray-500 hover:border-[#00f7ef] hover:text-[#00f7ef]"
                    }`}
                  >
                    {page}
                  </button>
                ),
              )}

              {/* Next */}
              <button
                onClick={() =>
                  handlePageChange(Math.min(TOTAL_PAGES, currentPage + 1))
                }
                disabled={currentPage === TOTAL_PAGES}
                className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-300 text-gray-400 hover:border-[#00f7ef] hover:text-[#00f7ef] disabled:opacity-30 disabled:cursor-not-allowed transition-colors duration-200"
              >
                <i className="fa-solid fa-chevron-right text-[11px]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
