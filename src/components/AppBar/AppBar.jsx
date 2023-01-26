import { useAuth } from 'hooks';
import { Box, Flex, Spacer, Show, Hide } from '@chakra-ui/react';

import NavMenu from 'components/NavMenu';
import AuthNav from 'components/AuthNav';
import UserMenu from 'components/UserMenu';
import ColorModeSwitcher from 'components/ColorModeSwitcher';
import MobileMenu from 'components/MobileMenu';

const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box as="header" w="100%" p={4}>
      <Flex
        minWidth="max-content"
        alignItems="center"
        gap="2"
        maxW="2xl"
        m="auto"
      >
        <Show below="sm">
          <MobileMenu />
        </Show>

        <Hide below="sm">
          <NavMenu />

          <Spacer />
          <ColorModeSwitcher />
        </Hide>
        <Spacer />

        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Flex>
    </Box>
  );
};

export default AppBar;
