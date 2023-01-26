import { useDispatch } from 'react-redux';
import { useContacts } from 'hooks';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/contacts-operations';

import Filter from 'components/FilterContacts';
import ContactList from 'components/ContactList';
import ContactForm from 'components/ContactForm';
import BasicModal from 'components/BasicModal';
import Loading from 'components/Loading';
import { Box, Flex, Text } from '@chakra-ui/react';

const Contacts = () => {
  const { isLoading, error } = useContacts();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box w="100%" as="section">
      <Flex align="center" justify="space-between" my="12">
        <Text as="h2" fontSize="xl">
          Contacts
        </Text>
        <BasicModal id="add-contact">
          <ContactForm id="add-contact" />
        </BasicModal>
      </Flex>
      <Filter />
      {isLoading && !error && <Loading />}
      <ContactList />
    </Box>
  );
};

export default Contacts;
