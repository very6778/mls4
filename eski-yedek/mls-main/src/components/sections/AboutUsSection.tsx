"use client"

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const AboutUsSection = (): JSX.Element => {
  const aboutUsRef = useRef<HTMLDivElement>(null);
  const mainNumberRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if we're on desktop (large screens)
    const isDesktop = window.innerWidth >= 1024;

    // About Us section animations - responsive
    if (aboutUsRef.current) {
      // Main number animation (2,340+)
      if (mainNumberRef.current) {
        if (isDesktop) {
          // Desktop: ScrollTrigger animations
          gsap.fromTo(mainNumberRef.current,
            {
              opacity: 0,
              y: 30
            },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: mainNumberRef.current,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
              }
            }
          );

          // Number counting animation
          gsap.to(mainNumberRef.current, {
            innerHTML: 2340,
            duration: 2,
            ease: "power1.out",
            snap: { innerHTML: 1 },
            scrollTrigger: {
              trigger: mainNumberRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          });
        } else {
          // Mobile/Tablet: Simple animations
          gsap.fromTo(mainNumberRef.current,
            { y: 30 },
            { y: 0, duration: 0.8, ease: "power2.out", delay: 0.3 }
          );

          // Number counting animation
          gsap.to(mainNumberRef.current, {
            innerHTML: 2340,
            duration: 1.5,
            ease: "power1.out",
            snap: { innerHTML: 1 },
            delay: 0.5
          });
        }
      }

      // Stats numbers animation - responsive
      if (statsRef.current) {
        const statNumbers = statsRef.current.querySelectorAll('.stat-number');
        
        statNumbers.forEach((number, index) => {
          const finalValue = parseInt(number.getAttribute('data-value') || '0');
          
          if (isDesktop) {
            // Desktop: ScrollTrigger animations
            gsap.fromTo(number,
              {
                opacity: 0,
                y: 20
              },
              {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power2.out",
                delay: index * 0.2,
                scrollTrigger: {
                  trigger: number,
                  start: "top 80%",
                  end: "bottom 20%",
                  toggleActions: "play none none reverse"
                }
              }
            );

            // Number counting animation
            gsap.to(number, {
              innerHTML: finalValue,
              duration: 1.5,
              ease: "power1.out",
              snap: { innerHTML: 1 },
              delay: index * 0.3,
              scrollTrigger: {
                trigger: number,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
              }
            });
          } else {
            // Mobile/Tablet: Simple animations
            gsap.fromTo(number,
              { y: 20 },
              { y: 0, duration: 0.6, ease: "power2.out", delay: 0.4 + index * 0.15 }
            );

            // Number counting animation
            gsap.to(number, {
              innerHTML: finalValue,
              duration: 1.2,
              ease: "power1.out",
              snap: { innerHTML: 1 },
              delay: 0.6 + index * 0.2
            });
          }
        });
      }
    }

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="w-full aboutus-section">
      {/* About Us Section - Hakkımızda */}
      <div ref={aboutUsRef} className="w-full max-w-[1440px] h-auto lg:h-[760px] mx-auto flex flex-col gap-6 px-6 lg:px-10 aboutus-container">
        <div className="w-full max-w-[1360px] h-auto lg:h-[680px] mx-auto bg-white flex flex-col gap-6 lg:gap-10 px-6 lg:px-10 py-8 lg:py-10 aboutus-inner">
          {/* Title */}
          <div className="w-full lg:w-[310px] h-auto lg:h-[62px] flex items-center gap-2.5 px-3 aboutus-title-wrap">
            <h1 
              className="w-full lg:w-[310px] h-auto lg:h-[62px] font-bold text-[28px] lg:text-[48px] leading-[61.6px] tracking-[0%] aboutus-title"
              style={{
                fontFamily: 'Manrope, sans-serif',
                background: 'linear-gradient(269deg, rgba(201, 162, 75, 1) 0%, rgba(144, 101, 74, 1) 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: 'drop-shadow(0px 4px 8px rgba(12, 12, 13, 0.2))'
              }}
            >
              Hedeflerimiz
            </h1>
          </div>
          
          {/* Main Content Section */}
          <div className="w-full max-w-[1360px] h-auto lg:h-[278px] flex flex-col lg:flex-row gap-8 lg:gap-[72px] aboutus-main-row">
            {/* Left Side - 695x278 */}
            <div className="w-full lg:w-[695px] h-auto lg:h-[278px] flex flex-col lg:flex-row gap-4 lg:gap-[22px] aboutus-left-col">
              {/* Vertical Line */}
              <div className="hidden lg:block w-px h-[278px] bg-gray-400 opacity-30 aboutus-left-divider"></div>
              
              {/* Content */}
              <div className="w-full lg:w-[673px] h-auto lg:h-[265px] flex flex-col lg:flex-row gap-4 lg:gap-[55px] pt-1.5 aboutus-left-inner">
                <div className="flex-1 flex flex-col gap-4 lg:gap-8 ">
                  {/* Description */}
                  <div className="w-full lg:w-[649px] h-auto lg:h-[27px] text-black text-[18px] lg:text-[24px] font-bold leading-[26.4px] tracking-[0%] aboutus-desc" style={{fontFamily: 'Manrope, sans-serif'}}>
                    5 yıl içinde endüstriyel ürün sayısı.
                  </div>
                  
                  {/* Separator Line */}
                  <div className="w-full lg:w-[622px] h-px bg-gray-400 opacity-30"></div>
                  
                  {/* Number Display */}
                  <div className="flex items-end gap-3 aboutus-number-wrap">
                    <div ref={mainNumberRef} className="text-[72px] lg:text-[144px] font-bold leading-[150px] tracking-[0%] text-[#c9a24b] aboutus-main-number" style={{fontFamily: 'Manrope, Helvetica'}}>
                      0
                    </div>
                    <div className="text-[28px] lg:text-[56px] font-bold leading-[61.6px] tracking-[0%] text-[#c9a24b] pb-[22px] aboutus-plus" style={{fontFamily: 'Manrope, sans-serif'}}>
                      +
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Side - 505x278 */}
            <div className="w-full lg:w-[505px] h-auto lg:h-[278px] flex flex-col gap-2 py-3 aboutus-right-col">
              <div className="w-full lg:w-[441px] h-auto lg:h-[209px] mt-3 aboutus-right-inner">
                <p className="text-[#4F4F4F] text-[16px] lg:text-[24px] font-bold leading-[26.4px] tracking-[0%] aboutus-right-text" style={{fontFamily: 'Manrope, sans-serif'}}>
                  MillerSan olarak, yüksek üretim kapasitemiz, global iş birliklerimiz ve sektördeki köklü tecrübemizle büyümeye devam ediyoruz. Güven veren rakamlarımız, her geçen gün artan müşteri memnuniyetimizin ve kaliteli hizmet anlayışımızın en somut göstergesidir.
                </p>
              </div>
            </div>
          </div>
          
          {/* Stats Section */}
          <div ref={statsRef} className="w-full max-w-[1360px] h-auto lg:h-[180px] flex flex-col lg:flex-row gap-6 lg:gap-10 aboutus-stats-row">
            {/* Stat 1 - 1,200 Teslimat */}
            <div className="flex-1 flex flex-col lg:flex-row gap-1 aboutus-stat">
              <div className="hidden lg:block w-px h-[180px] bg-gray-400 opacity-30"></div>
              <div className="flex-1 flex flex-col lg:flex-row gap-4 lg:gap-11 px-1 py-2.5">
                <div className="flex-1 flex flex-col gap-4 lg:gap-6 px-3">
                  <div className="text-[#282828] text-[16px] lg:text-[18px] font-bold leading-[25.2px] tracking-[0%]" style={{fontFamily: 'Manrope, sans-serif'}}>
                    1,200 Teslim Edilecek Ürün
                  </div>
                  <div className="w-full h-px bg-gray-400 opacity-30"></div>
                  <div className="flex items-end gap-3">
                    <div className="stat-number text-[40px] lg:text-[56px] font-bold leading-[61.6px] tracking-[0%] text-[#c9a24b]" style={{fontFamily: 'Manrope, sans-serif'}} data-value="1200">
                      0
                    </div>
                    <div className="text-[18px] lg:text-[24px] font-bold leading-[26.4px] tracking-[0%] text-[#BDBDBD] pb-[18px]" style={{fontFamily: 'Manrope, sans-serif'}}>
                      /
                    </div>
                    <div className="text-[14px] lg:text-[18px] font-bold leading-[25.2px] tracking-[0%] text-[#282828] pb-[18px]" style={{fontFamily: 'Manrope, sans-serif'}}>
                      TESLİMAT
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Stat 2 - 40 İhracat */}
            <div className="flex-1 flex gap-1 aboutus-stat">
              <div className="w-px h-[180px] bg-gray-400 opacity-30"></div>
              <div className="flex-1 flex gap-11 px-1 py-2.5">
                <div className="flex-1 flex flex-col gap-6 px-3">
                  <div className="text-[#282828] text-[18px] font-bold leading-[25.2px] tracking-[0%]" style={{fontFamily: 'Manrope, sans-serif'}}>
                    30 Ülke ve Bölgeye İhracat
                  </div>
                  <div className="w-full h-px bg-gray-400 opacity-30"></div>
                  <div className="flex items-end gap-3">
                    <div className="stat-number text-[56px] font-bold leading-[61.6px] tracking-[0%] text-[#c9a24b]" style={{fontFamily: 'Manrope, sans-serif'}} data-value="30">
                      0
                    </div>
                    <div className="text-[24px] font-bold leading-[26.4px] tracking-[0%] text-[#BDBDBD] pb-[18px]" style={{fontFamily: 'Manrope, sans-serif'}}>
                      /
                    </div>
                    <div className="text-[18px] font-bold leading-[25.2px] tracking-[0%] text-[#282828] pb-[18px]" style={{fontFamily: 'Manrope, sans-serif'}}>
                      İHRACAT
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Stat 3 - 1,000 Müşteri */}
            <div className="flex-1 flex gap-1 aboutus-stat">
              <div className="w-px h-[180px] bg-gray-400 opacity-30"></div>
              <div className="flex-1 flex gap-11 px-1 py-2.5">
                <div className="flex-1 flex flex-col gap-6 px-3">
                  <div className="text-[#282828] text-[18px] font-bold leading-[25.2px] tracking-[0%]" style={{fontFamily: 'Manrope, sans-serif'}}>
                    1,000 Memnun Müşteri
                  </div>
                  <div className="w-full h-px bg-gray-400 opacity-30"></div>
                  <div className="flex items-end gap-3">
                    <div className="stat-number text-[56px] font-bold leading-[61.6px] tracking-[0%] text-[#c9a24b]" style={{fontFamily: 'Manrope, sans-serif'}} data-value="1000">
                      0
                    </div>
                    <div className="text-[24px] font-bold leading-[26.4px] tracking-[0%] text-[#BDBDBD] pb-[18px]" style={{fontFamily: 'Manrope, sans-serif'}}>
                      /
                    </div>
                    <div className="text-[18px] font-bold leading-[25.2px] tracking-[0%] text-[#282828] pb-[18px]" style={{fontFamily: 'Manrope, sans-serif'}}>
                      MÜŞTERİ
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};