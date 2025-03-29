import { ipcMain } from "electron";
import fs from "fs/promises";
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

ipcMain.handle("write-file", async function (e, { fileName, data }) {
    try {
        const filePath = path.join(__dirname, `${fileName}.txt`);
        await fs.writeFile(filePath, data, "utf-8");
    } catch (e) {
        console.log(e);
    }
})
ipcMain.handle("create-file", async function (event, fileName) {
    try {
        const filePath = path.join(__dirname, `${fileName}.txt`);
        await fs.writeFile(filePath, "This is initial file content");
        console.log("File created successfully!");
    } catch (e) {
        console.log(e)
    }
})


ipcMain.handle("read-file", async function (e, fileName) {
    try {
        const filePath = path.join(__dirname, `${fileName}.txt`);
        const fileData = await fs.readFile(filePath, "utf-8");
        return fileData;

    } catch (e) {
        console.log("error while reading a file");
    }
})