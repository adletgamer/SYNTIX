import { Hero } from '@/components/hero';
import { Pgx } from '@/components/pgx';
import { Tech, ProtocolStack } from '@/components/tech';
import { FAQ } from '@/components/faq';

export default function Home() {
  return (
    <>
      <Hero />
      <Pgx />
      <ProtocolStack />
      <Tech />
      <FAQ />
    </>
  );
}
