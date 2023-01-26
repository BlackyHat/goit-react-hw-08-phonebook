import { useSelector } from 'react-redux';
import { getIsLoading, getError } from 'redux/selectors';

// import Section from 'components/Section/Section';
import Filter from 'components/FilterContacts/FilterContacts';
import ContactList from 'components/ContactList/ContactList';
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { fetchContacts } from 'redux/operations';

import { Box, Flex, Text } from '@chakra-ui/react';
import { LoginButtons } from 'components/LoginButtons/LoginButtons';
// import WelcomeLogo from './welcome_logo.jpg';
import ContactForm from 'components/ContactForm/ContactForm';
import BasicModal from 'components/BasicModal/BasicModal';
import { useAuth } from 'hooks/useAuth';

const Contacts = () => {
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const { isLoggedIn } = useAuth();
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <Box w="100%">
      {!isLoggedIn ? (
        <Box
          w="100%"
          justify="center"
          align="center"
          direction="column"
          py="24"
          // bgImage={`url('${WelcomeLogo}')`}
          bgPosition="center"
          bgRepeat="no-repeat"
        >
          <Text as="h1" mb="12" fontSize="36" p="8">
            Welcome to iBook Contacts service
          </Text>
          <LoginButtons gap="8" />
        </Box>
      ) : (
        <>
          {' '}
          <Flex align="center" justify="space-between" mb="4">
            <Text as="h2" fontSize="xl">
              Contacts
            </Text>
            <BasicModal>
              <ContactForm />
            </BasicModal>
          </Flex>
          <Filter />
          {isLoading && !error && <p>Loading...</p>}
          <ContactList />
        </>
      )}
    </Box>
  );
};

export default Contacts;
