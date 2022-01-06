var path = require("path")
var { app, BrowserWindow } = require("electron")
app.commandLine.appendSwitch("enable-unsafe-webgpu")
app.commandLine.appendSwitch("use-dawn")

//dev server port
var PORT = 5000

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 960,
    height: 640
  })

  //mainWindow.loadURL(`http://localhost:${PORT}`)
  mainWindow.loadFile(path.join(__dirname, "index.html"))

  mainWindow.webContents.openDevTools({ mode: "detach" })
}

app.whenReady().then(createWindow)

app.on("exit", () => {
  process.exit(0)
})

process.on("SIGINT", () => {
  app.quit()
  process.exit(0)
})
