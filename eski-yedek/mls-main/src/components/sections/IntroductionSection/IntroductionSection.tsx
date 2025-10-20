"use client";

import React, { useRef, useEffect, useMemo } from "react";
import Image from "next/image";
import { Header } from "../Header";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLenis } from "@/hooks/useLenis";
import { SolutionsSection } from "../SolutionsSection";

gsap.registerPlugin(ScrollTrigger);

export const IntroductionSection = (): JSX.Element => {
  const logoRef = useRef<HTMLDivElement>(null);
  const parallaxImagesRef = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollElementRef = useRef<HTMLDivElement>(null);
  const lenis = useLenis();

  // Hero images data with better positioned and visible placements
  const heroImages = useMemo(() => [
    {
      src: "/images/hero-images/vals.webp",
      alt: "Vals",
      speed: 3.2, // Fastest - moves up very quickly
      position: { top: "30%", right: "15%", size: "140px" },
      rotation: 20,
      delay: 0.2
    },
    {
      src: "/images/hero-images/kayış.webp",
      alt: "Kayış",
      speed: 0.4, // Slowest - moves up very slowly
      position: { top: "65%", left: "12%", size: "170px" },
      rotation: 10,
      delay: 0.4
    },
    {
      src: "/images/hero-images/generation-fa7de539-89e5-497d-b5bb-4029463c3ba0 (1)-Photoroom.webp",
      alt: "Generation",
      speed: 2.1, // Fast
      position: { top: "70%", right: "12%", size: "145px" },
      rotation: -25,
      delay: 0.6
    },
    {
      src: "/images/hero-images/mika cam.webp",
      alt: "Mika Cam",
      speed: 2.4, // Slow
      position: { top: "40%", left: "8%", size: "160px" },
      rotation: -15,
      delay: 0.8
    },
    {
      src: "/images/hero-img.png",
      alt: "Rulman",
      speed: 1.6, // Medium
      position: { top: "50%", left: "50%", size: "160px", transform: "translate(-50%, -50%)" },
      rotation: 0,
      delay: 1.0
    }
  ], []);

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

    if (window.innerWidth >= 1024) {
      parallaxImagesRef.current.forEach((imageRef, index) => {
        if (imageRef && scrollElementRef.current) {
          const imageData = heroImages[index];
          const speed = imageData.speed;

          gsap.set(imageRef, {
            opacity: 0,
            scale: 0.8,
            y: 300,
            rotation: imageData.rotation,
            force3D: true,
            willChange: "transform"
          });

          gsap.to(imageRef, {
            opacity: 0.8,
            scale: 1,
            duration: 1.5,
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

          {/* Parallax images (z-10) */}
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
                  height: image.position.size,
                  transform: image.position.transform || 'none',
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
              <span className="text-[#c9a24b]">Endüstriyel</span> <span className="text-[#2b2b2b]">Gücün Yeni Adı</span>
            </h1>

            <p className="text-md md:text-xl lg:text-2xl font-bold text-[#222] text-center max-w-5xl px-4 mb-2 md:mb-4" style={{ fontFamily: 'Manrope, sans-serif' }}>
              Kaliteli ürün gamı, sektörel deneyim ve güvenilir hizmetle Millersan;<br /> kayış, kaplin ve endüstriyel yedek parçada çözüm ortağınız.
            </p>

                         <div className="hidden lg:block w-full h-[200px] md:h-[250px] lg:h-[300px] xl:h-[250px]"></div>

            {/* Mobile-only Rulman Image */}
            <div className="lg:hidden flex justify-center items-center mt-2 md:mt-4 w-full px-4">
              <div className="w-full max-w-[200px] md:max-w-[250px]" style={{ aspectRatio: '1/1' }}>
                <Image
                  src="/images/hero-img.png"
                  alt="Rulman"
                  width={300}
                  height={300}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      <SolutionsSection />
    </>
  );
};
