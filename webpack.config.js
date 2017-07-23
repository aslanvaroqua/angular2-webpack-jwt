module.exports = {
  entry: './main.ts',
  output: {
    filename: 'bundle.js'
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      }
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: [
          'file-loader'
        ]
      },
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      {
        test: /\.ts(x?)$/,
        loader: 'ts-loader'
      }
    ]
  }
}
