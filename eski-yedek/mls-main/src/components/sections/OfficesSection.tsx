"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  Dialog, 
  DialogContent, 
  DialogTitle, 
  DialogActions, 
  Button, 
  Typography, 
  Box,
  IconButton
} from "@mui/material";
import { Close as CloseIcon, LocationOn, Phone, Email } from "@mui/icons-material";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const offices = [
  {
    name: "İstanbul Ofis",
    image: "/images/istanbul.jpg",
    address: "Maslak Mahallesi, Büyükdere Caddesi No:123, Sarıyer/İstanbul",
    phone: "+90 (212) 555 0123",
    email: "istanbul@millersan.com",
    description: "Ana merkez ofisimiz, Türkiye'nin finans ve iş merkezi Maslak'ta yer almaktadır. Modern ofis binamızda müşterilerimize en iyi hizmeti sunuyoruz."
  },
  {
    name: "Ankara Ofis",
    image: "/images/ankara.jpg",
    address: "Çankaya Mahallesi, Atatürk Bulvarı No:456, Çankaya/Ankara",
    phone: "+90 (312) 555 0456",
    email: "ankara@millersan.com",
    description: "Başkent Ankara'daki ofisimiz, kamu kurumları ve özel sektör müşterilerimize yakınlığı ile öne çıkmaktadır."
  },
  {
    name: "İzmir Ofis",
    image: "/images/izmir.jpg",
    address: "Alsancak Mahallesi, Kıbrıs Şehitleri Caddesi No:789, Konak/İzmir",
    phone: "+90 (232) 555 0789",
    email: "izmir@millersan.com",
    description: "Ege Bölgesi'nin kalbi İzmir'deki ofisimiz, bölgedeki sanayi ve ticaret merkezlerine hızlı erişim sağlamaktadır."
  },
];

