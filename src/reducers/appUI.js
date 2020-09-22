import { createSlice } from '@reduxjs/toolkit';
import { addItem } from './data';

const appUISlice = createSlice({
  name: 'appUI',
  initialState: {
    isModalShown: false,
  },
  reducers: {
    showModal(state) {
      state.isModalShown = true;
    },
    hideModal(state) {
      state.isModalShown = false;
    },
  },
  extraReducers: {
    [addItem]: (state) => {
      state.isModalShown = false;
    },
  },
});

export const { showModal, hideModal } = appUISlice.actions;
export default appUISlice.reducer;
