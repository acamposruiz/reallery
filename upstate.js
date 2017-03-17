/* Import modules */
var fs = require("fs");
var sizeOf = require('image-size');

/* Import JSON DATA */
var projtsJson = JSON.parse(fs.readFileSync("projts/projts.json", "utf8"));

/* Declaration of vars */
var output;


/* Generate the general output */
output = "var app = app || {};";
output += "(function () { 'use strict';";
output += "var projects = {};";

/* Generate the projects output */
Object.keys(projtsJson).forEach(function (key) {
    /* Declaration of vars */
    var imagesFolder = 'projts/'+key+'/images/';

    /* Get images info */
    var files = fs.readdirSync(imagesFolder);
    projtsJson[key]["images"] = [];
    files.forEach(file => {
        var dimensions = sizeOf(imagesFolder + file);
        projtsJson[key]["images"].push({
            path:imagesFolder + file,
            width:dimensions.width,
            height:dimensions.height
        });
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