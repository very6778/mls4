"use client"

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const BlogSection = (): JSX.Element => {
  const headerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const featuredArticleRef = useRef<HTMLDivElement>(null);
  const rightArticlesRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Header section animation
    if (headerRef.current) {
      gsap.fromTo(headerRef.current,
        {
          opacity: 0,
          y: 50
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // Title animation
    if (titleRef.current) {
      gsap.fromTo(titleRef.current,
        {
          opacity: 0,
          x: -50
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // Description animation
    if (descriptionRef.current) {
      gsap.fromTo(descriptionRef.current,
        {
          opacity: 0,
          x: 50
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: descriptionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // Featured article animation
    if (featuredArticleRef.current) {
      gsap.fromTo(featuredArticleRef.current,
        {
          opacity: 0,
          x: -100,
          y: 30
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: featuredArticleRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // Right articles animation
    if (rightArticlesRef.current) {
      const articles = rightArticlesRef.current.querySelectorAll('.blog-article');
      
      articles.forEach((article, index) => {
        gsap.fromTo(article,
          {
            opacity: 0,
            x: 100,
            y: 30
          },
          {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 1,
            delay: index * 0.3,
            ease: "power2.out",
            scrollTrigger: {
              trigger: article,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
    }

    // Button animation
    if (buttonRef.current) {
      gsap.fromTo(buttonRef.current,
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
            trigger: buttonRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section id="blog" className="w-full min-h-screen bg-white flex items-center justify-center py-8 lg:py-12">
      <div className="w-full max-w-[1440px] flex flex-col gap-6 px-4 sm:px-6 lg:px-10 py-8 lg:py-[41px]">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row w-full justify-between items-start gap-6 lg:gap-0 mb-8">
          <h1 ref={titleRef} className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold text-[#2b2b2b] leading-tight lg:leading-[62px] tracking-[0%]" style={{fontFamily: 'Manrope, sans-serif'}}>
            Güncel Haberler ve Blog Yazılarımız
          </h1>
          <p ref={descriptionRef} className="text-[16px] lg:text-[18px] text-[#2b2b2b] leading-relaxed lg:leading-[23px] tracking-[0%] max-w-[379px] lg:ml-8 mt-2 lg:mt-0" style={{fontFamily: 'Manrope, sans-serif'}}>
            Sektörel gelişmeleri, yenilikçi ürünlerimizi ve şirketimizden haberleri buradan takip edebilirsiniz.
          </p>
        </div>

        {/* Blog Articles Section */}
        <div className="w-full flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Left Column - Featured Article + Button */}
          <div className="flex flex-col w-full lg:w-[650px] h-full lg:h-[868px]">
            {/* Featured Article */}
            <Link href="/blog/yuksek-verimlilik-v-kayislar" className="block group" prefetch={false}>
              <div ref={featuredArticleRef} className="w-full flex flex-col lg:flex-row gap-4 lg:gap-9 cursor-pointer">
              {/* Vertical Line */}
              <div className="hidden lg:block w-1 h-[547px] bg-[#f5f5f5] rounded-[19px]" style={{width: '4px'}}></div>
              {/* Article Content */}
              <div className="flex flex-col lg:flex-row gap-4 lg:gap-9 w-full">
                {/* Date */}
                <div className="w-full lg:w-[62px] flex flex-row lg:flex-col gap-2 lg:gap-1 items-center lg:items-start">
                  <span className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold text-[#C9A24B] leading-tight lg:leading-[62px] tracking-[0%]" style={{fontFamily: 'Manrope, sans-serif'}}>
                    12
                  </span>
                  <span className="text-[14px] lg:text-[18px] text-[#828282] leading-tight lg:leading-[26px] tracking-[0%]" style={{fontFamily: 'Manrope, sans-serif'}}>
                    Hzr 25
                  </span>
                </div>
                {/* Article */}
                <div className="w-full lg:w-[512px] flex flex-col gap-4 lg:gap-8">
                  {/* Article Image */}
                  <div className="w-full lg:w-[512px] h-[200px] sm:h-[250px] lg:h-[461px] bg-white rounded-[16px] overflow-hidden relative">
                    <Image
                      src="/images/blog1.webp"
                      alt="Blog Article"
                      width={512}
                      height={461}
                      className="w-full h-full object-cover"
                      priority
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  </div>
                  {/* Article Title */}
                  <h2 className="text-[18px] sm:text-[20px] lg:text-[24px] font-bold text-[#2b2b2b] leading-tight lg:leading-[28px] tracking-[0%]" style={{fontFamily: 'Manrope, sans-serif'}}>
                    Un Üretimi ve İhracatı Üzerine Küresel Perspektifler
                  </h2>
                  <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-[#4F4F4F] leading-relaxed lg:leading-[24px] tracking-[0%]" style={{fontFamily: 'Manrope, sans-serif'}}>
                    Küresel un tedarik zincirindeki stratejik eğilimleri ve büyüme fırsatlarını inceleyin.
                  </p>
                </div>
              </div>
            </div>
            </Link>
            {/* Spacer to push button down, but not all the way */}
            <div className="flex-grow" />
            {/* View All Button - Bottom aligned */}
            <div ref={buttonRef} className="w-full sm:w-[267px] h-[56px] sm:h-[64px] border-2 border-black rounded-[16px] flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 mt-6 lg:mt-0 -mt-8 cursor-pointer hover:bg-gray-50 transition-all duration-300 ease-in-out group">
              <span className="text-[16px] sm:text-[18px] font-bold text-[#2b2b2b] leading-tight sm:leading-[28px] tracking-[0%]" style={{fontFamily: 'Manrope, sans-serif'}}>
                Tümünü gör
              </span>
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#1c1c1c] rounded-[20px] sm:rounded-[24px] flex items-center justify-center transition-transform duration-300 ease-in-out group-hover:rotate-90">
                <svg width="16" height="16" className="sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
          {/* Right Column - Two Articles */}
          <div ref={rightArticlesRef} className="w-full lg:w-[545.24px] flex flex-col gap-6 lg:gap-10">
            {/* First Article */}
            <Link href="/blog/sustainability-decarburization" className="block group" prefetch={false}>
              <div className="blog-article w-full lg:w-[545.24px] flex flex-col lg:flex-row gap-4 lg:gap-[29.77px]">
                {/* Vertical Line */}
                <div className="hidden lg:block w-[3.31px] h-[414.3px] bg-[#f5f5f5] rounded-[15.71px]" style={{width: '3.31px'}}></div>
                {/* Article Content */}
                <div className="flex flex-col lg:flex-row gap-4 lg:gap-[29.77px] w-full">
                  {/* Date */}
                  <div className="w-full lg:w-[58px] flex flex-row lg:flex-col gap-2 lg:gap-[3.31px] items-center lg:items-start">
                    <span className="text-[28px] sm:text-[32px] lg:text-[40px] font-bold text-[#C9A24B] leading-tight lg:leading-[51px] tracking-[0%]" style={{fontFamily: 'Manrope, sans-serif'}}>
                      03
                    </span>
                    <span className="text-[12px] lg:text-[16px] text-[#828282] leading-tight lg:leading-[21px] tracking-[0%]" style={{fontFamily: 'Manrope, sans-serif'}}>
                      Hzr 25
                    </span>
                  </div>
                  {/* Article */}
                  <div className="w-full lg:w-[423.4px] flex flex-col gap-4 lg:gap-[25.64px]">
                    {/* Article Image */}
                    <div className="w-full lg:w-[423.4px] h-[180px] sm:h-[220px] lg:h-[267.1px] bg-white rounded-[13.23px] overflow-hidden relative">
                      <Image
                        src="/images/blog2.webp"
                        alt="Blog Article"
                        width={423}
                        height={267}
                        className="w-full h-full object-cover"
                        priority
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>
                    {/* Article Title */}
                    <h3 className="text-[16px] sm:text-[18px] lg:text-[20px] font-bold text-[#2b2b2b] leading-tight lg:leading-[25px] tracking-[0%]" style={{fontFamily: 'Manrope, sans-serif'}}>
                      Sürdürülebilirlik ve Karbonsuzlaştırma: Emtia Tüccarları İçin Nelerin İşe Yaradığı
                    </h3>
                  </div>
                </div>
              </div>
            </Link>
            {/* Second Article */}
            <Link href="/blog/ai-crop-forecasting" className="block group" prefetch={false}>
              <div className="blog-article w-full lg:w-[545.24px] flex flex-col lg:flex-row gap-4 lg:gap-[29.77px]">
                {/* Vertical Line */}
                <div className="hidden lg:block w-[3.31px] h-[414.3px] bg-[#f5f5f5] rounded-[15.71px]" style={{width: '3.31px'}}></div>
                {/* Article Content */}
                <div className="flex flex-col lg:flex-row gap-4 lg:gap-[29.77px] w-full">
                  {/* Date */}
                  <div className="w-full lg:w-[59px] flex flex-row lg:flex-col gap-2 lg:gap-[3.31px] items-center lg:items-start">
                    <span className="text-[28px] sm:text-[32px] lg:text-[40px] font-bold text-[#C9A24B] leading-tight lg:leading-[51px] tracking-[0%]" style={{fontFamily: 'Manrope, sans-serif'}}>
                      04
                    </span>
                    <span className="text-[12px] lg:text-[16px] text-[#828282] leading-tight lg:leading-[21px] tracking-[0%]" style={{fontFamily: 'Manrope, sans-serif'}}>
                      Hzr 25
                    </span>
                  </div>
                  {/* Article */}
                  <div className="w-full lg:w-[423.4px] flex flex-col gap-4 lg:gap-[25.64px]">
                    {/* Article Image */}
                    <div className="w-full lg:w-[423.4px] h-[180px] sm:h-[220px] lg:h-[267.1px] bg-white rounded-[13.23px] overflow-hidden relative">
                      <Image
                        src="/images/blog3.webp"
                        alt="Blog Article"
                        width={423}
                        height={267}
                        className="w-full h-full object-cover"
                        priority
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>
                    {/* Article Title */}
                    <h3 className="text-[16px] sm:text-[18px] lg:text-[20px] font-bold text-[#2b2b2b] leading-tight lg:leading-[25px] tracking-[0%]" style={{fontFamily: 'Manrope, sans-serif'}}>
                      İklim Değişkenliğini Yenmek: Yapay Zeka Mahsul Tahminini Nasıl Dönüştürüyor
                    </h3>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}; 