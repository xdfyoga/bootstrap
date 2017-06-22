const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: {
    Util: path.resolve(__dirname, '../js/src/util.js'),
    Alert: path.resolve(__dirname, '../js/src/alert.js'),
    Button: path.resolve(__dirname, '../js/src/button.js'),
    Carousel: path.resolve(__dirname, '../js/src/carousel.js'),
    Collapse: path.resolve(__dirname, '../js/src/collapse.js'),
    Dropdown: path.resolve(__dirname, '../js/src/dropdown.js'),
    Modal: path.resolve(__dirname, '../js/src/modal.js'),
    Popover: path.resolve(__dirname, '../js/src/popover.js'),
    Scrollspy: path.resolve(__dirname, '../js/src/scrollspy.js'),
    Tab: path.resolve(__dirname, '../js/src/tab.js'),
    Tooltip: path.resolve(__dirname, '../js/src/tooltip.js')
  },
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, '../js/dist'),
    filename: '[name].js'.toLowerCase(),
    library: '[name]'.toLowerCase(),
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
  plugins: [new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    'window.jQuery': 'jquery',
    Popper: ['popper.js', 'default']
  })],
  externals: {
    jquery: 'jQuery',
    'popper.js': 'Popper',
    './util': 'Util',
    './tooltip': 'Tooltip'
  }
}
