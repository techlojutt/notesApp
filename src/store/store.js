import { configureStore } from "@reduxjs/toolkit";
import noteSliceReducer from './slices/notesSlice';
import authSliceReducer from './slices/authSlice';

export const store = configureStore({
    reducer: {
       notesSlice:noteSliceReducer,
       authSlice: authSliceReducer,
    }
})