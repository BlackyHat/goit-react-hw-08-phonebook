import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: { value: '' },
  reducers: {
    updateFilter: {
      reducer(state, action) {
        state.value = action.payload;
      },
    },
  },
});
export const { updateFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
