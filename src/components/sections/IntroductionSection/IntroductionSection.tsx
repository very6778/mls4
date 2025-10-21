"use client";

import React, { useRef, useEffect, useMemo } from "react";
import Image from "next/image";
import { Header } from "../Header";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLenis } from "@/hooks/useLenis";
import { SolutionsSection } from "../SolutionsSection";
import { useTranslations } from "next-intl";

gsap.registerPlugin(ScrollTrigger);

export const IntroductionSection = (): JSX.Element => {
  const logoRef = useRef<HTMLDivElement>(null);
  const parallaxImagesRef = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollElementRef = useRef<HTMLDivElement>(null);
  const factoryCardRef = useRef<HTMLDivElement>(null);
  const lenis = useLenis();
  const t = useTranslations("Introduction");
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  // Hero images data with better positioned and visible placements
  const heroImages = useMemo(() => [
    {
      src: "/images/hero-images/vals.webp",
      alt: t("heroImages.vals"),
      speed: 3.2, // Fastest - moves up very quickly
      position: { top: "30%", right: "15%", size: "140px" },
      rotation: 20,
      delay: 0.2
    },
    {
      src: "/images/hero-images/kayış.webp",
      alt: t("heroImages.belt"),
      speed: 0.4, // Slowest - moves up very slowly
      position: { top: "65%", left: "12%", size: "170px" },
      rotation: 10,
      delay: 0.4
    },
    {
      src: "/images/hero-images/generation-fa7de539-89e5-497d-b5bb-4029463c3ba0 (1)-Photoroom.webp",
      alt: t("heroImages.assembly"),
      speed: 2.1, // Fast
      position: { top: "70%", right: "12%", size: "145px" },
      rotation: -25,
      delay: 0.6
    },
    {
      src: "/images/hero-images/mika cam.webp",
      alt: t("heroImages.mica"),
      speed: 2.4, // Slow
      position: { top: "40%", left: "8%", size: "160px" },
      rotation: -15,
      delay: 0.8
    }
  ], [t]);

  useEffect(() => {
    if (logoRef.current) {
      gsap.set(logoRef.current, {
        clipPath: "inset(0 100% 0 0)",
        opacity: 0,
        x: -50
      });

      const tl = gsap.timeline({ delay: 0.8 });

      tl.to(logoRef.current, {
        clipPath: "inset(0 0% 0 0)",
        opacity: 1,
        x: 0,
        duration: 2.5,
        ease: "power3.out"
      });
    }

    // Factory card initial fade-in animation (same as other parallax images)
    if (window.innerWidth >= 1024 && factoryCardRef.current) {
      gsap.set(factoryCardRef.current, {
        opacity: 0,
        force3D: true,
        willChange: 'transform'
      });

      gsap.to(factoryCardRef.current, {
        opacity: 1,
        duration: 1.2,
        delay: 1.5 + 1.2,
        ease: "power2.out"
      });
    }

    if (window.innerWidth >= 1024) {
      parallaxImagesRef.current.forEach((imageRef, index) => {
        if (imageRef && scrollElementRef.current) {
          const imageData = heroImages[index];
          const speed = imageData.speed;

          gsap.set(imageRef, {
            opacity: 0,
            y: 300,
            rotation: imageData.rotation,
            force3D: true,
            willChange: "transform"
          });

          gsap.to(imageRef, {
            opacity: 1,
            duration: 1.2,
            delay: 1.5 + imageData.delay,
            ease: "power2.out"
          });
        }
      });

      let scene1 = gsap.timeline();
      ScrollTrigger.create({
        animation: scene1,
        trigger: scrollElementRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
      });

      parallaxImagesRef.current.forEach((imageRef, index) => {
        if (imageRef) {
          const imageData = heroImages[index];
          const speed = imageData.speed;
          const moveDistance = -300 * speed; // Increased base distance for more dramatic effect
          const rotationAmount = imageData.rotation + (speed * 25); // Increased rotation multiplier

          scene1.to(imageRef, {
            y: moveDistance,
            rotation: rotationAmount,
            ease: "none"
          }, 0);
        }
      });

      return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    }

    if (lenis) {
      lenis.on('scroll', ScrollTrigger.update);
      
      return () => {
        lenis.off('scroll', ScrollTrigger.update);
      };
    }
  }, [lenis, heroImages]);

  // 3D Tilt effect on mouse move
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!factoryCardRef.current) return;
    
    const card = factoryCardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    
    gsap.to(card, {
      rotateX: rotateX,
      rotateY: rotateY,
      duration: 0.5,
      ease: "power2.out",
      transformPerspective: 1000
    });
  };

  const handleMouseLeave = () => {
    if (!factoryCardRef.current) return;
    
    gsap.to(factoryCardRef.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.5,
      ease: "power2.out"
    });
  };

  return (
    <>
      <div ref={scrollElementRef} className="relative">
        <section
          ref={sectionRef}
          className="relative w-full overflow-hidden"
          style={{
            height: '100vh',
            minHeight: '100vh',
            maxHeight: '100vh'
          }}
        >
          {/* Background gradient layer (z-0) */}
          <div className="absolute inset-0 z-0" style={{
            background: 'linear-gradient(180deg, rgba(229, 163, 15, 0.16) 0%, rgba(255, 255, 255, 0.16) 100%)'
          }}></div>

          {/* Parallax images (above hero content, below header) */}
          <div className="hidden lg:block absolute inset-0 z-10 pointer-events-none">
            {heroImages.map((image, index) => (
              <div
                key={index}
                ref={(el) => {
                  parallaxImagesRef.current[index] = el;
                }}
                className="absolute pointer-events-none"
                style={{
                  top: image.position.top,
                  left: image.position.left,
                  right: image.position.right,
                  width: image.position.size,
                  height: image.position.size
                }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={400}
                  height={400}
                  className="w-full h-full object-contain"
                  style={{
                    filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.2))',
                    willChange: 'transform'
                  }}
                  priority={index === 4}
                />
              </div>
            ))}
          </div>

          {/* Factory 3D Tilt Card - Same position as hero-img.png (Desktop Only) */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none z-[24]">
            <div className="absolute top-1/2 left-1/2" style={{ transform: 'translate(-50%, calc(-50% + 275px))' }}>
              <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center"></div>
              <div
                ref={factoryCardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="pointer-events-auto relative w-[600px] h-[260px] rounded-2xl overflow-hidden shadow-md"
                style={{
                  transformStyle: 'preserve-3d',
                  perspective: '1000px',
                  willChange: 'transform',
                  border: '2px solid rgba(0, 0, 0, 0.2)',
                  boxShadow: 'inset 0 0 0 2px rgba(255, 255, 255, 0.5)'
                }}
              >
                {/* Factory Image */}
                <Image
                  src="/images/fabrica.webp"
                  alt="MillerSan Fabrika"
                  width={600}
                  height={260}
                  quality={100}
                  className="w-full h-full object-cover"
                />

                {/* 3D depth effect glow */}
                <div 
                  className="absolute inset-0 opacity-30 blur-xl -z-10"
                  style={{
                    background: 'radial-gradient(circle at center, rgba(201,162,75,0.6), transparent 70%)',
                  }}
                ></div>
              </div>
            </div>
          </div>

          {/* Header (z-30) */}
          <div className="relative z-30 mt-4">
            <Header />
          </div>

          {/* Content Layer (z-20) */}
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center pb-8" style={{ paddingTop: '80px', minHeight: '100vh' }}>
            <div ref={logoRef} className="flex justify-center items-center mb-4 md:mb-8 w-full px-4 mt-4 md:mt-8">
              <div className="w-full max-w-[800px] md:max-w-[900px] lg:max-w-[1000px] xl:max-w-[1077px]" style={{ aspectRatio: '1077/222' }}>
                <Image
                  src="/images/hero-logo.png"
                  alt="MillerSan Logo"
                  width={1077}
                  height={222}
                  className="w-full h-full object-contain drop-shadow-lg miller-logo"
                  priority
                />
              </div>
            </div>

            <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-center mb-2 md:mb-4" style={{ fontFamily: 'Manrope, sans-serif' }}>
              <span className="text-[#c9a24b]">{t("headline.accent")}</span>{" "}
              <span className="text-[#2b2b2b]">{t("headline.main")}</span>
            </h1>

            <p className="text-md md:text-xl lg:text-2xl font-bold text-[#222] text-center max-w-5xl px-4 mb-2 md:mb-4" style={{ fontFamily: 'Manrope, sans-serif' }}>
              Çiftçilerin emeğinin gerçek değerini bulmasını sağlayarak onları güçlendiriyor, adil, şeffaf ve bolluk dolu bir piyasa yaratıyoruz. Üreticileri doğrudan pazarlarla buluşturup herkesin kazandığı sürdürülebilir bir ticaret modeli kuruyoruz.
            </p>

                         <div className="hidden lg:block w-full h-[200px] md:h-[250px] lg:h-[330px] xl:h-[250px]"></div>
          </div>
        </section>
      </div>

      <SolutionsSection />
    </>
  );
};
