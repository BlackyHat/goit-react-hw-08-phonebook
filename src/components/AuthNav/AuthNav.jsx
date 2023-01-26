import { ButtonGroup } from '@chakra-ui/react';
import NavButton from 'components/NavButton/NavButton';

const AuthNav = () => {
  return (
    <ButtonGroup>
      <NavButton to="/register" label="Register" />
      <NavButton to="/login" label="Log in" />
    </ButtonGroup>
  );
};

export default AuthNav;
