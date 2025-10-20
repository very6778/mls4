"use client";

import React from "react";
import Image from "next/image";

export const FooterSection = () => (
  <footer className="w-full bg-[#fbf8f1] py-8 px-4 border-t border-[#ececec]">
    <div className="max-w-[800px] mx-auto flex items-center justify-center text-center gap-6">
      {/* Logo */}
      <div className="flex justify-center">
        <Image
          src="/images/miller-san-logo.png"
          alt="MillerSan Logo"
          width={180}
          height={44}
          className="object-contain"
        />
      </div>
      
   
      {/* Contact Info */}
      <div className="flex flex-col items-center gap-3">
        <span className="text-base font-bold text-[#2b2b2b]" style={{fontFamily: 'Manrope, sans-serif'}}>İletişim Bilgileri</span>
        <div className="flex flex-col items-center gap-1">
          <span className="text-[13px] font-medium text-[#555]" style={{fontFamily: 'Manrope, sans-serif'}}>Adres: Organize Sanayi Bölgesi, İstanbul</span>
          <span className="text-[13px] font-medium text-[#555]" style={{fontFamily: 'Manrope, sans-serif'}}>Telefon: +90 541 234 56 78</span>
          <span className="text-[13px] font-medium text-[#555]" style={{fontFamily: 'Manrope, sans-serif'}}>E-posta: info@millersan.com</span>


        </div>
      </div>
    </div>
  </footer>
); 