"use client"

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const ProductShowcaseSection = (): JSX.Element => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const firstRowRef = useRef<HTMLDivElement>(null);
  const secondRowRef = useRef<HTMLDivElement>(null);
  const productSectionRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = React.useState(false);
  const t = useTranslations("ProductShowcase");

  React.useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    // Check if we're on desktop (large screens)
    const isDesktop = window.innerWidth >= 1024;
    
    if (isDesktop && productSectionRef.current) {
      // Desktop: Complex ScrollTrigger animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: productSectionRef.current,
          start: "top top",
          end: "+=150%",
          pin: true,
          pinSpacing: true,
          scrub: 1
        }
      });

      // Step 1: First row cards
      if (firstRowRef.current) {
        const cards = firstRowRef.current.querySelectorAll('.product-card');
        tl.fromTo(cards[0],
          { x: -1000 },
          { x: 0, duration: 1.2, ease: "power2.out" }
        );
        tl.fromTo(cards[1],
          { x: 1000 },
          { x: 0, duration: 1.2, ease: "power2.out" },
          "-=0.8"
        );
      }

      // Step 2: Second row cards
      if (secondRowRef.current) {
        const cards = secondRowRef.current.querySelectorAll('.product-card');
        tl.fromTo(cards[0],
          { x: -1000 },
          { x: 0, duration: 1.2, ease: "power2.out" },
          "+=0.8"
        );
        tl.fromTo(cards[1],
          { x: 1000 },
          { x: 0, duration: 1.2, ease: "power2.out" },
          "-=0.8"
        );
      }
    } else {
      // Mobile/Tablet: Simple animations without ScrollTrigger
      if (firstRowRef.current) {
        const cards = firstRowRef.current.querySelectorAll('.product-card');
        cards.forEach((card, index) => {
          gsap.fromTo(card,
            { x: index === 0 ? -50 : 50 },
            { x: 0, duration: 0.8, ease: "power2.out", delay: index * 0.2 }
          );
        });
      }

      if (secondRowRef.current) {
        const cards = secondRowRef.current.querySelectorAll('.product-card');
        cards.forEach((card, index) => {
          gsap.fromTo(card,
            { x: index === 0 ? -50 : 50 },
            { x: 0, duration: 0.8, ease: "power2.out", delay: (index + 2) * 0.2 }
          );
        });
      }
    }

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Product cards data
  const productCards = [
    {
      title: t("cards.silos.title"),
      subtitle: t("cards.silos.subtitle"),
      bgClass: "bg-[linear-gradient(269deg,rgba(250,142,155,1)_0%,rgba(243,64,83,1)_100%)]",
      textColor: "text-white",
      subtitleColor: "text-[#ffffff59]",
      image: "/images/silo2.webp",
      imageWidth: 298,
      imageHeight: 298,
      imageWrapperClass: "absolute right-0 bottom-0 flex items-end justify-end p-2 lg:p-4",
      imageClass: "product-image-smaller w-auto max-h-full max-w-[65%] lg:max-w-[55%] object-contain translate-y-2 lg:translate-y-4 translate-x-2 lg:translate-x-4 scale-[1.4]",
      alt: t("cards.silos.alt"),
      desktopStyle: {
        width: "auto",
        height: "auto",
        maxWidth: "360px",
        maxHeight: "100%",
        opacity: 1
      }
    },
    {
      title: t("cards.mills.title"),
      subtitle: t("cards.mills.subtitle"),
      bgClass: "bg-white border border-solid border-[#0000000a]",
      textColor: "text-app-primary",
      subtitleColor: "text-gray-4",
      image: "/images/degirmen2.webp",
      imageWidth: 222,
      imageHeight: 266,
      imageWrapperClass: "absolute right-[58px] lg:right-[76px] top-1/2 transform -translate-y-1/2",
      imageClass: "product-image-smaller w-auto max-h-full object-contain transform scale-[1.8] translate-y-[20px]",
      alt: t("cards.mills.alt"),
      desktopStyle: {
        width: "222px",
        height: "266px",
        opacity: 1
      }
    },
    {
      title: t("cards.spares.title"),
      subtitle: t("cards.spares.subtitle"),
      bgClass: "bg-white border border-solid border-[#00000012]",
      textColor: "text-app-primary",
      subtitleColor: "text-gray-4",
      imageWrapperClass: "absolute right-2 lg:right-4 bottom-2 lg:bottom-4 flex items-end justify-end gap-3 lg:gap-4",
      images: [
        {
          src: "/images/yedek2.webp",
          alt: t("cards.spares.images.left"),
          width: 200,
          height: 220,
          className: "w-[110px] md:w-[140px] lg:w-[165px] xl:w-[190px] scale-50 lg:scale-50 -translate-x-20 lg:-translate-x-28"
        },
        {
          src: "/images/yedek3.webp",
          alt: t("cards.spares.images.center"),
          width: 200,
          height: 220,
          className: "w-[110px] md:w-[140px] lg:w-[165px] xl:w-[190px] scale-50 lg:scale-50 -translate-y-[130px] lg:-translate-y-[130px]"
        },
        {
          src: "/images/yedek1.webp",
          alt: t("cards.spares.images.right"),
          width: 200,
          height: 220,
          className: "w-[110px] md:w-[140px] lg:w-[165px] xl:w-[190px] translate-x-4 lg:translate-x-6 -translate-y-[10px] lg:-translate-y-[10px] scale-[1.1] lg:scale-[1.1]"
        }
      ],
      alt: t("cards.spares.alt")
    },
    {
      title: t("cards.additives.title"),
      subtitle: t("cards.additives.subtitle"),
      bgClass: "bg-[linear-gradient(269deg,rgba(194,225,255,1)_0%,rgba(31,111,191,1)_100%)]",
      textColor: "text-white",
      subtitleColor: "text-[#ffffff59]",
      image: "/images/unkatkı2.webp",
      imageWidth: 367,
      imageHeight: 264,
      imageClass: "product-image-smaller w-auto h-[45%] md:h-[35%] lg:h-[28%] xl:h-[30%] max-w-[150px] lg:max-w-[180px] xl:max-w-[300px] object-contain -translate-x-3 lg:-translate-x-4",
      alt: t("cards.additives.alt"),
      desktopStyle: {
        width: "366.93px",
        height: "264.22px",
        opacity: 1
      }
    },
  ];

  return (
    <section className="flex flex-col w-full justify-center items-center min-h-screen">
      {/* Product Showcase */}
      <div ref={productSectionRef} className="flex flex-col items-start relative w-full">
                 <div className="flex flex-col w-full items-center justify-center gap-4 lg:gap-6 xl:gap-8 px-6 lg:px-10 py-8 lg:py-16 bg-[#fbf8f1]">
                     <div className="flex-col items-center gap-4 w-full flex relative">
            <h1 className="relative w-full font-bold text-[28px] md:text-[40px] lg:text-[48px] xl:text-[56px] leading-tight lg:leading-[61.6px] tracking-[0%] text-[#2B2B2B] text-center" style={{fontFamily: 'Manrope, sans-serif', textShadow: '0px 16px 32px rgba(12, 12, 13, 0.4)'}}>
              {t("title")}
            </h1>
          </div>
          <div ref={cardsRef} className="flex flex-col gap-4 lg:gap-6 relative w-full max-w-6xl xl:max-w-7xl mx-auto">
                         <div ref={firstRowRef} className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 w-full">
               {productCards.slice(0, 2).map((card, index) => (
                 <Card key={index} className="product-card h-[30vh] md:h-[40vh] lg:h-[32vh] xl:h-[35vh] rounded-2xl lg:rounded-3xl overflow-hidden p-0 shadow-lg">
                  <CardContent className={`p-0 h-full ${card.bgClass} relative flex`}>
                    <div className="flex flex-col justify-between p-4 lg:p-6 flex-1 z-10">
                      <div className="space-y-3 lg:space-y-4">
                        <div className={`product-text-small text-sm lg:text-base xl:text-lg font-medium leading-relaxed ${card.textColor} max-w-[200px] lg:max-w-[240px] xl:max-w-[280px]`}>
                          {card.title}
                        </div>
                        <div className={`product-subtitle-smaller text-2xl lg:text-3xl xl:text-4xl font-bold ${card.subtitleColor} whitespace-pre-line leading-tight`}>
                          {card.subtitle}
                        </div>
                      </div>
                      <Button variant="ghost" className={`product-cta-smaller self-start flex items-center gap-2 p-0 h-auto font-bold text-lg lg:text-xl xl:text-2xl leading-[26.4px] tracking-[0%] transition-all duration-300 ease-in-out group hover:translate-x-2 hover:bg-transparent ${card.textColor === 'text-white' ? 'text-white hover:text-white' : 'text-gray-800 hover:text-gray-800'}`} style={{fontFamily: 'Manrope, sans-serif'}}>
                        <span className="w-5 h-5 lg:w-6 lg:h-6 rounded-full bg-current flex items-center justify-center transition-transform duration-300 ease-in-out group-hover:rotate-90">
                          <svg className="w-3 h-3 lg:w-4 lg:h-4 transform -rotate-[30deg] transition-transform duration-300 ease-in-out group-hover:rotate-0" viewBox="0 0 24 24" fill="none" stroke={card.textColor === 'text-white' ? 'black' : 'white'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M7 17L17 7M17 7H7M17 7V17"/>
                          </svg>
                        </span>
                        {t("cta")}
                      </Button>
                    </div>
                    <div className={card.imageWrapperClass ?? "absolute right-4 lg:right-6 top-1/2 transform -translate-y-1/2"}>
                      {card.images ? (
                        card.images.map((img) => (
                          <Image
                            key={img.src}
                            className={`${card.imageClass ?? "product-image-smaller w-auto h-[45%] md:h-[35%] lg:h-[28%] xl:h-[30%] max-w-[150px] lg:max-w-[180px] xl:max-w-[300px] object-contain transform scale-x-[-1]"} ${img.className ?? ""}`.trim()}
                            alt={img.alt ?? card.alt}
                            src={img.src}
                            width={img.width ?? card.imageWidth}
                            height={img.height ?? card.imageHeight}
                            quality={100}
                          />
                        ))
                      ) : (
                        <Image
                          className={card.imageClass ?? "product-image-smaller w-auto h-[45%] md:h-[35%] lg:h-[28%] xl:h-[30%] max-w-[150px] lg:max-w-[180px] xl:max-w-[300px] object-contain transform scale-x-[-1]"}
                          style={{
                            ...(isDesktop && card.desktopStyle ? card.desktopStyle : {})
                          }}
                          alt={card.alt}
                          src={card.image}
                          width={card.imageWidth}
                          height={card.imageHeight}
                          quality={100}
                        />
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
                         <div ref={secondRowRef} className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 w-full">
               {productCards.slice(2, 4).map((card, index) => (
                 <Card key={index} className="product-card h-[30vh] md:h-[40vh] lg:h-[32vh] xl:h-[35vh] rounded-2xl lg:rounded-3xl overflow-hidden p-0 shadow-lg">
                  <CardContent className={`p-0 h-full ${card.bgClass} relative flex`}>
                    <div className="flex flex-col justify-between p-4 lg:p-6 flex-1 z-10">
                      <div className="space-y-3 lg:space-y-4">
                        <div className={`product-text-small text-sm lg:text-base xl:text-lg font-medium leading-relaxed ${card.textColor} max-w-[200px] lg:max-w-[240px] xl:max-w-[280px]`}>
                          {card.title}
                        </div>
                        <div className={`product-subtitle-smaller text-2xl lg:text-3xl xl:text-4xl font-bold ${card.subtitleColor} whitespace-pre-line leading-tight`}>
                          {card.subtitle}
                        </div>
                      </div>
                      <Button variant="ghost" className={`product-cta-smaller self-start flex items-center gap-2 p-0 h-auto font-bold text-lg lg:text-xl xl:text-2xl leading-[26.4px] tracking-[0%] transition-all duration-300 ease-in-out group hover:translate-x-2 hover:bg-transparent ${card.textColor === 'text-white' ? 'text-white hover:text-white' : 'text-gray-800 hover:text-gray-800'}`} style={{fontFamily: 'Manrope, sans-serif'}}>
                        <span className="w-5 h-5 lg:w-6 lg:h-6 rounded-full bg-current flex items-center justify-center transition-transform duration-300 ease-in-out group-hover:rotate-90">
                          <svg className="w-3 h-3 lg:w-4 lg:h-4 transform -rotate-[30deg] transition-transform duration-300 ease-in-out group-hover:rotate-0" viewBox="0 0 24 24" fill="none" stroke={card.textColor === 'text-white' ? 'black' : 'white'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M7 17L17 7M17 7H7M17 7V17"/>
                          </svg>
                        </span>
                        {t("cta")}
                      </Button>
                    </div>
                    <div className={card.imageWrapperClass ?? "absolute right-4 lg:right-6 top-1/2 transform -translate-y-1/2"}>
                      {card.images ? (
                        card.images.map((img) => (
                          <Image
                            key={img.src}
                            className={`${card.imageClass ?? "product-image-smaller w-auto h-[45%] md:h-[35%] lg:h-[28%] xl:h-[30%] max-w-[150px] lg:max-w-[180px] xl:max-w-[300px] object-contain transform scale-x-[-1]"} ${img.className ?? ""}`.trim()}
                            alt={img.alt ?? card.alt}
                            src={img.src}
                            width={img.width ?? card.imageWidth}
                            height={img.height ?? card.imageHeight}
                            quality={100}
                          />
                        ))
                      ) : (
                        <Image
                          className={card.imageClass ?? "product-image-smaller w-auto h-[45%] md:h-[35%] lg:h-[28%] xl:h-[30%] max-w-[150px] lg:max-w-[180px] xl:max-w-[300px] object-contain transform scale-x-[-1]"}
                          style={{
                            ...(isDesktop && card.desktopStyle ? card.desktopStyle : {})
                          }}
                          alt={card.alt}
                          src={card.image}
                          width={card.imageWidth}
                          height={card.imageHeight}
                          quality={100}
                        />
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};