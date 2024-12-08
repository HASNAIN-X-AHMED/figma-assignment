import React from 'react'
import Top from '@/components/Top/Top';
import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import Bestofair from '@/components/Bestofair/Bestofair';
import Featured from '@/components/Featured/Featured';
import DontMiss from '@/components/Don\'t Miss/DontMiss';
import TheEssentials from '@/components/The Essentials/TheEssentials';
import Footer from '@/components/Footer/Footer';

const index = () => {
  return (
    <div>
      <Top />
      <Header />
      <Hero />
      <Bestofair />
      <Featured />
      <DontMiss />
      <TheEssentials />
      <Footer />
    </div>
  )
}

export default index
