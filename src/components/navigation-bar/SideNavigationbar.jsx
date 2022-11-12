import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Icon,
  Image,
  Link,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { Logo } from '../../assets/images-and-icons';
import Links from './NavigationLinks';
import ButtonVariant from '../button/ButtonVariant';

const Sidenav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Icon display={{ xl: `none` }} onClick={onOpen} fontSize={`2.5rem`} />

      <Drawer
        size={{ base: `sm` }}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent p={2} bg={`black`}>
          {/* <DrawerCloseButton
            m={5}
            p={5}
            borderRadius={`100%`}
            bg={`red`}
            color={`white`}
          /> */}
          <DrawerHeader p={0} mt={5} alignSelf={`center`}>
            <Link as={RouterLink} to={`/`}>
              <Image cursor={`pointer`} src={Logo} alt="metabnb" />
            </Link>
            <ButtonVariant
              bg={`accent`}
              color={`white`}
              width="170px"
              height="3em"
              name="Connect wallet"
            />
          </DrawerHeader>
          <DrawerBody>
            <Links isMobile={true} />
          </DrawerBody>
          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Sidenav;
