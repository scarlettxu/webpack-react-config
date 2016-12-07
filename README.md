#About
项目包含的所有依赖

* babel-eslint 
* babel-loader 
* clean-webpack-plugin
* copy-webpack-plugin
* html-webpack-plugin
* autoprefixer
* css-loader
* eslint
* eslint-loader
* eslint-config-airbnb 代码风格使用airbnb风格
* eslint-plugin-react
* extract-text-webpack-plugin 把所有的css打包成一个文件
* file-loader 
* happypack 使用多进程编译Babel,webapck1不支持打包css 
* postcss-loader
* precss css预处理
* react
* react-dom
* react-hot-loader 代码热替换
* react-router
* redux 数据管理
* react-redux
* superagent 数据请求 
* moment 时间处理
* style-loader
* url-loader
* webpack
* webpack-dev-middleware
* webpack-dev-server
* webpack-hot-middleware


# Introduction
这个项目尽可能的使用webpack所有的优化建议来打包react代码，热加载，代码分割，dll等。开发和生产有两个配置文件，同学们可以不用纠结怎么配置webpack，开箱即用，查漏补缺也行。
#Getting Started
可以先看一下[webpack](https://webpack.github.io/docs/?utm_source=github&utm_medium=readme&utm_campaign=trdr)文档的quick Getting Started guide，效果更佳，在本项目的配置文件里我也尽量加了注释。
#Installation
    npm install
#Running Dev Server
    npm run dev
#Running Production
    npm run publish
    
#Features
####Plugins
持续更新webpack 优化插件
####Code
服务器渲染配置
服务器端渲染配置文件
####Update
升级到wepack2 正式版
