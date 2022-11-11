import { Flex, Image, OrderedList, ListItem, Center } from '@chakra-ui/react';
import React from 'react';
import { Logo } from '../../assets/images-and-icons';
import ButtonVariant from '../button/ButtonVariant';

const Navbar = () => (
  <Flex justifyContent={`space-between`} height="3em">
    <Center>
      <Image alt="logo" src={Logo} />
    </Center>
    <OrderedList display={`flex`} alignItems={`center`} gap={12}>
      <ListItem fontSize={`xl`}>Home</ListItem>
      <ListItem fontSize={`xl`}>Place to stay</ListItem>
      <ListItem fontSize={`xl`}>NFTs</ListItem>
      <ListItem fontSize={`xl`}>Community</ListItem>
    </OrderedList>
    <ButtonVariant width="170px" height="3em" name="Connect wallet" />
  </Flex>
);

export default Navbar;
