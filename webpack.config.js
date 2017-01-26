const mainConfig = {
  entry: './main/index.js',
  output: {
    filename: 'bundle.js',
    path: './main'
  },
  target: 'electron'
}

const rendererConfig = {
  entry: './renderer/index.js',
  output: {
    filename: 'bundle.js',
    path: './renderer'
  },
  target: 'electron-renderer'
}

module.exports = [
  mainConfig,
  rendererConfig
]
