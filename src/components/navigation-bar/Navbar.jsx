import { Flex, Image, Center } from '@chakra-ui/react';
import React from 'react';
import { Logo } from '../../assets/images-and-icons';
import ButtonVariant from '../button/ButtonVariant';
import Links from './NavigationLinks';
import Sidenav from './SideNavigationbar';

const Navbar = () => (
  <Flex
    className="page_alignment"
    justifyContent={`space-between`}
    alignItems={`center`}
    height="3em"
  >
    <Center w={`14.6rem`}>
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
