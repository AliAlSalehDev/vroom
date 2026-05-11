export default function HomePage() {
  return (
    <div className="px-4 md:px-12 lg:px-20 py-4 pt-0">
      {/* ── Hero Section ──────────────────────────────────────────────────────── */}
      <section
        className="relative hero-rounded overflow-hidden bg-black flex items-center"
        style={{ height: "85vh" }}
      >
        {/* Background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("/assets/hero-bg.svg")',
            backgroundSize: "cover",
            backgroundPosition: "100px center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        {/* Text content */}
        <div className="relative z-20 w-full px-12 md:px-20 grid grid-cols-1 lg:grid-cols-2 items-center h-full">
          <div className="text-white space-y-2">
            <h2 className="banner-title font-semibold">Hello,</h2>
            <h3 className="banner-subtitle">Inspect Your Dream Car</h3>
            <p className="banner-p text-gray-300 pb-20">
              Love at first sight? Don&apos;t let the excitement blind you.
              <br />
              Our experts will uncover any hidden secrets.
            </p>
            <button className="relative group overflow-hidden flex flex-col items-center justify-center bg-[#00F7EF] text-black rounded-2xl py-1 px-20 transition hero-cta">
              <span className="absolute inset-0 w-0 bg-[#80fff3] transition-all duration-[1.5s] ease-out group-hover:w-full"></span>
              <span className="relative z-10 font-semibold hero-cta-title">
                Book Inspection
              </span>
              <span
                className="opacity-70 hero-cta-text"
                style={{ marginTop: -3 }}
              >
                Gas, Hybrid, Electric
              </span>
            </button>
          </div>
          <div className="hidden lg:block"></div>
        </div>

        {/* Car image */}
        <div className="hidden lg:block absolute bottom-0 right-0 z-10 w-[60%] pointer-events-none">
          <img
            src="/assets/car.png"
            alt="Inspection Van"
            className="w-full h-auto object-contain object-right-bottom"
            style={{ marginBottom: -5 }}
          />
        </div>
      </section>

      {/* ── Main content ──────────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto py-16 space-y-24">
        {/* 600+ point inspection */}
        <section>
          <div className="mb-10">
            <h2 className="section-title text-black mb-2">
              600+ point inspection: What’s covered
            </h2>
            <p
              className="max-w-3xl font-light p-color"
              style={{ fontSize: 18 }}
            >
              From the roaring engine to the smallest interior detail, we leave
              no stone unturned to give you a complete and honest picture of
              your dream car.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-10">
            {[
              {
                img: "/assets/Asset 1.svg",
                alt: "Engine",
                title: "Engine & Transmission",
                desc: "Engine, transmission, and cooling systems for smooth power delivery",
                extraClass: "",
              },
              {
                img: "/assets/Asset 2.svg",
                alt: "Electrical",
                title: "Electrical Diagnostics",
                desc: "Battery health, electrical systems, and a (OBD) scan to detect hidden errors",
                extraClass: "opacity-70",
              },
              {
                img: "/assets/Asset 3.svg",
                alt: "Suspension",
                title: "Suspension & Steering",
                desc: "Shock absorbers & steering components for a smooth ride & precise handling",
                extraClass: "",
              },
              {
                img: "/assets/Asset 4.svg",
                alt: "Chassis",
                title: "Chassis & Exterior",
                desc: "Frame & paint to detect accidents, scratches, rust or flood damages",
                extraClass: "",
              },
              {
                img: "/assets/Asset 5.svg",
                alt: "Interior",
                title: "Interior & Cabin Tech",
                desc: "Interior, AC, airbags and infotainment to guarantee a premium driver environment",
                extraClass: "",
              },
              {
                img: "/assets/Asset 6.svg",
                alt: "Brakes",
                title: "Tire & Brake Diagnostics",
                desc: "Condition of the braking system and tires to identify hidden maintenance needs",
                extraClass: "",
              },
            ].map(({ img, alt, title, desc, extraClass }) => (
              <div
                key={title}
                className="border border-black rounded-[32px] overflow-hidden flex flex-col h-full"
              >
                <div className="bg-[#E5E7EB] h-48 flex items-center justify-center px-8 py-6">
                  <img
                    src={img}
                    alt={alt}
                    className={`max-h-full object-contain ${extraClass}`}
                  />
                </div>
                <div className="bg-[#00F7EF] p-6 flex-grow">
                  <h3 className="font-semibold text-2xl mb-1">{title}</h3>
                  <p className="section-p font-light leading-snug">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Client Testimonials */}
        <section>
          <div className="mb-10">
            <h2 className="section-title text-black mb-2">
              Client Testimonials
            </h2>
            <p className="font-light p-color" style={{ fontSize: 18 }}>
              Discover our range of services to ensure your next car is a smart
              investment!
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="border border-black rounded-[32px] p-8 flex flex-col justify-center min-h-[250px]"
              >
                <p
                  className="text-gray-700 italic leading-relaxed"
                  style={{ fontSize: 15 }}
                >
                  &quot;I nearly bought a car with hidden frame damage.
                  Vroom&apos;s thorough inspection saved me thousands of dirhams
                  and gave me total peace of mind.&quot;
                </p>
                <div className="mt-6">
                  <p className="text-gray-900">Majdi Fayad</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
