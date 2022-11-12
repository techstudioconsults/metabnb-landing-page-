import { Box, Flex, Image, Center, Heading } from '@chakra-ui/react';
import React from 'react';
import HeroSection from '../../components/Hero-section/HeroSection';

import {
  GridBg,
  MBToken,
  MetaMask,
  OpenSea,
} from '../../assets/images-and-icons';
import GridDisplay from '../../components/grid-display/GridDisplay';
import MetabnbNFTs from '../../components/metabnbNFTs/MetabnbNFTs';

const Home = () => {
  return (
    <Box>
      {/* hero section */}
      <Box className="cc-container" my={32}>
        <HeroSection />
      </Box>
      {/* banner */}
      <Box
        display={`flex`}
        height={`4.375rem`}
        color={`white`}
        backgroundColor={`accent`}
        backgroundImage={GridBg}
      >
        <Flex
          alignItems={`center`}
          justifyContent={`space-between`}
          className={`cc-container`}
        >
          <Center>
            <Image alt="company-logo" src={MBToken} />
          </Center>
          <Center>
            <Image alt="company-logo" src={MetaMask} />
          </Center>
          <Center>
            <Image alt="company-logo" src={OpenSea} />
          </Center>
        </Flex>
      </Box>
      <Box>
        <Heading
          textAlign={`center`}
          mt={10}
          mb={11}
          fontSize={`5xl`}
          className="heading_title"
        >
          Inspiration for your next adventure
        </Heading>
        <Box pb={`3.3rem`} className="cc-container">
          <GridDisplay />
        </Box>
        <Box backgroundColor={`accent`}>
          <Flex className="cc-container" py={24}>
            <MetabnbNFTs />
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
