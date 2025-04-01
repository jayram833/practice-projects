import { ipcMain } from "electron";
import { addTodo, getTodos, deleteTodo } from "./fileOperations.js";


ipcMain.handle("add-todo", async function (event, newTodo) {
    try {
        const todos = await getTodos();
        const updatedTodos = [...todos, newTodo];
        await addTodo(updatedTodos);
        return { success: true, message: "Todo Added Successfully", todos: updatedTodos }
    } catch (e) {
        console.error("Error Adding Todo", e);
        return { success: false, message: "Failed to add todo" }
    }
})


ipcMain.handle("get-todos", async function () {
    try {
        const todos = await getTodos();
        return { success: true, message: "Fetched todos Successfully", todos }
    } catch (e) {
        console.error("Error Getting Todos", e);
        return { success: false, message: "Failed to get todos" }
    }
})


ipcMain.handle("delete-todo", async function (event, todoID) {
    await deleteTodo(todoID);
})