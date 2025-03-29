import { BrowserWindow, app } from "electron";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import installExtension from "electron-devtools-installer";
import "./practice.js"

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let mainWindow;


const createWindow = function () {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
            contextIsolation: true,
        }
    })


    mainWindow.loadURL("http://localhost:5173");

    installExtension.default(installExtension.REACT_DEVELOPER_TOOLS)
        .then((ext) => console.log(`Added Extension: ${ext.name}`))
        .catch((err) => console.log(`Error installing extension: ${err}`));


    mainWindow.on("closed", function () {
        mainWindow = null
    })
}

app.whenReady().then(() => {
    createWindow();
    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    })
})

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") app.quit();
})
