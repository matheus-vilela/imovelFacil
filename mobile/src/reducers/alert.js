import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  status: false,
  title: '',
  description: '',
  detail: '',
  footer: '',
  options: [
    {
      title: 'OK',
      action: () => {},
    },
  ],
};

export const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    showAlert: (state, action) => {
      state.status = !state.status;
      state.title = action.payload?.title;
      state.description = action.payload?.description;
      state.detail = action.payload?.detail;
      state.footer = action.payload?.footer;
      state.options = action.payload?.options;
    },

    clearAlert: (state) => {
      state.status = false;
      state.title = '';
      state.description = '';
      state.detail = '';
      state.footer = '';
      state.options = [
        {
          title: 'OK',
          action: () => {},
        },
      ];
    },
  },
});

export const { showAlert, clearAlert } = alertSlice.actions;

export default alertSlice.reducer;
