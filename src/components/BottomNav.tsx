"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { href: "/", icon: "/assets/bottom-home-active.svg", label: "Home" },
  {
    href: "/packages",
    icon: "/assets/bottom-home-active.svg",
    label: "Packages",
  },
  { href: "/cars", icon: "/assets/bottom-home-active.svg", label: "Cars" },
  { href: "/about", icon: "/assets/bottom-home-active.svg", label: "About" },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      className="md:hidden fixed bottom-0 left-0 w-screen z-50 bg-[#bababa] flex items-center justify-around pt-8 pb-12 overflow-hidden"
      style={{
        borderRadius: "36px 36px 0 0",
        boxShadow: "0 -6px 24px rgba(0, 0, 0, 0.07)",
      }}
    >
      {NAV_ITEMS.map(({ href, icon, label }) => {
        const isActive = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            aria-label={label}
            className="flex flex-col items-center justify-center"
          >
            <img src={icon} alt={label} width={36} />
          </Link>
        );
      })}
    </nav>
  );
}
