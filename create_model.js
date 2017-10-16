/* Import modules */
var fs = require("fs");
/*import fs from 'fs';*/
var sizeOf = require('image-size');
var lwip = require('lwip');
var rmdir = require('rmdir');
var colors = require('colors');
var YouTube = require('youtube-node');




function getYoutubeData(projtsJson) {

    var youTube = new YouTube();

    youTube.setKey('AIzaSyAPPDBVqSMFkX9UqTj1Nc_roz7oIKqowQc');

    return new Promise(sendData => {
        const arrayPromises = [];

        Object.keys(projtsJson).filter(key => key !== 'meta').forEach(projectKey => {

            Object.keys(projtsJson[projectKey].videos).forEach(lang => {

                projtsJson[projectKey].videos[lang].forEach((youtubeId, index) => {

                    arrayPromises.push(new Promise(resolve => {

                        youTube.getById(youtubeId, function(error, result) {

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
                                    index:index,
                                    lang:lang,
                                    projectKey:projectKey,
                                    data:data
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
    });
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


function generateSourceImages(projtsJson) {
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
                        const fileJson = JSON.parse(fs.readFileSync("model_conf.json", "utf8"));
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

function writeRawState(data) {

    fs.writeFile("state/state.js", data, function (err) {
        if (err) {
            return console.log(err);
        }

        console.log("The code was written!");
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

function writeStyles(projtsJson) {
    const styles = `.home {
  background: resolve("background/${projtsJson.meta.background}") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover; }`;

    fs.writeFile("src/styles/config.pcss", styles, function (err) {
        if (err) {
            return console.log(err);
        }

        console.log("Styles was written!");
    });

    return new Promise(sendJson => sendJson(projtsJson));
}

readConfigData("model_conf.json")
    .then(writeStyles)
    .then(filterArgsCommands)
    .then(getYoutubeData)
    .then(generateSourceImages)
    .then(writeRawState);

