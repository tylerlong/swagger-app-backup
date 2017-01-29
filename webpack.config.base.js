const rules = [
  { test: /\.json$/, loader: 'json-loader' },
  { test: /\.css$/, loader: 'style-loader!css-loader' }
]

module.exports = rules
