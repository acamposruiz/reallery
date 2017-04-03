var fs = require("fs");

function getAssetsLoadPaths() {

    let keysPrjts;

    function getKeysPrjts() {
        keysPrjts = keysPrjts || Object.keys(JSON.parse(fs.readFileSync("model_conf.json", "utf8")));
        return keysPrjts;
    }

    const loadPaths = ['projts']
        .concat(getKeysPrjts().map(key => `projts/${key}/images`))
        .concat(getKeysPrjts().map(key => `projts/${key}/source_images`));

    return loadPaths;
}


module.exports = {
    plugins: [
        require('postcss-import'),
        require('postcss-assets')({
            loadPaths: getAssetsLoadPaths()
        }),
        require('postcss-cssnext'),
        /*require('precss'),*/
        require('postcss-custom-properties'),
        require('postcss-at-rules-variables'),
        require('postcss-each'),
        require('postcss-fontpath')
    ]
}