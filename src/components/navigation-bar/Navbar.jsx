import { Flex, Image, Center, Link } from '@chakra-ui/react';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Logo } from '../../assets/images-and-icons';

import ConnectWallet from '../modal/ConnectWallet';

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
      <Link as={RouterLink} to={`/`}>
        <Image alt="logo" src={Logo} />
      </Link>
    </Center>
    <Links />
    <Sidenav />
    <ConnectWallet />
  </Flex>
);

export default Navbar;
