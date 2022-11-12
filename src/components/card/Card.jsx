import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { like, star } from '../../assets/images-and-icons';

const Card = ({ image }) => {
  return (
    <Box
      p={4}
      border={`1px solid lightgrey`}
      width={{ base: `90%`, sm: `18.25rem` }}
      borderRadius={`15px`}
    >
      <Box
        pos={`relative`}
        borderRadius={`15px`}
        overflow={`hidden`}
        height={`16.563rem`}
      >
        <Image className="cc-img-fluid" alt={`frame`} src={image}></Image>
        <Image pos={`absolute`} top={0} right={0} m={4} alt="like" src={like} />
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
