const { contextBridge, ipcRenderer } = require("electron")


contextBridge.exposeInMainWorld("electron", {
    createFile: (data) => ipcRenderer.invoke("create-file", data),
    writeFile: (fileName, data) => ipcRenderer.invoke("write-file", { fileName, data }),
    readFile: (fileName) => ipcRenderer.invoke("read-file", fileName)
})