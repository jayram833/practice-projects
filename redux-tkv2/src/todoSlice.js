import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: []
}

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo(state, action) {
            state.todos.push(action.payload)
        },
        deleteTodo(state, action) {
            state.todos = state.todos.filter(i => i.id !== action.payload)
        }
    }
})


export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;