var webpack = require('webpack');
var path = require('path');
var ManifestPlugin = require('webpack-manifest-plugin');
var ChunkManifestPlugin = require('chunk-manifest-webpack-plugin');
var WebpackMd5Hash = require('webpack-md5-hash');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var InlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin');
module.exports = {
  entry:{
    vendor: [ 
    'react', 
    'react-dom',
    'react-router',
    'superagent',
    'redux',
    'react-redux',
    'moment',
        ]
  },
  devtool: 'source-map',
  output:{
    filename:'[name].[chunkhash].dll.js',
    path:path.resolve( __dirname, './dll' ),
    library: "[name]_[hash]",
  },
  plugins:[
      new WebpackMd5Hash(),
    new ManifestPlugin(),
    new HtmlWebpackPlugin({ //根据模板插入css/js等生成最终HTML
      filename: '../index.html', //生成的html存放路径，相对于 path
      template: './public/index.html', //html模板路径
      inject: true, //允许插件修改哪些内容，包括head与body
      hash: true, //为静态资源生成hash值
    }),
         new InlineManifestWebpackPlugin({
        name: 'webpackManifest'
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DllPlugin({
      path:path.resolve( __dirname, './dll/[name]-manifest.json'),
      name: "[name]_[hash]"
    }),
    new webpack.DefinePlugin({'process.env.NODE_ENV': '"production"'}),
      new webpack.optimize.UglifyJsPlugin({
      test: /(\.jsx|\.js)$/,
      output: {
        comments: false,  // 去掉所有注释
      },
      compress: {
        warnings: false // 去掉所有警告
      },
    })
    
  ]
}