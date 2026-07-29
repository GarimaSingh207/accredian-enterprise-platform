import { Navbar } from '@/components/sections/Navbar';
import { HeroSection } from '@/components/sections/HeroSection';
import { StatsSection } from '@/components/sections/StatsSection';
import { ClientsSection } from '@/components/sections/ClientsSection';
import { AccredianEdgeSection } from '@/components/sections/AccredianEdgeSection';
import { DomainExpertiseSection } from '@/components/sections/DomainExpertiseSection';
import { CourseSegmentationSection } from '@/components/sections/CourseSegmentationSection';
import { TargetAudienceSection } from '@/components/sections/TargetAudienceSection';
import { CatSection } from '@/components/sections/CatSection';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import { FaqSection } from '@/components/sections/FaqSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { CtaBannerSection } from '@/components/sections/CtaBannerSection';
import { Footer } from '@/components/sections/Footer';
import { EnquiryModal } from '@/components/sections/EnquiryModal';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-900 selection:bg-primary-100 selection:text-primary-800">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <StatsSection />
        <ClientsSection />
        <AccredianEdgeSection />
        <DomainExpertiseSection />
        <CourseSegmentationSection />
        <TargetAudienceSection />
        <CatSection />
        <HowItWorksSection />
        <FaqSection />
        <TestimonialsSection />
        <CtaBannerSection />
      </main>
      <Footer />
      <EnquiryModal />
    </div>
  );
}
