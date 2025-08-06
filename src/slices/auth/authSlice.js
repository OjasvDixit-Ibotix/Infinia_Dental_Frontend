import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiClient from "../../utils/api/api";
import { toast } from "sonner";
import Cookies from "js-cookie";

// --- Async Thunks ---
// No changes needed here, the error handling is good.
export const signUpUser = createAsyncThunk(
  'auth/signUpUser',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await apiClient.post('/users', userData);
      return response.data;
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data.message || 'Signup failed');
      }
      return rejectWithValue('An unexpected network error occurred.');
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await apiClient.post('/login', userData);
      return response.data;
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data.message || 'Login failed');
      }
      return rejectWithValue('An unexpected network error occurred.');
    }
  }
);

// --- State Initialization ---

// CORRECTED: This function now safely checks for and parses data from cookies.
const loadUserFromStorage = () => {
  try {
    const token = Cookies.get('token');
    const userCookie = Cookies.get('user');

    // Only consider the user logged in if BOTH the token and user data exist.
    if (token && userCookie) {
      const user = JSON.parse(userCookie);
      return { token, user, islogin: true };
    }
  } catch (e) {
    console.error("Could not parse user data from cookie", e);
    // If parsing fails, clear out potentially corrupt cookies.
    Cookies.remove('token');
    Cookies.remove('user');
  }
  // Default state if not logged in.
  return { token: null, user: null, islogin: false };
};

const initialState = {
  ...loadUserFromStorage(),
  loading: false,
  error: null,
};

// --- Redux Slice ---

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
      // Login Cases
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        const { user, access_token } = action.payload;
        
        state.loading = false;
        state.islogin = true;
        state.user = user;
        state.token = access_token; 

        Cookies.set('token', access_token);
        Cookies.set('user', JSON.stringify(user));
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.islogin = false;
        state.error = action.payload;
        toast.error(action.payload || "Login failed!"); // Give user feedback
      })

      // SignUp Cases
      .addCase(signUpUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signUpUser.fulfilled, (state, action) => {
        const { user, token } = action.payload;
        
        state.loading = false;
        state.islogin = true;
        state.user = user;
        state.token = token;

        Cookies.set('token', token);
        Cookies.set('user', JSON.stringify(user));
        toast.success("Account created successfully!");
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.loading = false;
        state.islogin = false;
        state.error = action.payload;
        toast.error(action.payload || "Sign up failed!");
      });
  }
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;