import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiClient from "../../utils/api/api";
import { toast } from "sonner";
import Cookies from "js-cookie";
import axios from "axios";

export const signUpUser = createAsyncThunk(
  'auth/signUpUser',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await apiClient.post('/users', userData);
      toast.success(response.data.message || "Signup successful!");
      return response.data;
    } catch (error) {
      if (error.code === "ERR_NETWORK" || error.message.includes("ERR_CONNECTION_REFUSED")) {
        return rejectWithValue("Server not reachable");
      }
      return rejectWithValue(error?.response?.data?.error || "Signup failed");
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await apiClient.post("/login", userData);
      return response.data;
    } catch (error) {
      if (error.code === "ERR_NETWORK" || error.message.includes("ERR_CONNECTION_REFUSED")) {
        return rejectWithValue("Server not reachable");
      }
      return rejectWithValue(error?.response?.data?.error || "Login failed");
    }
  }
);

export const fetchCurrentUser = createAsyncThunk(
  'auth/fetchCurrentUser',
  async (_, { rejectWithValue }) => {
    try {
      const token = Cookies.get('token');
      if (!token) {
        return rejectWithValue('No token found');
      }
      const port = import.meta.env.VITE_BACKEND_URL;
      const response = await axios.get(`${port}/current-user`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log('ifefejf' ,response.data);
      
      return response.data;
    } catch (error) {
      // if(error.response)
      toast.error(error.response?.data?.message || 'Failed to fetch current user');
      console.error("Failed to fetch current user:", error);
      const errorMessage = error.response?.data?.error || 'Session expired or invalid';
      Cookies.remove('token');
      return rejectWithValue(errorMessage);
    }
  }
);

const loadUserFromStorage = () => {
  try {
    const token = Cookies.get('token');
    if (token) {
      return { token, user: null, islogin: false };
    }
  } catch (e) {
    console.error("Could not read token from cookie", e);
    Cookies.remove('token');
  }
  return { token: null, user: null, islogin: false };
};

const initialState = {
  ...loadUserFromStorage(),
  loginLoading: false,
  signupLoading: false,
  loading: !!loadUserFromStorage().token, 
  error: null,
  status: 'idle',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      Cookies.remove('token');
      state.user = null;
      state.token = null;
      state.islogin = false;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
             //! Login api
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
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loginLoading = false;
        state.islogin = false;
        state.error = action.payload;
      })
             //! Sign up api

      .addCase(signUpUser.pending, (state) => {
        state.signupLoading = true;
        state.error = null;
      })
      .addCase(signUpUser.fulfilled, (state) => {
        state.signupLoading = false;
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.signupLoading = false;
        state.islogin = false;
        state.error = action.payload;
      })
                
         //! get-profile api

      .addCase(fetchCurrentUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.islogin = true;
      })
      .addCase(fetchCurrentUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.islogin = false;
        state.user = null;
        state.token = null; 
      });
  }
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
