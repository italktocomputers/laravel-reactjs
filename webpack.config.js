const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, './resources/js/app.js'),
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader', options: {
                        presets: [['@babel/preset-env', {targets: 'defaults'}]],
                        cacheDirectory: true,
                    },
                }
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        path: path.resolve(__dirname, './public'),
        filename: 'bundle.js',
    },
};
