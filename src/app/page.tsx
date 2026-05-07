import { HeroSection, HowItWorks, FAQSection, Testimonials } from '@/components/home';
import { Pgx } from '@/components/pgx';
import { Tech, ProtocolStack } from '@/components/tech';

export default function Home() {
  return (
    <>
      <HeroSection />
      <Pgx />
      <ProtocolStack />
      <Tech />
      <Testimonials />
      <HowItWorks />
      <FAQSection />
    </>
  );
}
