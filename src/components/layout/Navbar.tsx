"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HiHome, HiMusicalNote, HiEnvelope } from "react-icons/hi2";
import { HiColorSwatch } from "react-icons/hi";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { siteConfig } from "@/config/site.config";

const iconMap: Record<string, React.ReactNode> = {
  home: <HiHome className="w-4 h-4" />,
  palette: <HiColorSwatch className="w-4 h-4" />,
  music: <HiMusicalNote className="w-4 h-4" />,
  mail: <HiEnvelope className="w-4 h-4" />,
};

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo / Name */}
        <Link
          href="/"
          className="font-heading text-xl font-bold gradient-text"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {siteConfig.name.split(" ")[0]}
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {siteConfig.navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-kawaii-pink/30 text-kawaii-text"
                    : "text-kawaii-text-light hover:bg-kawaii-pink/15 hover:text-kawaii-text"
                }`}
              >
                {iconMap[item.icon]}
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-kawaii-pink/20 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <HiXMark className="w-6 h-6 text-kawaii-text" />
          ) : (
            <HiBars3 className="w-6 h-6 text-kawaii-text" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass-strong border-t border-white/20">
          <div className="px-4 py-2 space-y-1">
            {siteConfig.navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? "bg-kawaii-pink/30 text-kawaii-text"
                      : "text-kawaii-text-light hover:bg-kawaii-pink/15"
                  }`}
                >
                  {iconMap[item.icon]}
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
