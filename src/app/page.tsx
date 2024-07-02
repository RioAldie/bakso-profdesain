'use client';

import CardMenu from '@/components/cardMenu';
import Hero from '@/components/hero';
import MenuSection from '@/components/menuSection';
import Services from '@/components/services';
import Testimoni from '@/components/testimoni';
import { AuthContext, useAuth } from '@/context/authContext';
import { redirect } from 'next/navigation';
import { useContext } from 'react';

export default function Home() {
  let { userId } = useContext(AuthContext);

  if (userId === null) {
    redirect('/login');
  }
  return (
    <main className=" p-24">
      <Hero />
      <MenuSection />
      <Testimoni />
      <Services />
    </main>
  );
}
