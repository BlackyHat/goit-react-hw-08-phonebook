import { useColorMode } from '@chakra-ui/react';

import {
  Box,
  Flex,
  Image,
  Heading,
  Switch,
  Spacer,
  LinkBox,
  LinkOverlay,
} from '@chakra-ui/react';
import logo from './logo.png';
import { Link } from 'react-router-dom';

import { LoginButtons } from 'components/LoginButtons/LoginButtons';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks/useAuth';

export const Header = () => {
  const { isLoggedIn } = useAuth();

  const { colorMode, toggleColorMode } = useColorMode();
  console.log('isLoggedIn', isLoggedIn);
  return (
    <Box as="header" w="100%" p={4}>
      <Flex
        minWidth="max-content"
        alignItems="center"
        gap="2"
        maxW="2xl"
        m="auto"
      >
        <LinkBox
          as="div"
          maxW="sm"
          display="flex"
          alignItems="center"
          p="2"
          gap="2"
        >
          <Image src={logo} alt="logo" boxSize="48px" borderRadius="3xl" />
          <LinkOverlay as={Link} to="/" />
          <Heading size="md">Contacts</Heading>
        </LinkBox>
        <Switch colorScheme="orange" size="md" onChange={toggleColorMode}>
          {colorMode}
        </Switch>
        <Spacer />
        {isLoggedIn ? <UserMenu /> : <LoginButtons />}
      </Flex>
    </Box>
  );
};
