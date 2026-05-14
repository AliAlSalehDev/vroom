"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  return (
    <footer className="hidden md:block bg-black text-white py-16 px-4 md:px-12 lg:px-20 w-full">
      <div>
        {/* ── Top row: logo + form + nav ──────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8 items-start">
          {/* Logo + tagline */}
          <div className="space-y-6">
            <img src="/assets/logo-white.svg" width="110" alt="VROOM" />
            <p
              className="text-gray-300 max-w-[360px] text-sm opacity-80"
              style={{ fontWeight: 300, lineHeight: 1.5 }}
            >
              Have questions? We&apos;ve got answers. Reach out to us directly
              or request a callback, and let&apos;s make sure your dream car is
              actually a dream—not a headache in disguise.
            </p>
          </div>

          {/* Contact form */}
          <div className="flex flex-col justify-center space-y-4 mt-10">
            <div className="relative">
              <input
                type="text"
                placeholder="Full Name"
                className="w-[90%] bg-transparent border border-gray-600 rounded-full py-3 px-6 text-sm focus:outline-none focus:border-[#00F7EF] transition"
              />
            </div>
            <div className="flex border border-gray-600 rounded-full overflow-hidden w-[90%]">
              <input
                type="text"
                placeholder="Mob. Number"
                className="flex-grow bg-transparent py-3 px-6 text-sm focus:outline-none w-1/2"
              />
              <button className="relative group overflow-hidden bg-[#00F7EF] text-black font-medium px-4 lg:px-8 py-3 text-[14px] whitespace-nowrap transition">
                <span className="absolute inset-0 w-0 bg-[#80fff3] transition-all duration-[1.5s] ease-out group-hover:w-full"></span>
                <span className="relative z-10">Request a call back</span>
              </button>
            </div>
          </div>

          {/* Nav links + Book button */}
          <div className="flex flex-col items-end space-y-10 lg:pl-[4.5rem] mt-10">
            <div className="text-sm text-gray-300 flex flex-col gap-y-1 w-full lg:flex-row lg:justify-between">
              <Link href="/about" className="hover:text-white transition-colors duration-200">About Us</Link>
              <span className="hidden lg:inline text-gray-600">|</span>
              <Link href="/packages" className="hover:text-white transition-colors duration-200">Packages</Link>
              <span className="hidden lg:inline text-gray-600">|</span>
              <Link href="/cars" className="hover:text-white transition-colors duration-200">Inspected Cars</Link>
              <span className="hidden lg:inline text-gray-600">|</span>
              <Link href="/contact" className="hover:text-white transition-colors duration-200">Contact Us</Link>
            </div>
            <button className="relative group overflow-hidden bg-black text-gray-300 w-full py-3 rounded-full text-md border border-gray-800 hover:text-black transition">
              <span className="absolute inset-0 w-0 bg-[#00f7ef] transition-all duration-[1.5s] ease-out group-hover:w-full"></span>
              <span className="relative z-10">Book Inspection</span>
            </button>
          </div>
        </div>

        {/* ── Bottom row: contact + icons + social ────────────────────────────── */}
        <div className="flex flex-col md:flex-row items-end justify-between gap-8">
          {/* Contact details */}
          <div className="text-center md:text-left">
            <p className="text-[10px] tracking-widest text-gray-500 font-bold">
              Contact:
            </p>
            <p className="text-md font-normal opacity-80">
              <span className="text-lg">Mob:</span> 050 4273827
            </p>
            <p className="text-md font-normal opacity-80">
              <span className="text-lg">Tel:</span> 04 273827
            </p>
            <p className="text-md font-normal opacity-80">
              <span className="text-lg">Email:</span> info@vroomofficial.com
            </p>
          </div>

          {/* Page icons */}
          <div className="flex items-center space-x-8">
            {/* Home */}
            <Link href="/" className="group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 26.05 24.51"
                width="30"
                className={`transition-colors duration-200 group-hover:text-white ${pathname === "/" ? "text-[#00f7ef]" : "text-gray-300"}`}
              >
                <path
                  fill="currentColor"
                  d="M.7,10.82c.18.01.35-.05.49-.17L10.59,2.23c.71-.63,1.59-.95,2.47-.95s1.77.32,2.47.95l9.4,8.42c.13.12.31.18.49.17.18-.01.34-.09.46-.22.25-.28.22-.7-.05-.95L16.42,1.23c-1.85-1.65-4.88-1.64-6.72,0L.29,9.65c-.27.25-.3.67-.05.94.12.14.29.22.46.23Z"
                />
                <path
                  fill="currentColor"
                  d="M25.79,15.15c-.13-.13-.29-.2-.47-.2h0c-.18,0-.35.07-.47.2-.13.13-.2.3-.19.48v5.47c0,1.16-.91,2.07-2.07,2.07h-1.64v-9.81c0-2.34-1.84-4.18-4.18-4.18h-7.14c-2.33,0-4.15,1.83-4.15,4.18v9.81h-1.99c-1.2,0-2.13-.94-2.13-2.13v-5.24c0-.18-.07-.35-.19-.48s-.29-.2-.47-.2h0c-.18,0-.35.07-.47.2C.07,15.45,0,15.62,0,15.8v5.24C0,22.95,1.56,24.51,3.48,24.51h3.19v-11.15c0-1.7,1.27-2.98,2.95-2.98h7.14c1.67,0,2.98,1.31,2.98,2.98v11.15h2.84c1.85,0,3.41-1.56,3.41-3.42v-5.46c0-.18-.07-.35-.2-.48Z"
                />
              </svg>
            </Link>
            {/* Packages */}
            <Link href="/packages" className="group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 25.38 24.96"
                width="30"
                className={`transition-colors duration-200 group-hover:text-white ${pathname === "/packages" ? "text-[#00f7ef]" : "text-gray-300"}`}
              >
                <path
                  fill="currentColor"
                  d="M23.03,7.09h-12.2c-1.3,0-2.35-1.05-2.35-2.35v-2.35C8.49,1.1,9.54.05,10.84.05c.26,0,.47.21.47.47s-.21.47-.47.47c-.78,0-1.41.63-1.41,1.41v2.35c0,.78.63,1.41,1.41,1.41h12.2c.78,0,1.41-.63,1.41-1.41v-2.35c0-.78-.63-1.41-1.41-1.41h-8.91c-.26,0-.47-.21-.47-.47s.21-.47.47-.47h8.91c1.3,0,2.35,1.05,2.35,2.35v2.35c0,1.3-1.05,2.35-2.35,2.35Z"
                />
                <path
                  fill="currentColor"
                  d="M23.03,16h-12.2c-1.3,0-2.35-1.05-2.35-2.35h0v-2.35c0-1.3,1.05-2.35,2.35-2.35h12.2c.26,0,.47.21.47.47s-.21.47-.47.47h-12.2c-.78,0-1.41.63-1.41,1.41v2.35c0,.78.63,1.41,1.41,1.41h12.2c.78,0,1.41-.63,1.41-1.41v-2.35c0-.26.21-.47.47-.47s.47.21.47.47v2.35c0,1.3-1.05,2.35-2.35,2.35Z"
                />
                <path
                  fill="currentColor"
                  d="M23.03,24.91c-.26,0-.47-.21-.47-.47s.21-.47.47-.47c.78,0,1.41-.63,1.41-1.41v-2.35c0-.78-.63-1.41-1.41-1.41h-12.2c-.78,0-1.41.63-1.41,1.41h0v2.35c0,.78.63,1.41,1.41,1.41h9.38c.26,0,.47.21.47.47s-.21.47-.47.47h-9.38c-1.3,0-2.35-1.05-2.35-2.35v-2.35c0-1.3,1.05-2.35,2.35-2.35h12.2c1.3,0,2.35,1.05,2.35,2.35v2.35c0,1.3-1.05,2.35-2.35,2.35Z"
                />
                <path
                  fill="currentColor"
                  d="M3.57,17.82c-1.97,0-3.57,1.6-3.57,3.57s1.6,3.57,3.57,3.57,3.57-1.6,3.57-3.57-1.6-3.57-3.57-3.57ZM6.1,21.39c0,1.4-1.14,2.53-2.53,2.53s-2.53-1.13-2.53-2.53,1.13-2.53,2.53-2.53c1.39,0,2.53,1.14,2.53,2.53Z"
                />
                <path
                  fill="currentColor"
                  d="M4.74,0h-2.35C1.07,0,0,1.07,0,2.39v2.35c0,1.32,1.07,2.4,2.4,2.4h2.35c1.32,0,2.4-1.07,2.4-2.4v-2.35c0-1.32-1.07-2.39-2.4-2.39ZM6.1,2.39v2.35c0,.75-.61,1.36-1.36,1.36h-2.35c-.75,0-1.36-.61-1.36-1.36v-2.35c0-.75.61-1.36,1.36-1.36h2.35c.75,0,1.36.61,1.36,1.36Z"
                />
                <path
                  fill="currentColor"
                  d="M4.74,8.91h-2.35c-1.32,0-2.4,1.07-2.4,2.4v2.34c0,1.32,1.07,2.4,2.4,2.4h2.35c1.32,0,2.4-1.07,2.4-2.4v-2.34c0-1.32-1.07-2.4-2.4-2.4ZM6.1,11.31v2.34c0,.75-.61,1.36-1.36,1.36h-2.35c-.75,0-1.36-.61-1.36-1.36v-2.34c0-.75.61-1.36,1.36-1.36h2.35c.75,0,1.36.61,1.36,1.36Z"
                />
              </svg>
            </Link>
            {/* Cars */}
            <Link href="/cars" className="group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30.59 30.55"
                width="30"
                className={`transition-colors duration-200 group-hover:text-white ${pathname === "/cars" ? "text-[#00f7ef]" : "text-gray-300"}`}
              >
                <path
                  fill="currentColor"
                  d="M26.43,9.42l-.19-.16,1.6-1.54c.26-.21.29-.57.09-.81-.1-.12-.23-.19-.38-.21-.15-.01-.3.03-.42.13-.02.02-.05.04-.07.06l-1.36,1.3-1.67-4.95c-.65-1.94-2.47-3.25-4.52-3.25h-10.91c-2.05,0-3.87,1.31-4.52,3.25l-1.67,4.95-1.35-1.29c-.12-.13-.28-.2-.44-.2-.13,0-.27.05-.38.14-.11.1-.18.24-.19.39s.04.3.14.41c.02.02.04.04.06.06l1.65,1.58-.19.16C.63,10.36,0,11.69,0,13.1v3.02c0,2.5,1.97,4.59,4.47,4.75h.2v1.76c0,.31.26.57.57.57s.57-.26.57-.57v-1.72h11.17c.31,0,.57-.26.57-.57s-.26-.57-.57-.57H4.78c-2,0-3.63-1.63-3.64-3.64v-3.02c0-2,1.63-3.63,3.64-3.64h18.68c1.94,0,3.52,1.58,3.52,3.52v2.31c0,.31.26.57.57.57s.57-.26.57-.57v-2.31c0-1.38-.62-2.68-1.69-3.56ZM24.23,8.4c-.25-.05-.51-.07-.77-.08H4.78c-.29,0-.59.03-.88.09l-.37.07,1.64-4.86c.5-1.48,1.88-2.48,3.45-2.48h10.9c1.56,0,2.95.99,3.45,2.47l1.64,4.85-.37-.07Z"
                />
                <path
                  fill="currentColor"
                  d="M21.62,11.99h0c-.7,0-1.36.27-1.85.77-.5.5-.77,1.15-.77,1.85,0,1.44,1.18,2.62,2.62,2.62,1.44,0,2.62-1.18,2.62-2.62,0-.7-.27-1.36-.77-1.85-.49-.5-1.15-.77-1.85-.77ZM22.49,15.48c-.23.23-.54.36-.87.36h0c-.68,0-1.23-.55-1.23-1.23,0-.68.55-1.23,1.23-1.23h0c.68,0,1.23.55,1.23,1.23,0,.33-.13.64-.36.87Z"
                />
                <path
                  fill="currentColor"
                  d="M3.89,14.61c0,1.45,1.17,2.62,2.62,2.62,1.44,0,2.62-1.18,2.62-2.62,0-.7-.27-1.36-.77-1.85s-1.15-.77-1.85-.77c-1.44,0-2.62,1.18-2.62,2.62ZM6.51,13.38c.68,0,1.23.55,1.23,1.23,0,.33-.13.64-.36.87-.23.23-.54.36-.87.36h0c-.68,0-1.23-.55-1.23-1.23,0-.68.55-1.23,1.23-1.23Z"
                />
                <path
                  fill="currentColor"
                  d="M16.08,13.91h-4.03c-.38,0-.7.31-.7.7s.31.7.7.7h4.03c.38,0,.7-.31.7-.7s-.31-.7-.7-.7Z"
                />
                <path
                  fill="currentColor"
                  d="M24.57,19.12h-.03c-1.38,0-2.67.53-3.65,1.5-.99.98-1.53,2.28-1.54,3.67-.02,2.87,2.3,5.21,5.17,5.23h.03c1.08,0,2.12-.33,3-.95l.15-.11,1.92,1.92c.11.11.25.17.4.18.15.02.3-.05.41-.16.23-.22.23-.58.01-.81l-1.92-1.92.12-.15c.71-.9,1.11-2.02,1.11-3.16.02-2.87-2.3-5.21-5.17-5.23ZM27.42,27.19c-.76.76-1.77,1.18-2.85,1.18-2.22,0-4.03-1.81-4.03-4.03,0-1.08.42-2.09,1.18-2.85.76-.76,1.77-1.18,2.85-1.18h0c1.08,0,2.09.42,2.85,1.18.76.76,1.18,1.77,1.18,2.85,0,1.08-.42,2.09-1.18,2.85Z"
                />
              </svg>
            </Link>
            {/* About */}
            <Link href="/about" className="group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 28.65 28.65"
                width="30"
                className={`transition-colors duration-200 group-hover:text-white ${pathname === "/about" ? "text-[#00f7ef]" : "text-gray-300"}`}
              >
                <path
                  fill="currentColor"
                  d="M14.32,28.65C6.43,28.65,0,22.22,0,14.32S6.43,0,14.32,0s14.32,6.43,14.32,14.32-6.43,14.32-14.32,14.32ZM14.32,1.09C7.03,1.09,1.09,7.03,1.09,14.32s5.94,13.23,13.23,13.23,13.23-5.94,13.23-13.23S21.62,1.09,14.32,1.09Z"
                />
                <rect
                  fill="currentColor"
                  x="10.84"
                  y="8.73"
                  width="6.98"
                  height="1.09"
                />
                <rect
                  fill="currentColor"
                  x="6.14"
                  y="12.58"
                  width="16.36"
                  height="1.09"
                />
                <rect
                  fill="currentColor"
                  x="9.39"
                  y="16.18"
                  width="9.86"
                  height="1.09"
                />
                <rect
                  fill="currentColor"
                  x="12.76"
                  y="19.55"
                  width="3.13"
                  height="1.09"
                />
              </svg>
            </Link>
          </div>

          {/* Social links + copyright */}
          <div className="flex flex-col items-center md:items-end space-y-4">
            <div className="flex items-center space-x-4">
              {/* LinkedIn */}
              <a href="#" className="group">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 115.66 115.47"
                  className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors duration-200"
                >
                  <path
                    fill="currentColor"
                    d="M25.9,115.47H1.9V38.34h24v77.12ZM13.9,27.79C6.2,27.79,0,21.56,0,13.89S6.2,0,13.9,0s13.9,6.22,13.9,13.89-6.23,13.9-13.9,13.9ZM115.66,115.47h-23.95v-37.51c0-8.94-.17-20.45-12.46-20.45s-14.38,9.74-14.38,19.8v38.16h-23.94V38.34h22.98v10.53h.32c3.2-6.07,11.03-12.46,22.69-12.46,24.26,0,28.74,15.97,28.74,36.74v42.3Z"
                  />
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" className="group">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 22.68 22.84"
                  className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors duration-200"
                >
                  <path
                    fill="currentColor"
                    d="M17.81,22.84H4.86c-2.68,0-4.86-2.13-4.86-4.75V4.75C0,2.13,2.18,0,4.86,0h12.95c2.68,0,4.86,2.13,4.86,4.75v13.34c0,2.62-2.18,4.75-4.86,4.75ZM4.86,1.96c-1.6,0-2.91,1.25-2.91,2.8v13.34c0,1.54,1.3,2.79,2.91,2.79h12.95c1.6,0,2.91-1.25,2.91-2.79V4.75c0-1.54-1.3-2.8-2.91-2.8H4.86Z"
                  />
                  <path
                    fill="currentColor"
                    d="M11.34,17.35c-3.27,0-5.93-2.66-5.93-5.93s2.66-5.93,5.93-5.93,5.93,2.66,5.93,5.93-2.66,5.93-5.93,5.93ZM11.34,7.45c-2.19,0-3.97,1.78-3.97,3.97s1.78,3.97,3.97,3.97,3.97-1.78,3.97-3.97-1.78-3.97-3.97-3.97Z"
                  />
                  <path
                    fill="currentColor"
                    d="M19.09,5.19c0,.77-.62,1.39-1.39,1.39s-1.39-.62-1.39-1.39.62-1.39,1.39-1.39,1.39.62,1.39,1.39Z"
                  />
                </svg>
              </a>
              {/* WhatsApp */}
              <a href="#" className="group">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24.16 24.29"
                  className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors duration-200"
                >
                  <path
                    fill="currentColor"
                    d="M12.21,0C5.62,0,.26,5.36.26,11.95c0,2.17.58,4.26,1.67,6.1l-1.93,6.24,6.6-1.79c1.72.92,3.65,1.4,5.61,1.4,6.59,0,11.95-5.36,11.95-11.95S18.8,0,12.21,0ZM12.21,21.96c-1.96,0-3.79-.57-5.34-1.54l-.14.04-3.82,1.03,1.15-3.73c-1.17-1.64-1.85-3.64-1.85-5.8C2.21,6.43,6.69,1.95,12.21,1.95s10,4.48,10,10-4.48,10-10,10Z"
                  />
                  <path
                    fill="currentColor"
                    d="M10.24,9.01s.35.54,0,.98c-.35.44-.64.77-.64.77,0,0-.31.23,0,.68.31.46,1.6,2.43,3.82,3.3,0,0,.68.29.98-.37l.7-.91s.17-.23.71,0c.54.23,2.24,1.06,2.24,1.06,0,0,.31.1.25.56-.06.46-.23,2.22-2.68,2.41,0,0-2.37.08-5.02-1.97-1.66-1.28-2.84-2.89-3.48-4-.04-.07-.08-.15-.12-.22-.34-.68-.59-1.43-.55-2.16,0-.08,0-.17.01-.26.05-.8.38-1.75,1.58-2.29,0,0,.98-.14,1.14,0l1.08,2.43Z"
                  />
                </svg>
              </a>
            </div>
            <p className="text-[10px] text-gray-500">
              © 2026 Vroom Check. Powered and secured by Apricuts
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
