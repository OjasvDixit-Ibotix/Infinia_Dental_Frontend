import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../slices/auth/authSlice'
import leaveReducer from '../slices/leaveSlice'
export const store = configureStore({
    reducer :{
        auth : authReducer,
        leave: leaveReducer
    }
}) 

