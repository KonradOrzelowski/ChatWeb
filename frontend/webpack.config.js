const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.MODE': JSON.stringify(process.env.MODE),
      'process.env.PORT': JSON.stringify(process.env.PORT),
      'process.env.HOST_NAME': JSON.stringify(process.env.HOST_NAME)
    })
  ]
};
