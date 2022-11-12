import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { frame1, star } from '../../assets/images-and-icons';

const Card = () => {
  return (
    <Box
      p={4}
      border={`1px solid lightgrey`}
      width={`18.25rem`}
      borderRadius={`15px`}
    >
      <Box
        borderRadius={`15px`}
        overflow={`hidden`}
        width={`16.25rem`}
        height={`16.563rem`}
      >
        <Image className="cc-img-fluid" alt={`frame`} src={frame1} />
      </Box>
      <Box>
        <Flex
          mt={4}
          mb={2.5}
          alignItems={`center`}
          justifyContent={`space-between`}
        >
          <Text lineHeight={`13px`} fontSize={`xs`}>
            Desert king
          </Text>
          <Text lineHeight={`13px`} fontSize={`xs`} fontWeight={700}>
            1MBT per night
          </Text>
        </Flex>
        <Flex justifyContent={`space-between`} alignItems={`center`}>
          <Text lineHeight={`13px`} fontSize={`xs`}>
            2345km away
          </Text>
          <Text lineHeight={`13px`} fontSize={`xs`}>
            available for 2weeks stay
          </Text>
        </Flex>
        <Flex gap={2} width={`fit-content`} mt={3}>
          <Image src={star} />
          <Image src={star} />
          <Image src={star} />
          <Image src={star} />
          <Image src={star} />
        </Flex>
      </Box>
    </Box>
  );
};

export default Card;
