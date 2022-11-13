import React, { useEffect } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Text,
  Button,
  Image,
  Center,
  Box,
} from '@chakra-ui/react';
import ButtonVariant from '../button/ButtonVariant';
import { useHistory } from 'react-router-dom';

const ConnectWallet = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  let history = useHistory();

  const openModal = () => {
    onOpen();
    history.push(`/connect-wallet`);
  };

  if (history.location.pathname === `/connect-wallet`) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      onOpen();
    }, [onOpen]);
  }

  return (
    <>
      <ButtonVariant
        onClick={openModal}
        isMobile={false}
        bg={`accent`}
        color={`white`}
        width="170px"
        height="3em"
        name="Connect wallet"
      />
      <Modal
        size={{ base: `full`, md: `2xl` }}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        scr
      >
        <ModalOverlay />
        <ModalContent
          borderRadius={{ sm: `16px` }}
          p={5}
          height={{ base: `100vh`, md: `initial` }}
        >
          <ModalHeader fontSize={`2xl`}>Connet Wallet</ModalHeader>
          <ModalCloseButton size={`xs`} p={1} my={7} mx={8} />
          <ModalBody>
            <Text my={`1rem`}>Choose your preferred wallet:</Text>
            <Box width={`100%`}>
              <Button
                display={`flex`}
                justifyContent={`space-between`}
                borderRadius={`12px`}
                border={`1px solid #CFD8DC`}
                mb={`1rem`}
                bg={`#CFD8DC50`}
                height={`68px`}
                width={`100%`}
              >
                <Center gap={3}>
                  <Image
                    alt="dorge"
                    src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1668186166/hng/Metabnb/images-and-icons/image_66_aaqp0s.png"
                  />
                  <Text fontWeight={600} fontSize={`lg`}>
                    Metamask
                  </Text>
                </Center>
                <Box boxSize={`20px`}>
                  <Image
                    alt="logo"
                    src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1668294845/hng/Metabnb/images-and-icons/icons8-chevron-24_gnodw9.png"
                  />
                </Box>
              </Button>
              <Button
                display={`flex`}
                justifyContent={`space-between`}
                borderRadius={`12px`}
                border={`1px solid #CFD8DC`}
                my={`1rem`}
                bg={`#CFD8DC50`}
                height={`68px`}
                width={`100%`}
              >
                <Center gap={3}>
                  <Image
                    alt="dorge"
                    src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1668186166/hng/Metabnb/images-and-icons/image_69_mcqmbo.png"
                  />
                  <Text fontWeight={600} fontSize={`lg`}>
                    WalletConnect
                  </Text>
                </Center>
                <Box boxSize={`20px`}>
                  <Image
                    alt="logo"
                    src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1668294845/hng/Metabnb/images-and-icons/icons8-chevron-24_gnodw9.png"
                  />
                </Box>
              </Button>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ConnectWallet;