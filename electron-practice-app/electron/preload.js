const { contextBridge, ipcRenderer } = require("electron");


contextBridge.exposeInMainWorld("electron", {
    copyText: (text) => ipcRenderer.invoke('copy-text', text),
    pasteText: () => ipcRenderer.invoke("paste-text"),
    showDialog: (text) => ipcRenderer.invoke("show-dialog", text)
})