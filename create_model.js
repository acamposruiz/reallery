/* Import modules */
var fs = require("fs");
/*import fs from 'fs';*/
var sizeOf = require('image-size');
var lwip = require('lwip');
var rmdir = require('rmdir');
var colors = require('colors');

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
                        .writeFile(this.sourceImageDirFile, function (err) {
                            rs2(this.imageFolderWebFile + ' ' + this.dim + 'w');
                        }.bind({imageFolderWebFile: this.imageFolderWebFile, dim: this.dim}));

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
                Object.keys(projtsJson).forEach(function (key) {
                    rawState.push(() => {
                        return new Promise(function (rslv, rjct) {
                            /* Declaration of vars */
                            const imagesFolder = 'projts/' + key + '/images/';
                            const imagesFolder_es = 'projts/' + key + '/images_es/';
                            const imagesFolderWeb = 'projts/' + key + '/imgweb/';
                            const imagesFolderWeb_es = 'projts/' + key + '/imgweb_es/';
                            const sourceImagesDir = 'projts/' + key + '/source_images/';
                            const sourceImagesDir_es = 'projts/' + key + '/source_images_es/';

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
                                                    path: folder3 + file,
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
                                    generateSourceImages(sourceImagesDir).then(generateSourceImages_es).then(rslv);
                                }


                                function generateSourceImages_es(projtsJson) {

                                    return new Promise(gsiresolve => {

                                        Promise.all(processFiles(sourceImagesDir_es, imagesFolder_es, imagesFolderWeb_es)).then(values => {

                                            projtsJson[key]["images"]["es"] = values;

                                            gsiresolve('projects["' + key + '"]=' + JSON.stringify(projtsJson[key]) + ';');

                                        });


                                    });

                                }

                                function generateSourceImages(sourceImagesDir) {

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

            return new Promise(sendData => {

                var rawData;

                (function promRecur(index) {

                    if (index == 0) {
                        rawData = "var state = state || {};";
                        rawData += "(function () { 'use strict';";
                        rawData += "var projects = {};";
                    }

                    rawState[index]().then(projectRawData => {

                        rawData += projectRawData;

                        console.log(('Generated raw code of project with key: ' + (index + 1)).green);

                        if (++index < rawState.length) {
                            promRecur(index);
                        } else {
                            rawData += "state = { projects: projects};";
                            rawData += "})();";
                            rawData += "export default state;";
                            /* Write the output */
                            sendData(rawData);

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

readConfigData("model_conf.json").then(filterArgsCommands).then(generateSourceImages).then(writeRawState);

