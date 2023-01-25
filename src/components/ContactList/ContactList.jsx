import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilterValue } from 'redux/selectors';
import { deleteContact } from 'redux/operations';
import PropTypes from 'prop-types';
import { Button } from '@chakra-ui/react';

import { BsTelephoneForward, BsPersonX } from 'react-icons/bs';
import { FilteredList, FilteredListItem } from './ContactList.styled';

export default function ContactList() {
  const dispatch = useDispatch();
  const items = useSelector(getContacts);
  const filter = useSelector(getFilterValue);

  const onDeleteContact = delContactId => {
    dispatch(deleteContact(delContactId));
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
        <FilteredList>
          {filteredContactsList.map(({ id, name, number }) => {
            return (
              <FilteredListItem key={id}>
                <p>
                  <BsTelephoneForward />
                  {name + ': ' + number}{' '}
                </p>
                <Button
                  colorScheme="red"
                  type="button"
                  variant="outline"
                  align="center"
                  size="sm"
                  onClick={() => onDeleteContact(id)}
                >
                  <BsPersonX size={14} />
                </Button>
              </FilteredListItem>
            );
          })}
        </FilteredList>
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
