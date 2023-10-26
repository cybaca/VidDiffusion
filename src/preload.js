// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

const os = require('os');
const child_process = require('child_process');
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('child_process', {
    // Node: () => process.
    spawn: () => child_process.spawn(),
    // ls: () => child_process.spawn('ls'),
});

contextBridge.exposeInMainWorld('os', {
    homedir: () => os.homedir(),
});
