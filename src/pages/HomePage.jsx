import { Box, Text } from '@chakra-ui/react';

const HomePage = () => {
  return (
    <Box
      w="100%"
      justify="center"
      align="center"
      direction="column"
      py="24"
      bgPosition="center"
      bgRepeat="no-repeat"
    >
      <Text as="h1" fontSize="36" p="8">
        Welcome to Magic PhoneBook App
      </Text>
      <Text as="p" fontSize="xl" p="8">
        This app created by using react-create-app. Technology stack: React.js,
        React Router Dom, Redux Toolkit, Redux Persist, ChakraUI, Axios and
        other.
      </Text>
    </Box>
  );
};

export default HomePage;
