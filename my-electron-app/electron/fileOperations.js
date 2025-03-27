import fs from "fs/promises";
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const TASKS_FILE = path.join(__dirname, "tasks.json");

async function ensureFileExists() {
    try {
        await fs.access(TASKS_FILE);
    } catch {
        await fs.writeFile(TASKS_FILE, "[]", "utf-8");
    }
}

async function readTasks() {
    try {
        await ensureFileExists();
        const data = await fs.readFile(TASKS_FILE, "utf-8");
        return JSON.parse(data);
    } catch (e) {
        console.error("Error reading tasks:", e);
        return [];
    }
}

async function writeTasks(tasks) {
    try {
        await fs.writeFile(TASKS_FILE, JSON.stringify(tasks, null, 2), "utf-8");
    } catch (e) {
        console.error("Error writing tasks:", e);
    }
}

async function deleteTask(taskId) {
    try {
        const tasks = await readTasks();
        const updatedTasks = tasks.filter(task => task.id !== taskId);
        await writeTasks(updatedTasks);
        return { success: true, message: "Task deleted successfully", tasks: updatedTasks };
    } catch (e) {
        console.error("Error deleting task:", e);
        return { success: false, message: "Failed to delete task" };
    }
}

export { readTasks, writeTasks, deleteTask };
