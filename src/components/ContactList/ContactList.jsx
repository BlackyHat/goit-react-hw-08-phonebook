import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contacts-operations';
import PropTypes from 'prop-types';
import CustomToast from 'components/Toast';

import { DeleteIcon } from '@chakra-ui/icons';
import { Box, Flex, Avatar, Text, IconButton, Heading } from '@chakra-ui/react';

import { useContacts } from 'hooks';

export default function ContactList() {
  const dispatch = useDispatch();
  const { items, filter } = useContacts();
  const { addToast } = CustomToast();

  const onDeleteContact = delContactId => {
    dispatch(deleteContact(delContactId));
    addToast({
      info: `Contact deleted`,
      status: 'error',
    });
  };

  const getFilteredContacts = () => {
    const normaliziedFilter = filter.toLowerCase();
    return items.filter(({ name }) =>
      name.toLowerCase().includes(normaliziedFilter)
    );
  };

  const filteredContactsList = getFilteredContacts();
  return (
    <>
      {items.length > 0 && (
        <Flex w="100%" as="ul" wrap="wrap" justify="space-between" mb={12}>
          {filteredContactsList.map(({ id, name, number }) => {
            return (
              <Flex
                key={id}
                justify="space-between"
                w={['100%', '50%', '50%']}
                p="4"
                as="li"
                align="center"
              >
                <Avatar name={name} bg="teal.900"></Avatar>
                <Box textAlign="left">
                  <Heading size="sm" noOfLines={1}>
                    {name}
                  </Heading>
                  <Text noOfLines={1}>{number}</Text>
                </Box>

                <IconButton
                  aria-label="delete contact"
                  icon={<DeleteIcon />}
                  colorScheme="red"
                  variant="ghost"
                  onClick={() => onDeleteContact(id)}
                />
              </Flex>
            );
          })}
        </Flex>
      )}
    </>
  );
}

ContactList.propTypes = {
  filteredContactsList: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
