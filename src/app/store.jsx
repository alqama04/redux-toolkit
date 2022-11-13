import{configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import postReducer from '../features/postSlice'
export const store = configureStore({
    reducer:{
        counter:counterReducer,
        posts:postReducer
    }
})