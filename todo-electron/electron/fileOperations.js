import fs from "fs/promises";
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const TASKS_FILE = path.join(__dirname, "todos.json");

async function ensureFileExists() {
    try {
        await fs.access(TASKS_FILE);
    } catch {
        await fs.writeFile(TASKS_FILE, "[]", "utf-8");
    }
}

async function getTodos() {
    try {
        await ensureFileExists();
        const data = await fs.readFile(TASKS_FILE, "utf-8");
        return JSON.parse(data);
    } catch (e) {
        console.error("Error getting todos:", e);
        return [];
    }
}

async function addTodo(todo) {
    try {
        await fs.writeFile(TASKS_FILE, JSON.stringify(todo, null, 2), "utf-8");
    } catch (e) {
        console.error("Error writing tasks:", e);
    }
}

async function deleteTodo(todoID) {
    try {
        const todos = await getTodos();
        const updatedTodos = todos.filter(todo => todo.id !== todoID);
        await addTodo(updatedTodos);
        return { success: true, message: "Todo deleted successfully", todos: updatedTodos };
    } catch (e) {
        console.error("Error deleting todo:", e);
        return { success: false, message: "Failed to delete todo" };
    }
}

export { getTodos, addTodo, deleteTodo };