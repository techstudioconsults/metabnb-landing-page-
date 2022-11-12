import { Heading, Flex, Text, Image, Box } from '@chakra-ui/react';
import React from 'react';
import { HeroImage } from '../../assets/images-and-icons';
import SearchInput from './SearchInput';

const HeroSection = () => {
  return (
    <Flex justifyContent={`space-between`} my={5}>
      <Flex flexDir={`column`} width={`60%`} justifyContent={`end`} pr={24}>
        <Heading
          className="heading_title"
          fontSize={`56px`}
          fontWeight={`medium`}
          lineHeight={`78.4px`}
        >
          Rent a{' '}
          <Text
            as={`span`}
            fontSize={`56px`}
            fontWeight={`bold`}
            color={`accent`}
          >
            Place
          </Text>{' '}
          away from{' '}
          <Text
            as={`span`}
            fontSize={`56px`}
            fontWeight={`bold`}
            color={`accent`}
          >
            Home
          </Text>{' '}
          in the{' '}
          <Text
            as={`span`}
            fontSize={`56px`}
            fontWeight={`bold`}
            color={`accent`}
          >
            Metaverse
          </Text>
        </Heading>

        <Text fontSize={`2xl`} my={12} lineHeight={`2.18rem`}>
          we provide you access to luxury and affordable houses in the
          metaverse, get a chance to turn your imagination to reality at your
          comfort zone
        </Text>
        <SearchInput />
      </Flex>
      <Flex width={`40%`} justifyContent={`end`}>
        <Image alt="hero-image" src={HeroImage} />
      </Flex>
    </Flex>
  );
};

export default HeroSection;
