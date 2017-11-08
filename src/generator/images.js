var fs = require("fs");
var rmdir = require('rmdir');
var sizeOf = require('image-size');
var lwip = require('lwip');
//var colors = require('colors');

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

function images(dataJSON) {
  return new Promise(sendData => {

    function createImages(dataJSON) {
      return new Promise(sendRawState => {

        /* Declaration of vars */
        var rawState = [];

        /* Generate the projects output */
        Object.keys(dataJSON).filter(key => key !== 'meta').forEach(function (key) {
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

                    dataJSON[key]["images"] = values;

                    /* include project */
                    var textCode = 'projects["' + key + '"]=' + JSON.stringify(dataJSON[key]) + ';';


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


                function generateSourceImages_es(dataJSON) {

                  return new Promise(gsiresolve => {

                    Promise.all(processFiles(sourceImagesDir_es, imagesFolder_es, imagesFolderWeb_es)).then(values => {

                      dataJSON[key]["images"]["es"] = values;

                      gsiresolve('projects["' + key + '"]=' + JSON.stringify(dataJSON[key]) + ';');

                    });


                  });

                }

                function generateSourceImages_en(sourceImagesDir) {

                  return new Promise(gsiresolve => {


                    Promise.all(processFiles(sourceImagesDir, imagesFolder, imagesFolderWeb)).then(values => {

                      dataJSON[key]["images"] = {"en": values};

                      gsiresolve(dataJSON);

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

    createImages(dataJSON).then(generateState).then(sendData);
  });
}


module.exports = {
  images
};