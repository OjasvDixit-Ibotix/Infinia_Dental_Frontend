// src/slices/leaveHistorySlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import apiClient from '../utils/api/api';
import { useEffect } from 'react';

export const fetchLeaveHistory = createAsyncThunk(
  'leaveHistory/fetchLeaveHistory',
  async (_, { rejectWithValue }) => {
    try {
      const res = await apiClient.get('/current-user/leaves');
      return res.data.all_leaves;
    } catch (err) {
      return rejectWithValue(err.response?.data || 'Error fetching leave history');
    }
  }
);

const leaveHistorySlice = createSlice({
  name: 'leaveHistory',
  initialState: {
    leaves: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLeaveHistory.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchLeaveHistory.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.leaves = action.payload;
      })
      .addCase(fetchLeaveHistory.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default leaveHistorySlice.reducer;
