import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { tripleImg } from '../../assets/images-and-icons';
import ButtonVariant from '../button/ButtonVariant';

const MetabnbNFTs = () => {
  return (
    <Flex color={`white`} alignItems={`center`} gap={32}>
      <Box width={`40%`}>
        <Heading className='heading_title' fontSize={`5xl`}>Metabnb NFTs</Heading>
        <Text fontSize={`lg`} lineHeight={8} mt={8} mb={14}>
          Discover our NFT gift cards collection. Loyal customers gets amazing
          gift cards which are traded as NFTs. These NFTs gives our cutomer
          access to loads of our exclusive services.
        </Text>
        <ButtonVariant
          bg={`white`}
          color={`accent`}
          height={`48px`}
          width={`156px`}
          name={`Learn more`}
        />
      </Box>
      <Box width={`60%`}>
        <Image alt="three_img" src={tripleImg} />
      </Box>
    </Flex>
  );
};

export default MetabnbNFTs;
