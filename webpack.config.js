const path = require('path');
module.exports = {
    entry: './src/plik_wejsciowy.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    watch: true
};