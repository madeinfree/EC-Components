var path = require('path');

module.exports = {
  entry: ['./source/public/main.js'],
  output: {
    path: path.resolve(__dirname, 'example/build/'),
    filename: "bundle.js",
    publicPath: 'example/assets/'
  }
};
