import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import OperatorCouncil from '@/components/OperatorCouncil';
import Portfolio from '@/components/Portfolio';
import Pillars from '@/components/Pillars';
import SelectionProcess from '@/components/SelectionProcess';
import ApplicationCta from '@/components/ApplicationCta';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <OperatorCouncil />
        <Portfolio />
        <Pillars />
        <SelectionProcess />
        <ApplicationCta />
      </main>
      <Footer />
    </>
  );
}
