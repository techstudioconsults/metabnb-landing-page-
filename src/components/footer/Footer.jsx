import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Link,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import {
  copyright,
  facebook,
  instagram,
  logoWhite,
  twitter,
} from '../../assets/images-and-icons';

const Footer = () => {
  return (
    <Grid width={`100%`} templateColumns={`repeat(12, 1fr)`}>
      <GridItem colSpan={4}>
        <Box>
          <Image src={logoWhite} alt={`logo`} />
        </Box>
        <Flex gap={8} mt={`96px`} mb={`55px`}>
          <Image src={facebook} alt={`logo`} />
          <Image src={instagram} alt={`logo`} />
          <Image src={twitter} alt={`logo`} />
        </Flex>
        <Flex alignItems={`center`} gap={2}>
          <Image src={copyright} alt={`copyright`} />
          <Text>2022 Metabnb</Text>
        </Flex>
      </GridItem>
      <GridItem colSpan={3}>
        <Heading fontSize={`xl`}>Community</Heading>
        <Flex flexDir={`column`} mt={`1.56rem`} gap={4}>
          <Link fontSize={`sm`}>NFT</Link>
          <Link fontSize={`sm`}>Tokens</Link>
          <Link fontSize={`sm`}>Landlords</Link>
          <Link fontSize={`sm`}>Discord</Link>
        </Flex>
      </GridItem>
      <GridItem colSpan={3}>
        <Heading fontSize={`xl`}>Places</Heading>
        <Flex flexDir={`column`} mt={`1.56rem`} gap={4}>
          <Link fontSize={`sm`}>Castle</Link>
          <Link fontSize={`sm`}>Farms</Link>
          <Link fontSize={`sm`}>Beach</Link>
          <Link fontSize={`sm`}>Learn more</Link>
        </Flex>
      </GridItem>
      <GridItem colSpan={2}>
        <Heading fontSize={`xl`}>About us</Heading>
        <Flex flexDir={`column`} mt={`1.56rem`} gap={4}>
          <Link fontSize={`sm`}>Road map</Link>
          <Link fontSize={`sm`}>Creators</Link>
          <Link fontSize={`sm`}>Career</Link>
          <Link fontSize={`sm`}>Contact us</Link>
        </Flex>
      </GridItem>
    </Grid>
  );
};

export default Footer;
