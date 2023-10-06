import { configureStore } from '@reduxjs/toolkit'
import dataReducer from './freatures/dataSlice'

export const store = configureStore ({
    reducer: {
        data: dataReducer
    }
})