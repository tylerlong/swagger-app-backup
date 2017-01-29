const rules = require('./webpack.config.base')

const rendererRules = [
  {
    test: /\.js$/,
    loader: 'babel-loader',
    exclude: ['./node_modules'],
    query: {
      presets: [
        ['env', {
          'targets': {
            'browsers': ['last 2 Chrome versions']
          }
        }],
        'react'
      ]
    }
  }
]

const rendererConfig = {
  target: 'electron-renderer',
  entry: './renderer/index.js',
  output: {
    filename: 'bundle.js',
    path: './renderer'
  },
  module: { rules: rules.concat(rendererRules) }
}

module.exports = rendererConfig
