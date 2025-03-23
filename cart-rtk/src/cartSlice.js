import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: []
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem(state, action) {
            state.cartItems.push(action.payload)
        },
        deleteItem(state, action) {
            state.cartItems = state.cartItems.filter(i => i.id !== action.payload)
        }
    }
})

export const { addItem, deleteItem } = cartSlice.actions;
export default cartSlice.reducer;