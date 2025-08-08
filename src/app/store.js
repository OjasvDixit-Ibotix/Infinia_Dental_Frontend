import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../slices/auth/authSlice'
import leaveReducer from '../slices/leaveSlice'
import empReducer from '../slices/employee/employeesSlice'
import leaveHistoryReducer from '../slices/leaveHistorySlice';

export const store = configureStore({
    reducer :{
        auth : authReducer,
        leave: leaveReducer,
        emp:empReducer,
        leaveHistory:leaveHistoryReducer,
        
    }
}) 

