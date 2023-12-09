import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../Redux/UserSlice';
import chartReducer from '../Redux/ChartSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    chart: chartReducer,
  },
});
