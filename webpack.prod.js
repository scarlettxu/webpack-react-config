const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HappyPack = require('happypack');
const assetsPath = path.join(__dirname, 'dist');
const happyThreadPool = HappyPack.ThreadPool({
  size: 8
}); // webpack2 支持打包css

module.exports = {
  devtool: 'source-map', // 构建方式，eval 构建速度最快，不支持生产环境
  // 程序入口文件，多页面构建
  entry: {
    app: [
      './src/main' // 入口文件
    ]
  },
  progress: true,
  // 解析路径
  resolve: {
    root: path.resolve('src'),
    extensions: ['', '.js', '.jsx']
  },
  // 文件打包结果
  output: {
    path: assetsPath, // 打包好的资源位置
    filename: '[name].[chunkhash:8].js', // 这里的 name 对应入口文件里的值
    chunkFilename: '[name].[chunkhash:8].chunk.js', // 这里 name 对应 为出现在入口文件的打包文件，如异步加载的子路由
    publicPath: '/', // 使用url-loader 加载资源的前缀 .比如图片的前缀使用cdn
  },
  plugins: [

    new CleanPlugin([assetsPath]),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"',
    }),
    new ExtractTextPlugin('[name]-[chunkhash].css', {
      allChunks: true
    }),
    new HappyPack({
      id: 'js',
      threadPool: happyThreadPool
    }),
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require('./dll/vendor-manifest.json')
    }),
    new CopyWebpackPlugin([{
      from: __dirname + '/dll',
      to: assetsPath+ '/dll',
      ignore: ['*.json']
    }]),
    new webpack.optimize.CommonsChunkPlugin({
      name: "commons",
      filename: "[name].chunk.js",
    }),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      test: /(\.jsx|\.js)$/,
      output: {
        comments: false, // 去掉所有注释
      },
      compress: {
        warnings: false // 去掉所有警告
      },
    }),

    new HtmlWebpackPlugin({ //根据模板插入css/js等生成最终HTML
      favicon: './public/favicon.ico', //favicon路径
      chunks: ['app','commons'],
      filename: './index.html', //生成的html存放路径，相对于 path
      template: './public/index.html', //html模板路径
      inject: true, //允许插件修改哪些内容，包括head与body
      hash: true, //为静态资源生成hash值
      minify: { //压缩HTML文件
        removeComments: true, //移除HTML中的注释
        collapseWhitespace: true //删除空白符与换行符
      }
    })
  ],
  postcss: function() {
    return [require('autoprefixer'), require('precss')];
  },
  module: {
    loaders: [{
      test: /\.js$/, // 用正则表达式匹配文件格式
      loaders: ['babel'], // 加载器类型 react 热替换
      include: path.join(__dirname, 'src'),
      happy: {
        id: 'js'
      } // 多进程打包 
    },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader")
      },
      {
        test: /\.svg$/,
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=10000'
      },
    ]
  }
}
