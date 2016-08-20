module.exports = function (config) {
    config.set({
        basePath: "",
        frameworks: ["mocha"],
        files: [
            "test/**/*Test.ts"
        ],
        preprocessors: {
            "test/**/*Test.ts": ["webpack", "sourcemap"]
        },
        reporters: ["progress"],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ["PhantomJS"],
        singleRun: false,
        webpack: {
            devtool: "#inline-source-map",
            module: {
                preLoaders: [
                    {test: /\.tsx?$/, exclude: /node_modules/, loaders: ["tslint"]}
                ],
                loaders: [
                    {test: /\.json$/, loader: "json"},
                    {test: /\.tsx?$/, exclude: /node_modules/, loaders: ["babel-loader", "ts-loader"]},
                    {test: /\.js$/, exclude: /node_modules/, loaders: ["babel-loader"]}
                ]
            },
            resolve: {
                extensions: ['', '.js', '.ts', '.tsx']
            }
        },
        // 使用するプラグインを列挙
        plugins: [
            'karma-webpack',
            'karma-mocha',
            'karma-phantomjs-launcher',
            'karma-sourcemap-loader'
        ]
    })
};
