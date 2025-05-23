import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    balance: 0,
    loan: 0,
    loanPurpose: "",
    inLoading: false
}
const accountSlice = createSlice({
    name: "account",
    initialState,
    reducers: {
        deposit(state, action) {
            state.balance += action.payload
        },
        withdraw(state, action) {
            state.balance -= action.payload
        },
        requestLoan(state, action) {
            if (state.loan > 0) return;

            state.loan = action.payload.amount;

            state.loanPurpose = action.payload.purpose;
            state.balance = state.balance + action.payload.amount;
        },
        payLoan(state, action) {
            state.loan = 0;
            state.loanPurpose = "";
            state.balance -= state.loan;
        }
    }
})

export const { deposit, withdraw, requestLoan, payLoan } = accountSlice.actions;
export default accountSlice.reducer;