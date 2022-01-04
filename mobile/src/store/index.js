import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import alert from '../reducers/alert';
import load from '../reducers/load';

const store = configureStore({
  reducer: {
    load,
    alert,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
export default store;
