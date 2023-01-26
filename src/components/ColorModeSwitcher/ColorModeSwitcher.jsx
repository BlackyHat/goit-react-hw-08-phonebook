import { IconButton, useColorMode } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

export default function ColorModeSwitcher() {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <>
      <IconButton
        aria-label="toggle theme"
        rounded="full"
        size="md"
        onClick={toggleColorMode}
        icon={colorMode !== 'dark' ? <FaSun /> : <FaMoon />}
      />
    </>
  );
}
