import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
  name: 'data',
  initialState: [],
  reducers: {
    addItem(state) {
      state.push('Some item');
    },
  },
});

export const { addItem } = dataSlice.actions;
export default dataSlice.reducer;
