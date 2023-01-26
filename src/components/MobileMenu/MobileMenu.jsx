import { useAuth } from 'hooks';

import { useRef } from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Text,
  IconButton,
  Flex,
  Spacer,
} from '@chakra-ui/react';
import { useToggle } from 'hooks/useToggle';
import { HamburgerIcon } from '@chakra-ui/icons';
import NavButton from 'components/NavButton';

const MobileMenu = () => {
  const { isOpen, onOpen, onClose } = useToggle();
  const btnRef = useRef();
  const { isLoggedIn, user } = useAuth();

  return (
    <>
      <IconButton
        ref={btnRef}
        icon={<HamburgerIcon boxSize={'22'} />}
        colorScheme="teal"
        variant="outline"
        onClick={onOpen}
        aria-label="open mobile menu"
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size={'xs'}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader mt={8} as="h2" align="center" borderBottomWidth="1px">
            <Text> Phonebook menu</Text>

            <Text as="i" fontSize="xs" color="gray.500">
              User: {isLoggedIn ? user.name : 'not autorizated'}
            </Text>
          </DrawerHeader>

          <DrawerBody flexDirection="column" mt="8  ">
            <Flex
              minWidth="max-content"
              alignItems="center"
              flexDirection="column"
              gap="2"
              maxW="2xl"
              m="auto"
            >
              <NavButton to="/" label="Home" />
              {isLoggedIn && <NavButton to="/contacts" label="Contacts" />}
              <Spacer />
            </Flex>
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px">
            <Text size="sx" align="center">
              Education project. Powered in 2023.
            </Text>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MobileMenu;

// <ColorModeSwitcher />
// <Spacer />
