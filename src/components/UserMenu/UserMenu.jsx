import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';
import { useAuth } from 'hooks/useAuth';

import {
  Box,
  Avatar,
  AvatarBadge,
  Text,
  Button,
  Show,
  IconButton,
  Hide,
} from '@chakra-ui/react';
import { ImExit } from 'react-icons/im';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const hadleLogOut = () => dispatch(logOut());
  return (
    <Box
      display="flex"
      mt="2"
      alignItems="center"
      justifyContent="center"
      gap="4"
    >
      <Show below="md">
        <IconButton
          aria-label="log out"
          icon={<ImExit size="22" />}
          colorScheme="teal"
          variant="ghost"
          onClick={hadleLogOut}
        />
      </Show>

      <Hide below="md">
        <Avatar name={user.name} bg="teal.900">
          <AvatarBadge boxSize="1.25em" bg="green.500" />
        </Avatar>
        <Text fontSize="lg">{user.name} </Text>
        <Button
          type="button"
          colorScheme="teal"
          variant="outline"
          onClick={hadleLogOut}
        >
          Log Out
        </Button>
      </Hide>
    </Box>
  );
};

export default UserMenu;
