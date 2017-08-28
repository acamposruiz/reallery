import isMobile from 'ismobilejs';

const cache = {};

function isMobileUtil(request) {
  if (request == 'any') {
      cache.is_mobile_any = cache.is_mobile_any || isMobile.any;
      return cache.is_mobile_any;
  } else if (request == 'phone') {
      cache.is_mobile_phone = cache.is_mobile_phone || isMobile.phone;
      return cache.is_mobile_phone;
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


function preLoadHome(projects) {

    Object.keys(projects).map(function (key) {
        return projects[key].images;
    }).forEach(imagesGallery => preLoadGallery(imagesGallery));

}

function merge(array1 = [],array2 = []) {

    let output = [];

    const [arrayBase,arrayIntro] = (array1.length > array2.length)? [array1,array2]: [array2,array1];

    const size = Math.floor(arrayBase.length / arrayIntro.length);


    for (var i=0,j=0; i<arrayBase.length; i+=size, j++) {

        if (j >= arrayIntro.length) {
            output = output.concat(arrayBase.slice(i));
            break;
        } else {
            output.push(arrayIntro[j]);
            output = output.concat(arrayBase.slice(i,i+size));
        }

    }

    return output;

}

const utils = {
    merge: merge,
    is_mobile: isMobileUtil,
    preload: {gallery: preLoadGallery, home: preLoadHome}
};

export default utils;