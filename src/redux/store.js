import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/auth-slice';
import { contactsReducer } from './contactsSlice';
import { filtersReducer } from './filterSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    contacts: contactsReducer,
    filters: filtersReducer,
  },
});
