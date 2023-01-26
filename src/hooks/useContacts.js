import { useSelector } from 'react-redux';
import {
  selectContacts,
  selectIsLoading,
  selectError,
  selectFilterValue,
} from 'redux/contacts/contacts-selectors';

export const useContacts = () => {
  return {
    items: useSelector(selectContacts),
    isLoadind: useSelector(selectIsLoading),
    isError: useSelector(selectError),
    filter: useSelector(selectFilterValue),
  };
};
