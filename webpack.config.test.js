const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  context: __dirname,
  devtool: 'source-map',
  entry: {
    test: './src-test/test.jsx',
  },
  output: {
    path: path.join(__dirname, 'test'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.pdf$/,
        use: 'url-loader',
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader',
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  plugins: [
    new webpack.IgnorePlugin(/pdf.worker.js/),
    new CopyWebpackPlugin([
      { from: './src-test/index.html' },
      { from: './src-test/test.pdf' },
      {
        from: 'node_modules/pdfjs-dist/build/pdf.worker.min.js',
        to: 'pdf.worker.js',
      },
    ]),
  ],
};