const webpack = require('webpack');
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const path = require('path');
const min = process.env.MIN === 'true'
const standalone = process.env.STANDALONE === 'true'

let plugins = [new webpack.ProvidePlugin({ 
  $: 'jquery',
  jQuery: 'jquery',
  'window.jQuery': 'jquery',
  Popper: ['popper.js', 'default']
})]

const libraryName = 'bootstrap'
let outputFile
if (min) {
  plugins.push(new UglifyJsPlugin({ 
    minimize: true 
  }));
  outputFile = !standalone ? libraryName + '.bundle.min.js' : libraryName + '.min.js'
} else {
  outputFile = !standalone ? libraryName + '.bundle.js' : libraryName + '.js';
}

const externals = {
  jquery: 'jQuery'
}
if (standalone) {
  externals['popper.js'] = 'Popper'
}

module.exports = {
  entry: __dirname + '/../js/src/index.js',
  output: {
    path: __dirname + '/../dist/js',
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  plugins: plugins,
  externals: externals
}
