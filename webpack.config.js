// const path = require('path');
// module.exports = {
//     entry: './src/plik_wejsciowy.js',
//     output: {
//         path: path.resolve(__dirname, './dist'),
//         filename: 'bundle.js'
//     },
//     watch: true
// };
const path = require('path');
module.exports = {
    entry: {
        main: './src/main.ts',
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    watch: true
}