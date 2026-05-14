"use client";

import { motion } from "framer-motion";
import Link from "next/link";

/* ── Animation primitives ──────────────────────────────────────────────────── */
const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.65, ease: EASE } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.65, ease: EASE } },
};

// Cards inside overflow-x-auto must not use x offset — it shifts scroll bounds and causes a layout glitch
const cardReveal = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

const stagger = (amount = 0.1) => ({
  hidden: {},
  show: { transition: { staggerChildren: amount } },
});

const viewOpts = { once: true, amount: 0.2 } as const;

/* ── Page ──────────────────────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <div className="md:px-12 lg:px-20 py-4 pt-0">
      {/* ── Hero ────────────────────────────────────────────────────────────── */}
      <section
        className="mx-4 md:mx-0 relative hero-rounded overflow-hidden bg-black flex items-center"
        style={{ height: "85vh" }}
      >
        <div className="absolute inset-0 z-0 hero-bg" />

        <div className="relative z-20 w-full px-12 md:px-20 grid grid-cols-1 lg:grid-cols-2 items-center h-full">
          {/* Text block — stagger children on mount */}
          <motion.div
            className="text-white space-y-2"
            variants={stagger(0.14)}
            initial="hidden"
            animate="show"
          >
            <motion.h2
              className="banner-title font-semibold"
              variants={fadeLeft}
            >
              Hello,
            </motion.h2>

            <motion.h3
              className="banner-subtitle text-[#00F7EF] md:text-white"
              variants={fadeLeft}
            >
              Inspect Your Dream Car
            </motion.h3>

            <motion.p
              className="banner-p text-gray-300 pb-6 md:pb-20"
              variants={fadeUp}
            >
              Love at first sight? Don&apos;t let the excitement blind you.
              <br />
              Our experts will uncover any hidden secrets.
            </motion.p>

            <motion.div variants={fadeUp}>
              <Link
                href="/packages"
                className="relative inline-flex group overflow-hidden flex flex-col items-center justify-center bg-[#00F7EF] text-black rounded-2xl py-1 px-10 md:px-20 transition hero-cta"
              >
                <span className="absolute inset-0 w-0 bg-[#80fff3] transition-all duration-[1.5s] ease-out group-hover:w-full" />
                <span className="relative z-10 font-semibold hero-cta-title">
                  Book Inspection
                </span>
                <span
                  className="opacity-70 hero-cta-text"
                  style={{ marginTop: -3 }}
                >
                  Gas, Hybrid, Electric
                </span>
              </Link>
            </motion.div>
          </motion.div>

          <div className="hidden lg:block" />
        </div>

        {/* Car image — slides in from right on mount */}
        <motion.div
          className="hidden lg:block absolute bottom-0 right-0 z-10 w-[60%] pointer-events-none"
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.3 }}
        >
          <img
            src="/assets/car.png"
            alt="Inspection Van"
            className="w-full h-auto object-contain object-right-bottom"
            style={{ marginBottom: -5 }}
          />
        </motion.div>
      </section>

      {/* ── Main content ────────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto py-16 space-y-16 px-6 md:px-0">
        {/* 600+ point inspection */}
        <section>
          {/* Section heading slides in from right */}
          <motion.div
            className="mb-10"
            initial="hidden"
            whileInView="show"
            viewport={viewOpts}
            variants={fadeRight}
          >
            <h2 className="section-title text-black mb-2">
              600+ point inspection: What&apos;s covered
            </h2>
            <p className="max-w-3xl font-light p-color text-[17px] md:text-[18px]">
              From the roaring engine to the smallest interior detail, we leave
              no stone unturned to give you a complete and honest picture of
              your dream car.
            </p>
          </motion.div>

          {/* Cards — horizontal scroll on mobile, grid on desktop */}
          <motion.div
            className="-mx-6 px-6 scroll-pl-6 md:mx-0 md:px-0 md:scroll-pl-0 flex overflow-x-auto no-scrollbar snap-x snap-mandatory gap-5 pb-2 md:pb-0 md:overflow-visible md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 md:gap-y-10"
            variants={stagger(0.09)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.05 }}
          >
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
              <motion.div
                key={title}
                className="border border-black rounded-[32px] overflow-hidden flex flex-col flex-shrink-0 w-[78vw] md:w-auto snap-start"
                variants={cardReveal}
              >
                <div className="bg-[#E5E7EB] h-48 flex items-center justify-center px-8 py-6">
                  <img
                    src={img}
                    alt={alt}
                    className={`max-h-full object-contain ${extraClass}`}
                  />
                </div>
                <div className="bg-[#00F7EF] p-6 flex-grow">
                  <h3 className="font-semibold text-xl md:text-2xl mb-1">
                    {title}
                  </h3>
                  <p className="section-p font-light leading-snug">{desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Client Testimonials */}
        <section>
          {/* Heading slides in from right */}
          <motion.div
            className="mb-10"
            initial="hidden"
            whileInView="show"
            viewport={viewOpts}
            variants={fadeRight}
          >
            <h2 className="section-title text-black mb-2">
              Client Testimonials
            </h2>
            <p className="font-light p-color text-[17px] md:text-[18px]">
              Discover our range of services to ensure your next car is a smart
              investment!
            </p>
          </motion.div>

          {/* Cards — horizontal scroll on mobile, grid on desktop */}
          <motion.div
            className="-mx-6 px-6 scroll-pl-6 md:mx-0 md:px-0 md:scroll-pl-0 flex overflow-x-auto no-scrollbar snap-x snap-mandatory gap-5 pb-2 md:pb-0 md:overflow-visible md:grid md:grid-cols-3 md:gap-6"
            variants={stagger(0.13)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="border border-black rounded-[32px] p-8 flex flex-col justify-center min-h-[250px] flex-shrink-0 w-[78vw] md:w-auto snap-start"
                variants={cardReveal}
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
              </motion.div>
            ))}
          </motion.div>
        </section>
      </div>
    </div>
  );
}
