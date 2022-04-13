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
        plik1: './src/main.ts',
        plik2: './src/plik2.ts'
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