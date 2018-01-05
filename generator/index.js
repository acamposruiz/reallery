var fs = require("fs");
var videos = require('./videos');
var imagesDep = require('./images');
var config = require('./config');

const {SITE_CONFIGURATION, CONTENT_FOLDER} =  require('./constants');
const rootPath = (function getRootPathFromArgs() {
  function isRootPAth(arg) {
    return arg.substring(0, arg.indexOf("=")) === 'root-path';
  }
  const argv = process.argv;
  return (argv.length > 0)
    && argv.some(arg => isRootPAth(arg))
    && argv.filter(arg => isRootPAth(arg))[0]
      .substring(argv.filter(arg => isRootPAth(arg))[0].indexOf("=") + 1) + "/";
})() || "";
const filenameConfiguration = rootPath + SITE_CONFIGURATION;
const contentContainerFolder = rootPath + CONTENT_FOLDER;
const youtube = videos.youtube;
const images = imagesDep.imagesGen(contentContainerFolder, filenameConfiguration);

function readConfigData(path) {
  function filterByValue(paramName, valueParam, rawObj, invert) {
    const depObjt = {};
    Object.keys(rawObj).forEach(value => {
      if ((invert ? rawObj[value][paramName] != valueParam : rawObj[value][paramName] == valueParam)) depObjt[value] = rawObj[value];
    });
    return depObjt;
  }
  return new Promise(resolve => resolve(filterByValue("hide", true, JSON.parse(fs.readFileSync(path, "utf8")), true)));
}

function state(data) {
  return new Promise(resolve => {
    fs.writeFile("state/state.js", data, function (err) {
      if (err) {
        return console.log(err);
      }
      resolve("*** *** *** Generator finished! *** *** ***")
    });
  });
}

[
  config.config(rootPath),
  youtube,
  images,
  state,
].reduce((promiseChain, currentTask) => {
  return promiseChain.then(currentTask);
}, readConfigData(filenameConfiguration)).then(msg => {
  console.log((msg).green);
  //todo Handle warnings
}).catch(error => {
  console.log((error).red);
});
