import { app, BrowserWindow } from 'electron';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import installExtension from 'electron-devtools-installer';
import "./taskHandlers.js";
import { autoUpdater } from 'electron-updater';

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
            enableRemoteModule: false,
            nodeIntegration: false,
        },
    });

    const isDev = process.env.NODE_ENV === "development" || !app.isPackaged;

    if (isDev) {
        mainWindow.loadURL("http://localhost:5173");
        checkForUpdates();
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
function checkForUpdates() {
    autoUpdater.checkForUpdatesAndNotify();

    autoUpdater.on('update-available', () => {
        dialog.showMessageBox({
            type: 'info',
            title: 'Update Available',
            message: 'A new version is available. Downloading now...',
        });
    });

    autoUpdater.on('update-downloaded', () => {
        dialog
            .showMessageBox({
                type: 'info',
                title: 'Update Ready',
                message: 'Install the update and restart now?',
                buttons: ['Restart', 'Later'],
            })
            .then((result) => {
                if (result.response === 0) {
                    autoUpdater.quitAndInstall();
                }
            });
    });
}

app.whenReady().then(() => {
    createWindow();
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});
