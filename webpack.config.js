const HtmlWebpackPlugin = require('html-webpack-plugin')

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
  module: { rules }
}

const rendererConfig = {
  target: 'electron-renderer',
  entry: './renderer/index.js',
  output: {
    filename: 'bundle.js',
    path: './renderer'
  },
  module: { rules },
  plugins: [
    new HtmlWebpackPlugin()
  ]
}

module.exports = [
  mainConfig,
  rendererConfig
]
