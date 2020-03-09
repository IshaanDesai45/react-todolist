var webpack  = require('webpack');
var path = require('path');
var HWP = require('html-webpack-plugin');

module.exports ={
    
    entry:'./src/index.js',
    output:{
        path:path.join(__dirname,'/dist'),
        filename:'index_bundle.js',
        publicPath:'/'
    },
    
    module: {
        rules: [
           {
              test: /\.js$/,
              use: 'babel-loader',
           },
           {
              test: /\.css$/,
              use: ['style-loader', 'css-loader'],
           },
           
  ]
     },
    plugins: [
        new HWP({
            template:path.join(__dirname,'public/index.html'),
            filename:'index.html'
        }),
        new webpack.HotModuleReplacementPlugin(),
        // new webpack.NoErrorsPlugin()
    ]
}