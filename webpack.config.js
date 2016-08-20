const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.config.common');

module.exports = merge(common, {
    devServer: {
        proxy: {
            "/API/v7/*": {
                target: "https://todoist.com",
                secure: false
            }
        }
    }
});
