"use client"

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export const SolutionsSection = (): JSX.Element => {
  const t = useTranslations("Solutions");
  return (
    <section className="w-full bg-white flex items-center mb-8 justify-center">
      <div className="w-full max-w-[1440px] flex flex-col gap-6 px-10">
        {/* Title Section */}
        <div className="w-full flex justify-center">
          <h2 className="text-[24px] md:text-[32px] lg:text-[40px] xl:text-[48px] font-bold text-[#2b2b2b] leading-tight md:leading-[62px] tracking-[0%] text-center max-w-[1075px] px-4" 
              style={{fontFamily: 'Manrope, sans-serif'}}>
            {t("title")}
          </h2>
        </div>

        {/* Image Frames Row */}
        <div className="w-full flex justify-center">
          <div className="flex gap-4 max-w-[1075px]">
            {/* Frame 1 */}
            <div className="w-20 h-20 bg-white rounded-[6.67px] shadow-[0_2.22px_9.1px_rgba(0,0,0,0.09)] flex items-center justify-center flex-shrink-0">
              <div className="w-[73.33px] h-[84.68px] relative ">
                <Image
                  src="/images/logos/bakeground-logo.png"
                  alt="Bakeground logosu"
                  width={80}
                  height={80}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Frame 2 */}
            <div className="w-20 h-20 bg-white rounded-[6.67px] shadow-[0_2.22px_9.1px_rgba(0,0,0,0.09)] flex items-center justify-center flex-shrink-0">
              <div className="w-[73.33px] h-[84.68px] relative ">
                <Image
                  src="/images/logos/bastak-logo.jpg"
                  alt="Bastak logosu"
                  width={80}
                  height={80}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Frame 3 */}
            <div className="w-20 h-20 bg-white rounded-[6.67px] shadow-[0_2.22px_9.1px_rgba(0,0,0,0.09)] flex items-center justify-center flex-shrink-0">
              <div className="w-[73.33px] h-[84.68px] relative">
                <Image
                  src="/images/logos/blue-logo.png"
                  alt="Blue logosu"
                  width={80}
                  height={80}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Frame 4 - Hidden on mobile */}
            <div className="hidden md:flex w-20 h-20 bg-white rounded-[6.67px] shadow-[0_2.22px_9.1px_rgba(0,0,0,0.09)] items-center justify-center flex-shrink-0">
              <div className="w-[73.33px] h-[84.68px] relative">
                <Image
                  src="/images/logos/drm-logo.png"
                  alt="DRM logosu"
                  width={80}
                  height={80}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Frame 5 - Hidden on mobile */}
            <div className="hidden md:flex w-20 h-20 bg-white rounded-[6.67px] shadow-[0_2.22px_9.1px_rgba(0,0,0,0.09)] items-center justify-center flex-shrink-0">
              <div className="w-[73.33px] h-[84.68px] relative">
                <Image
                  src="/images/logos/ferzaym-logo.svg"
                  alt="Ferzaym logosu"
                  width={80}
                  height={80}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Frame 6 - Hidden on mobile */}
            <div className="hidden md:flex w-20 h-20 bg-white rounded-[6.67px] shadow-[0_2.22px_9.1px_rgba(0,0,0,0.09)] items-center justify-center flex-shrink-0">
              <div className="w-[73.33px] h-[84.68px] relative">
                <Image
                  src="/images/logos/karmill-logo.png"
                  alt="Karmill logosu"
                  width={80}
                  height={80}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Frame 7 - Hidden on mobile */}
            <div className="hidden md:flex w-20 h-20 bg-white rounded-[6.67px] shadow-[0_2.22px_9.1px_rgba(0,0,0,0.09)] items-center justify-center flex-shrink-0">
              <div className="w-[73.33px] h-[84.68px] relative">
                <Image
                  src="/images/logos/milano-logo.png"
                  alt="Milano logosu"
                  width={80}
                  height={80}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Frame 8 - Hidden on mobile */}
            <div className="hidden md:flex w-20 h-20 bg-white rounded-[6.67px] shadow-[0_2.22px_9.1px_rgba(0,0,0,0.09)] items-center justify-center flex-shrink-0">
              <div className="w-[73.33px] h-[84.68px] relative ">
                <Image
                  src="/images/logos/saar-logo.png"
                  alt="Saar logosu"
                  width={80}
                  height={80}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Frame 9 - Hidden on mobile */}
            <div className="hidden md:flex w-20 h-20 bg-white rounded-[6.67px] shadow-[0_2.22px_9.1px_rgba(0,0,0,0.09)] items-center justify-center flex-shrink-0">
              <div className="w-[73.33px] h-[84.68px] relative ">
                <Image
                  src="/images/logos/scf-logo.svg"
                  alt="SCF logosu"
                  width={80}
                  height={80}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Frame 10 - Hidden on mobile */}
            <div className="hidden md:flex w-20 h-20 bg-white rounded-[6.67px] shadow-[0_2.22px_9.1px_rgba(0,0,0,0.09)] items-center justify-center flex-shrink-0">
              <div className="w-[73.33px] h-[84.68px] relative ">
                <Image
                  src="/images/logos/yamansel-logo.png"
                  alt="Yamansel logosu"
                  width={80}
                  height={80}
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