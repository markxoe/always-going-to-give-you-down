const electron = require("electron");
const dc = require("discord-rpc");
const app = electron.app;
let mainWindow;

const dcClient = new dc.Client({ transport: "ipc" });

const create = () => {
  mainWindow = new electron.BrowserWindow({
    fullscreen: true,
    closable: false,
    alwaysOnTop: true,
    movable: false,
  });
  mainWindow.loadFile("index.html");
  mainWindow.setMenu(null);
  dcClient.login({ clientId: "841407204312743967" }).then(() => {
    dcClient.setActivity({ state: "Rickrollt sich selber" });
  });
};

app.on("ready", create);
