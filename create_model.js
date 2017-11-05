/* Import modules */
var fs = require("fs");
/*import fs from 'fs';*/
var sizeOf = require('image-size');
var lwip = require('lwip');
var rmdir = require('rmdir');
var colors = require('colors');
var YouTube = require('youtube-node');

var warnings = [];


function youtube(projtsJson) {

  const youTubeKey = projtsJson.meta.youTubeKey;


  function anyVideo(projtsJson) {

    var videos = [];

    for (var key in projtsJson) {
      let projVideo = projtsJson[key].videos && projtsJson[key].videos.en;
      videos = (projVideo)? videos.concat(projtsJson[key].videos.en): videos;
    }

    return videos.length > 0;

  }



  return new Promise((sendData, fail) => {

    if (!youTubeKey && anyVideo(projtsJson)) {
      fail('No youtube key in configuration file');
    } else {
      var youTube = new YouTube();
      youTube.setKey(youTubeKey);
      const arrayPromises = [];

      Object.keys(projtsJson).filter(key => key !== 'meta').forEach(projectKey => {

        Object.keys(projtsJson[projectKey].videos).forEach(lang => {

          projtsJson[projectKey].videos[lang].forEach((youtubeId, index) => {

            arrayPromises.push(new Promise(resolve => {

              youTube.getById(youtubeId, function (error, result) {

                if (error) {
                  console.log(error);
                }
                else {
                  const thumbnails = result.items[0].snippet.thumbnails;
                  const data = {
                    src: thumbnails.high.url,
                    srcset: [
                      `${thumbnails.high.url} 1024w`,
                      `${thumbnails.high.url} 800w`,
                      `${thumbnails.high.url} 500w`,
                      `${thumbnails.high.url} 320w`,
                    ],
                    width: thumbnails.high.width,
                    height: thumbnails.high.height,
                    content: youtubeId,
                    type: 'video',
                  };
                  resolve({
                    index: index,
                    lang: lang,
                    projectKey: projectKey,
                    data: data
                  });
                }

              });

            }));

          });

        });

      });


      Promise.all(arrayPromises).then(data => {
        data.forEach(dataProject => {
          projtsJson[dataProject.projectKey]['videos'][dataProject.lang][dataProject.index] = dataProject.data;
        });
        sendData(projtsJson);
      });


    }

  });
  /*}
  else {
    warnings.push('No youtube key in configuration file');
    return new Promise(sendData => sendData(projtsJson));
  }*/

}

/* Generate responsive images */
function generateSourceResponsive(file, imagesFolder, dmsns, sourceImagesDir, imagesFolderWeb) {
    return new Promise((rs, rj) => {
        var dimensions = [2880, 1240, 620, 310, 160];
        var srcsetPromises = [];
        var dimTop;
        var sourceImageDir = sourceImagesDir + file.split('.')[0] + '/';

        if (!fs.existsSync(sourceImageDir)) fs.mkdirSync(sourceImageDir);

        dimensions.some((d, key) => {
            dimTop = key;
            return dmsns.width >= d;
        });

        for (var i = dimTop; i <= 4; i++) {
            srcsetPromises.push(new Promise((rs2, rj2) => {
                var dim = dimensions[i];
                var sourceImageDirFile = sourceImageDir + dim + '_' + file;
                var imageFolderWebFile = imagesFolderWeb + dim + '_' + file;

                lwip.open(imagesFolder + file, function (err, image) {

                    console.log('Generating -> ' + imagesFolder + file + ' to width = ' + this.dim);

                    image.batch()
                        .resize(this.dim, (this.dim / dmsns.width) * dmsns.height)
                        .writeFile(
                            this.sourceImageDirFile, function (err) {
                            rs2(this.sourceImageDirFile + ' ' + this.dim + 'w');
                        }.bind({sourceImageDirFile: this.sourceImageDirFile, dim: this.dim}));

                }.bind({sourceImageDirFile: sourceImageDirFile, imageFolderWebFile: imageFolderWebFile, dim: dim}));
            }));
        }

        Promise.all(srcsetPromises).then(srcset => rs(srcset));
    });

}


