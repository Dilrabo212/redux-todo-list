import { configureStore } from "@reduxjs/toolkit";
import todoReduser from './todoSlice'


export const store = configureStore({
    reducer:{
        todos:todoReduser,
    }
})