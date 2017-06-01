import path from 'path'
import rules from './webpack.config.base'

const mainRules = [
  {
    test: /\.js$/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: [
          ['env', {
            'targets': {
              'electron': '1.6'
            }
          }]
        ]
      }
    }
  }
]

const mainConfig = {
  target: 'electron-main',
  entry: './main/index.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, './main')
  },
  node: { // Don't mock the following:
    __dirname: false,
    __filename: false
  },
  module: { rules: rules.concat(mainRules) }
}

export default mainConfig
