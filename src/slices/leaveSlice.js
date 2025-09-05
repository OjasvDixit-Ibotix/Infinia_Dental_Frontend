import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import apiClient from '../utils/api/api';

export const fetchLeaves = createAsyncThunk(
  'leave/fetchLeaves',
  async (_, { rejectWithValue }) => {
    try {
      const response = await apiClient.get('/all-leaves');
      console.log('all-leaves', response.data);
      return response.data.all_leaves;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);


const leaveSlice = createSlice({
  name: 'leave',
  initialState: {
    leaves: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLeaves.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLeaves.fulfilled, (state, action) => {
        state.loading = false;
        state.leaves = action.payload;
      })
      .addCase(fetchLeaves.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Something went wrong';
      });
  },
});

export default leaveSlice.reducer;
