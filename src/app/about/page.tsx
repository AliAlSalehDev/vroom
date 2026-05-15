"use client";

import { useState } from "react";
import TermsPopup from "@/components/TermsPopup";

export default function AboutPage() {
  const [termsOpen, setTermsOpen] = useState(false);

  return (
    <>
      <div className=" pb-4 pt-0">
        <main className="mb-8">
          {/* ── Why Choose Vroom ────────────────────────────────────────────── */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch px-4 md:px-12 lg:px-20 mb-8">
            {/* Video */}
            <div className="bg-[#F3F4F6] hero-rounded overflow-hidden flex items-center justify-center min-h-[400px] lg:h-[85vh]">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/assets/suv.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Text */}
            <div className="bg-[#f5f5f5] hero-rounded p-8 lg:py-12 lg:px-24 flex flex-col justify-center">
              <h2 className="page-header mb-6">Why Choose Vroom</h2>
              <div className="space-y-4 page-p">
                <p>
                  <span className="font-semibold">
                    Buying a car should be exciting, not exhausting.
                  </span>{" "}
                  Think of us as your car-obsessed best friends who happen to be
                  highly experienced professional mechanics. We bring the shop
                  to you with mobile inspections that save you time, money, and
                  headaches.
                </p>
                <p>
                  Whether you&apos;re eyeing a compact hatchback, a family SUV,
                  or an elite super sports car, we&apos;ve got the latest tech
                  and specialized tools tailored to every type of vehicle. But
                  we don&apos;t just hand you a report; our customer service and
                  after-sale support are here to check through the results until
                  you feel 100% confident. We&apos;re fast, we&apos;re thorough,
                  and we&apos;re here to make sure your next ride is a Vroom.
                </p>
              </div>
            </div>
          </section>

          <div className="max-w-7xl mx-auto py-16 space-y-16 px-6 md:px-0 lg:px-0">
            {/* ── Icon Features Grid ──────────────────────────────────────────── */}
            <section className="-mx-6 px-6 scroll-pl-6 md:mx-0 md:px-0 md:scroll-pl-0 flex overflow-x-auto no-scrollbar snap-x snap-mandatory gap-8 pb-2 md:pb-0 md:overflow-visible md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:gap-x-24">
              {[
                {
                  img: "/assets/Certfied.svg",
                  title: "Certified Mechanics",
                  text: "Our team of experienced pros knows every car inside out. You're getting expert eyes that spot the hidden secrets.",
                  imgClass: "w-12 h-12",
                },
                {
                  img: "/assets/Tools.svg",
                  title: "High-Tech Tools",
                  text: "Our latest diagnostic tools can handle all types of cars. We check every part to give you the story before you buy.",
                  imgClass: "w-12 h-12",
                },
                {
                  img: "/assets/Report.svg",
                  title: "Detailed Instant Report",
                  text: "Our comprehensive digital report includes clear visuals, to help you make a smart investment.",
                  imgClass: "w-12 h-12",
                },
                {
                  img: "/assets/Video2.svg",
                  title: "Video Highlights",
                  text: "We film the critical issues so you can see what our mechanics are looking at. It's like being right there with us.",
                  imgClass: "w-10 h-12",
                },
                {
                  img: "/assets/Time.svg",
                  title: "Time-Saving",
                  text: "Book in seconds and let our mobile team handle the full inspection on-site while you carry on with your day.",
                  imgClass: "w-12 h-12",
                },
                {
                  img: "/assets/Support.svg",
                  title: "After-sale support",
                  text: "Whether you have questions about the findings or need advice, our team of experts is always available to help.",
                  imgClass: "w-12 h-12",
                },
              ].map(({ img, title, text, imgClass }) => (
                <div
                  key={title}
                  className="flex-shrink-0 w-[72vw] md:w-auto snap-start"
                >
                  <img src={img} className={imgClass} alt="Icon" />
                  <h3 className="feature-title">{title}</h3>
                  <p className="feature-text">{text}</p>
                </div>
              ))}
            </section>

            {/* ── Mission & Vision ────────────────────────────────────────────── */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#00F7EF] rounded-[32px] p-16 py-20 min-h-[280px] flex flex-col justify-center border border-black">
                <h2 className="text-4xl font-medium mb-4">Mission</h2>
                <p className="text-lg font-light leading-snug">
                  We want to empower car buyers with the truth by bringing
                  expert mechanics and advanced diagnostic tools directly to our
                  customers. We provide clear, visual, and honest insights that
                  turn uncertainty into total confidence.
                </p>
              </div>
              <div className="rounded-[32px] p-0 min-h-[280px] flex border border-black h-[340px]">
                <img
                  src="https://res.cloudinary.com/dpu70i1mg/image/upload/v1778356034/car-video_m6uyjw.png"
                  className="w-full h-full object-cover rounded-[32px]"
                  alt="Mission visual"
                />
              </div>
              <div className="bg-black text-white rounded-[32px] p-16 py-20 min-h-[280px] flex flex-col justify-center">
                <h2 className="text-4xl font-medium mb-4">Vision</h2>
                <p className="text-lg font-light leading-snug opacity-90">
                  To become the most trusted name in mobile automotive
                  inspections, setting new benchmarks for honesty, transparency,
                  and convenience with cutting-edge technology and an elite team
                  of experts.
                </p>
              </div>
              <div className="rounded-[32px] p-0 min-h-[280px] flex border border-black h-[340px]">
                <img
                  src="https://res.cloudinary.com/dpu70i1mg/image/upload/v1778356034/car-video_m6uyjw.png"
                  className="w-full h-full object-cover rounded-[32px]"
                  alt="Vision visual"
                />
              </div>
            </section>

            {/* ── Join Team ───────────────────────────────────────────────────── */}
            <section className="py-10">
              <h2 className="text-[36px] font-medium mb-4">
                Join Our Team of Specialists
              </h2>
              <p className="text-[#0a0a0a] max-w-4xl text-lg font-light leading-snug">
                Great service starts with great people. We are seeking
                automotive pros and creative thinkers who share our commitment
                to transparency and professionalism. If you&apos;re looking for
                a career that moves as fast as we do, we&apos;d love to meet
                you. Contact us via{" "}
                <span className="font-semibold text-black">
                  info@vroomofficial.com
                </span>
              </p>
            </section>

            {/* ── Terms & Conditions trigger ──────────────────────────────────── */}
            <div className="flex justify-start pb-10 mt-16">
              <button
                onClick={() => setTermsOpen(true)}
                className="border border-[#0a0a0a] rounded-full py-2 px-6 text-sm flex items-center justify-between gap-4 text-[#0a0a0a] hover:bg-gray-50 transition min-w-[300px]"
              >
                <span className="font-light">Terms &amp; Conditions</span>
                <i className="fa-solid fa-chevron-down text-[12px]"></i>
              </button>
            </div>
          </div>
        </main>
      </div>

      <TermsPopup isOpen={termsOpen} onClose={() => setTermsOpen(false)} />
    </>
  );
}
