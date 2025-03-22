import { configureStore } from "@reduxjs/toolkit";
import accountSlice from "./accountSlice";
import customerSlice from "./customerSlice";

const store = configureStore({
    reducer:{
        account: accountSlice,
        // customer:customerSlice
    }
});


export default store;