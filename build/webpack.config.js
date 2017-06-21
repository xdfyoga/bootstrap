const webpack = require('webpack')
const path = require('path')
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin
const min = process.env.MIN === 'true'
const standalone = process.env.STANDALONE === 'true'

const plugins = [new webpack.ProvidePlugin({
  $: 'jquery',
  jQuery: 'jquery',
  'window.jQuery': 'jquery',
  Popper: ['popper.js', 'default']
})]

const libraryName = 'bootstrap'
var outputFile
if (min) {
  plugins.push(new UglifyJsPlugin({
    minimize: true,
    mangle: {
      except: ['$', 'Popper']
    },
    comments: '/^!/'
  }))
  outputFile = !standalone ? libraryName + '.bundle.min.js' : libraryName + '.min.js'
} else {
  outputFile = !standalone ? libraryName + '.bundle.js' : libraryName + '.js'
}

const externals = {
  jquery: 'jQuery'
}
if (standalone) {
  externals['popper.js'] = 'Popper'
}

module.exports = {
  entry: path.resolve(__dirname, '../js/src/index.js'),
  output: {
    path: path.resolve(__dirname, '../dist/js'),
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
