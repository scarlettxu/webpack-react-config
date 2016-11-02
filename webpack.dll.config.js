var webpack = require('webpack');
var path = require('path');
module.exports = {
  entry:{
    vendor: [ 
    'react', 
    'react-dom',
    'react-router'
        ]
  },
  output:{
    filename:'[name].dll.js',
    path:path.resolve( __dirname, './dll' ),
    library: "[name]_[hash]"
  },
  plugins:[
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