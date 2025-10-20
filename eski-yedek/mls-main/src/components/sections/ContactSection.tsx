"use client"

import React, { useState } from "react";
import { Phone, Mail } from "lucide-react";

export const ContactSection = (): JSX.Element => {
  const [isClicked, setIsClicked] = useState(false);

  const handleSubmit = () => {
    setIsClicked(true);
    // Reset after animation completes
    setTimeout(() => {
      setIsClicked(false);
    }, 2000);
  };

  return (
    <section className="w-full min-h-[679px] bg-white flex items-center justify-center py-8 lg:py-0">
      <div className="w-full max-w-[1440px] h-auto flex flex-col lg:flex-row gap-8 lg:gap-[178px] px-6 lg:px-10 py-8 lg:py-[40px]">
        {/* Left Side - Content */}
        <div className="w-full lg:w-[716px] h-auto flex flex-col gap-6 lg:gap-3">
          {/* Title */}
          <div className="w-full h-auto">
            <h1 className="text-[16px] lg:text-[22px] font-bold text-[#2b2b2b] leading-[20px] lg:leading-[27px] tracking-[0%]" style={{fontFamily: 'Manrope, sans-serif'}}>
              Size Yardımcı Olmamızı İster misiniz?
            </h1>
          </div>

          {/* Subtitle */}
          <div className="w-full h-auto">
            <h2 className="text-[24px] lg:text-[48px] font-bold leading-[30px] lg:leading-[62px] tracking-[0%] text-[#2b2b2b]" style={{fontFamily: 'Manrope, sans-serif'}}>
              <span style={{color: 'rgba(201, 162, 75, 1)'}}>Endüstriyel</span> Çözüm İhtiyacınız için Bizimle İletişime Geçin
            </h2>
          </div>

          {/* Sub-description */}
          <div className="w-full h-auto">
            <p className="text-[14px] lg:text-[18px] font-bold text-[#4F4F4F] leading-[20px] lg:leading-[23px] tracking-[0%]" style={{fontFamily: 'Manrope, sans-serif'}}>
              Yüksek kaliteli ürün ve sistem çözümlerimiz hakkında detaylı bilgi almak ister misiniz? Formu doldurun, size ulaşalım.
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-3">
            {/* Email Contact */}
            <div className="flex items-center gap-4 lg:gap-6">
              {/* Email Icon */}
              <div className="w-[40px] h-[40px] lg:w-[56px] lg:h-[56px] flex items-center justify-center">
                <Mail className="w-8 h-6 lg:w-[42px] lg:h-[33px]" color="#C9A24B" />
              </div>
              
              {/* Email Text */}
              <div className="flex flex-col gap-2 lg:gap-3">
                <span className="text-[14px] lg:text-[16px] text-[#828282] leading-[18px] lg:leading-[20px] tracking-[0%]" style={{fontFamily: 'Manrope, sans-serif'}}>
                  Eposta
                </span>
                <span className="text-[14px] lg:text-[16px] font-bold text-[#2b2b2b] leading-[18px] lg:leading-[20px] tracking-[0%]" style={{fontFamily: 'Manrope, sans-serif'}}>
                  info@millersan.com
                </span>
              </div>
            </div>

            {/* Phone Contact */}
            <div className="flex items-center gap-4 lg:gap-6">
              {/* Phone Icon */}
              <div className="w-[40px] h-[40px] lg:w-[56px] lg:h-[56px] flex items-center justify-center">
                <Phone className="w-8 h-8 lg:w-[42px] lg:h-[42px]" color="#C9A24B" />
              </div>
              
              {/* Phone Text */}
              <div className="flex flex-col gap-2 lg:gap-3">
                <span className="text-[14px] lg:text-[16px] text-[#828282] leading-[18px] lg:leading-[20px] tracking-[0%]" style={{fontFamily: 'Manrope, sans-serif'}}>
                  Telefon
                </span>
                <span className="text-[14px] lg:text-[16px] font-bold text-[#2b2b2b] leading-[18px] lg:leading-[20px] tracking-[0%]" style={{fontFamily: 'Manrope, sans-serif'}}>
                  0541234567
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="w-full lg:w-[604px] h-auto bg-white border border-[#f5f5f5] rounded-[20px] lg:rounded-[32px] p-4 lg:p-8"
          style={{
            boxShadow: '0px 12px 24px -4px rgba(145, 158, 171, 0.12), 0px 0px 2px 0px rgba(145, 158, 171, 0.2)'
          }}
        >
          <div className="w-full h-auto flex flex-col gap-4 lg:gap-5">
            {/* Name Field */}
            <div className="flex flex-col gap-1 lg:gap-1.5">
              <label className="text-[16px] lg:text-[18px] font-bold text-[#4F4F4F] leading-[22px] lg:leading-[26px] tracking-[0%]" style={{fontFamily: 'Manrope, sans-serif'}}>
                Ad Soyad
              </label>
              <input 
                type="text" 
                placeholder="Ahmet Şanlı"
                className="w-full h-[40px] lg:h-[42px] bg-[#f5f5f5] border border-[#e6e8ec] rounded-[10px] lg:rounded-[12px] px-[16px] lg:px-[18px] text-[13px] lg:text-[14px] font-bold text-[#bdbdbd] leading-[13px] lg:leading-[14px] tracking-[0%]"
                style={{fontFamily: 'Manrope, sans-serif'}}
              />
            </div>

            {/* Email Field */}
            <div className="flex flex-col gap-1 lg:gap-1.5">
              <label className="text-[16px] lg:text-[18px] font-bold text-[#4F4F4F] leading-[22px] lg:leading-[26px] tracking-[0%]" style={{fontFamily: 'Manrope, sans-serif'}}>
                E-posta
              </label>
              <input 
                type="email" 
                placeholder="ahmet@gmail.com"
                className="w-full h-[40px] lg:h-[42px] bg-[#f5f5f5] border border-[#e6e8ec] rounded-[10px] lg:rounded-[12px] px-[16px] lg:px-[18px] text-[13px] lg:text-[14px] font-bold text-[#bdbdbd] leading-[13px] lg:leading-[14px] tracking-[0%]"
                style={{fontFamily: 'Manrope, sans-serif'}}
              />
            </div>

            {/* Industry Field */}
            <div className="flex flex-col gap-1 lg:gap-1.5">
              <label className="text-[16px] lg:text-[18px] font-bold text-[#4F4F4F] leading-[22px] lg:leading-[26px] tracking-[0%]" style={{fontFamily: 'Manrope, sans-serif'}}>
                Endüstri
              </label>
              <input 
                type="text" 
                placeholder=""
                className="w-full h-[40px] lg:h-[42px] bg-[#f5f5f5] border border-[#e6e8ec] rounded-[10px] lg:rounded-[12px] px-[16px] lg:px-[18px] text-[13px] lg:text-[14px] font-bold text-[#bdbdbd] leading-[13px] lg:leading-[14px] tracking-[0%]"
                style={{fontFamily: 'Manrope, sans-serif'}}
              />
            </div>

            {/* Message Field */}
            <div className="flex flex-col gap-1 lg:gap-1.5">
              <label className="text-[16px] lg:text-[18px] font-bold text-[#4F4F4F] leading-[22px] lg:leading-[26px] tracking-[0%]" style={{fontFamily: 'Manrope, sans-serif'}}>
                Mesajınız
              </label>
              <textarea 
                placeholder="İletinizi yazabilirsiniz"
                className="w-full h-[120px] lg:h-[149px] bg-[#f5f5f5] border border-[#e6e8ec] rounded-[10px] lg:rounded-[12px] px-[16px] lg:px-[18px] py-2 lg:py-3 text-[13px] lg:text-[14px] font-bold text-[#bdbdbd] leading-[13px] lg:leading-[14px] tracking-[0%] resize-none"
                style={{fontFamily: 'Manrope, sans-serif'}}
              />
            </div>

            {/* Submit Button */}
            <button 
              onClick={handleSubmit}
              className={`w-[140px] lg:w-[160px] h-[48px] lg:h-[52px] bg-gradient-to-r from-[#efd487] to-[#90654a] rounded-[60px] lg:rounded-[67px] flex items-center gap-3 lg:gap-3 px-3 lg:px-4 transition-all duration-500 ease-in-out relative overflow-hidden ${
                isClicked ? 'scale-105 shadow-lg' : 'hover:translate-x-2 hover:shadow-lg'
              }`}
              style={{
                background: 'linear-gradient(269deg, rgba(239, 212, 135, 1) 0%, rgba(144, 101, 74, 1) 100%)'
              }}
            >
              {/* Icon Container - Slides to right */}
              <div className={`w-[40px] h-[40px] bg-white rounded-[32px] flex items-center justify-center transition-all duration-500 ease-in-out ${
                isClicked ? 'translate-x-[80px] lg:translate-x-[100px]' : 'translate-x-0'
              }`}>
                {/* Arrow Icon */}
                <svg className={`w-5 h-5 transition-all duration-500 ease-in-out ${
                  isClicked ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                }`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.75 12H20.25M13.5 5.25L20.25 12L13.5 18.75" stroke="#C9A24B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                
                {/* Checkmark Icon */}
                <svg className={`w-5 h-5 transition-all duration-500 ease-in-out absolute ${
                  isClicked ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                }`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L9 17L4 12" stroke="#C9A24B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              
              {/* Text Container - Slides to left */}
              <div className={`flex-1 transition-all duration-500 ease-in-out ${
                isClicked ? 'translate-x-[-80px] lg:translate-x-[-100px]' : 'translate-x-0'
              }`}>
                <span className={`text-[14px] lg:text-[16px] font-bold text-white leading-[20px] lg:leading-[28px] tracking-[0%] transition-all duration-300 ease-in-out ${
                  isClicked ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                }`} style={{fontFamily: 'Manrope, sans-serif'}}>
                  Teklif Al
                </span>
                <span className={`text-[14px] lg:text-[16px] font-bold text-white leading-[20px] lg:leading-[28px] tracking-[0%] transition-all duration-300 ease-in-out absolute ${
                  isClicked ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                }`} style={{fontFamily: 'Manrope, sans-serif'}}>
                  
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}; 