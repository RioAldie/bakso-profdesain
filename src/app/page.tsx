import CardMenu from '@/components/cardMenu';
import Hero from '@/components/hero';
import MenuSection from '@/components/menuSection';
import Services from '@/components/services';
import Testimoni from '@/components/testimoni';

export default function Home() {
  return (
    <main className=" p-24">
      <Hero />
      <MenuSection />
      <Testimoni />
      <Services />
    </main>
  );
}
