import { Heading, Flex, Text, Image } from '@chakra-ui/react';
import React from 'react';
import { HeroImage } from '../../assets/images-and-icons';
import SearchInput from './SearchInput';
import style from './HeroSection.module.scss';

const HeroSection = () => {
  return (
    <Flex justifyContent={`space-between`} my={5}>
      <Flex flexDir={`column`} width={`50%`} justifyContent={`end`}>
        <Heading
          className={style.Hero_title}
          fontSize={`5xl`}
          fontWeight={`medium`}
        >
          Rent a{' '}
          <Text
            as={`span`}
            fontSize={`5xl`}
            fontWeight={`bold`}
            color={`accent`}
          >
            Place
          </Text>{' '}
          away from{' '}
          <Text
            as={`span`}
            fontSize={`5xl`}
            fontWeight={`bold`}
            color={`accent`}
          >
            Home
          </Text>{' '}
          in the{' '}
          <Text
            as={`span`}
            fontSize={`5xl`}
            fontWeight={`bold`}
            color={`accent`}
          >
            Metaverse
          </Text>
        </Heading>
        <Text fontSize={`2xl`} my={12} lineHeight={11}>
          we provide you access to luxury and affordable houses in the
          metaverse, get a chance to turn your imagination to reality at your
          comfort zone
        </Text>
        <SearchInput />
      </Flex>
      <Flex width={`50%`} justifyContent={`end`}>
        <Image alt="hero-image" src={HeroImage} />
      </Flex>
    </Flex>
  );
};

export default HeroSection;
