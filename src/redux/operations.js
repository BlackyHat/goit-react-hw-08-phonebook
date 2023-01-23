import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const contactsApi = axios.create({
  baseURL: 'https://63c53c1af3a73b3478512246.mockapi.io/contacts/',
});

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await contactsApi.get('/contacts');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContack',
  async (newContact, thunkAPI) => {
    try {
      const { data } = await contactsApi.post('/contacts', { ...newContact });
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const { data } = await contactsApi.delete(`/contacts/${contactId}`);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
