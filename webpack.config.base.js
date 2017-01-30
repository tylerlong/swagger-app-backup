const rules = [
  { test: /\.json$/, use: { loader: 'json-loader' } },
  { test: /\.css$/, use: { loader: 'style-loader!css-loader' } }
]

module.exports = rules
