/* Import modules */
var fs = require("fs");
var videos = require('./src/generator/videos');
var imagesLib = require('./src/generator/images');

var warnings = [];
var youtube = videos.youtube;
var images = imagesLib.images;

function filterByValue(paramName, valueParam, rawObj, invert) {
  var depObjt = {};
  Object.keys(rawObj).forEach(value => {
    if ((invert ? rawObj[value][paramName] != valueParam : rawObj[value][paramName] == valueParam)) depObjt[value] = rawObj[value];
  });
  return depObjt;
}

function readConfigData(path) {
  return new Promise(sendJson => sendJson(filterByValue("hide", true, JSON.parse(fs.readFileSync(path, "utf8")), true)));
}

function state(data) {
  return new Promise(sendJson => {
    fs.writeFile("state/state.js", data, function (err) {
      if (err) {
        return console.log(err);
      }
      sendJson("The code was written!")
    });
  });
}

function filterArgsCommands(projtsJson) {
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
  function stylesPromise() {
    /* STYLES CSS */
    return new Promise((ok, fail) => {
      const styles = `.home {
                      background: resolve("background/${projtsJson.meta.background}") no-repeat center center fixed;
                      -webkit-background-size: cover;
                      -moz-background-size: cover;
                      -o-background-size: cover;
                      background-size: cover; }`;

      fs.writeFile("src/styles/config.pcss", styles, function (err) {
        if (err) {
          fail("FAil Styles configuration");
        }

        console.log("Styles was written!");
        ok();
      });
    });

  }

  function jsDependenciesPromise() {
    /* JS DEPENDENCES */
    return new Promise((ok, fail) => {
      const iconsMap = {
        MaterialDesignIcons: 'react-icons/md',
        FontAwesome: 'react-icons/fa',
        Typicons: 'react-icons/ti',
        GithubOcticons: 'react-icons/go'
      };

      let icons = '';

      for (let key in projtsJson) {
        if (key != 'meta') {
          if (!projtsJson[key].icon.icon || !iconsMap[projtsJson[key].icon.family])
            warnings.push(`Icons configuration fatal error in ${key} section. 
                Please check correct icon names in 'reallery_conf.json'`);
          icons += `export {${ projtsJson[key].icon.icon }} from '${ iconsMap[projtsJson[key].icon.family] }';`;
        }
      }

      fs.writeFile("src/es6/icons.es6", icons, function (err) {
        if (err) {
          fail("FAil JS DEPENDENCES configuration");
        }

        ok();

      });
    });
  }

  function htmlAndThenPromise() {
    /* HTML AND THEN */
    return new Promise((ok, fail) => {
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
          fail("FAil HTML configuration");
        }
        ok();
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

readConfigData("reallery_conf.json")
  .then(config)
  .then(filterArgsCommands)
  .then(youtube)
  .then(images)
  .then(state)
  .then(function () {
    warnings.forEach(warning => console.log((warning).red));
  }).catch(error => {
  console.log((error).red);
});

