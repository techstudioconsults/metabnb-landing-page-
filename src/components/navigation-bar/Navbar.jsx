import { Flex, Image, Center, flatten } from '@chakra-ui/react';
import React from 'react';
import { Logo } from '../../assets/images-and-icons';
import ButtonVariant from '../button/ButtonVariant';
import Links from './NavigationLinks';
import Sidenav from './SideNavigationbar';

const Navbar = () => (
  <Flex justifyContent={`space-between`} height="3em">
    <Center>
      <Image alt="logo" src={Logo} />
    </Center>
    <Links />
    <Sidenav />
    <ButtonVariant
      isMobile={false}
      bg={`accent`}
      color={`white`}
      width="170px"
      height="3em"
      name="Connect wallet"
    />
  </Flex>
);

export default Navbar;
