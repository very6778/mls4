import {setRequestLocale} from 'next-intl/server';

import {IntroductionSection} from '@/components/sections/IntroductionSection/IntroductionSection';
import {ProductShowcaseSection} from '@/components/sections/ProductShowcaseSection';
import {WhyUsSection} from '@/components/sections/WhyUsSection';
import {AboutUsSection} from '@/components/sections/AboutUsSection';
import {CoreValuesSection} from '@/components/sections/CoreValuesSection';
import {StockPowerSection} from '@/components/sections/StockPowerSection';
import {ContactSection} from '@/components/sections/ContactSection';
import {BlogSection} from '@/components/sections/BlogSection';
import {OfficesSection} from '@/components/sections/OfficesSection';
import {FooterSection} from '@/components/sections/FooterSection';
import {BackToTopButton} from '@/components/ui/BackToTopButton';

export const dynamic = 'force-dynamic';

type HomePageProps = {
  params: {locale: string};
};

export default function HomePage({params}: HomePageProps) {
  setRequestLocale(params.locale);

  return (
    <main className="bg-white w-full">
      <div className="bg-white w-full relative">
        <IntroductionSection />
        <ProductShowcaseSection />
        <WhyUsSection />
        <AboutUsSection />
        <CoreValuesSection />
        <StockPowerSection />
        <ContactSection />
        <BlogSection />
        <OfficesSection />
        <FooterSection />
        <BackToTopButton />
      </div>
    </main>
  );
}
