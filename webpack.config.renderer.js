import path from 'path'
import rules from './webpack.config.base'

const rendererRules = [
  {
    test: /\.js$/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: [
          ['env', {
            'targets': {
              'browsers': ['last 2 Chrome versions']
            }
          }],
          'react'
        ],
        plugins: [['import', { libraryName: 'antd', style: 'css' }]]
      }
    }
  }
]

const rendererConfig = {
  target: 'electron-renderer',
  entry: './renderer/index.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, './renderer')
  },
  module: { rules: rules.concat(rendererRules) }
}

export default rendererConfig
