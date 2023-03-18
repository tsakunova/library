import { createSlice } from '@reduxjs/toolkit';

import { UtilsState } from './types';

const initialState: UtilsState = {
  toast: null,
  isDescendingSort: true,
  searchString: '',
  modal: null,
};

export const utilsSlice = createSlice({
  name: 'utils',
  initialState,
  reducers: {
    setToast: (state, action) => {
      state.toast = action.payload;
    },
    hideToast: (state) => {
      state.toast = null;
    },
    setSortType: (state) => {
      state.isDescendingSort = !state.isDescendingSort;
    },
    setSearchString: (state, action) => {
      state.searchString = action.payload;
    },
    setModal: (state, action) => {
      state.modal = action.payload;
    },
    hideModal: (state) => {
      state.modal = null;
    },
  },
});
export const { setToast, hideToast, setSortType, setSearchString, setModal, hideModal } = utilsSlice.actions;
export const utilsReducer = utilsSlice.reducer;
