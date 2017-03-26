// Require library
var gd = require('node-gd');
var randomColor = require('randomcolor');

var colors = randomColor({
    count: 50,
    luminosity: 'light',
    format: 'rgb'
});


colors = colors.map(color => {
    return color.substring(4).split(',').map(val => {
        return parseInt(val);
    })
});

colors.forEach( (color, key) => {

        var dimensions = [2880];
        dimensions.forEach(w => {
            var h = Math.floor(w/2);

            // Create blank new image in memory
            var img = gd.createSync(w, h);

// Set background color
            img.colorAllocate(color[0], color[1], color[2]);

// Set text color
            var txtColor = img.colorAllocate(0, 0, 0);

// Set full path to font file
            var fontPath = 'assets/Noway-Regular-webfont/noway-regular-webfont.ttf';

// Render string in image
            img.stringFT(txtColor, fontPath, Math.floor(300*(h/1800)), 0, Math.floor(w/8), Math.floor(h/2), w+' x '+h);

// Write image buffer to disk
            img.savePng('projts/005/images/'+key+'_img'+ w+'x'+h+'.png', 1, function(err) {
                if(err) {
                    throw err;
                }
            });
        });

    }
);

/*
 var dimensions = [2880, 1240, 620, 310, 160];
dimensions.forEach(w => {
    var h = Math.floor(w/2);

    // Create blank new image in memory
    var img = gd.createSync(w, h);

// Set background color
    img.colorAllocate(155, 200, 200);

// Set text color
    var txtColor = img.colorAllocate(0, 0, 0);

// Set full path to font file
    var fontPath = 'assets/Noway-Regular-webfont/noway-regular-webfont.ttf';

// Render string in image
    img.stringFT(txtColor, fontPath, Math.floor(300*(h/1800)), 0, Math.floor(w/8), Math.floor(h/2), w+' x '+h);

// Write image buffer to disk
    img.savePng('projts/005/images/img'+ w+'x'+h+'.png', 1, function(err) {
        if(err) {
            throw err;
        }
    });
});
*/

