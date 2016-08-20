const webpack = require('webpack');

module.exports = {
    context: __dirname,
    entry: {
        js: "./src/app.js",
        html: "./src/index.html"
    },
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    devtool: "#inline-source-map",
    module: {
        preLoaders: [
            {test: /\.tsx?$/, exclude: /node_modules/, loaders: ["tslint"]}
        ],
        loaders: [
            {test: /\.html$/, loader: "file?name=[name].[ext]"},
            {test: /\.css$/, loaders: ['style', 'css']},
            {test: /\.tsx?$/, exclude: /node_modules/, loaders: ["react-hot", "ts-loader"]},
            {test: /\.js$/, exclude: /node_modules/, loaders: ["babel-loader"]},
            // bootstrap.cssの中に使うWebFontを（デフォルトで）base64エンコードされます
            {
                test: /\.(otf|eot|png|svg|ttf|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader',
                query: {
                    mimetype: 'application/font-woff'
                }
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.ts', '.tsx']
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        })
    ]
};
