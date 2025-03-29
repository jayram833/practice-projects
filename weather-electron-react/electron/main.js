import { app, BrowserWindow } from 'electron';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import installExtension from 'electron-devtools-installer';
import "./weather.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let mainWindow;

console.log('NODE_ENV:', process.env.NODE_ENV);
const createWindow = function () {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
            contextIsolation: true,
            enableRemoteModule: false,
            nodeIntegration: false,
        },
    });

    const isDev = process.env.NODE_ENV === "development" || !app.isPackaged;

    if (isDev) {
        mainWindow.loadURL("http://localhost:5173");
    } else {
        mainWindow.loadURL(`file://${join(__dirname, "../dist/index.html")}`);
    }

    if (process.env.NODE_ENV === "development") {
        installExtension.default(installExtension.REACT_DEVELOPER_TOOLS)
            .then((ext) => console.log(`Added Extension: ${ext.name}`))
            .catch((err) => console.log("Error installing extension:", err));
    }

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
};

app.whenReady().then(() => {
    createWindow();
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});