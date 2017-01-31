import { app, BrowserWindow } from 'electron'
import path from 'path'
import url from 'url'

let browserWindow

function createWindow () {
  browserWindow = new BrowserWindow({ width: 800, height: 600 })
  browserWindow.loadURL(url.format({
    pathname: path.join(__dirname, '../renderer/index.html'),
    protocol: 'file:',
    slashes: true
  }))

  browserWindow.webContents.openDevTools()

  browserWindow.on('closed', () => {
    browserWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (browserWindow === null) {
    createWindow()
  }
})
