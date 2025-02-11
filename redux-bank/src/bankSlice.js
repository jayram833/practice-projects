import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  balance: 0,
  loan: 0,
};

const bankSlice = createSlice({
  name: "bank",
  initialState,
  reducers: {
    deposit: (state, action) => {
      state.balance += action.payload;
    },
    withdraw: (state, action) => {
      state.balance -= action.payload;
    },
    loan: (state, action) => {
      state.balance += action.payload;
      state.loan += action.payload;
    },
  },
});

export default bankSlice.reducer;
export const { deposit, withdraw, loan } = bankSlice.actions;
