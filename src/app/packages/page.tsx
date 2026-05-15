"use client";

import { useState } from "react";
import BookingPopup from "@/components/BookingPopup";

function CheckIcon({ className = "" }: { className?: string }) {
  return <i className={`fa-regular fa-circle-check ${className}`}></i>;
}

interface PackageCardProps {
  title: string;
  subtitle: string;
  price: string | number;
  dirhamImg: string;
  bg: string;
  textColor?: string;
  subtitleColor?: string;
  priceNoteColor?: string;
  buttonClass: string;
  viewReportClass?: string;
  items: Array<{ text: string; bold?: boolean }>;
  iconClass?: string;
  listMarginTop?: string;
  onBook: () => void;
}

function PackageCard({
  title,
  subtitle,
  price,
  dirhamImg,
  bg,
  textColor = "",
  subtitleColor = "text-gray-600",
  priceNoteColor = "text-gray-500",
  buttonClass,
  viewReportClass = "text-gray-600 hover:underline",
  items,
  iconClass = "text-gray-400",
  listMarginTop = "mt-6",
  onBook,
}: PackageCardProps) {
  return (
    <div className={`package-card ${bg} p-8 flex flex-col ${textColor}`}>
      <h3 className="text-3xl md:text-4xl font-bold mb-1">{title}</h3>
      <p className={`${subtitleColor} mb-6 text-sm`}>{subtitle}</p>
      <div className="flex gap-2 mb-2" style={{ alignItems: "last baseline" }}>
        <span className="text-5xl font-bold">{price}</span>
        <img src={dirhamImg} width="25" alt="AED" />
        <div
          className={`text-[10px] leading-tight ${priceNoteColor} font-medium`}
        >
          Advanced inspection
          <br />
          package • All-inclusive
        </div>
      </div>
      <ul className={`checkmark-list ${listMarginTop} flex-grow ${textColor}`}>
        {items.map(({ text, bold }) => (
          <li key={text} className={bold ? "font-semibold" : ""}>
            <CheckIcon className={iconClass} />
            {text}
          </li>
        ))}
      </ul>
      <button
        onClick={onBook}
        className={`${buttonClass} w-full py-3 rounded-full font-semibold mt-4 text-lg`}
      >
        Book now
      </button>
      <a
        href="#"
        className={`flex items-center justify-center gap-2 mt-4 text-sm font-medium ${viewReportClass}`}
      >
        <CheckIcon /> View Sample Report
      </a>
    </div>
  );
}

type SelectedPackage = { name: string; subtitle: string; price: number };

