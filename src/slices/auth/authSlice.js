import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiClient from "../../utils/api/api";
import { toast } from "sonner";
import Cookies from "js-cookie";
// import ls from '../../utils/secureStorage'

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


const loadUserFromStorage = () => {
  try {
    // const token = localStorage.getItem('token');
    // const user = JSON.parse(localStorage.getItem('user'));
    // if (token && user) {
    //   return { token, user, islogin: true };
    // }
    // else{
    //   toast.warning('Could not load data')

    // }
    const token = Cookies.get('token');
    const user = JSON.parse(Cookies.get('user'));
    if(token || user){
      return { token, user, islogin: true };
    }
    else{
      toast.warning('Could not load data')
    }

  } catch (e) {
    console.error("Could not load user data from storage", e);
  }
  return { token: null, user: null, islogin: false };
};

const initialState = {
  ...loadUserFromStorage(),
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      Cookies.remove('token');
      Cookies.remove('user');
      // localStorage.removeItem('token');
      // localStorage.removeItem('user');
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
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        const { user, token ,password } = action.payload;
        console.log(user,token)
        state.loading = false;
        state.islogin = true;
        state.user = user;
        state.token = token;
//      ls.set('user', JSON.stringify(user)); 
//      ls.set('token', token);
          
        Cookies.set('token', token);       
        Cookies.set('user', JSON.stringify(user)); 
        // Cookies.set('pass_key', JSON.stringify(password));

        // localStorage.setItem('user', JSON.stringify(user));
        // localStorage.setItem('token', token);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.islogin = false;
        state.error = action.payload;
      })

      .addCase(signUpUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signUpUser.fulfilled, (state, action) => {
        const { user, token  } = action.payload;
        state.loading = false;
        state.islogin = true;
        state.user = user;
        state.token = token;
         Cookies.set('user', JSON.stringify(user));
         Cookies.set('token', token);

        // localStorage.setItem('user', JSON.stringify(user));
        // localStorage.setItem('token', token);
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.loading = false;
        state.islogin = false;
        state.error = action.payload;
      });
  }
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;