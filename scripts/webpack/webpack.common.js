const path = require('path');
const { root } = require('../../settings.ts');

const dist = path.resolve(root, 'dist');
const src = path.resolve(root, 'src');
const components = path.resolve(root, 'components');
const babel = path.resolve(root, 'scripts', 'babel');

const config = {
  entry: [path.join(src, 'index.tsx')],
  output: {
    path: dist,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            configFile: path.join(babel, '.babelrc'),
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        use: ['file-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      components: components,
      src: src,
    },
  },
};

module.exports = config;
