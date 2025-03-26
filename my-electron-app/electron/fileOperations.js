import fs from "fs/promises";  // ✅ Use fs/promises
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const TASKS_FILE = path.join(__dirname, "tasks.json");

async function readTasks() {
    try {
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

export { readTasks, writeTasks };
