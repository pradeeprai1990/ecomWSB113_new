
import { configureStore } from "@reduxjs/toolkit";
import loginStatusSlice from "../features/loginStatusSlice";

export const store=configureStore({
    reducer:{
        loginStatus:loginStatusSlice
    }
})