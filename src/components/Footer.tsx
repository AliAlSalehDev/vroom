import Link from "next/link";

export default function Footer() {
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
          <div className="flex flex-col items-end space-y-10 md:pl-[4.5rem] mt-10">
            <div className="text-sm text-gray-300 opacity-80 flex flex-row w-full justify-between">
              <Link href="/about" className="hover:text-[#00F7EF] transition">
                About Us
              </Link>
              |
              <Link
                href="/packages"
                className="hover:text-[#00F7EF] transition"
              >
                Packages
              </Link>
              |
              <Link href="/cars" className="hover:text-[#00F7EF] transition">
                Inspected Cars
              </Link>
              |
              <Link href="/contact" className="hover:text-[#00F7EF] transition">
                Contact Us
              </Link>
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
            <Link href="/">
              <img src="/assets/home.svg" width="30" alt="Home" />
            </Link>
            <Link href="/packages" className="group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 25.38 24.96"
                width="30"
                className="text-[#cbcaca] group-hover:text-white transition-colors duration-200"
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
            <Link href="/cars" className="text-[#00F7EF]">
              <img src="/assets/car.svg" width="30" alt="Cars" />
            </Link>
            <Link href="/about">
              <img src="/assets/bar-circle.svg" width="30" alt="About" />
            </Link>
          </div>

          {/* Social links + copyright */}
          <div className="flex flex-col items-center md:items-end space-y-4">
            <div className="flex items-center space-x-4">
              <a href="#">
                <img
                  src="/assets/linkedin_white.svg"
                  alt="LinkedIn"
                  className="w-6 h-6"
                />
              </a>
              <a href="#">
                <img
                  src="/assets/instagram.svg"
                  alt="Instagram"
                  className="w-6 h-6"
                />
              </a>
              <a href="#">
                <img
                  src="/assets/whatsapp.svg"
                  alt="WhatsApp"
                  className="w-6 h-6"
                />
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
