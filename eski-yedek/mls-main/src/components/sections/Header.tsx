"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const navItems = [
  { label: "Anasayfa", href: "#" },
  { label: "Hakkımızda", href: "#" },
  { label: "İletişim", href: "#" },
  { label: "Blog", href: "#" },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const updateHeaderScale = () => {
      const zoomLevel = window.devicePixelRatio;
      const headerElement = document.querySelector('header div') as HTMLElement;
      
      if (headerElement) {
        let scale = 1;
        
        // Adjust scale based on zoom level
        if (zoomLevel >= 1.25) {
          scale = 0.85; // Scale down when zoomed in
        } else if (zoomLevel >= 1.1) {
          scale = 0.9; // Slightly scale down
        } else {
          scale = 1; // Normal scale
        }
        
        headerElement.style.setProperty('--header-scale', scale.toString());
      }
    };

    // Initial call
    updateHeaderScale();
    
    // Listen for zoom changes
    window.addEventListener('resize', updateHeaderScale);
    
    return () => {
      window.removeEventListener('resize', updateHeaderScale);
    };
  }, []);

  return (
    <header className="w-full flex justify-center items-center bg-transparent">
      <div
        className="flex items-center justify-between h-[64px] w-[980px] px-2 relative scale-100 lg:scale-100 xl:scale-100 2xl:scale-95"
        style={{
          background: "rgba(255, 255, 255, 0.32)",
          border: "2px solid #FFFFFF",
          backdropFilter: "blur(8.6px)",
          borderRadius: "4px",
          boxSizing: "border-box",
          transform: "scale(var(--header-scale, 1))",
          transformOrigin: "center center",
        }}
      >
        {/* Logo and Menu - locked to left */}
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3">
            <Image
              src="/images/headerlogo2.png"
              alt="MillerSan Logo"
              width={56}
              height={32}
              priority
            />
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex justify-center items-center px-3 py-1.5 text-[#333333] text-[14px] font-bold hover:text-[#c9a24b] transition-colors"
                style={{
                  fontFamily: "Manrope, sans-serif",
                  lineHeight: "20px",
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Spacer to push button to right */}
        <div className="flex-1"></div>

        {/* Desktop Button */}
        <a
          href="#"
          className="hidden md:flex h-12 px-8 items-center justify-center bg-[#2B2B2B] text-white rounded-[4px] text-[16px] font-bold hover:bg-[#c9a24b] hover:text-[#222] transition-colors"
          style={{
            fontFamily: "Inter, sans-serif",
            lineHeight: "22px",
          }}
        >
          Teklif Al
        </a>

        {/* Mobile Hamburger Menu */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span
            className={`w-6 h-0.5 bg-[#222] transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-[#222] my-1 transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-[#222] transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </button>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-[#222]/95 backdrop-blur-[17.2px] border-2 border-[#222] rounded-[4px] shadow-lg z-50">
            <nav className="flex flex-col p-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-white text-[16px] font-semibold hover:text-[#c9a24b] transition-colors py-3 border-b border-gray-600 last:border-b-0"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#"
                className="mt-4 h-12 px-8 flex items-center justify-center bg-[#222] text-white rounded-[4px] text-[16px] font-bold hover:bg-[#c9a24b] hover:text-[#222] transition-colors"
                style={{ fontFamily: "Manrope, sans-serif" }}
                onClick={() => setIsMenuOpen(false)}
              >
                Teklif Al
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
