"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ArrowUp } from "lucide-react";
import { useTranslations } from "next-intl";

const isBrowser = typeof window !== "undefined";

export const BackToTopButton = () => {
  const t = useTranslations("BackToTop");
  const [isVisible, setIsVisible] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const haloRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (!isBrowser) return;

    gsap.registerPlugin(ScrollToPlugin);

    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    if (!isBrowser) return;
    if (buttonRef.current) {
      gsap
        .timeline({ defaults: { ease: "power2.out" } })
        .to(buttonRef.current, { scale: 0.9, duration: 0.12 })
        .to(buttonRef.current, { scale: 1, duration: 0.28 }, "<0.08");
    }

    if (haloRef.current) {
      gsap
        .timeline()
        .fromTo(
          haloRef.current,
          { opacity: 0, scale: 0.6, filter: "blur(6px)" },
          { opacity: 0.8, scale: 1.4, filter: "blur(20px)", duration: 0.28, ease: "power2.out" }
        )
        .to(haloRef.current, { opacity: 0, duration: 0.3, ease: "power1.in" }, "<0.12");
    }

    const lenis = (window as unknown as { lenis?: { scrollTo: (...args: unknown[]) => void } }).lenis;

    if (lenis?.scrollTo) {
      lenis.scrollTo(0, {
        duration: 1.45,
        easing: (t: number) => 1 - Math.pow(1 - t, 2.4),
      });
      return;
    }

    gsap.to(window, {
      duration: 1.2,
      ease: "power3.inOut",
      scrollTo: { y: 0 },
    });
  };

  return (
    <button
      type="button"
      ref={buttonRef}
      onClick={scrollToTop}
      aria-label={t("ariaLabel")}
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#c9a24b] focus-visible:ring-offset-white ${
        isVisible
          ? "pointer-events-auto opacity-100 translate-y-0"
          : "pointer-events-none opacity-0 translate-y-6"
      }`}
    >
      <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-[#f5e4b3] to-[#c9a24b] shadow-lg transition-shadow duration-300 hover:shadow-[0_20px_45px_-15px_rgba(201,162,75,0.65)]">
        <span
          ref={haloRef}
          aria-hidden
          className="absolute inset-0 rounded-full bg-[#fce7b6] opacity-0 blur-xl"
        />
        <ArrowUp className="relative h-6 w-6 text-white" strokeWidth={2.25} />
      </span>
    </button>
  );
};
