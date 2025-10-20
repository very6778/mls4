"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const WhyUsSection = (): JSX.Element => {
  const whyUsTitleRef = useRef<HTMLDivElement>(null);
  const whyUsCardsRef = useRef<HTMLDivElement>(null);
  const whyUsFirstRowRef = useRef<HTMLDivElement>(null);
  const whyUsSecondRowRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isTitleHidden, setIsTitleHidden] = useState(false);

  const whyUsCards = [
    {
      title: "Mühendislik Yetkinliği",
      description: "Uzman mühendis ekibimiz, ileri teknoloji üretim altyapımızla her projede özel ve hassas çözümler sunar.",
      image: "/images/new-images/silo.jpg",
      width: 800,
      height: 400,
    },
    {
      title: "Üstün Üretim Kalitesi",
      description: "Ürünlerimiz titizlikle üretilir ve global kalite standartlarına uygundur.",
      image: "/images/new-images/otomasyon.jpg",
      width: 484,
      height: 400,
    },
    {
      title: "Güvenli ve Şeffaf Ortaklık",
      description: "Her adımda şeffaf iletişimle güvene dayalı iş birlikleri kurarız.",
      image: "/images/new-images/image3.jpg",
      width: 484,
      height: 400,
    },
    {
      title: "Sürekli Gelişim ve Uyum Yeteneği",
      description: "Endüstrideki yeniliklere hızla uyum sağlarız. Ar-Ge yatırımlarımızla ürün yelpazemizi ve üretim süreçlerimizi geliştirerek sektördeki liderliğimizi sürdürürüz.",
      image: "/images/new-images/3afa3910-6a3a-447f-8682-2348ce147cb1.jpg",
      width: 800,
      height: 400,
    },
  ];

  useEffect(() => {
    if (typeof window === "undefined") return;
    
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        if (
          sectionRef.current &&
          whyUsTitleRef.current &&
          whyUsFirstRowRef.current &&
          whyUsSecondRowRef.current
        ) {
          const title = whyUsTitleRef.current;
          const titleText = title.querySelector("h1");
          const firstRowCards = whyUsFirstRowRef.current.querySelectorAll(".why-us-card");
          const secondRowCards = whyUsSecondRowRef.current.querySelectorAll(".why-us-card");

          // Dynamically import Splitting only on the client to avoid SSR "document is not defined"
          if (typeof window !== "undefined") {
            import("splitting").then(({ default: splitting }) => {
              try {
                splitting({ target: ".split-text" });
              } catch (_) {
                // no-op if splitting fails; animations still proceed
              }
            }).catch(() => {
              // ignore if dynamic import fails
            });
          }

          // Set initial states
          gsap.set(titleText, { xPercent: 100, opacity: 1 });
          gsap.set(firstRowCards[0], { x: -1200, y: 30 });
          gsap.set(firstRowCards[1], { x: 1200, y: 30 });
          gsap.set(secondRowCards[0], { x: -1200, y: 30 });
          gsap.set(secondRowCards[1], { x: 1200, y: 30 });

          // Create timeline with ScrollTrigger
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: "+=350%", // Extended for ~2–3 scrolls
              pin: true,
              pinSpacing: true,
              scrub: 1.5, // slightly smoother scrubbing across the longer distance
              anticipatePin: 1,
              fastScrollEnd: false,
              onUpdate: (self) => {
                // Hide title only after the exit animation is completely finished
                if (self.progress > 0.65 && !isTitleHidden) {
                  setIsTitleHidden(true);
                }
              }
            },
          });

          // Title slides from right to center (0-30% of timeline)
          tl.to(titleText, {
            xPercent: 0,
            duration: 2.0,
            ease: "power2.out",
          });
          
          // Title exits to the left completely (30-62% of timeline)
          tl.to(titleText, {
            xPercent: -120, // Go further left to ensure it's completely off-screen
            duration: 2.0,
            ease: "power2.inOut",
          }, "+=0.4");

          // First row cards appear after title fully exits (60-80% of timeline)
          tl.to(
            firstRowCards,
            {
              x: 0,
              y: 0,
              duration: 2.0,
              stagger: 0.18,
              ease: "power2.out",
            },
            "+=0.2"
          );

          // Second row cards (70-90% of timeline)
          tl.to(
            secondRowCards,
            {
              x: 0,
              y: 0,
              duration: 2.0,
              stagger: 0.18,
              ease: "power2.out",
            },
            "-=0.8"
          );
        }
      });

      // For mobile, show everything without complex animations
      mm.add("(max-width: 1023px)", () => {
        const title = whyUsTitleRef.current;
        const titleText = title?.querySelector("h1");
        const firstRowCards = whyUsFirstRowRef.current?.querySelectorAll(".why-us-card");
        const secondRowCards = whyUsSecondRowRef.current?.querySelectorAll(".why-us-card");

        // Set everything to visible positions
        if (titleText) gsap.set(titleText, { xPercent: 0, opacity: 1 });
        if (firstRowCards) gsap.set(firstRowCards, { x: 0, y: 0 });
        if (secondRowCards) gsap.set(secondRowCards, { x: 0, y: 0 });
        
        // Hide title after a short delay on mobile (slowed further)
        setTimeout(() => {
          setIsTitleHidden(true);
        }, 30000);
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [isTitleHidden]);

  return (
    <section ref={sectionRef} className="w-full min-h-screen relative overflow-hidden">
      <div ref={whyUsCardsRef} className="flex flex-col items-center justify-center gap-16 px-4 sm:px-6 lg:px-10 w-full h-screen bg-[#c9a24b14]">
        {!isTitleHidden && (
          <div ref={whyUsTitleRef} className="w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <h1
              className="split-text font-bold text-[64px] md:text-[72px] lg:text-[80px] xl:text-[122px] leading-tight tracking-[0%] text-[#2B2B2B] text-center"
              style={{
                fontFamily: "Manrope, sans-serif",
                textShadow: "0px 16px 32px rgba(12, 12, 13, 0.4)",
              }}
            >
              Neden biz?
            </h1>
          </div>
        )}

        <div className="w-full max-w-6xl mx-auto flex-1 flex flex-col justify-center">
          <div ref={whyUsFirstRowRef} className="grid grid-cols-1 lg:grid-cols-12 gap-4 h-auto lg:h-[350px] mb-4">
            <div className="why-us-card lg:col-span-8 col-span-1 relative rounded-3xl overflow-hidden shadow-lg h-[200px] sm:h-[240px] lg:h-auto">
              <Image className="w-full h-full object-cover" alt={whyUsCards[0].title} src={whyUsCards[0].image} width={whyUsCards[0].width} height={whyUsCards[0].height} priority />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4 lg:bottom-6 lg:left-6 text-white">
                <h3 className="text-lg lg:text-xl font-bold mb-1 lg:mb-2 drop-shadow-lg">{whyUsCards[0].title}</h3>
                <p className="text-sm lg:text-base opacity-90 max-w-lg drop-shadow">{whyUsCards[0].description}</p>
              </div>
            </div>

            <div className="why-us-card lg:col-span-4 col-span-1 relative rounded-3xl overflow-hidden shadow-lg h-[200px] sm:h-[240px] lg:h-auto">
              <Image className="w-full h-full object-cover" alt={whyUsCards[1].title} src={whyUsCards[1].image} width={whyUsCards[1].width} height={whyUsCards[1].height} priority />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
              <div className="absolute bottom-4 left-4 lg:bottom-6 lg:left-6 text-white">
                <h3 className="text-base lg:text-lg font-bold mb-1 lg:mb-2 drop-shadow-lg">{whyUsCards[1].title}</h3>
                <p className="text-xs lg:text-sm opacity-90 drop-shadow">{whyUsCards[1].description}</p>
              </div>
            </div>
          </div>

          <div ref={whyUsSecondRowRef} className="grid grid-cols-1 lg:grid-cols-12 gap-4 h-auto lg:h-[350px]">
            <div className="why-us-card lg:col-span-4 col-span-1 relative rounded-3xl overflow-hidden shadow-lg h-[200px] sm:h-[240px] lg:h-auto">
              <Image className="w-full h-full object-cover" alt={whyUsCards[2].title} src={whyUsCards[2].image} width={whyUsCards[2].width} height={whyUsCards[2].height} priority />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
              <div className="absolute bottom-4 left-4 lg:bottom-6 lg:left-6 text-white">
                <h3 className="text-base lg:text-lg font-bold mb-1 lg:mb-2 drop-shadow-lg">{whyUsCards[2].title}</h3>
                <p className="text-xs lg:text-sm opacity-90 drop-shadow">{whyUsCards[2].description}</p>
              </div>
            </div>

            <div className="why-us-card lg:col-span-8 col-span-1 relative rounded-3xl overflow-hidden shadow-lg h-[200px] sm:h-[240px] lg:h-auto">
              <Image className="w-full h-full object-cover" alt={whyUsCards[3].title} src={whyUsCards[3].image} width={whyUsCards[3].width} height={whyUsCards[3].height} priority />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
              <div className="absolute bottom-4 left-4 lg:bottom-6 lg:left-6 text-white">
                <h3 className="text-lg lg:text-xl font-bold mb-1 lg:mb-2 drop-shadow-lg">{whyUsCards[3].title}</h3>
                <p className="text-sm lg:text-base opacity-90 max-w-lg drop-shadow">{whyUsCards[3].description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};