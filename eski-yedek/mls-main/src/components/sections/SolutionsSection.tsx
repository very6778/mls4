"use client"

import React from "react";
import Image from "next/image";

export const SolutionsSection = (): JSX.Element => {
  return (
    <section className="w-full bg-white flex items-center mb-8 justify-center">
      <div className="w-full max-w-[1440px] flex flex-col gap-6 px-10">
        {/* Title Section */}
        <div className="w-full flex justify-center">
          <h2 className="text-[24px] md:text-[32px] lg:text-[40px] xl:text-[48px] font-bold text-[#2b2b2b] leading-tight md:leading-[62px] tracking-[0%] text-center max-w-[1075px] px-4" 
              style={{fontFamily: 'Manrope, sans-serif'}}>
            Endüstriyel Çözümlerle Geleceği İnşa Ediyoruz
          </h2>
        </div>

        {/* Image Frames Row */}
        <div className="w-full flex justify-center">
          <div className="flex gap-4 max-w-[1075px]">
            {/* Frame 1 */}
            <div className="w-20 h-20 bg-white rounded-[6.67px] shadow-[0_2.22px_9.1px_rgba(0,0,0,0.09)] flex items-center justify-center flex-shrink-0">
              <div className="w-[73.33px] h-[84.68px] relative ">
                <Image
                  src="/images/ref-images/AS-TON-Logo-kopya.jpg"
                  alt="Partner Logo"
                  width={73}
                  height={85}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Frame 2 */}
            <div className="w-20 h-20 bg-white rounded-[6.67px] shadow-[0_2.22px_9.1px_rgba(0,0,0,0.09)] flex items-center justify-center flex-shrink-0">
              <div className="w-[73.33px] h-[84.68px] relative ">
                <Image
                  src="/images/ref-images/6-2f22325-ac24a76.png"
                  alt="Partner Logo"
                  width={73}
                  height={85}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Frame 3 */}
            <div className="w-20 h-20 bg-white rounded-[6.67px] shadow-[0_2.22px_9.1px_rgba(0,0,0,0.09)] flex items-center justify-center flex-shrink-0">
              <div className="w-[73.33px] h-[84.68px] relative">
                <Image
                  src="/images/ref-images/logo-2.png"
                  alt="Partner Logo"
                  width={73}
                  height={85}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Frame 4 - Hidden on mobile */}
            <div className="hidden md:flex w-20 h-20 bg-white rounded-[6.67px] shadow-[0_2.22px_9.1px_rgba(0,0,0,0.09)] items-center justify-center flex-shrink-0">
              <div className="w-[73.33px] h-[84.68px] relative">
                <Image
                  src="/images/ref-images/cey.png"
                  alt="Partner Logo"
                  width={73}
                  height={85}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Frame 5 - Hidden on mobile */}
            <div className="hidden md:flex w-20 h-20 bg-white rounded-[6.67px] shadow-[0_2.22px_9.1px_rgba(0,0,0,0.09)] items-center justify-center flex-shrink-0">
              <div className="w-[73.33px] h-[84.68px] relative">
                <Image
                  src="/images/ref-images/logo-aag.svg"
                  alt="Partner Logo"
                  width={73}
                  height={85}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Frame 6 - Hidden on mobile */}
            <div className="hidden md:flex w-20 h-20 bg-white rounded-[6.67px] shadow-[0_2.22px_9.1px_rgba(0,0,0,0.09)] items-center justify-center flex-shrink-0">
              <div className="w-[73.33px] h-[84.68px] relative">
                <Image
                  src="/images/ref-images/besler-agro.svg"
                  alt="Partner Logo"
                  width={73}
                  height={85}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Frame 7 - Hidden on mobile */}
            <div className="hidden md:flex w-20 h-20 bg-white rounded-[6.67px] shadow-[0_2.22px_9.1px_rgba(0,0,0,0.09)] items-center justify-center flex-shrink-0">
              <div className="w-[73.33px] h-[84.68px] relative">
                <Image
                  src="/images/ref-images/milano_logo.svg"
                  alt="Partner Logo"
                  width={73}
                  height={85}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Frame 8 - Hidden on mobile */}
            <div className="hidden md:flex w-20 h-20 bg-white rounded-[6.67px] shadow-[0_2.22px_9.1px_rgba(0,0,0,0.09)] items-center justify-center flex-shrink-0">
              <div className="w-[73.33px] h-[84.68px] relative ">
                <Image
                  src="/images/ref-images/logo.png"
                  alt="Partner Logo"
                  width={73}
                  height={85}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Frame 9 - Hidden on mobile */}
            <div className="hidden md:flex w-20 h-20 bg-white rounded-[6.67px] shadow-[0_2.22px_9.1px_rgba(0,0,0,0.09)] items-center justify-center flex-shrink-0">
              <div className="w-[73.33px] h-[84.68px] relative ">
                <Image
                  src="/images/ref-images/Yamansel-Lojistik-1-e1736765232155.png"
                  alt="Partner Logo"
                  width={73}
                  height={85}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Frame 10 - Hidden on mobile */}
            <div className="hidden md:flex w-20 h-20 bg-white rounded-[6.67px] shadow-[0_2.22px_9.1px_rgba(0,0,0,0.09)] items-center justify-center flex-shrink-0">
              <div className="w-[73.33px] h-[84.68px] relative ">
                <Image
                  src="/images/ref-images/Dm-restore-e1729496116343.png"
                  alt="Partner Logo"
                  width={73}
                  height={85}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 