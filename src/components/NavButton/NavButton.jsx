import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';
import { Button, useColorMode } from '@chakra-ui/react';

const NavButton = ({ label, ...props }) => {
  const { colorMode } = useColorMode();
  const bgColor = colorMode === 'dark' ? 'teal.900' : 'teal.100';

  return (
    <Button
      {...props}
      as={NavLink}
      colorScheme="teal"
      variant="ghost"
      _activeLink={{
        backgroundColor: bgColor,
      }}
    >
      {label}
    </Button>
  );
};

export default NavButton;

NavButton.propTypes = {
  label: PropTypes.string.isRequired,
};
