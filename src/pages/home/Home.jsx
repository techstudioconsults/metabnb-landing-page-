import { Box } from '@chakra-ui/react';
import React from 'react';
import HeroSection from '../../components/Hero-section/HeroSection';
import Navbar from '../../components/navigation-bar/Navbar';

const Home = () => {
  return (
    <Box>
      <Box className="cc-container" my="3rem">
        <Navbar />
      </Box>
      <Box className="cc-container" my={32}>
        <HeroSection />
      </Box>
    </Box>
  );
};

export default Home;
