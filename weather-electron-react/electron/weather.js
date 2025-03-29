import { ipcMain } from "electron";

ipcMain.handle("log-message", async function (e, message) {
    try {
        console.log(message)
    } catch (e) {
        console.error(e)
    }

})