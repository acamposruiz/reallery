module.exports = {
    plugins: [
        require('postcss-import'),
        require('postcss-cssnext'),
        /*require('precss'),*/
        require('postcss-custom-properties'),
        require('postcss-at-rules-variables'),
        require('postcss-each'),
        require('postcss-fontpath')
    ]
}