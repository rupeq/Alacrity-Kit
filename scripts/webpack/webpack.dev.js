const { root } = require('../../settings.ts');

const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

config = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: path.join(root, 'static'),
    compress: true,
    port: 3000,
    historyApiFallback: true,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(root, 'static', 'index.html'),
    }),
  ],
};

module.exports = config;
