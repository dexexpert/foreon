import Hero from '@/components/main/hero';
import ContainerLayout from '@/layouts/containerLayout';
import { Box, Container, Button } from '@mantine/core';
import BlockInfo from '../components/home/blockIfo';
import Works from '@/components/home/how';
import Features from '@/components/home/features';
import TokenSection from '@/components/home/token';
import Tokenomics from '@/components/home/tokenomics';
import Footer from '@/components/major/footer';
import Faq from '@/components/home/faq';

const Homepage = () => {
  return (
    <>
      <Hero />
      <BlockInfo />
      <Works />
      <Features />
      <TokenSection />
      <Tokenomics />
      <Faq />
      <Footer />
    </>
  );
};

export default Homepage;
