import { Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import {
  copyright,
  facebook,
  instagram,
  twitter,
} from '../../assets/images-and-icons';

export default function Socials({ isMobile }) {
  return (
    <Flex
      display={{ base: isMobile ? `flex` : `none`, lg: `flex` }}
      gap={8}
      mt={{ lg: `96px` }}
      mb={{ lg: `55px` }}
    >
      <Image src={facebook} alt={`logo`} />
      <Image src={instagram} alt={`logo`} />
      <Image src={twitter} alt={`logo`} />
    </Flex>
  );
}

export const Copyright = ({ isMobile }) => {
  return (
    <Flex
      display={{ base: isMobile ? `flex` : `none`, lg: `flex` }}
      alignItems={`center`}
      gap={2}
    >
      <Image src={copyright} alt={`copyright`} />
      <Text>2022 Metabnb</Text>
    </Flex>
  );
};
