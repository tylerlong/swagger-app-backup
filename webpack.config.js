const rules = [
  { test: /\.json$/, use: 'json-loader' },
  { test: /\.css$/, use: 'style-loader!css-loader' }
]

const mainConfig = {
  target: 'electron-main',
  entry: './main/index.js',
  output: {
    filename: 'bundle.js',
    path: './main'
  },
  node: { // Please don't mock the following:
    __dirname: false,
    __filename: false
  },
  module: { rules }
}

const rendererConfig = {
  target: 'electron-renderer',
  entry: './renderer/index.js',
  output: {
    filename: 'bundle.js',
    path: './renderer'
  },
  module: { rules }
}

module.exports = [
  mainConfig,
  rendererConfig
]
