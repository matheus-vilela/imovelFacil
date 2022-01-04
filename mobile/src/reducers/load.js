import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  status: false,
};

export const loadSlice = createSlice({
  name: 'load',
  initialState,
  reducers: {
    setShowLoader: (state, action) => {
      state.status = action.payload?.status;
    },
  },
});

export const { setShowLoader } = loadSlice.actions;

export default loadSlice.reducer;
