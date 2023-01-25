import { ButtonGroup, Button } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

export const LoginButtons = ({ ...props }) => {
  return (
    <ButtonGroup {...props}>
      <Button as={NavLink} to="/signup" colorScheme="teal" isActive>
        Sign Up
      </Button>
      <Button as={NavLink} to="/login" colorScheme="teal">
        Log in
      </Button>
    </ButtonGroup>
  );
};
