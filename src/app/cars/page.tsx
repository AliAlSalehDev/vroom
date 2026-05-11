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

export default function CarsPage() {
  return (
    <div className="px-4 md:px-12 lg:px-20 py-4">
      <div className="max-w-7xl mx-auto pb-8 pt-4 mb-8">
        {/* ── Header ──────────────────────────────────────────────────────────── */}
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

        {/* ── Filter + Grid ────────────────────────────────────────────────────── */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-28">
          {/* Sidebar filters */}
          <aside className="w-full lg:w-60 flex-shrink-0">
            {[
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
                  { value: "USA", label: "USA" },
                  { value: "Europe", label: "Europe" },
                  { value: "Chinese", label: "Chinese" },
                  { value: "Other", label: "Other" },
                ],
              },
            ].map(({ label, options }) => (
              <div key={label} className="relative mb-2">
                <label className="text-lg font-normal">{label}</label>
                <select className="filter-select w-full border-b border-black py-2 appearance-none bg-transparent outline-none cursor-pointer text-[15px] text-[#3e3e3e]">
                  {options.map(({ value, label: optLabel }) => (
                    <option key={value} value={value}>
                      {optLabel}
                    </option>
                  ))}
                </select>
                <i className="fa-solid fa-chevron-down absolute right-0 bottom-3 text-[10px]"></i>
              </div>
            ))}

            {/* Year Model */}
            <div className="relative mb-2">
              <label className="text-lg font-normal">Year Model</label>
              <select className="filter-select w-full border-b border-black py-2 appearance-none bg-transparent outline-none cursor-pointer text-[15px] text-[#3e3e3e]">
                <option value="all">All</option>
                {Array.from({ length: 27 }, (_, i) => 2026 - i).map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
              <i className="fa-solid fa-chevron-down absolute right-0 bottom-3 text-[10px]"></i>
            </div>

            {[
              {
                label: "Mileage",
                options: [
                  { value: "all", label: "All" },
                  { value: "0-50k", label: "0 - 50,000 KM" },
                  { value: "30-50k", label: "30,000 - 50,000 KM" },
                  { value: "50-100k", label: "50,000 - 100,000 KM" },
                  { value: "100k+", label: "100,000+ km" },
                ],
              },
              {
                label: "Fuel Type",
                options: [
                  { value: "all", label: "All" },
                  { value: "Petrol", label: "Petrol" },
                  { value: "Hybrid", label: "Hybrid" },
                  { value: "Electric", label: "Electric" },
                ],
              },
            ].map(({ label, options }) => (
              <div key={label} className="relative mb-2">
                <label className="text-lg font-normal">{label}</label>
                <select className="filter-select w-full border-b border-black py-2 appearance-none bg-transparent outline-none cursor-pointer text-[15px] text-[#3e3e3e]">
                  {options.map(({ value, label: optLabel }) => (
                    <option key={value} value={value}>
                      {optLabel}
                    </option>
                  ))}
                </select>
                <i className="fa-solid fa-chevron-down absolute right-0 bottom-3 text-[10px]"></i>
              </div>
            ))}

            {/* Last Inspection */}
            <div className="relative mb-6">
              <label className="text-lg font-normal">Last Inspection</label>
              <select className="filter-select w-full border-b border-black py-2 appearance-none bg-transparent outline-none cursor-pointer text-[15px] text-[#3e3e3e]">
                <option>1 week ago</option>
                <option>2 week ago</option>
                <option>More then 2 weeks</option>
              </select>
              <i className="fa-solid fa-chevron-down absolute right-0 bottom-3 text-[10px]"></i>
            </div>

            <button className="relative group overflow-hidden bg-[#00F7EF] w-full py-2 rounded-full font-semibold text-black text-lg border border-black mt-4">
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
