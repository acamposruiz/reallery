var fs = require("fs");

function getAssetsLoadPaths() {

    let keysPrjts;
    const conf = JSON.parse(fs.readFileSync("reallery_conf.json", "utf8"));

    function getKeysPrjts() {
        keysPrjts = keysPrjts || Object.keys(conf);
        return keysPrjts;
    }

    let loadPaths = ['projts', 'content', 'tests/e2e/mocks/site/content']
        .concat(getKeysPrjts().map(key => `tests/e2e/mocks/site/content/${key}/images`))
        .concat(getKeysPrjts().map(key => `tests/e2e/mocks/site/content/${key}/images_src`))
        .concat(getKeysPrjts().map(key => `content/${key}/images`))
        .concat(getKeysPrjts().map(key => `content/${key}/images_src`));

    if (conf.meta.languages)
      Object.keys(conf.meta.languages).forEach(lng => {
        loadPaths = loadPaths.concat(getKeysPrjts().map(key => `content/${key}/images_${lng}`))
          .concat(getKeysPrjts().map(key => `content/${key}/images_src_${lng}`));
      });

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