import { Spinner, Center } from '@chakra-ui/react';
const Loading = () => {
  return (
    <Center pt="24">
      <Spinner
        thickness="4px"
        speed="0.55s"
        emptyColor="gray.200"
        color="red.500"
        size="xl"
      />
    </Center>
  );
};

export default Loading;
