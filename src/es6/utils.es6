import isMobile from 'ismobilejs';

const cache = {};

function isMobileUtil(request) {
  if (request == 'any') {
      cache.is_mobile_any = cache.is_mobile_any || isMobile.any;
      return cache.is_mobile_any;
  }
}

function preLoadGallery(imagesGallery) {

    var count = 0;

    imagesGallery.some(imag => {
        imag.srcset.filter(path => [1240, 620].indexOf(parseInt(path.split(' ')[1])) != -1).map(path => {
            return path.split(' ')[0]
        }).forEach(url => {
            var image = new Image();
            image.src = url;
            count++;
        });
        return count > (isMobileUtil('any') ? 4 : 6);
    });

}


function preLoadHome(state) {

    let Projects = Object.keys(state.projects).map(function (key) {
        return state.projects[key];
    });

    Projects.forEach(proj => preLoadGallery(proj.images));

}

const utils = {
    is_mobile: isMobileUtil,
    preload: {gallery: preLoadGallery, home: preLoadHome}
};

export default utils;