const rules = [
  {
    test: /\.css$/,
    use: [
      { loader: 'style-loader' },
      { loader: 'css-loader' }
    ]
  }
]

export default rules
