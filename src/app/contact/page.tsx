export default function ContactPage() {
  return (
    <div className="px-4 md:px-12 lg:px-20 pb-4 pt-0 mb-8">
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

        {/* Content */}
        <div className="relative z-20 w-full px-12 md:px-20 grid grid-cols-1 lg:grid-cols-2 items-center h-full">
          <div className="text-white space-y-8 max-w-lg">
            <div>
              <h2 className="contact-banner-title">Contact us</h2>
              <p className="contact-banner-subtitle opacity-90">
                <span className="font-semibold">Have questions?</span>
                <span className="ml-1">
                  We&apos;ve got answers. Reach out to us directly or request a
                  callback. We are always around and available across all
                  Emirates, to make sure your dream car is actually a dream—not
                  a headache.
                </span>
              </p>
            </div>

            <div className="space-y-4 max-w-sm">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full bg-transparent border border-gray-600 rounded-full py-2.5 px-6 text-sm focus:outline-none focus:border-[#00F7EF] transition"
                />
              </div>
              <div className="flex border border-gray-600 rounded-full overflow-hidden w-full">
                <input
                  type="text"
                  placeholder="Mob. Number"
                  className="flex-grow bg-transparent py-2.5 px-6 text-sm focus:outline-none w-1/2"
                />
                <button className="relative group overflow-hidden bg-[#00F7EF] text-black font-medium px-6 py-2.5 text-sm whitespace-nowrap transition">
                  <span className="absolute inset-0 w-0 bg-[#80fff3] transition-all duration-[1.5s] ease-out group-hover:w-full"></span>
                  <span className="relative z-10">Request a call back</span>
                </button>
              </div>
            </div>

            <div className="space-y-6">
              <p className="contact-banner-subtitle opacity-90">
                Contact us through WhatsApp, phone, or email to
                <br className="hidden md:block" />
                discuss your inspection or get professional assistance.
              </p>

              <div className="space-y-1 contact-banner-subtitle opacity-90">
                <p>
                  <span>Call/WhatsApp:</span>{" "}
                  <span className="font-semibold">050 4273827</span>
                </p>
                <p>
                  <span>Tel:</span>{" "}
                  <span className="font-semibold">04 273827</span>
                </p>
                <p>
                  <span>Email:</span>{" "}
                  <span className="font-semibold">info@vroomofficial.com</span>
                </p>
              </div>
            </div>
          </div>

          <div className="hidden lg:block"></div>
        </div>
      </section>

      {/* ── Feature Cards ─────────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto py-16 space-y-24 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          <div className="flex flex-col">
            <div className="w-12 h-12">
              <img
                src="/assets/certified.svg"
                alt="Certified Icon"
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="feature-title">Certified Company</h3>
            <p className="text-[#0a0a0a] text-[18px] font-light">
              We are fully licensed and accredited to deliver the highest
              industry standards. Trust our certified experts for honest,
              unbiased, and precise assessments.
            </p>
          </div>

          <div className="flex flex-col">
            <div className="w-12 h-12">
              <img
                src="/assets/calendar.svg"
                alt="Book Icon"
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="feature-title">Book Inspection</h3>
            <p className="text-[#0a0a0a] text-[18px] font-light">
              Secure your on-site vehicle check in seconds. Choose your
              preferred package and time and let our mobile team come to you to
              handle it all.
            </p>
          </div>

          <div className="flex flex-col">
            <div className="w-12 h-12">
              <img
                src="/assets/join_us.svg"
                alt="Team Icon"
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="feature-title">Join Our Team</h3>
            <p className="text-[#0a0a0a] text-[18px] font-light">
              Looking for a career that combines professional growth with a
              supportive culture? Join our dynamic team. Please send your CV to{" "}
              <span className="font-semibold text-[#0a0a0a]">
                info@vroomofficial.com
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
