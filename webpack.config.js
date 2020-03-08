var webpack  = require('webpack');
var path = require('path');
var HWP = require('html-webpack-plugin');

module.exports ={
    entry:'./src/index.js',
    output:{
        path:path.join(__dirname,'/dist'),
        filename:'index_bundle.js'
    },
    module: {
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude:/node_modules/,
                use:{
                    loader:"babel-loader"
                }
            }
        ]
    },
    plugins: [
        new HWP({
            template:'./public/index.html'
        }),
        new webpack.HotModuleReplacementPlugin(),
        // new webpack.NoErrorsPlugin()
    ]
}