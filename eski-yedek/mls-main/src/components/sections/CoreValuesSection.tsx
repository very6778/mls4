"use client"

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const CoreValuesSection = (): JSX.Element => {
  const coreValuesRef = useRef<HTMLDivElement>(null);
  const verticalLineRef = useRef<HTMLDivElement>(null);
  const valueSectionsRef = useRef<HTMLDivElement>(null);

  // CSS Styles for active/inactive states (injected via style tag)
  React.useEffect(() => {
    const styleId = 'core-values-styles';
    let styleElement = document.getElementById(styleId) as HTMLStyleElement;
    
    if (!styleElement) {
      styleElement = document.createElement('style');
      styleElement.id = styleId;
      document.head.appendChild(styleElement);
    }
    
    styleElement.textContent = `
      .value-section.active .value-title {
        font-size: 40px !important;
        opacity: 1 !important;
      }
      
      .value-section.inactive .value-title {
        font-size: 32px !important;
        opacity: 0.6 !important;
      }
      
      .value-section.active .value-description {
        opacity: 1 !important;
      }
      
      .value-section.inactive .value-description {
        opacity: 0 !important;
      }
      
      .line-segment.active {
        background: linear-gradient(119deg, rgba(201, 162, 75, 1) 0%, rgba(161, 86, 0, 1) 100%) !important;
      }
      
      .line-segment.inactive {
        background-color: rgba(201, 162, 75, 0.08) !important;
      }
      
      @media (max-width: 1024px) {
        .value-section.active .value-title {
          font-size: 28px !important;
        }
        .value-section.inactive .value-title {
          font-size: 24px !important;
        }
        .value-section .value-title {
          opacity: 1 !important;
        }
        .value-section .value-description {
          opacity: 1 !important;
        }
      }
    `;
    
    return () => {
      if (styleElement && styleElement.parentNode) {
        styleElement.parentNode.removeChild(styleElement);
      }
    };
  }, []);

  useEffect(() => {
    // Core Values Section Animation - Only on desktop
    if (coreValuesRef.current && verticalLineRef.current && valueSectionsRef.current && window.innerWidth >= 1024) {
      const sections = valueSectionsRef.current.querySelectorAll('.value-section');
      const lineSegments = verticalLineRef.current.querySelectorAll('.line-segment');

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: coreValuesRef.current,
          start: "top top",
          end: "+=234%",
          pin: true,
          pinSpacing: true,
          scrub: 1
        }
      });

      // Set initial state - All sections should be inactive initially
      sections.forEach((section, index) => {
        gsap.set(section, { className: "value-section inactive" });
        gsap.set(lineSegments[index], { background: 'rgba(201, 162, 75, 0.08)' });
      });

      // Step 1: Activate first section (Mühendislik Yetkinliği)
      if (sections[0] && lineSegments[0]) {
        tl.to(lineSegments[0], {
          background: 'linear-gradient(119deg, rgba(201, 162, 75, 1) 0%, rgba(161, 86, 0, 1) 100%)',
          duration: 0.5,
          ease: "power2.out"
        });
        tl.to(sections[0], {
          className: "value-section active",
          duration: 0.5,
          ease: "power2.out"
        }, "-=0.5");
      }

      // Step 2: Move to second section (Üretim Kalitesi)
      if (sections[1]) {
        tl.to(lineSegments[0], {
          background: 'rgba(201, 162, 75, 0.08)',
          duration: 0.5,
          ease: "power2.out"
        }, "+=0.5");
        tl.to(lineSegments[1], {
          background: 'linear-gradient(119deg, rgba(201, 162, 75, 1) 0%, rgba(161, 86, 0, 1) 100%)',
          duration: 0.5,
          ease: "power2.out"
        }, "-=0.5");
        tl.to(sections[0], {
          className: "value-section inactive",
          duration: 0.5,
          ease: "power2.out"
        }, "-=0.5");
        tl.to(sections[1], {
          className: "value-section active",
          duration: 0.5,
          ease: "power2.out"
        }, "-=0.5");
      }

      // Step 3: Third section (Sürekli İyileştirme)
      if (sections[2]) {
        tl.to(lineSegments[1], {
          background: 'rgba(201, 162, 75, 0.08)',
          duration: 0.5,
          ease: "power2.out"
        }, "+=0.5");
        tl.to(lineSegments[2], {
          background: 'linear-gradient(119deg, rgba(201, 162, 75, 1) 0%, rgba(161, 86, 0, 1) 100%)',
          duration: 0.5,
          ease: "power2.out"
        }, "-=0.5");
        tl.to(sections[1], {
          className: "value-section inactive",
          duration: 0.5,
          ease: "power2.out"
        }, "-=0.5");
        tl.to(sections[2], {
          className: "value-section active",
          duration: 0.5,
          ease: "power2.out"
        }, "-=0.5");
      }

      // Step 4: Fourth section (Güvenilir İşbirliği)
      if (sections[3]) {
        tl.to(lineSegments[2], {
          background: 'rgba(201, 162, 75, 0.08)',
          duration: 0.5,
          ease: "power2.out"
        }, "+=0.5");
        tl.to(lineSegments[3], {
          background: 'linear-gradient(119deg, rgba(201, 162, 75, 1) 0%, rgba(161, 86, 0, 1) 100%)',
          duration: 0.5,
          ease: "power2.out"
        }, "-=0.5");
        tl.to(sections[2], {
          className: "value-section inactive",
          duration: 0.5,
          ease: "power2.out"
        }, "-=0.5");
        tl.to(sections[3], {
          className: "value-section active",
          duration: 0.5,
          ease: "power2.out"
        }, "-=0.5");
      }
    } else if (coreValuesRef.current && valueSectionsRef.current && window.innerWidth < 1024) {
      // Mobile: Set all sections to visible/active state without animations
      const sections = valueSectionsRef.current.querySelectorAll('.value-section');
      sections.forEach((section) => {
        gsap.set(section, { className: "value-section active" }); // Set all to active
      });
    }

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="w-full py-8 core-values-section">
      {/* Core Values Section */}
      <div ref={coreValuesRef} className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-8 lg:py-12 core-values-container">
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-[72px] scale-[0.9] lg:scale-[0.85] xl:scale-95 core-values-main">
          {/* Left Side - Responsive Cards Layout */}
          <div className="w-full lg:w-[682px] flex flex-col gap-6 lg:gap-[44px] core-values-left">
            {/* Title */}
            <h1 className="w-full font-bold text-[28px] sm:text-[32px] lg:text-[56px] leading-tight lg:leading-[61.6px] tracking-[0%] text-[#2B2B2B] text-center lg:text-left core-values-title" style={{fontFamily: 'Manrope, sans-serif', textShadow: '0px 16px 32px -8px rgba(12, 12, 13, 0.4)'}}>
              Temel Değerler
            </h1>
            
            {/* Mobile Layout - Stacked Cards */}
            <div className="lg:hidden flex flex-col gap-4 core-values-mobile">
              {/* Top Image */}
              <div className="w-full h-[250px] sm:h-[300px] rounded-[20px] sm:rounded-[39.73px] overflow-hidden core-values-mobile-img1" style={{boxShadow: '-20px 20px 40px -8px rgba(145, 158, 171, 0.24)'}}>
                <Image
                  className="w-full h-full object-cover"
                  alt="Temel Değerler 1"
                  src="/images/new-images/image2.jpg"
                  width={800}
                  height={800}
                  quality={95}
                  priority
                />
              </div>
              
              {/* Experience Card */}
              <div 
                className="w-full h-[150px] sm:h-[200px] rounded-[20px] sm:rounded-[39.73px] overflow-hidden flex flex-col justify-center items-center text-white core-values-mobile-exp"
                style={{
                  background: 'linear-gradient(269deg, rgba(194, 225, 255, 1) 0%, rgba(31, 111, 191, 1) 100%)',
                  boxShadow: '-20px 20px 40px -8px rgba(145, 158, 171, 0.24)'
                }}
              >
                <div className="text-[24px] sm:text-[28px] font-bold leading-tight" style={{fontFamily: 'Manrope, Helvetica'}}>
                  7/24
                </div>
                <div className="text-[40px] sm:text-[50px] font-bold leading-tight" style={{fontFamily: 'Manrope, Helvetica'}}>
                  Destek
                </div>
              </div>
              
              {/* Google Rating Card */}
              <div 
                className="w-full h-[120px] sm:h-[150px] rounded-[20px] sm:rounded-[39.73px] overflow-hidden flex flex-col justify-center items-center text-white core-values-mobile-rating"
                style={{
                  background: 'linear-gradient(269deg, rgba(250, 142, 155, 1) 0%, rgba(243, 64, 83, 1) 100%)',
                  boxShadow: '-20px 20px 40px -8px rgba(145, 158, 171, 0.24)'
                }}
              >
                <div className="text-[18px] sm:text-[22px] font-bold leading-tight text-center w-full" style={{fontFamily: 'Manrope, Helvetica'}}>
                  100%
                </div>
                <div className="text-[24px] sm:text-[30px] font-bold leading-tight text-center w-full" style={{fontFamily: 'Manrope, Helvetica'}}>
                  Müşteri Odaklı
                </div>
              </div>
              
              {/* Bottom Image */}
              <div className="w-full h-[200px] sm:h-[250px] rounded-[20px] sm:rounded-[39.73px] overflow-hidden core-values-mobile-img2" style={{boxShadow: '-20px 20px 40px -8px rgba(145, 158, 171, 0.24)'}}>
                <Image
                  className="w-full h-full object-cover"
                  alt="Temel Değerler 2"
                  src="/images/temekdegerler2.jpg"
                  width={800}
                  height={800}
                  quality={95}
                  priority
                />
              </div>
            </div>
            
            {/* Desktop Layout - Absolute Positioning */}
            <div className="hidden lg:block relative w-full lg:w-[550px] h-auto lg:h-[550px] core-values-desktop">
              {/* Top Left - Large image (330x320px) */}
              <div className="absolute top-0 left-0 w-[330px] h-[320px] rounded-[39.73px] overflow-hidden core-values-desktop-img1" style={{boxShadow: '-66.21px 66.21px 132.43px -13.24px rgba(145, 158, 171, 0.24)'}}>
                <Image
                  className="w-full h-full object-cover"
                  alt="Temel Değerler 1"
                  src="/images/new-images/image2.jpg"
                  width={800}
                  height={800}
                  quality={95}
                  priority
                />
              </div>
              
              {/* Bottom Left - Blue Tecrübe card (330x230px) */}
              <div 
                className="absolute left-0 w-[330px] h-[230px] rounded-[39.73px] overflow-hidden flex flex-col justify-center items-center text-white core-values-desktop-exp"
                style={{
                  top: '340px',
                  background: 'linear-gradient(269deg, rgba(194, 225, 255, 1) 0%, rgba(31, 111, 191, 1) 100%)',
                  boxShadow: '-66.21px 66.21px 132.43px -13.24px rgba(145, 158, 171, 0.24)'
                }}
              >
                <div className="text-[33.1px] font-bold leading-[46.3px] tracking-0" style={{fontFamily: 'Manrope, Helvetica'}}>
                  7/24
                </div>
                <div className="text-[66.2px] font-bold leading-[109.3px] tracking-0" style={{fontFamily: 'Manrope, Helvetica'}}>
                  Destek
                </div>
              </div>
              
              {/* Top Right - Google Rating Card (200x200px) */}
              <div 
                className="absolute w-[200px] h-[200px] rounded-[39.73px] overflow-hidden flex flex-col justify-center items-center text-white core-values-desktop-rating"
                style={{
                  top: '0px',
                  left: '350px',
                  background: 'linear-gradient(269deg, rgba(250, 142, 155, 1) 0%, rgba(243, 64, 83, 1) 100%)',
                  boxShadow: '-66.21px 66.21px 132.43px -13.24px rgba(145, 158, 171, 0.24)'
                }}
              >
                <div className="text-[29.8px] font-bold leading-[41.7px] tracking-0 text-center w-full" style={{fontFamily: 'Manrope, Helvetica'}}>
                  100%
                </div>
                <div className="text-[36px] font-bold leading-[42px] tracking-0 text-center w-full" style={{fontFamily: 'Manrope, Helvetica'}}>
                  Müşteri Odaklı
                </div>
              </div>
              
              {/* Bottom Right - Worker image (200x320px) */}
              <div 
                className="absolute w-[200px] h-[320px] rounded-[39.73px] overflow-hidden core-values-desktop-img2"
                style={{
                  top: '230px',
                  left: '350px',
                  boxShadow: '-66.21px 66.21px 132.43px -13.24px rgba(145, 158, 171, 0.24)'
                }}
              >
                <Image
                  className="w-full h-full object-cover"
                  alt="Temel Değerler 2"
                  src="/images/temekdegerler2.jpg"
                  width={800}
                  height={800}
                  quality={95}
                  priority
                />
              </div>
            </div>
          </div>
          
          {/* Right Side - Responsive Content */}
          <div className="relative w-full lg:w-[560px] h-auto lg:h-[550px] core-values-right">
            {/* Mobile Indicator Lines */}
            <div className="lg:hidden flex justify-center mb-6 core-values-mobile-indicators">
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full" style={{backgroundColor: 'rgba(201, 162, 75, 0.3)'}}></div>
                <div className="w-2 h-8 rounded-full" style={{background: 'linear-gradient(119deg, rgba(201, 162, 75, 1) 0%, rgba(161, 86, 0, 1) 100%)'}}></div>
                <div className="w-2 h-2 rounded-full" style={{backgroundColor: 'rgba(201, 162, 75, 0.3)'}}></div>
                <div className="w-2 h-2 rounded-full" style={{backgroundColor: 'rgba(201, 162, 75, 0.3)'}}></div>
              </div>
            </div>
            
            {/* Desktop Vertical Indicator Lines */}
            <div ref={verticalLineRef} className="hidden lg:block absolute top-0 left-0 w-[8px] h-[550px] flex flex-col justify-between core-values-indicators">
              {/* First indicator - 130px height */}
              <div className="line-segment w-[8px] h-[130px] rounded-xl" style={{
                background: 'linear-gradient(119deg, rgba(201, 162, 75, 1) 0%, rgba(161, 86, 0, 1) 100%)'
              }}></div>
              {/* Second indicator - 130px height */}
              <div className="line-segment w-[8px] h-[130px] rounded-xl" style={{
                background: 'rgba(201, 162, 75, 0.08)'
              }}></div>
              {/* Third indicator - 130px height */}
              <div className="line-segment w-[8px] h-[130px] rounded-xl" style={{
                background: 'rgba(201, 162, 75, 0.08)'
              }}></div>
              {/* Fourth indicator - 130px height */}
              <div className="line-segment w-[8px] h-[130px] rounded-xl" style={{
                background: 'rgba(201, 162, 75, 0.08)'
              }}></div>
            </div>
            
            {/* Content - Responsive Layout */}
            <div ref={valueSectionsRef} className="lg:absolute lg:top-[19px] lg:left-[38px] w-full lg:w-[520px] h-auto lg:h-[550px] px-4 lg:px-0 space-y-8 lg:space-y-0 core-values-content">
              {/* Mühendislik Yetkinliği */}
              <div className="value-section lg:absolute lg:top-0 lg:left-0 w-full lg:w-[520px] h-auto lg:h-[110px] mb-6 lg:mb-0 transition-all duration-300 ease-out core-values-item">
                <h3 className="value-title font-bold leading-tight lg:leading-[40px] tracking-0 text-[#2B2B2B] mb-1 transition-all duration-300 ease-out text-[20px] sm:text-[24px] lg:text-[32px] opacity-100" style={{fontFamily: 'Manrope, Helvetica'}}>
                  Mühendislik Yetkinliği
                </h3>
                <p className="value-description text-[14px] lg:text-[16px] text-[#4F4F4F] leading-relaxed max-w-[520px] transition-all duration-300 ease-out opacity-100 mb-6" style={{fontFamily: 'Manrope, Helvetica'}}>
                  Yüksek mühendislik bilgimizle, ihtiyaçlarınıza özel çözümler geliştiriyoruz. Her parçanın arkasında teknik uzmanlık ve titizlikle yapılan analizler var.
                </p>
              </div>
              
              {/* Üretim Kalitesi */}
              <div className="value-section lg:absolute lg:top-[130px] lg:left-0 w-full lg:w-[520px] h-auto lg:h-[110px] mb-6 lg:mb-0 transition-all duration-300 ease-out core-values-item">
                <h2 className="value-title font-bold leading-tight lg:leading-[50px] tracking-0 text-[#2B2B2B] mb-1 transition-all duration-300 ease-out text-[28px] sm:text-[32px] lg:text-[40px] opacity-100" style={{fontFamily: 'Manrope, Helvetica'}}>
                  Üretim Kalitesi
                </h2>
                <p className="value-description text-[14px] lg:text-[16px] text-[#4F4F4F] leading-relaxed max-w-[520px] transition-all duration-300 ease-out opacity-100 mb-6" style={{fontFamily: 'Manrope, Helvetica'}}>
                  Modern üretim hatlarımız ve kalite kontrol süreçlerimizle, her seferinde tutarlı ve üstün ürünler sunarız.
                </p>
              </div>
              
              {/* Sürekli İyileştirme */}
              <div className="value-section lg:absolute lg:top-[260px] lg:left-0 w-full lg:w-[520px] h-auto lg:h-[110px] mb-6 lg:mb-0 transition-all duration-300 ease-out core-values-item">
                <h3 className="value-title font-bold leading-tight lg:leading-[40px] tracking-0 text-[#2B2B2B] mb-1 transition-all duration-300 ease-out text-[20px] sm:text-[24px] lg:text-[32px] opacity-100" style={{fontFamily: 'Manrope, Helvetica'}}>
                  Sürekli İyileştirme
                </h3>
                <p className="value-description text-[14px] lg:text-[16px] text-[#4F4F4F] leading-relaxed max-w-[520px] transition-all duration-300 ease-out opacity-100 mb-6" style={{fontFamily: 'Manrope, Helvetica'}}>
                  Gelişime daima açığız. Süreçlerimizi ve ürünlerimizi, geri bildirimler ve yeniliklerle sürekli ileriye taşıyoruz.
                </p>
              </div>
              
              {/* Güvenilir İşbirliği */}
              <div className="value-section lg:absolute lg:top-[390px] lg:left-0 w-full lg:w-[520px] h-auto lg:h-[110px] mb-6 lg:mb-0 transition-all duration-300 ease-out core-values-item">
                <h3 className="value-title font-bold leading-tight lg:leading-[40px] tracking-0 text-[#2B2B2B] mb-1 transition-all duration-300 ease-out text-[20px] sm:text-[24px] lg:text-[32px] opacity-100" style={{fontFamily: 'Manrope, Helvetica'}}>
                  Güvenilir İşbirliği
                </h3>
                <p className="value-description text-[14px] lg:text-[16px] text-[#4F4F4F] leading-relaxed max-w-[520px] transition-all duration-300 ease-out opacity-100 mb-6" style={{fontFamily: 'Manrope, Helvetica'}}>
                  Şeffaf, sürdürülebilir ve uzun vadeli ilişkiler kurarız. İş ortaklarımıza her zaman sözümüzü tutarız.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};