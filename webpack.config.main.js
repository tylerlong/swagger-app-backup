const rules = require('./webpack.config.base')

const mainRules = [
  {
    test: /\.js$/,
    loader: 'babel-loader',
    exclude: ['./node_modules'],
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

const mainConfig = {
  target: 'electron-main',
  entry: './main/index.js',
  output: {
    filename: 'bundle.js',
    path: './main'
  },
  node: { // Don't mock the following:
    __dirname: false,
    __filename: false
  },
  module: { rules: rules.concat(mainRules) }
}

module.exports = mainConfig
