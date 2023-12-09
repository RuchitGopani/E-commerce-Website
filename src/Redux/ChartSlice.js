import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createChart, getChart } from './API/ChartAPI';

const initialState = {
  charts: [],
  status: 'idle',
  error: null
};

export const createChartsAsync = createAsyncThunk(
    'charts/createCharts',
    async (values) => {
      const response = await createChart(values);
      // The value we return becomes the `fulfilled` action payload
      return response.data;
    }
  );
  export const getChartsAsync = createAsyncThunk(
    'charts/getCharts',
    async (values) => {
      const response = await getChart(values);
      // The value we return becomes the `fulfilled` action payload
      return response.data;
    }
  );


export const chartslice = createSlice({
  name: 'charts',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setchartfromLocalstorage: (state,action) => {
      state.charts = action.payload.chart;
    },
    setchartsEmpty: (state) => {
      state.charts = [];
    },
    setErrorNull: (state) => {
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(createChartsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createChartsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.charts = action.payload;
      })
      .addCase(getChartsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getChartsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.charts = action.payload;
      });
  },
});

export const { setchartfromLocalstorage, setchartsEmpty, setErrorNull } = chartslice.actions;

export const selectAllcharts = (state) => state.chart.charts;


export default chartslice.reducer;