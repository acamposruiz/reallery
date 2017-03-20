/* Import modules */
var fs = require("fs");
var sizeOf = require('image-size');
var lwip = require('lwip');
var rmdir = require('rmdir');

/* Import JSON DATA */
var projtsJson = JSON.parse(fs.readFileSync("projts/projts.json", "utf8"));

/* Declaration of vars */
var output;

/* Generate responsive images */
function generateSourceResponsive(file, imagesFolder, dmsns, sourceImagesDir) {
    var dimensions = [2880, 1240, 620, 310, 160];
    var srcset = [];
    var dimTop;
    var sourceImageDir = sourceImagesDir + file.split('.')[0] + '/';

    if (!fs.existsSync(sourceImageDir)) fs.mkdirSync(sourceImageDir);

    dimensions.some((d, key) => {
        dimTop = key;
        return dmsns.width >= d;
    });

    for (var i = dimTop; i <= 4; i++) {
        var dim = dimensions[i];
        var sourceImageDirFile = sourceImageDir + '/' + dim + '_' + file;

        lwip.open(imagesFolder + file, function (err, image) {

            image.batch()
                .resize(this.dim, (this.dim/dmsns.width)*dmsns.height)
                .writeFile(this.sourceImageDirFile, function (err) {
                    srcset.push(this.sourceImageDirFile);
                });

        }.bind({sourceImageDirFile:sourceImageDirFile, dim:dim}));
    }

    return srcset;
}


/* Generate the general output */
output = "var app = app || {};";
output += "(function () { 'use strict';";
output += "var projects = {};";

/* Generate the projects output */
Object.keys(projtsJson).forEach(function (key) {
    /* Declaration of vars */
    var imagesFolder = 'projts/'+key+'/images/';
    var sourceImagesDir = 'projts/'+key+'/source_images/';

    /*if(fs.existsSync(sourceImagesDir)) {
        rmdir(sourceImagesDir, function (err, dirs, files) {
            fs.mkdirSync(sourceImagesDir);
        });
    } else {
        fs.mkdirSync(sourceImagesDir)
    }*/

    if (!fs.existsSync(sourceImagesDir)) fs.mkdirSync(sourceImagesDir);

    /* Get images info */
    var files = fs.readdirSync(imagesFolder);
    projtsJson[key]["images"] = [];
    files.forEach(file => {
        if (file.split('.')[1] == 'jpg' || file.split('.')[1] == 'png') {
            var dimensions = sizeOf(imagesFolder + file);
            projtsJson[key]["images"].push({
                path:imagesFolder + file,
                srcset: generateSourceResponsive(file, imagesFolder, dimensions, sourceImagesDir),
                width:dimensions.width,
                height:dimensions.height
            });
        }
    });

    /* include project */
    output += 'projects["' + key + '"]=' + JSON.stringify(projtsJson[key]) + ';';
});

/* Generate the final output */
output += "app.state = { projects: projects};";
output += "})();";

/* Write the output */
fs.writeFile("js/state.js", output, function (err) {
    if (err) {
        return console.log(err);
    }

    console.log("The file was saved!");
});