import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiClient from "../../utils/api/api";
import { toast } from "sonner";
import Cookies from "js-cookie";
import { sign } from "chart.js/helpers";



export const signUpUser = createAsyncThunk(
  'auth/signUpUser',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await apiClient.post('/users', userData);
      toast.success(response.data.message || "Signup successful!");
      return response.data;
    } catch (error) {
      const errorMessage = error.response?.data?.error || 'Signup failed';
      toast.error(errorMessage);
      return rejectWithValue(errorMessage);
    }
  }
);


export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await apiClient.post('/login', userData);
      // console.log('logged in ');
      
      // toast.success(response.data.message || "Login successful!");
      return response.data;
    } catch (error) {
      // const errorMessage = error.response?.data?.error || 'Login failed';
      // toast.error(errorMessage);
      const errorMessage = 
        error.response?.data?.message || 
        error.response?.data?.error || 
        'Invalid credentials. Please try again.';
      
      return rejectWithValue(errorMessage);
    }
  }
);


const loadUserFromStorage = () => {
  try {
    const token = Cookies.get('token');
    const userCookie = Cookies.get('user');

    if (token && userCookie) {
      const user = JSON.parse(userCookie);
      return { token, user, islogin: true };
    }
  } catch (e) {
    console.error("Could not parse user data from cookie", e);
    Cookies.remove('token');
    Cookies.remove('user');
  }
  return { token: null, user: null, islogin: false };
};

const initialState = {
  ...loadUserFromStorage(),
  loginLoading: false,
  signupLoading:false,
  error: null, 
};


const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      Cookies.remove('token');
      Cookies.remove('user');
      state.user = null;
      state.token = null;
      state.islogin = false;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loginLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        const { user, access_token } = action.payload;
        
        state.loginLoading = false;
        state.islogin = true;
        state.user = user;
        state.token = access_token;
        
        Cookies.set('token', access_token);
        Cookies.set('user', JSON.stringify(user));
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loginLoading = false;
        state.islogin = false;
        state.error = action.payload;
      })

      .addCase(signUpUser.pending, (state) => {
        state.signupLoading = true;
        state.error = null;
      })
      .addCase(signUpUser.fulfilled, (state, action) => {    
        state.signupLoading = false;
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.signupLoading = false;
        state.islogin = false;
        state.error = action.payload;
      });
  }
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;