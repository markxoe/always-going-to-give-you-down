const electron = require("electron");
const app = electron.app;
let mainWindow;

const create = () => {
  mainWindow = new electron.BrowserWindow({
    fullscreen: true,
    closable: false,
    alwaysOnTop: true,
    movable: false,
  });
  mainWindow.loadFile("index.html");
  mainWindow.setMenu(null);
};

app.on("ready", create);
