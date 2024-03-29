import { app, BrowserWindow } from 'electron'
import path from 'path'

let browserWindow = null

const createWindow = () => {
  browserWindow = new BrowserWindow({ width: 1024, height: 768 })
  browserWindow.loadURL(path.join('file://', __dirname, '../renderer/index.html'))
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
