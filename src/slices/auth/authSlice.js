import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiClient from "../../utils/api/api";
import { toast } from "sonner";
import Cookies from "js-cookie";
import { sign } from "chart.js/helpers";
import axios from "axios";

// import {jwtDecode} from "jwt-decode";

export const signUpUser = createAsyncThunk(
  'auth/signUpUser',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await apiClient.post('/users', userData);
      console.log(response)
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

export const getUserById = createAsyncThunk(
  'auth/getUserById',
  async (user_id, { rejectWithValue }) => {
    try {
      const port = import.meta.env.VITE_BACKEND_URL;
      const response = await axios.get(`${port}/users/${user_id}`,{
        headers: {
          Authorization: `Bearer ${Cookies.get('token')}`
        }
      });
      const token = Cookies.get('token');
      // console.log('decode value of token is ', jwtDecode(token));

      console.log('userbyid', response);
      
      return response.data.user;
    } catch (error) {
      console.error("Failed to fetch user:", error);
      const errorMessage = error.response?.data?.error || 'Failed to fetch user';
      toast.error(errorMessage);
      return rejectWithValue(errorMessage);
    }
  }
);

const loadUserFromStorage = () => {
  try {
    const token = Cookies.get('token');
    const user_id = Cookies.get('user_id');
    // console.log('efewfe',user);
    if (token && user_id) {
      // const user = JSON.parse(userCookie);
      return { token, user_id,  islogin: true };
    }
  } catch (e) {
    console.error("Could not parse user data from cookie", e);
    Cookies.remove('token');
    Cookies.remove('user_id');
  }
  return { token: null, user_id: null,  islogin: false };
};

const initialState = {
  ...loadUserFromStorage(),
  loginLoading: false,
  signupLoading:false,
  loading:false,
  error: null, 
  user: null,
  status:'idle',
};


const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      Cookies.remove('token');
      Cookies.remove('user_id');
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
        // console.log('user is ', user);
        
        Cookies.set('user_id', user.id);
        // Cookies.set('user', JSON.stringify(user.id));
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
      })

      .addCase(getUserById.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(getUserById.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.islogin = true;
      // console.log('uihfueif',state.user);
       
      // Cookies.set("user", JSON.stringify(action.payload)); 
    })
    .addCase(getUserById.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.islogin = false;
    });


  }
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;