function images(projtsJson) {
    return new Promise(sendData => {

        function createImages(projtsJson) {
            return new Promise(sendRawState => {

                /* Declaration of vars */
                var rawState = [];

                /* Generate the projects output */
                Object.keys(projtsJson).filter(key => key !== 'meta').forEach(function (key) {
                    rawState.push(() => {
                        return new Promise(function (rslv, rjct) {
                            /* Declaration of vars */
                            const imagesFolder = 'content/' + key + '/images/';
                            const imagesFolder_es = 'content/' + key + '/images_es/';
                            const imagesFolderWeb = 'content/' + key + '/imgweb/';
                            const imagesFolderWeb_es = 'content/' + key + '/imgweb_es/';
                            const sourceImagesDir = 'content/' + key + '/source_images/';
                            const sourceImagesDir_es = 'content/' + key + '/source_images_es/';

                            function processFiles(folder1, folder2, folder3) {

                                fs.mkdirSync(folder1);
                                console.log(('Created/Updated directory: ' + folder1).cyan);

                                /* Get images info */
                                var files = fs.readdirSync(folder2);
                                var imagesPromises = [];

                                files.forEach(file => {
                                    if (file.split('.')[1] == 'jpg' || file.split('.')[1] == 'png') {
                                        imagesPromises.push(new Promise(function (rslv2, rjct2) {
                                            var dimensions = sizeOf(folder2 + file);
                                            generateSourceResponsive(file, folder2, dimensions, folder1, folder3).then(srcset => {

                                                rslv2({
                                                    type: 'photo',
                                                    path: folder2 + file,
                                                    srcset: srcset,
                                                    width: dimensions.width,
                                                    height: dimensions.height
                                                });
                                            });

                                        }));
                                    }
                                });

                                return imagesPromises;
                            }

                            if (!fs.existsSync(imagesFolder_es)) {
                                fs.existsSync(sourceImagesDir)
                                    ? rmdir(sourceImagesDir, () => generateSourceImages(sourceImagesDir))
                                    : generateSourceImages(sourceImagesDir);

                                function generateSourceImages(sourceImagesDir) {

                                    Promise.all(processFiles(sourceImagesDir, imagesFolder, imagesFolderWeb)).then(values => {

                                        projtsJson[key]["images"] = values;

                                        /* include project */
                                        var textCode = 'projects["' + key + '"]=' + JSON.stringify(projtsJson[key]) + ';';


                                        rslv(textCode);
                                    });

                                }
                            } else {

                                fs.existsSync(sourceImagesDir)
                                    ? rmdir(sourceImagesDir, () => {
                                        fs.existsSync(sourceImagesDir_es)
                                            ? rmdir(sourceImagesDir_es, () => generateSourceImagesAll())
                                            : generateSourceImagesAll();
                                    })
                                    : fs.existsSync(sourceImagesDir_es)
                                        ? rmdir(sourceImagesDir_es, () => generateSourceImagesAll())
                                        : generateSourceImagesAll();

                                function generateSourceImagesAll() {
                                    generateSourceImages_en(sourceImagesDir).then(generateSourceImages_es).then(rslv);
                                }


                                function generateSourceImages_es(projtsJson) {

                                    return new Promise(gsiresolve => {

                                        Promise.all(processFiles(sourceImagesDir_es, imagesFolder_es, imagesFolderWeb_es)).then(values => {

                                            projtsJson[key]["images"]["es"] = values;

                                            gsiresolve('projects["' + key + '"]=' + JSON.stringify(projtsJson[key]) + ';');

                                        });


                                    });

                                }

                                function generateSourceImages_en(sourceImagesDir) {

                                    return new Promise(gsiresolve => {


                                        Promise.all(processFiles(sourceImagesDir, imagesFolder, imagesFolderWeb)).then(values => {

                                            projtsJson[key]["images"] = {"en": values};

                                            gsiresolve(projtsJson);

                                        });


                                    });

                                }

                            }


                        })
                    });
                });

                sendRawState(rawState);


            });
        }

        function generateState(rawState) {

            return new Promise(sendData2 => {

                var rawData;

                (function promRecur(index) {

                    if (index == 0) {
                        const fileJson = JSON.parse(fs.readFileSync("reallery_conf.json", "utf8"));
                        rawData = "var state = state || {};";
                        rawData += "(function () { 'use strict';";
                        rawData += "var projects = {};";
                        rawData += `var meta = ${JSON.stringify(fileJson.meta)};`;
                    }

                    rawState[index]().then(projectRawData => {

                        rawData += projectRawData;

                        console.log(('Generated raw code of project with key: ' + (index + 1)).green);

                        if (++index < rawState.length) {
                            promRecur(index);
                        } else {
                            rawData += "state = { meta:meta, projects: projects};";
                            rawData += "})();";
                            rawData += "export default state;";
                            /* Write the output */
                            sendData2(rawData);

                        }
                    });

                })(0);

            })
        }

        createImages(projtsJson).then(generateState).then(sendData);

    });


}

function filterByValue(paramName, valueParam , rawObj, invert) {
    var depObjt = {};
    Object.keys(rawObj).forEach(value => {
        if ((invert? rawObj[value][paramName] != valueParam: rawObj[value][paramName] == valueParam)) depObjt[value] = rawObj[value];
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
    return new Promise(sendJson => sendJson(!process.argv[2]?projtsJson:processArgs(projtsJson)));
}

function config(projtsJson) {
    function stylesPromise() {
        /* STYLES CSS */
        return new Promise((ok,fail) => {
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
                GithubOcticons: 'react-icons/go'};

            let icons = '';

            for ( let key in projtsJson ) {
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
            const gaCode = (projtsJson.meta.google_analytics_id)? `<script>
                                    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                                            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                                        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                                    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
                            
                                    ga('create', '${ projtsJson.meta.google_analytics_id }', 'auto');
                                    ga('send', 'pageview');
                            
                                </script>`: "";
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

    return new Promise(sendJson => {
        Promise.all([stylesPromise(), jsDependenciesPromise(), htmlAndThenPromise()]).then(values => {
            sendJson(projtsJson);
        }).catch(reason => {
            warnings.push(reason);
        });

    });
}

readConfigData("reallery_conf.json")
    .then(config)
    .then(filterArgsCommands)
    .then(youtube)
    .then(images)
    .then(state)
    .then(function() {
      warnings.forEach(warning => console.log((warning).red));
    }).catch(error => {
      console.log((error).red);
});

