import { Flex, Image, Center, Link } from '@chakra-ui/react';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import ConnectWallet from '../modal/ConnectWallet';

import Links from './NavigationLinks';
import Sidenav from './SideNavigationbar';

const Navbar = () => (
  <Flex
    className="page_alignment cc-container"
    justifyContent={`space-between`}
    alignItems={`center`}
    height={`3rem`}
  >
    <Center w={`14.6rem`}>
      <Link as={RouterLink} to={`/`}>
        <Image
          alt="logo"
          src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1668186165/hng/Metabnb/images-and-icons/Group-1_ytb0ig.png`}
        />
      </Link>
    </Center>
    <Links />
    <Sidenav />
    <ConnectWallet />
  </Flex>
);

export default Navbar;
