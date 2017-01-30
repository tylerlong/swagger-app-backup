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
        ]
      }
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

export default rendererConfig
