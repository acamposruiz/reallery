/* Import modules */
var fs = require("fs");
/*import fs from 'fs';*/
var sizeOf = require('image-size');
var lwip = require('lwip');
var rmdir = require('rmdir');
var colors = require('colors');

/* Import JSON DATA */
var output;
var projtsJson = JSON.parse(fs.readFileSync("projts/projts.json", "utf8"));

/* Declaration of vars */
var ps = [];

/* Generate responsive images */
function generateSourceResponsive(file, imagesFolder, dmsns, sourceImagesDir) {
    return new Promise((rs,rj)=>{
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
            srcsetPromises.push(new Promise((rs2,rj2) => {
                var dim = dimensions[i];
                var sourceImageDirFile = sourceImageDir + dim + '_' + file;

                lwip.open(imagesFolder + file, function (err, image) {

                    console.log('Generating -> ' + imagesFolder + file + ' to width = ' + this.dim);

                    image.batch()
                        .resize(this.dim, (this.dim/dmsns.width)*dmsns.height)
                        .writeFile(this.sourceImageDirFile, function (err) {
                            rs2(this.sourceImageDirFile + ' ' + this.dim + 'w');
                        }.bind({sourceImageDirFile:this.sourceImageDirFile, dim:this.dim}));

                }.bind({sourceImageDirFile:sourceImageDirFile, dim:dim}));
            }));
        }

        Promise.all(srcsetPromises).then(srcset => rs(srcset));
    });

}

/* Generate the projects output */
Object.keys(projtsJson).forEach(function (key) {
    ps.push(  ()=>{
        return new Promise(function(rslv, rjct) {
            /* Declaration of vars */
            var imagesFolder = 'projts/'+key+'/images/';
            var sourceImagesDir = 'projts/'+key+'/source_images/';

            fs.existsSync(sourceImagesDir)
                ? rmdir(sourceImagesDir, () => generateSourceImages(sourceImagesDir))
                : generateSourceImages(sourceImagesDir);

            function generateSourceImages(sourceImagesDir){

                fs.mkdirSync(sourceImagesDir);
                console.log(('Created/Updated directory: ' + sourceImagesDir).cyan);

                /* Get images info */
                var files = fs.readdirSync(imagesFolder);
                var imagesPromises = [];

                files.forEach(file => {
                    if (file.split('.')[1] == 'jpg' || file.split('.')[1] == 'png') {
                        imagesPromises.push(new Promise(function(rslv2, rjct2) {
                            var dimensions = sizeOf(imagesFolder + file);
                            generateSourceResponsive(file, imagesFolder, dimensions, sourceImagesDir).then(srcset => {

                                rslv2({
                                    path:imagesFolder + file,
                                    srcset: srcset,
                                    width:dimensions.width,
                                    height:dimensions.height
                                });
                            });

                        }));
                    }
                });

                Promise.all(imagesPromises).then(values => {

                    projtsJson[key]["images"] = values;

                    /* include project */
                    var textCode = 'projects["' + key + '"]=' + JSON.stringify(projtsJson[key]) + ';';



                    rslv(textCode);
                });

            }

        })
    }  );
});

(function promRecur(index) {

    if (index == 0) {
        output = "var app = app || {};";
        output += "(function () { 'use strict';";
        output += "var projects = {};";
    }

    ps[index]().then(value => {

        output += value;

        console.log(('Generated raw code of project with key: ' + (index + 1)).green);

        if(++index < ps.length){
            promRecur(index);
        } else {
            output += "app.state = { projects: projects};";
            output += "})();";
            /* Write the output */
            fs.writeFile("js/state.js", output, function (err) {
                if (err) {
                    return console.log(err);
                }

                console.log("The code was written!");
            });
        }
    });

})(0);

/*Promise.all(ps).then(values => {
    /!* Generate the final output *!/
    var output;
    /!* Generate the general output *!/
    output = "var app = app || {};";
    output += "(function () { 'use strict';";
    output += "var projects = {};";
    values.forEach(textCode => output += textCode);
    output += "app.state = { projects: projects};";
    output += "})();";

    /!* Write the output *!/
    fs.writeFile("js/state.js", output, function (err) {
        if (err) {
            return console.log(err);
        }

        console.log("The code was written!");
    });
});*/

/*readConfigData("projts/projts.json").then(generateSourceImages).then(writeRawState);*/

