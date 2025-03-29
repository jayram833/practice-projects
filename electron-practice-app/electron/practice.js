import { clipboard, dialog, ipcMain } from "electron";

ipcMain.handle("copy-text", async function (_, text) {
    await clipboard.writeText(text);
})

ipcMain.handle("paste-text", async function () {
    return await clipboard.readText();
})

ipcMain.handle("show-dialog", async function (event, text) {
    try {
        const response = await dialog.showMessageBox({
            type: "info",
            title: "Information",
            message: text,
            detail: "This is to test dialog",
            buttons: ["Yes", "No", "Cancel"],
            defaultId: 0,
            cancelId: 2
        });
        console.log(response)
    } catch (err) {
        console.log(err)
    }
})