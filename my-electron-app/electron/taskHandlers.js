import { ipcMain } from "electron";
import { readTasks, writeTasks, deleteTask } from "./fileOperations.js"


ipcMain.handle("add-task", async function (event, newTask) {
    try {
        const tasks = await readTasks();
        const updatedTasks = [...tasks, newTask];
        await writeTasks(updatedTasks);
        return { success: true, message: "Task Added Successfully", tasks: updatedTasks }
    } catch (e) {
        console.error("Error Adding Task", e);
        return { success: false, message: "Failed to add task" }
    }
})


ipcMain.handle("fetch-tasks", async function () {
    try {
        const tasks = await readTasks();
        return { success: true, tasks };
    } catch (e) {
        console.error("Error reading tasks:", error);
        return { success: false, message: "Failed to load tasks" };
    }
})

ipcMain.handle("delete-task", async function (event, taskId) {
    return await deleteTask(taskId);
})