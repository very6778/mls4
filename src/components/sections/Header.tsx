"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { usePathname, useRouter } from "@/navigation";
import { routing } from "@/i18n/routing";

const isBrowser = typeof window !== "undefined";

const navConfig = [
  { key: "home", href: "/" },
  { key: "about", href: "#hedeflerimiz" },
  { key: "contact", href: "#iletisim" },
  { key: "blog", href: "#blog" }
];

export const Header = () => {
  const t = useTranslations("Header");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = navConfig.map((item) => ({
    ...item,
    href: item.href === "/" ? `/${locale}` : item.href,
    label: t(`nav.${item.key}`)
  }));

  const handleLocaleChange = (targetLocale: (typeof routing.locales)[number]) => {
    if (targetLocale === locale) {
      setIsMenuOpen(false);
      return;
    }

    const nextPath = (pathname ?? "/") as "/" | "/blog/[slug]";
    router.replace(nextPath as any, { locale: targetLocale });
    router.refresh();
    setIsMenuOpen(false);
  };

  const handleNavItemClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    const localeHomePath = `/${locale}`;

    if (href === localeHomePath) {
      event.preventDefault();

      if (isBrowser && window.location.pathname === localeHomePath) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        router.push("/", { locale });
      }
    } else if (href.startsWith("#") && isBrowser) {
      const target = document.querySelector(href);

      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }

    setIsMenuOpen(false);
  };

  const availableLocales = routing.locales;

  return (
    <header className="w-full flex justify-center items-center bg-transparent">
      <div
        className="flex items-center justify-between h-[60px] w-[960px] px-2 relative scale-[0.85]"
        style={{
          background: "rgba(255, 255, 255, 0.32)",
          border: "2px solid #FFFFFF",
          backdropFilter: "blur(8.6px)",
          borderRadius: "4px",
          boxSizing: "border-box",
          transformOrigin: "center center",
        }}
      >
        {/* Logo and Menu - locked to left */}
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3">
            <Image
              src="/images/headerlogo2.png"
              alt="MillerSan Logo"
              width={47}
              height={26}
              priority
              style={{ transform: 'scale(1.3) translateX(5px)' }}
            />
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="flex justify-center items-center px-3 py-1.5 text-[#333333] text-[15px] font-bold hover:text-[#c9a24b] transition-colors"
                style={{
                  fontFamily: "Manrope, sans-serif",
                  lineHeight: "20px",
                }}
                onClick={(event) => handleNavItemClick(event, item.href)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Spacer to push controls to right */}
        <div className="flex-1"></div>

        {/* Desktop Button */}
        <a
          href="#"
          className="hidden md:flex h-12 px-8 items-center justify-center bg-[#2B2B2B] text-white rounded-[4px] text-[15px] font-bold hover:bg-[#c9a24b] hover:text-[#222] transition-colors"
          style={{
            fontFamily: "Inter, sans-serif",
            lineHeight: "22px",
          }}
        >
          {t("cta")}
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
                  key={item.key}
                  href={item.href}
                  className="text-white text-[16px] font-semibold hover:text-[#c9a24b] transition-colors py-3 border-b border-gray-600 last:border-b-0"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                  onClick={(event) => handleNavItemClick(event, item.href)}
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
                {t("cta")}
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
