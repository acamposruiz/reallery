var fs = require("fs");
var videos = require('./videos');
var imagesDep = require('./images');

const constants = require('./constants');
const {SITE_CONFIGURATION,
  CONTENT_FOLDER} = constants;
const rootPath = getRootPathFromArgs() || "";
const filenameConfiguration = rootPath + SITE_CONFIGURATION;
const contentContainerFolder = rootPath + CONTENT_FOLDER;

var warnings = [];
var youtube = videos.youtube;
var images = imagesDep.imagesGen(contentContainerFolder, filenameConfiguration);

function getRootPathFromArgs() {
  console.log("getRootPathFromArgs()");
  function isRootPAth(arg) {
    return arg.substring(0, arg.indexOf("=")) === 'root-path';
  }
  const argv = process.argv;
  return (argv.length > 0)
    && argv.some(arg => isRootPAth(arg))
    && argv.filter(arg => isRootPAth(arg))[0]
      .substring(argv.filter(arg => isRootPAth(arg))[0].indexOf("=") + 1) + "/";
}

function filterByValue(paramName, valueParam, rawObj, invert) {
  console.log("filterByValue()");
  var depObjt = {};
  Object.keys(rawObj).forEach(value => {
    if ((invert ? rawObj[value][paramName] != valueParam : rawObj[value][paramName] == valueParam)) depObjt[value] = rawObj[value];
  });
  return depObjt;
}

function readConfigData(path) {
  console.log("readConfigData()");
  return new Promise(sendJson => sendJson(filterByValue("hide", true, JSON.parse(fs.readFileSync(path, "utf8")), true)));
}

function state(data) {
  console.log("state()");
  return new Promise(resolve => {
    fs.writeFile("state/state.js", data, function (err) {
      if (err) {
        return console.log(err);
      }
      resolve("The code was written!")
    });
  });
}

function filterArgsCommands(projtsJson) {
  console.log("filterArgsCommands()");
  function processArgs(projtsJson) {
    let depObjt = {};
    process.argv.slice(2).forEach(value => {
      depObjt[value] = projtsJson[value];
    });
    return depObjt;
  }
  return new Promise(sendJson => sendJson(!process.argv[2] ? projtsJson : processArgs(projtsJson)));
}

function config(projtsJson) {
  console.log("config()");
  function stylesPromise() {
    /* STYLES CSS */
    return new Promise((resolve, reject) => {
      const styles = `.home {
                      background: resolve("${rootPath}content/background/${projtsJson.meta.background}") no-repeat center center fixed;
                      -webkit-background-size: cover;
                      -moz-background-size: cover;
                      -o-background-size: cover;
                      background-size: cover; }`;

      fs.writeFile("src/styles/config.pcss", styles, function (err) {
        if (err) {
          reject("FAil Styles configuration");
        }

        console.log("Styles was written!");
        resolve();
      });
    });

  }

  function jsDependenciesPromise() {
    console.log("jsDependenciesPromise()");
    /* JS DEPENDENCES */
    return new Promise((resolve, reject) => {
      const iconsMap = {
        MaterialDesignIcons: 'react-icons/lib/md',
        FontAwesome: 'react-icons/lib/fa',
        Typicons: 'react-icons/lib/ti',
        GithubOcticons: 'react-icons/lib/go'
      };

      let icons = '';

      for (let key in projtsJson) {
        if (key != 'meta') {
          if (!projtsJson[key].icon.icon || !iconsMap[projtsJson[key].icon.family])
            warnings.push(`Icons configuration fatal error in ${key} section. 
                Please check correct icon names in '${filenameConfiguration}'`);
          icons += `export {${ projtsJson[key].icon.icon }} from '${ iconsMap[projtsJson[key].icon.family] }';`;
        }
      }

      fs.writeFile("src/es6/icons.es6", icons, function (err) {
        if (err) {
          reject("FAil JS DEPENDENCES configuration");
        }

        resolve();

      });
    });
  }

  function htmlAndThenPromise() {
    console.log("htmlAndThenPromise()");
    /* HTML AND THEN */
    return new Promise((resolve, reject) => {
      const gaCode = (projtsJson.meta.google_analytics_id) ? `<script>
                                    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                                            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                                        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                                    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
                            
                                    ga('create', '${ projtsJson.meta.google_analytics_id }', 'auto');
                                    ga('send', 'pageview');
                            
                                </script>` : "";
      let indexHtml = `<!doctype html>
                            <html lang="en" data-framework="react">
                                <head>
                                    <meta charset="utf-8">
                                    <meta name="viewport" content="width=device-width, initial-scale=1">
                                    <link rel="icon" type="image/png" href="favicon-32x32.png" sizes="32x32" />
                                    <link rel="icon" type="image/png" href="favicon-16x16.png" sizes="16x16" />
                                    <link href="https://fonts.googleapis.com/css?family=Raleway:100,200,300,400" rel="stylesheet">
                                    <title>${ projtsJson.meta.title }</title>
                                </head>
                                </head>
                              <body>
                                <section class="mainpage"></section>
                                
                                ${ gaCode }
                            
                                <script src="build/app.js"></script>
                            
                              </body>
                            </html>`;


      fs.writeFile("./index.html", indexHtml, function (err) {
        if (err) {
          reject("FAil HTML configuration");
        }
        resolve();
      });
    });
  }

  return new Promise((resolve, reject) => {
    Promise.all([stylesPromise(), jsDependenciesPromise(), htmlAndThenPromise()]).then(values => {
      resolve(projtsJson);
    }).catch(reason => {
      reject(reason);
    });

  });
}

[
  config,
  youtube,
  images,
  state,
].reduce((promiseChain, currentTask) => {
  return promiseChain.then(currentTask);
}, readConfigData(filenameConfiguration)).then(function () {
  warnings.forEach(warning => console.log((warning).red));
}).catch(error => {
  console.log((error).red);
});
