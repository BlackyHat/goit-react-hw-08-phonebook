import { useSelector } from 'react-redux';
import {
  selectContacts,
  selectIsLoading,
  selectError,
  selectFilterValue,
  selectFilteredContactList,
} from 'redux/contacts/contacts-selectors';

export const useContacts = () => {
  return {
    items: useSelector(selectContacts),
    isLoadind: useSelector(selectIsLoading),
    isError: useSelector(selectError),
    filter: useSelector(selectFilterValue),
    filteredContactsList: useSelector(selectFilteredContactList),
  };
};
