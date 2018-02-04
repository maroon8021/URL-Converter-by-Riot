const electron = require('electron');
const {app} = electron;
const {BrowserWindow} = electron;
const {ipcMain} = electron;
// import crashReporter from 'crash-reporter';
//import {ipcMain} from "electron";

if(process.env.NODE_ENV === 'develop'){
  // crashReporter.start();
}

const rootPath = `file://${__dirname}`;
let mainWindow = null;

app.on('window-all-closed', () => {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', () => {
  mainWindow = new BrowserWindow({width: 600, height: 500});
  mainWindow.loadURL(`${rootPath}/index.html`);
  //mainWindow.webContents.openDevTools();
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
});

app.on("window-all-closed", () => {
  app.quit();
});

ipcMain.on("click-my-button", (sender, e) => {
  console.log(e);
});