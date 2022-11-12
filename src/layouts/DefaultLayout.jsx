import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navigation-bar/Navbar';

const DefaultLayout = ({ children }) => {
  return (
    <>
      {/* navbar */}
      <Box className="cc-container" my="3rem">
        <Navbar />
      </Box>
      {children}
      <Box
        borderTop={`3px solid white`}
        backgroundColor={`black`}
        color={`white`}
      >
        <Flex className="cc-container" pt={14} pb={8}>
          <Footer />
        </Flex>
      </Box>
    </>
  );
};

export default DefaultLayout;
