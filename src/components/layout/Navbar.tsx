
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FiMenu,
  FiX,
  FiSearch,
  FiChevronDown,
  FiCompass,
} from "react-icons/fi";
import { Search } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Destinations", href: "/destinations" },
  //{ name: "Experiences", href: "/experiences" },
  { name: "Travel Guides", href: "/travel-guides" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-white/95 backdrop-blur-md">
      <nav className="container-custom flex h-20 items-center justify-between">

        {/* Brand */}
        <Link
          href="/"
          className="flex flex-col"
          onClick={() => setMenuOpen(false)}
        >
          <span className="font-[family-name:var(--font-manrope)] text-xl font-extrabold tracking-tight text-brand">
            Karibu Horizon<span className="text-gold">.</span>
          </span>

          <span className="text-[9px] font-medium tracking-wide text-muted">
            DISCOVER THE BEAUTY OF TANZANIA
          </span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`relative py-2 text-sm font-semibold transition-colors ${
                isActive(item.href)
                  ? "text-brand"
                  : "text-[var(--foreground)] hover:text-brand"
              }`}
            >
              {item.name}

              {isActive(item.href) && (
                <span className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-brand" />
              )}
            </Link>
          ))}
        </div>

        {/* Desktop actions */}
        <div className="hidden items-center gap-4 lg:flex">
          <Link
            href="/destinations"
            aria-label="Explore destinations"
            className="rounded-full p-2 text-foreground transition hover:bg-[var(--surface-secondary)]"
          >
            <FiSearch size={19} />
          </Link>

          <Link
            href="/destinations"
            className="flex items-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark"
          >
            <FiCompass size={17} />
            Explore Tanzania
          </Link>
        </div>

        {/* Mobile actions */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            aria-label="Explore destinations"
            onClick={() => {
              setMenuOpen(false);
              window.location.href = "/destinations";
            }}
            className="rounded-full p-2 text-brand hover:bg-[var(--surface-secondary)]"
          >
            <FiSearch size={21} />
          </button>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-full p-2 text-brand hover:bg-[var(--surface-secondary)]"
          >
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile navigation */}
      {menuOpen && (
        <div className="border-t border-[var(--border)] bg-white px-5 py-5 shadow-lg lg:hidden">
          <div className="flex flex-col gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`rounded-lg px-4 py-3 text-sm font-semibold transition ${
                  isActive(item.href)
                    ? "bg-[var(--surface-secondary)] text-brand"
                    : "text-foreground hover:bg-[var(--surface-secondary)]"
                }`}
              >
                {item.name}
                <FiChevronDown
                  size={14}
                  className="ml-2 inline-block -rotate-90"
                />
              </Link>
            ))}

            <Link
              href="/destinations"
              onClick={() => setMenuOpen(false)}
              className="mt-3 flex items-center justify-center gap-2 rounded-full bg-brand px-5 py-3 font-semibold text-white"
            >
              <FiCompass size={17} />
              Explore Tanzania
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
