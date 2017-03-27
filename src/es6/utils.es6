import isMobile from 'ismobilejs';

const utils = {preload:{}};

utils.preload.home = (state) => {

    var is_movil = isMobile.any ? true : false;

    let ObjVals = Object.keys(state.projects).map(function (key) {
        return state.projects[key];
    });

    ObjVals.forEach(proj => {
        var count = 0;
        proj.images.some((imag, index) => {
            imag.srcset.filter(path => [1240, 620].indexOf(parseInt(path.split(' ')[1])) != -1 ).map(path => {
                return path.split(' ')[0]
            }).forEach(url => {
                var image = new Image();
                image.src = url;
                count++;
            });
            return (count > (is_movil ? 4 : 8)) ? true : false;
        });
    });

};


export default utils;