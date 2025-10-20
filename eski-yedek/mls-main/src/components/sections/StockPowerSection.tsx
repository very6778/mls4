"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const StockPowerSection = (): JSX.Element => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const desktopCardsRef = useRef<HTMLDivElement>(null);
  const mobileCardsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create a single timeline for better performance
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    // Title animation - simple slide up
    if (titleRef.current) {
      tl.fromTo(
        titleRef.current,
        { y: 30 },
        { y: 0, duration: 0.8, ease: "power2.out" }
      );
    }

    // Desktop cards animation - simplified
    if (desktopCardsRef.current) {
      const cards = desktopCardsRef.current.querySelectorAll(".stock-card");

      cards.forEach((card, index) => {
        const direction = index % 2 === 0 ? -50 : 50; // Reduced distance

        tl.fromTo(
          card,
          { x: direction },
          { x: 0, duration: 0.8, ease: "power2.out" },
          index * 0.1 // Reduced delay
        );
      });
    }

    // Mobile cards animation - simplified
    if (mobileCardsRef.current) {
      const cards = mobileCardsRef.current.querySelectorAll(".stock-card");

      cards.forEach((card, index) => {
        tl.fromTo(
          card,
          { y: 30 },
          { y: 0, duration: 0.8, ease: "power2.out" },
          index * 0.1 // Reduced delay
        );
      });
    }

    // Image animation - simplified
    if (imageRef.current) {
      tl.fromTo(
        imageRef.current,
        { y: 30 },
        { y: 0, duration: 0.8, ease: "power2.out" },
        -0.2 // Slight overlap
      );
    }

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="w-full bg-[#fbf8f1] py-8 sm:py-12 lg:py-16 stock-power-section">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 stock-power-container">
        {/* Title */}
        <div className="mb-8 sm:mb-10 lg:mb-12 stock-power-title-wrap">
          <h1
            ref={titleRef}
            className="text-[28px] sm:text-[36px] lg:text-[44px] font-bold text-black leading-tight lg:leading-[53px] tracking-[0%] text-center lg:text-left stock-power-title"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            Güç <span
              style={{
                background: 'linear-gradient(269deg, rgba(201, 162, 75, 0.8) 0%, rgba(144, 101, 74, 0.6) 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: 'drop-shadow(0px 2px 4px rgba(12, 12, 13, 0.1))'
              }}
            >Odaklanmakla</span> Başlar
          </h1>
        </div>

        {/* Desktop Layout - Side by Side */}
        <div className="hidden lg:flex gap-6 items-start stock-power-desktop">
          {/* Left Side - Feature Cards */}
          <div className="flex-1 stock-power-cards">
            <div ref={desktopCardsRef} className="relative w-[613px] h-[515px] stock-power-cards-container">
              {/* Card 1 - Araştırma ve geliştirme (Top Left) */}
              <div
                className="stock-card absolute top-0 left-0 w-[262px] h-[247px] bg-white rounded-[20px] p-4 shadow-lg flex flex-col stock-power-card"
                style={{
                  boxShadow:
                    "0px -20px 40px rgba(145, 158, 171, 0.24), 0px 0px 2px rgba(145, 158, 171, 0.24)",
                }}
              >
                <div
                  className="w-4 h-4 bg-[#2b2b2b] rounded-full mx-auto mb-5 stock-power-icon"
                  style={{
                    boxShadow: "inset 0px 2px 12px rgba(246, 233, 233, 0.37)",
                  }}
                ></div>
                <div
                  className="bg-[#f5f5f5] rounded-[16px] p-4 flex-1 flex flex-col justify-between stock-power-card-inner"
                  style={{ boxShadow: "0px 0px 2px rgba(145, 158, 171, 0.24)" }}
                >
                  <h3
                    className="text-[22px] font-black text-black uppercase leading-[28px] tracking-[0%] mb-1.5 stock-power-card-title"
                    style={{ fontFamily: "Manrope, sans-serif" }}
                  >
                    ARAŞTIRMA VE
                    <br />
                    GELİŞTİRME
                  </h3>
                  <div className="space-y-2 stock-power-card-content">
                    <p
                      className="text-[16px] font-extrabold text-[#2b2b2b] stock-power-card-subtitle"
                      style={{ fontFamily: "Manrope, sans-serif" }}
                    >
                      Teslimat Doğruluğu
                    </p>
                    <p
                      className="text-[14px] text-[#4F4F4F] leading-relaxed stock-power-card-desc"
                      style={{ fontFamily: "Manrope, sans-serif" }}
                    >
                      Zamanında ve eksiksiz teslimat oranımız
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2 - Proje Yönetimi (Top Right) */}
              <div
                className="stock-card absolute top-[29px] right-0 w-[262px] h-[215px] bg-white rounded-[20px] p-4 shadow-lg flex flex-col stock-power-card"
                style={{
                  boxShadow:
                    "0px -20px 40px rgba(145, 158, 171, 0.24), 0px 0px 2px rgba(145, 158, 171, 0.24)",
                }}
              >
                <div
                  className="w-4 h-4 bg-[#2b2b2b] rounded-full mx-auto mb-5 stock-power-icon"
                  style={{
                    boxShadow: "inset 0px 2px 12px rgba(246, 233, 233, 0.37)",
                  }}
                ></div>
                <div
                  className="bg-[#f5f5f5] rounded-[16px] p-4 flex-1 flex flex-col justify-between stock-power-card-inner"
                  style={{ boxShadow: "0px 0px 2px rgba(145, 158, 171, 0.24)" }}
                >
                  <h3
                    className="text-[22px] font-black text-black uppercase leading-[28px] tracking-[0%] mb-1.5 stock-power-card-title"
                    style={{ fontFamily: "Manrope, sans-serif" }}
                  >
                    PROJE YÖNETİMİ
                  </h3>
                  <div className="space-y-2 stock-power-card-content">
                    <p
                      className="text-[16px] font-extrabold text-[#2b2b2b] stock-power-card-subtitle"
                      style={{ fontFamily: "Manrope, sans-serif" }}
                    >
                      Üretim Tesis Alanı
                    </p>
                    <p
                      className="text-[14px] text-[#4F4F4F] leading-relaxed stock-power-card-desc"
                      style={{ fontFamily: "Manrope, sans-serif" }}
                    >
                      Tek çatı altında entegre üretim
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3 - Üretim Gücü (Bottom Left) */}
              <div
                className="stock-card absolute bottom-[29px] left-[51px] w-[262px] h-[215px] bg-white rounded-[20px] p-4 shadow-lg flex flex-col stock-power-card"
                style={{
                  boxShadow:
                    "0px -20px 40px rgba(145, 158, 171, 0.24), 0px 0px 2px rgba(145, 158, 171, 0.24)",
                }}
              >
                <div
                  className="w-4 h-4 bg-[#2b2b2b] rounded-full mx-auto mb-5 stock-power-icon"
                  style={{
                    boxShadow: "inset 0px 2px 12px rgba(246, 233, 233, 0.37)",
                  }}
                ></div>
                <div
                  className="bg-[#f5f5f5] rounded-[16px] p-4 flex-1 flex flex-col justify-between stock-power-card-inner"
                  style={{ boxShadow: "0px 0px 2px rgba(145, 158, 171, 0.24)" }}
                >
                  <h3
                    className="text-[22px] font-black text-black uppercase leading-[28px] tracking-[0%] mb-1.5 stock-power-card-title"
                    style={{ fontFamily: "Manrope, sans-serif" }}
                  >
                    ÜRETİM GÜCÜ
                  </h3>
                  <div className="space-y-2 stock-power-card-content">
                    <p
                      className="text-[16px] font-extrabold text-[#2b2b2b] stock-power-card-subtitle"
                      style={{ fontFamily: "Manrope, sans-serif" }}
                    >
                      Yıllık Ürün Kapasitesi
                    </p>
                    <p
                      className="text-[14px] text-[#4F4F4F] leading-relaxed stock-power-card-desc"
                      style={{ fontFamily: "Manrope, sans-serif" }}
                    >
                      Farklı segmentlerde üretim hacmi
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 4 - Çalışan Tedarik (Bottom Right) */}
              <div
                className="stock-card absolute bottom-0 right-0 w-[262px] h-[215px] bg-white rounded-[20px] p-4 shadow-lg flex flex-col stock-power-card"
                style={{
                  boxShadow:
                    "0px -20px 40px rgba(145, 158, 171, 0.24), 0px 0px 2px rgba(145, 158, 171, 0.24)",
                }}
              >
                <div
                  className="w-4 h-4 bg-[#2b2b2b] rounded-full mx-auto mb-5 stock-power-icon"
                  style={{
                    boxShadow: "inset 0px 2px 12px rgba(246, 233, 233, 0.37)",
                  }}
                ></div>
                <div
                  className="bg-[#f5f5f5] rounded-[16px] p-4 flex-1 flex flex-col justify-between stock-power-card-inner"
                  style={{ boxShadow: "0px 0px 2px rgba(145, 158, 171, 0.24)" }}
                >
                  <h3
                    className="text-[22px] font-black text-black uppercase leading-[28px] tracking-[0%] mb-1.5 stock-power-card-title"
                    style={{ fontFamily: "Manrope, sans-serif" }}
                  >
                    ÇALIŞAN TEDARİK
                  </h3>
                  <div className="space-y-2 stock-power-card-content">
                    <p
                      className="text-[16px] font-extrabold text-[#2b2b2b] stock-power-card-subtitle"
                      style={{ fontFamily: "Manrope, sans-serif" }}
                    >
                      Müşteri Geri Dönüş Oranı
                    </p>
                    <p
                      className="text-[14px] text-[#4F4F4F] leading-relaxed stock-power-card-desc"
                      style={{ fontFamily: "Manrope, sans-serif" }}
                    >
                      Tekrar sipariş veren memnun müşteri oranı
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="flex-1 flex justify-center stock-power-image-wrap">
            <div
              ref={imageRef}
              className="relative w-[658px] h-[486px] rounded-[20px] overflow-hidden shadow-lg stock-power-image"
              style={{
                boxShadow:
                  "0px -20px 40px rgba(145, 158, 171, 0.24), 0px 0px 2px rgba(145, 158, 171, 0.24)",
              }}
            >
              <Image
                src="/images/new-images/image (1).jpg"
                alt="Yedek Parça ve Stok Gücü"
                width={658}
                height={486}
                className="w-full h-full object-cover"
                priority
              />
              {/* Small Icon Overlay */}
              <div
                className="absolute top-4 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#2b2b2b] rounded-full stock-power-image-icon"
                style={{
                  boxShadow: "inset 0px 2px 12px rgba(246, 233, 233, 0.37)",
                }}
              ></div>
            </div>
          </div>
        </div>

        {/* Mobile Layout - Stacked */}
        <div className="lg:hidden flex flex-col gap-6 stock-power-mobile">
          {/* Mobile Cards - Single Column */}
          <div ref={mobileCardsRef} className="grid grid-cols-1 gap-4 stock-power-mobile-cards">
            {/* Card 1 - Araştırma ve geliştirme */}
            <div
              className="stock-card bg-white rounded-[20px] p-4 shadow-lg flex flex-col stock-power-mobile-card"
              style={{
                boxShadow:
                  "0px -20px 40px rgba(145, 158, 171, 0.24), 0px 0px 2px rgba(145, 158, 171, 0.24)",
              }}
            >
              <div
                className="w-4 h-4 bg-[#2b2b2b] rounded-full mx-auto mb-5 stock-power-mobile-icon"
                style={{
                  boxShadow: "inset 0px 2px 12px rgba(246, 233, 233, 0.37)",
                }}
              ></div>
              <div
                className="bg-[#f5f5f5] rounded-[16px] p-4 flex-1 flex flex-col justify-between stock-power-mobile-card-inner"
                style={{ boxShadow: "0px 0px 2px rgba(145, 158, 171, 0.24)" }}
              >
                <h3
                  className="text-[22px] font-black text-black uppercase leading-[28px] tracking-[0%] mb-1.5 stock-power-mobile-card-title"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  ARAŞTIRMA VE
                  <br />
                  GELİŞTİRME
                </h3>
                <div className="space-y-2 stock-power-mobile-card-content">
                  <p
                    className="text-[16px] font-extrabold text-[#2b2b2b] stock-power-mobile-card-subtitle"
                    style={{ fontFamily: "Manrope, sans-serif" }}
                  >
                    Teslimat Doğruluğu
                  </p>
                  <p
                    className="text-[14px] text-[#4F4F4F] leading-relaxed stock-power-mobile-card-desc"
                    style={{ fontFamily: "Manrope, sans-serif" }}
                  >
                    Zamanında ve eksiksiz teslimat oranımız
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 - Proje Yönetimi */}
            <div
              className="stock-card bg-white rounded-[20px] p-4 shadow-lg flex flex-col stock-power-mobile-card"
              style={{
                boxShadow:
                  "0px -20px 40px rgba(145, 158, 171, 0.24), 0px 0px 2px rgba(145, 158, 171, 0.24)",
              }}
            >
              <div
                className="w-4 h-4 bg-[#2b2b2b] rounded-full mx-auto mb-5 stock-power-mobile-icon"
                style={{
                  boxShadow: "inset 0px 2px 12px rgba(246, 233, 233, 0.37)",
                }}
              ></div>
              <div
                className="bg-[#f5f5f5] rounded-[16px] p-4 flex-1 flex flex-col justify-between stock-power-mobile-card-inner"
                style={{ boxShadow: "0px 0px 2px rgba(145, 158, 171, 0.24)" }}
              >
                <h3
                  className="text-[22px] font-black text-black uppercase leading-[28px] tracking-[0%] mb-1.5 stock-power-mobile-card-title"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  PROJE YÖNETİMİ
                </h3>
                <div className="space-y-2 stock-power-mobile-card-content">
                  <p
                    className="text-[16px] font-extrabold text-[#2b2b2b] stock-power-mobile-card-subtitle"
                    style={{ fontFamily: "Manrope, sans-serif" }}
                  >
                    Üretim Tesis Alanı
                  </p>
                  <p
                    className="text-[14px] text-[#4F4F4F] leading-relaxed stock-power-mobile-card-desc"
                    style={{ fontFamily: "Manrope, sans-serif" }}
                  >
                    Tek çatı altında entegre üretim
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 - Üretim Gücü */}
            <div
              className="stock-card bg-white rounded-[20px] p-4 shadow-lg flex flex-col stock-power-mobile-card"
              style={{
                boxShadow:
                  "0px -20px 40px rgba(145, 158, 171, 0.24), 0px 0px 2px rgba(145, 158, 171, 0.24)",
              }}
            >
              <div
                className="w-4 h-4 bg-[#2b2b2b] rounded-full mx-auto mb-5 stock-power-mobile-icon"
                style={{
                  boxShadow: "inset 0px 2px 12px rgba(246, 233, 233, 0.37)",
                }}
              ></div>
              <div
                className="bg-[#f5f5f5] rounded-[16px] p-4 flex-1 flex flex-col justify-between stock-power-mobile-card-inner"
                style={{ boxShadow: "0px 0px 2px rgba(145, 158, 171, 0.24)" }}
              >
                <h3
                  className="text-[22px] font-black text-black uppercase leading-[28px] tracking-[0%] mb-1.5 stock-power-mobile-card-title"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  ÜRETİM GÜCÜ
                </h3>
                <div className="space-y-2 stock-power-mobile-card-content">
                  <p
                    className="text-[16px] font-extrabold text-[#2b2b2b] stock-power-mobile-card-subtitle"
                    style={{ fontFamily: "Manrope, sans-serif" }}
                  >
                    Yıllık Ürün Kapasitesi
                  </p>
                  <p
                    className="text-[14px] text-[#4F4F4F] leading-relaxed stock-power-mobile-card-desc"
                    style={{ fontFamily: "Manrope, sans-serif" }}
                  >
                    Farklı segmentlerde üretim hacmi
                  </p>
                </div>
              </div>
            </div>

            {/* Card 4 - Çalışan Tedarik */}
            <div
              className="stock-card bg-white rounded-[20px] p-4 shadow-lg flex flex-col stock-power-mobile-card"
              style={{
                boxShadow:
                  "0px -20px 40px rgba(145, 158, 171, 0.24), 0px 0px 2px rgba(145, 158, 171, 0.24)",
              }}
            >
              <div
                className="w-4 h-4 bg-[#2b2b2b] rounded-full mx-auto mb-5 stock-power-mobile-icon"
                style={{
                  boxShadow: "inset 0px 2px 12px rgba(246, 233, 233, 0.37)",
                }}
              ></div>
              <div
                className="bg-[#f5f5f5] rounded-[16px] p-4 flex-1 flex flex-col justify-between stock-power-mobile-card-inner"
                style={{ boxShadow: "0px 0px 2px rgba(145, 158, 171, 0.24)" }}
              >
                <h3
                  className="text-[22px] font-black text-black uppercase leading-[28px] tracking-[0%] mb-1.5 stock-power-mobile-card-title"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  ÇALIŞAN TEDARİK
                </h3>
                <div className="space-y-2 stock-power-mobile-card-content">
                  <p
                    className="text-[16px] font-extrabold text-[#2b2b2b] stock-power-mobile-card-subtitle"
                    style={{ fontFamily: "Manrope, sans-serif" }}
                  >
                    Müşteri Geri Dönüş Oranı
                  </p>
                  <p
                    className="text-[14px] text-[#4F4F4F] leading-relaxed stock-power-mobile-card-desc"
                    style={{ fontFamily: "Manrope, sans-serif" }}
                  >
                    Tekrar sipariş veren memnun müşteri oranı
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Image - Bottom */}
          <div className="w-full flex justify-center stock-power-mobile-image-wrap">
            <div
              className="relative w-full max-w-[500px] h-[350px] rounded-[20px] overflow-hidden shadow-lg stock-power-mobile-image"
              style={{
                boxShadow:
                  "0px -20px 40px rgba(145, 158, 171, 0.24), 0px 0px 2px rgba(145, 158, 171, 0.24)",
              }}
            >
              <Image
                src="/images/new-images/image (1).jpg"
                alt="Yedek Parça ve Stok Gücü"
                width={500}
                height={350}
                className="w-full h-full object-cover"
                priority
              />
              {/* Small Icon Overlay */}
              <div
                className="absolute top-4 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#2b2b2b] rounded-full stock-power-mobile-image-icon"
                style={{
                  boxShadow: "inset 0px 2px 12px rgba(246, 233, 233, 0.37)",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