export const OfficesSection = (): JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedOffice, setSelectedOffice] = useState<typeof offices[0] | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleOfficeClick = (office: typeof offices[0]) => {
    setSelectedOffice(office);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setSelectedOffice(null);
  };

  const handleCardClick = (e: React.MouseEvent, office: typeof offices[0]) => {
    e.preventDefault();
    e.stopPropagation();
    handleOfficeClick(office);
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Respect reduced motion preferences
    const prefersReduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!containerRef.current || prefersReduced) {
      return;
    }

    // Use gsap context for scoped selectors and cleanup
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>('.office-card');

      // Set initial state with GPU compositing hints
      gsap.set(cards, {
        opacity: 0,
        x: -24,
        willChange: 'transform, opacity',
        force3D: true
      });

      // Batch ScrollTrigger to minimize layout thrash
      ScrollTrigger.batch('.office-card', {
        start: 'top 90%',
        once: true,
        interval: 0.12,
        fastScrollEnd: true,
        onEnter: (batch) => {
          gsap.to(batch, {
            opacity: 1,
            x: 0,
            ease: 'power1.out',
            duration: 0.45,
            stagger: { each: 0.1, from: 'start' },
            clearProps: 'transform,willChange'
          });
        }
      });
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <>
      <section className="w-full flex justify-center py-6 bg-white">
        <div ref={containerRef} className="w-full max-w-[1440px] flex flex-col md:flex-row gap-4 md:gap-8 mx-auto px-4 md:px-10">
          {offices.map((office) => (
                          <div
                key={office.name}
                className="office-card flex flex-row items-center bg-white rounded-[20px] h-[72px] w-full border border-[#C9A24B] cursor-pointer hover:shadow-lg transition-all duration-300"
                style={{ boxShadow: "0 1px 4px 0 rgba(0,0,0,0.04)" }}
                onClick={(e) => handleCardClick(e, office)}
              >
                <div className="h-full flex items-center pl-2 pr-2">
                  <div className="w-[48px] h-[48px] bg-white rounded-lg overflow-hidden flex items-center justify-center">
                    <Image
                      src={office.image}
                      alt={office.name}
                      width={200}
                      height={200}
                      className="object-cover w-full h-full"
                      quality={95}
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-center pl-2 w-full h-full">
                  <span className="text-[18px] font-bold text-[#2b2b2b] leading-[24px] tracking-[0%]" style={{fontFamily: 'Manrope, sans-serif'}}>
                    {office.name}
                  </span>
                  <span className="text-[13px] text-[#4F4F4F] leading-[18px] mt-0.5" style={{fontFamily: 'Manrope, sans-serif'}}>
                    Detayları gör
                  </span>
                </div>
              </div>
          ))}
        </div>
      </section>

      {/* Material UI Dialog */}
      <Dialog 
        open={dialogOpen} 
        onClose={handleCloseDialog}
        maxWidth="sm"
        disableScrollLock
        scroll="paper"
        BackdropProps={{
          style: {
            backdropFilter: 'blur(8px)',
            backgroundColor: 'rgba(0, 0, 0, 0.3)'
          }
        }}
        PaperProps={{
          style: {
            borderRadius: '16px',
            boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
            width: '100%',
            maxWidth: isMobile ? '92vw' : '1200px',
            margin: isMobile ? '16px' : 'auto',
            maxHeight: '85dvh',
            display: 'flex',
            flexDirection: 'column'
          }
        }}
      >
        {selectedOffice && (
          <>
            <DialogTitle sx={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              fontFamily: 'Manrope, sans-serif',
              fontWeight: 'bold',
              color: '#2b2b2b',
              fontSize: isMobile ? '1.35rem' : '1.25rem',
              padding: '16px 16px 8px'
            }}>
              {selectedOffice.name}
              <IconButton
                onClick={handleCloseDialog}
                sx={{ 
                  color: '#C9A24B',
                  fontSize: isMobile ? '1.5rem' : '1.25rem',
                  p: isMobile ? 1.5 : 1
                }}
              >
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            
            <DialogContent sx={{ 
              pt: 0,
              px: isMobile ? 2.5 : 2,
              pb: 2,
              overflowY: 'auto',
              flex: '1 1 auto'
            }}>
              <Box sx={{ 
                display: 'flex', 
                flexDirection: isMobile ? 'column' : 'row', 
                gap: isMobile ? 4 : 4,
                alignItems: isMobile ? 'stretch' : 'flex-start',
                minHeight: isMobile ? 'auto' : '280px'
              }}>
                {/* Office Image */}
                <Box sx={{ 
                  flex: isMobile ? 'none' : '0 0 40%',
                  minHeight: isMobile ? 'auto' : '280px'
                }}>
                  <Image
                    src={selectedOffice.image}
                    alt={selectedOffice.name}
                    width={500}
                    height={300}
                    className={`object-cover w-full rounded-lg ${isMobile ? 'h-[250px]' : 'h-full'}`}
                    quality={95}
                  />
                </Box>
                
                {/* Office Details */}
                <Box sx={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: isMobile ? 3 : 2.5,
                  flex: isMobile ? 'none' : '1 1 60%',
                  justifyContent: 'center'
                }}>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      color: '#4F4F4F',
                      fontFamily: 'Manrope, sans-serif',
                      lineHeight: 1.6,
                      fontSize: isMobile ? '1.1rem' : '0.95rem'
                    }}
                  >
                    {selectedOffice.description}
                  </Typography>
                  
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: isMobile ? 3 : 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: isMobile ? 2 : 1.5 }}>
                      <LocationOn sx={{ 
                        color: '#C9A24B', 
                        fontSize: isMobile ? 24 : 20, 
                        mt: 0.2 
                      }} />
                      <Box sx={{ flex: 1 }}>
                        <Typography 
                          variant="body2" 
                          sx={{ 
                            color: '#2b2b2b',
                            fontFamily: 'Manrope, sans-serif',
                            fontWeight: 600,
                            fontSize: isMobile ? '1rem' : '0.9rem',
                            mb: isMobile ? 1 : 0.5
                          }}
                        >
                          Adres
                        </Typography>
                        <Typography 
                          variant="body2" 
                          sx={{ 
                            color: '#4F4F4F',
                            fontFamily: 'Manrope, sans-serif',
                            fontSize: isMobile ? '0.95rem' : '0.85rem',
                            lineHeight: 1.4
                          }}
                        >
                          {selectedOffice.address}
                        </Typography>
                      </Box>
                    </Box>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: isMobile ? 2 : 1.5 }}>
                      <Phone sx={{ 
                        color: '#C9A24B', 
                        fontSize: isMobile ? 24 : 20 
                      }} />
                      <Box>
                        <Typography 
                          variant="body2" 
                          sx={{ 
                            color: '#2b2b2b',
                            fontFamily: 'Manrope, sans-serif',
                            fontWeight: 600,
                            fontSize: isMobile ? '1rem' : '0.9rem',
                            mb: isMobile ? 1 : 0.5
                          }}
                        >
                          Telefon
                        </Typography>
                        <Typography 
                          variant="body2" 
                          sx={{ 
                            color: '#4F4F4F',
                            fontFamily: 'Manrope, sans-serif',
                            fontSize: isMobile ? '0.95rem' : '0.85rem'
                          }}
                        >
                          {selectedOffice.phone}
                        </Typography>
                      </Box>
                    </Box>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: isMobile ? 2 : 1.5 }}>
                      <Email sx={{ 
                        color: '#C9A24B', 
                        fontSize: isMobile ? 24 : 20 
                      }} />
                      <Box>
                        <Typography 
                          variant="body2" 
                          sx={{ 
                            color: '#2b2b2b',
                            fontFamily: 'Manrope, sans-serif',
                            fontWeight: 600,
                            fontSize: isMobile ? '1rem' : '0.9rem',
                            mb: isMobile ? 1 : 0.5
                          }}
                        >
                          E-posta
                        </Typography>
                        <Typography 
                          variant="body2" 
                          sx={{ 
                            color: '#4F4F4F',
                            fontFamily: 'Manrope, sans-serif',
                            fontSize: isMobile ? '0.95rem' : '0.85rem'
                          }}
                        >
                          {selectedOffice.email}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </DialogContent>
            
            <DialogActions sx={{ 
              px: 2.5, 
              pb: 2,
              pt: 0
            }}>
              <Button 
                onClick={handleCloseDialog}
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: '#C9A24B',
                  color: 'white',
                  fontFamily: 'Manrope, sans-serif',
                  fontWeight: 600,
                  borderRadius: '10px',
                  px: 3,
                  py: 1.25,
                  fontSize: '1rem',
                  '&:hover': {
                    backgroundColor: '#B08A3A'
                  }
                }}
              >
                Kapat
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </>
  );
};
