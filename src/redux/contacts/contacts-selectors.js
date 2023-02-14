import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectFilterValue = state => state.filters.value;

export const selectFilteredContactList = createSelector(
  [selectContacts, selectFilterValue],
  (items, filter) => {
    const filteredContactsList = filter.toLowerCase();
    return items.filter(({ name }) =>
      name.toLowerCase().includes(filteredContactsList)
    );
  }
);
