var fs = require("fs");
var _ = require('lodash');
var rmdir = require('rmdir');
var sizeOf = require('image-size');
var lwip = require('lwip');
var path = require('path');

const ROOTPATH = __dirname + "/../../";
const {lstatSync, readdirSync} = fs;
const {join} = path;

const isDirectory = source => lstatSync(source).isDirectory();
const getDirectories = source =>
  readdirSync(source).map(name => join(source, name)).filter(isDirectory);

const {
  IMAGESCONTAINERFOLDER,
  CONTENTCONTAINERFOLDER,
  FILENAMECONFIGURATION
} = require('./constants');

const IMAGESSOURCECONTAINERFOLDER = `source_${IMAGESCONTAINERFOLDER}`;

/*function getMultilngFoldersIMG(projtKey) {
  const source = path.resolve(ROOTPATH, `${[CONTENTCONTAINERFOLDER, projtKey].join('/')}/`);
  return getDirectories(source).filter(directoryName => /images/.test(directoryName));
}*/

function getFoldersSRC(projtKey) {
  const source = path.resolve(ROOTPATH, `${[CONTENTCONTAINERFOLDER, projtKey].join('/')}/`);
  return getDirectories(source).filter(directoryName => /source/.test(directoryName));
}

/* Generate responsive images */
function generateSourceResponsive(file, imagesFolder, dmsns, sourceImagesDir) {
  return new Promise(resolve => {
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
      srcsetPromises.push(new Promise(resolve => {
        var dim = dimensions[i];
        var sourceImageDirFile = sourceImageDir + dim + '_' + file;

        lwip.open(imagesFolder + file, function (err, image) {

          console.log(`Generating ->  ${imagesFolder + file} to width = ${this.dim}`);

          image.batch()
            .resize(this.dim, (this.dim / dmsns.width) * dmsns.height)
            .writeFile(
              this.sourceImageDirFile, function (err) {
                resolve(this.sourceImageDirFile + ' ' + this.dim + 'w');
              }.bind({sourceImageDirFile: this.sourceImageDirFile, dim: this.dim}));

        }.bind({sourceImageDirFile: sourceImageDirFile, dim: dim}));
      }));
    }

    Promise.all(srcsetPromises).then(srcset => resolve(srcset));
  });

}

function generateProject(key, data) {

  const IMAGESFOLDER = `${[CONTENTCONTAINERFOLDER, key, IMAGESCONTAINERFOLDER].join('/')}/`;
  const SOURCEIMAGESDIR = `${[CONTENTCONTAINERFOLDER, key, IMAGESSOURCECONTAINERFOLDER].join('/')}/`;

  return function () {
    return new Promise(resolve => {

      function processFiles(folder1, folder2, folder3) {

        fs.mkdirSync(folder1);
        console.log((`Created/Updated directory:  ${folder1}`).cyan);

        /* Get images info */
        var files = fs.readdirSync(folder2);
        var imagesPromises = [];

        files.forEach(file => {
          if (file.split('.')[1] == 'jpg' || file.split('.')[1] == 'png') {
            imagesPromises.push(new Promise(resolve => {
              var dimensions = sizeOf(folder2 + file);
              generateSourceResponsive(file, folder2, dimensions, folder1, folder3).then(srcset => {
                resolve({
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

      generateSourceImages(SOURCEIMAGESDIR);

      function generateSourceImages(sourceImagesDir) {

        Promise.all(processFiles(sourceImagesDir, IMAGESFOLDER)).then(values => {
          _.set(data, `${key}.images.all`, values);
          /* include project */
          var textCode = `projects["${key}"]=${JSON.stringify(data[key])};`;
          resolve(textCode);
        });
      }
    })
  }
}

function cleanImages(data) {
  return new Promise(resolve => {
    Promise.all(_.flatten(Object.keys(data).filter(key => key !== 'meta')
      .map(projtKey => getFoldersSRC(projtKey)))
      .map(directory => new Promise(resolve => rmdir(directory, () => resolve(directory)))))
      .then(directoriesRemoved => resolve(data));
  });
}


function createImages(data) {
  return new Promise(resolve => {
    var rawState = [];
    Object.keys(data).filter(key => key !== 'meta').forEach(key => rawState.push(generateProject(key, data)));
    resolve(rawState);
  });
}

function generateState(rawState) {
  return new Promise(resolve => {
    var rawData;
    (function promRecur(index) {

      if (index == 0) {
        const fileJson = JSON.parse(fs.readFileSync(FILENAMECONFIGURATION, "utf8"));
        rawData = `var state = state || {};
                  (function () { 'use strict';
                  var projects = {};
                  var meta = ${JSON.stringify(fileJson.meta)};`;
      }

      rawState[index]().then(projectRawData => {

        rawData += projectRawData;

        console.log((`Generated raw code of project with key:  ${index + 1}`).green);

        if (++index < rawState.length) {
          promRecur(index);
        } else {
          rawData += `state = { meta:meta, projects: projects};
                      })();
                      export default state;`;
          /* Write the output */
          resolve(rawData);
        }
      });
    })(0);
  })
}

function images(data) {
  return new Promise(resolve => {
    cleanImages(data)
      .then(createImages)
      .then(generateState)
      .then(resolve);
  });
}


module.exports = {
  images
};