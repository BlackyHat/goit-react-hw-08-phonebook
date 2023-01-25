import { useDispatch } from 'react-redux';

import { Box, Avatar, AvatarBadge, Text, Button } from '@chakra-ui/react';
import { logOut } from 'redux/auth/auth-operations';
import { useAuth } from 'hooks/useAuth';

export const UserMenu = () => {
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
    </Box>
  );
};
