var path = require('path');
var webpack = require('webpack');
var node_modules = path.resolve(__dirname, 'node_modules');
var path_polyfill = path.resolve(node_modules, 'babel-polyfill/dist/polyfill.min.js');

module.exports = {
    devServer: {
        historyApiFallback: true,
        //hot: true,        //加上这个就无法自动刷新
        inline: true,
        port:8080
    },
    entry:{
        "vue": './vue/app.js'
    },
  resolve: {
      alias: {
          'babel-polyfill':path_polyfill
      },
    extensions: ['.js']
  },
  output: {
    path: path.join(__dirname, 'vue/dist'),
    filename: '[name].js',
    //publicPath: 'http://localhost:8080'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js/,
        loaders: ['babel-loader' ],
        exclude: /node_modules/,
        include: __dirname
      },
        { test: /\.vue$/, loader: 'vue-loader' },
      {
        test: /\.css$/,
        //use: [{loader:'style-loader'}, {loader:'css-loader',options:{modules:true}}],
        use: ['style-loader','css-loader']
      },
        {
            test:/\.scss$/,
            use:['style-loader','css-loader','sass-loader']
        }
    ]
  }
};