export default function PackagesPage() {
  const [selectedPackage, setSelectedPackage] =
    useState<SelectedPackage | null>(null);

  const openBooking = (pkg: SelectedPackage) => setSelectedPackage(pkg);
  const closeBooking = () => setSelectedPackage(null);

  return (
    <>
      <div className="px-6 md:px-12 lg:px-20 py-4">
        <div className="max-w-7xl mx-auto py-16 pt-4 space-y-20 mb-8">
          {/* ── Packages Section ─────────────────────────────────────────────── */}
          <section>
            <div className="mb-10">
              <h1 className="page-header mb-8">Inspection Packages</h1>
              <p className="page-p">
                Every package includes our signature easy-to-read report.
                <br />
                Choose your preferred plan that best fits your needs.
              </p>
            </div>

            {/* Row 1: Standard, Comprehensive, Comprehensive+ */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <PackageCard
                title="Standard"
                subtitle="140+ point inspection"
                price="250"
                dirhamImg="/assets/dirham_dark.svg"
                bg="bg-[#F0F0F0]"
                buttonClass="bg-black text-white"
                viewReportClass="text-gray-600"
                iconClass="text-gray-400"
                onBook={() =>
                  openBooking({
                    name: "Standard",
                    subtitle: "140+ point inspection",
                    price: 250,
                  })
                }
                items={[
                  { text: "Doorstep Inspection" },
                  { text: "Computer full Scan (OBD)" },
                  { text: "Engine Check" },
                  { text: "Transmission Check" },
                  { text: "Suspension" },
                  { text: "Exterior & Paint Condition" },
                  { text: "Electrical System" },
                  { text: "Battery & AC Check" },
                  { text: "Interior Condition" },
                  { text: "Under Body Check" },
                  { text: "Brake System" },
                  { text: "Test Drive*" },
                  { text: "Instant Detailed Report" },
                ]}
              />

              <PackageCard
                title="Comprehensive"
                subtitle="280+ point inspection"
                price="399"
                dirhamImg="/assets/dirham_white.svg"
                bg="bg-black"
                textColor="text-white"
                subtitleColor="text-gray-400"
                priceNoteColor="text-gray-400"
                buttonClass="teal-btn text-black"
                viewReportClass="text-gray-400 hover:text-[#00f7ef]"
                iconClass="text-gray-500"
                onBook={() =>
                  openBooking({
                    name: "Comprehensive",
                    subtitle: "280+ point inspection",
                    price: 399,
                  })
                }
                items={[
                  { text: "Doorstep Inspection" },
                  { text: "Computer full Scan (OBD)" },
                  { text: "Advanced Engine Check" },
                  { text: "Transmission Check" },
                  { text: "Chassis Condition" },
                  { text: "Flood & Rust Check" },
                  { text: "Suspension & Steering" },
                  { text: "Interior Features & Condition" },
                  { text: "Exterior & Paint Condition" },
                  { text: "Accident History" },
                  { text: "Electrical System" },
                  { text: "Battery & AC Check" },
                  { text: "Under Body Check" },
                  { text: "Brake System, Rims & Tire" },
                  { text: "Exhaust check" },
                  { text: "Test Drive*" },
                  { text: "Instant Detailed Report" },
                  { text: "Photos of all major findings" },
                ]}
              />

              <PackageCard
                title="Comprehensive +"
                subtitle="280+ point inspection"
                price="450"
                dirhamImg="/assets/dirham_dark.svg"
                bg="bg-vroom-teal"
                textColor="text-black"
                subtitleColor="text-black/70"
                priceNoteColor="text-black/70"
                buttonClass="bg-black text-white"
                viewReportClass="text-black hover:underline"
                iconClass=""
                onBook={() =>
                  openBooking({
                    name: "Comprehensive +",
                    subtitle: "280+ point inspection",
                    price: 450,
                  })
                }
                items={[
                  { text: "Doorstep Inspection" },
                  { text: "Computer full Scan (OBD)" },
                  { text: "Advanced Engine Check" },
                  { text: "Transmission Check" },
                  { text: "Chassis Condition" },
                  { text: "Flood & Rust Check" },
                  { text: "Suspension & Steering" },
                  { text: "Interior Features & Condition" },
                  { text: "Exterior & Paint Condition" },
                  { text: "Accident History" },
                  { text: "Electrical System" },
                  { text: "Battery & AC Check" },
                  { text: "Under Body Check" },
                  { text: "Brake System, Rims & Tire" },
                  { text: "Exhaust check" },
                  { text: "Test Drive*" },
                  { text: "Instant Detailed Report" },
                  { text: "Videos explaining all major findings", bold: true },
                  {
                    text: "25% off your next inspection, fully transferable**",
                    bold: true,
                  },
                ]}
              />
            </div>

            {/* Row 2: Hybrid Premium, EV Premium */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-4">
              <PackageCard
                title="Hybrid Premium"
                subtitle="280+ point inspection"
                price="399"
                dirhamImg="/assets/dirham_dark.svg"
                bg="bg-[#F0F0F0]"
                buttonClass="bg-black text-white"
                viewReportClass="text-gray-600 hover:underline"
                iconClass="text-gray-400"
                listMarginTop="mt-2"
                onBook={() =>
                  openBooking({
                    name: "Hybrid Premium",
                    subtitle: "280+ point inspection",
                    price: 399,
                  })
                }
                items={[
                  { text: "Doorstep Inspection" },
                  { text: "Full System Diagnostic (OBD-EV)" },
                  { text: "Hybrid Battery Health" },
                  { text: "Fan Integrity" },
                  { text: "Power-split device & Transition" },
                  { text: "Inverter & High-Voltage" },
                  { text: "Transmission & Hybrid Drive Unit" },
                  { text: "Chassis Condition" },
                  { text: "Flood & Rust Check" },
                  { text: "Suspension & Steering" },
                  { text: "Interior Features & Condition" },
                  { text: "Exterior & Paint Condition" },
                  { text: "Accident History" },
                  { text: "Electrical System" },
                  { text: "Battery & AC Check" },
                  { text: "Under Body Check" },
                  { text: "Brake System, Rims & Tire" },
                  { text: "Exhaust check" },
                  { text: "Test Drive*" },
                  { text: "Instant Detailed Report" },
                  { text: "Videos explaining all major findings" },
                ]}
              />

              <PackageCard
                title="EV Premium"
                subtitle="280+ point inspection"
                price="399"
                dirhamImg="/assets/dirham_dark.svg"
                bg="bg-vroom-teal"
                textColor="text-black"
                subtitleColor="text-black/70"
                priceNoteColor="text-black/70"
                buttonClass="bg-black text-white"
                viewReportClass="text-black hover:underline"
                iconClass=""
                onBook={() =>
                  openBooking({
                    name: "EV Premium",
                    subtitle: "280+ point inspection",
                    price: 399,
                  })
                }
                items={[
                  { text: "Doorstep Inspection" },
                  { text: "Full Diagnostic Scan (OBD-EV)" },
                  { text: "State of Health & Cell Balance" },
                  { text: "Electric Drive Unit & Inverter" },
                  { text: "Battery Cooling System" },
                  { text: "Charging Port" },
                  { text: "Chassis Condition" },
                  { text: "Flood & Rust Check" },
                  { text: "Suspension & Steering" },
                  { text: "Interior Features & Condition" },
                  { text: "Exterior & Paint Condition" },
                  { text: "Accident History" },
                  { text: "Electrical System" },
                  { text: "Battery & AC Check" },
                  { text: "Under Body Check" },
                  { text: "Brake System, Rims & Tire" },
                  { text: "Test Drive*" },
                  { text: "Instant Detailed Report" },
                  { text: "Videos explaining all major findings" },
                ]}
              />

              <div className="hidden md:block"></div>
            </div>

            {/* Footnotes */}
            <div className="mt-8 space-y-4">
              <div className="space-y-1">
                <p className="text-sm text-black font-light">
                  *Requires owner approval
                </p>
                <p className="text-sm text-black font-light">
                  **This discount code is fully transferable—use it yourself,
                  share it with family, or gift it to a friend!
                </p>
              </div>
              <p className="page-p font-medium">
                <span className="font-semibold text-[24px]">
                  Inquiring for more than two cars?
                </span>
                <br />
                <span className="page-p">
                  Call us today for a volume discount tailored to your needs.
                </span>
              </p>
            </div>
          </section>

          {/* ── How Our Inspection Works ─────────────────────────────────────── */}
          <section>
            <div className="mb-12">
              <h2
                className="section-title text-black mb-2"
                style={{ fontSize: 35 }}
              >
                How our inspection works
              </h2>
              <p className="page-p">Three simple steps</p>
            </div>

            <div className="-mx-6 px-4 scroll-pl-4 md:mx-0 md:px-0 md:scroll-pl-0 flex overflow-x-auto no-scrollbar snap-x snap-mandatory gap-5 pb-2 md:pb-0 md:overflow-visible md:grid md:grid-cols-3 md:gap-8">
              {[
                {
                  img: "/assets/mobile-check.svg",
                  alt: "Book",
                  title: "Book",
                  desc: "Pick a package, choose your time slot, and complete the payment",
                },
                {
                  img: "/assets/call-center.svg",
                  alt: "Receive Call",
                  title: "Receive a Call",
                  desc: "We'll contact you shortly to confirm the details and explain the process",
                },
                {
                  img: "/assets/paper-check.svg",
                  alt: "Inspection",
                  title: "Inspection & Report",
                  desc: "Our technicians will inspect the car and send you a detailed digital report",
                },
              ].map(({ img, alt, title, desc }) => (
                <div
                  key={title}
                  className="border border-black rounded-[32px] p-8 pt-4 flex flex-col bg-[#F0F0F0] text-center md:text-left flex-shrink-0 w-[78vw] md:w-auto snap-start"
                >
                  <div className="mb-8 flex justify-center">
                    <img src={img} className="h-52 object-contain" alt={alt} />
                  </div>
                  <h3 className="font-semibold text-2xl mb-1">{title}</h3>
                  <p className="section-p font-light leading-snug">{desc}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      <BookingPopup
        isOpen={selectedPackage !== null}
        onClose={closeBooking}
        packageName={selectedPackage?.name ?? ""}
        packageSubtitle={selectedPackage?.subtitle ?? ""}
        packagePrice={selectedPackage?.price ?? 0}
      />
    </>
  );
}
