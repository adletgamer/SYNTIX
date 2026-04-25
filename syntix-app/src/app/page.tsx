import { Navbar, Footer } from '@/components/shared';
import { Hero } from '@/components/hero';
import { Pgx } from '@/components/pgx';
import { Tech } from '@/components/tech';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Pgx />
      <Tech />
      <Footer />
    </>
  );
}
