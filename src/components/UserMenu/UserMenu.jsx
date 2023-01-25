import { useDispatch, useSelector } from 'react-redux';
import { getUserName } from 'redux/auth/auth-selectors';

import { Box, Avatar, AvatarBadge, Text, Button } from '@chakra-ui/react';
import { logOut } from 'redux/auth/auth-operations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { name } = useSelector(getUserName);
  return (
    <Box
      display="flex"
      mt="2"
      alignItems="center"
      justifyContent="center"
      gap="4"
    >
      <Avatar name={name} bg="teal.900">
        <AvatarBadge boxSize="1.25em" bg="green.500" />
      </Avatar>
      <Text fontSize="lg">{name} </Text>

      <Button
        type="button"
        colorScheme="teal"
        variant="outline"
        onClick={() => dispatch(logOut())}
      >
        Log Out
      </Button>
    </Box>
  );
};
