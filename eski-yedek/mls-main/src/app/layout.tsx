import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/sections/Header'
import { LenisProvider } from '@/components/LenisProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MillerSan - Endüstriyel Gücün Yeni Adı',
  description: 'Kaliteli ürün gamı, sektörel deneyim ve güvenilir hizmetle Millersan; kayış, kaplin ve endüstriyel yedek parçada çözüm ortağınız.',
  keywords: 'endüstriyel, kayış, kaplin, rulman, yedek parça, millersan',
  authors: [{ name: 'MillerSan' }],
  openGraph: {
    title: 'MillerSan - Endüstriyel Gücün Yeni Adı',
    description: 'Kaliteli ürün gamı, sektörel deneyim ve güvenilir hizmetle Millersan; kayış, kaplin ve endüstriyel yedek parçada çözüm ortağınız.',
    type: 'website',
    locale: 'tr_TR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MillerSan - Endüstriyel Gücün Yeni Adı',
    description: 'Kaliteli ürün gamı, sektörel deneyim ve güvenilir hizmetle Millersan; kayış, kaplin ve endüstriyel yedek parçada çözüm ortağınız.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className="m-0 p-0" style={{background: 'linear-gradient(180deg,rgba(201,162,75,0.12)_0%,rgba(255,255,255,0.12)_100%)'}}>
      <body className={inter.className + ' m-0 p-0'} style={{margin: 0, padding: 0, background: 'linear-gradient(180deg,rgba(201,162,75,0.12)_0%,rgba(255,255,255,0.12)_100%)'}}>
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  )
}