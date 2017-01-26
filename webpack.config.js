const rules = [
  { test: /\.json$/, use: 'json-loader' },
  { test: /\.css$/, use: 'style-loader!css-loader' }
]

const mainRules = [
  {
    test: /\.js$/,
    loader: 'babel-loader',
    exclude: [ './node_modules' ],
    query: {
      presets: [
        ['env', {
          'targets': {
            'electron': 1.4
          }
        }]
      ]
    }
  }
]

const rendererRules = [
  {
    test: /\.js$/,
    loader: 'babel-loader',
    exclude: [ './node_modules' ],
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
  module: { rules: rules.concat(mainRules) }
}

const rendererConfig = {
  target: 'electron-renderer',
  entry: './renderer/index.js',
  output: {
    filename: 'bundle.js',
    path: './renderer'
  },
  module: { rules: rules.concat(rendererRules) }
}

module.exports = [
  mainConfig,
  rendererConfig
]
