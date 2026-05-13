"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavAndSidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  return (
    <>
      {/* ── Navbar ──────────────────────────────────────────────────────────── */}
      <div className="px-6 md:px-12 lg:px-20 pt-4">
        <nav className="bg-white flex items-center justify-between py-4 mb-4">
          <div className="flex items-center">
            <Link href="/">
              <img src="/assets/logo.svg" width="140" alt="VROOM" />
            </Link>
          </div>

          <div className="flex items-center space-x-6">
            <button className="relative group overflow-hidden bg-[#00F7EF] hidden lg:block text-black py-2 px-6 rounded-xl border border-black text-md transition-colors duration-300 header-cta">
              <span className="absolute inset-0 w-0 bg-[#80fff3] transition-all duration-[1.5s] ease-out group-hover:w-full"></span>
              <span className="relative z-10">Book Inspection</span>
            </button>

            <button className="text-gray-800">
              <img src="/assets/whatsapp-dark.svg" width="25" alt="WhatsApp" />
            </button>

            <button onClick={toggleSidebar} className="text-gray-800">
              <img src="/assets/bars.svg" width="25" alt="Menu" />
            </button>
          </div>
        </nav>
      </div>

      {/* ── Mobile Sidebar ──────────────────────────────────────────────────── */}
      <div
        className={`fixed inset-0 z-50 transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div
          className="absolute right-0 top-0 h-full w-[80%] max-w-sm bg-white shadow-2xl flex flex-col border-l border-[#00F7EF]"
          style={{ borderLeftWidth: 25 }}
        >
          <div className="flex justify-end p-6">
            <button onClick={toggleSidebar} className="text-gray-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="flex-grow flex flex-col justify-center px-12 space-y-4">
            {[
              { href: "/",        label: "Home"         },
              { href: "/packages",label: "Packages"     },
              { href: "/cars",    label: "Inspected Car"},
              { href: "/about",   label: "Why Vroom"    },
              { href: "/contact", label: "Contact us"   },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={toggleSidebar}
                className={`text-2xl font-light transition-colors hover:text-[#00F7EF] ${
                  pathname === href ? "text-[#00F7EF]" : "text-gray-900"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          <div className="flex-grow flex justify-start px-12 gap-6">
            <a
              href="#"
              className="text-2xl font-normal text-gray-900 hover:text-[#00F7EF]"
            >
              <img src="/assets/linkedin_black.svg" width="25" alt="LinkedIn" />
            </a>
            <a
              href="#"
              className="text-2xl font-normal text-gray-900 hover:text-[#00F7EF]"
            >
              <img
                src="/assets/instagram-dark.svg"
                width="25"
                alt="Instagram"
              />
            </a>
            <a
              href="#"
              className="text-2xl font-normal text-gray-900 hover:text-[#00F7EF]"
            >
              <img src="/assets/whatsapp-dark.svg" width="25" alt="WhatsApp" />
            </a>
          </div>

          <div className="p-12 flex items-center space-x-6 text-gray-900">
            <a href="#">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"></svg>
            </a>
            <a href="#">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"></svg>
            </a>
            <a href="#">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"></svg>
            </a>
            <a href="#">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"></svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
