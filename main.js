const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

let win;


app.whenReady().then(() => {
    win = new BrowserWindow({
        width: 320,
        height: 420,
        resizable: false,
        webPreferences: {
            preload: path.join(__dirname, 'Pomodoro', 'preload.js'),
            contextIsolation: true,
            nodeIntegration: false,
        },
        frame: false,
        transparent: true,
    });
    win.loadFile('Pomodoro/index.html');
});

ipcMain.on('close-window', (event) => {
  const win = BrowserWindow.fromWebContents(event.sender);
  win.close();
});
ipcMain.on('minimize-window', (event) => {
    const win = BrowserWindow.fromWebContents(event.sender);
    win.minimize();
  });

  