import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'; 
import Cookies from 'js-cookie';
import apiClient from '../../utils/api/api';


const port = import.meta.env.VITE_BACKEND_URL
console.log(port);

const token = Cookies.get('token');
export const fetchEmployees = createAsyncThunk(
  'employees/fetchEmployees',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${port}/users`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'ngrok-skip-browser-warning': true,
        },
      });
      console.log('ddddssss',response.data);
      

      return response.data.users; 
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to fetch employees');
    }
  }
);


const initialState = {
  employees: [],
  status: 'idle',
  error: null,
};

const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployees.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchEmployees.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.employees = action.payload;
      })
      .addCase(fetchEmployees.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default employeesSlice.reducer;