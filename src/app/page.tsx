import { Hero } from '@/components/hero';
import { Pgx } from '@/components/pgx';
import { Tech, ProtocolStack } from '@/components/tech';

export default function Home() {
  return (
    <>
      <Hero />
      <Pgx />
      <ProtocolStack />
      <Tech />
    </>
  );
}
