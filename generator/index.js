var fs = require("fs");
var videos = require("./videos");
var imagesDep = require("./images");
var config = require("./config");

const { SITE_CONFIGURATION, CONTENT_FOLDER } = require("./constants");

const rootPath =
  (function getRootPathFromArgs() {
    const argv = process.argv;
    let argValue;

    if (!(argv.length > 0)) return false;

    function isRootPAth(arg) {
      return arg.indexOf("root-path=") === 0;
    }

    return (argValue = argv.filter((arg) => isRootPAth(arg))[0])
      ? argValue.substring(argValue.indexOf("=") + 1) + "/"
      : false;
  })() || "";

const filenameConfiguration = rootPath + SITE_CONFIGURATION;
const contentContainerFolder = rootPath + CONTENT_FOLDER;
const youtube = videos.youtube;
const images = imagesDep.imagesGen(contentContainerFolder, filenameConfiguration);

function readConfigData(path) {
  function filterByValue(paramName, valueParam, rawObj, invert) {
    const depObjt = {};
    Object.keys(rawObj).forEach((value) => {
      if (invert ? rawObj[value][paramName] != valueParam : rawObj[value][paramName] == valueParam)
        depObjt[value] = rawObj[value];
    });
    return depObjt;
  }

  return new Promise((resolve) =>
    resolve(filterByValue("hide", true, JSON.parse(fs.readFileSync(path, "utf8")), true)),
  );
}

function state(data) {
  return new Promise((resolve) => {
    fs.writeFile("state/state.js", data, function(err) {
      if (err) {
        return console.log(err);
      }
      resolve("*** *** *** Generator finished! *** *** ***");
    });
  });
}

(async function runGenerator() {
  const step0 = await readConfigData(filenameConfiguration);
  stepDone(0);
  const step1 = await config.config(rootPath)(step0);
  stepDone(1);
  const step2 = await youtube(step1);
  stepDone(2);
  const step3 = await images(step2);
  stepDone(3);
  state(step3)
    .then((msg) => {
      console.log(msg.green);
      //todo Handle warnings
    })
    .catch((error) => {
      console.log(error.red);
    });
})();

function stepDone(step) {
  console.log("*********************************");
  console.log(`********** STEP ${step} DONE!! ********`);
  console.log("*********************************");
}
