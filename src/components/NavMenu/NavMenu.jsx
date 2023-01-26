import { ButtonGroup } from '@chakra-ui/react';
import { useAuth } from 'hooks/useAuth';
import NavButton from 'components/NavButton';

const NavMenu = () => {
  const { isLoggedIn } = useAuth();
  return (
    <ButtonGroup>
      <NavButton to="/" label="Home" />
      {isLoggedIn && <NavButton to="/contacts" label="Contacts" />}
    </ButtonGroup>
  );
};
export default NavMenu;
