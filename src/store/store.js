import { configureStore } from "@reduxjs/toolkit";
import noteSliceReducer from './slices/notesSlice'

export const store = configureStore({
    reducer: {
       notesSlice:noteSliceReducer
    }
})