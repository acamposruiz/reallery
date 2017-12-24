var YouTube = require('youtube-node');


function anyVideo(dataJSON) {
  console.log("anyVideo()");

  var videos = [];

  for (var key in dataJSON) {
    let projVideo = dataJSON[key].videos;
    videos = (projVideo) ? videos.concat(projVideo) : videos;
  }

  return videos.length > 0;

}


function getIdPromise(lang, projectKey, arrayPromises, youTube) {
  console.log("getIdPromise()");
  return function (youtubeId, index) {

    arrayPromises.push(new Promise(resolve => {

      youTube.getById(youtubeId, function (error, result) {

        if (error) {
          console.log(error);
        }
        else {
          const thumbnails = result.items[0].snippet.thumbnails;
          const data = {
            src: thumbnails.high.url,
            srcset: [
              `${thumbnails.high.url} 1024w`,
              `${thumbnails.high.url} 800w`,
              `${thumbnails.high.url} 500w`,
              `${thumbnails.high.url} 320w`,
            ],
            width: thumbnails.high.width,
            height: thumbnails.high.height,
            content: youtubeId,
            type: 'video',
          };
          resolve({
            index: index,
            lang: lang,
            projectKey: projectKey,
            data: data
          });
        }

      });

    }));

  };
}


function getVideos(youTubeKey, dataJSON) {
  console.log("getVideos()");

  return new Promise(resolve => {

    var youTube = new YouTube();
    youTube.setKey(youTubeKey);
    const arrayPromises = [];


    Object.keys(dataJSON).filter(key => key !== 'meta').forEach(projectKey => {
      if (!dataJSON.meta.languages) {
        dataJSON[projectKey].videos.forEach(getIdPromise(false, projectKey, arrayPromises, youTube));
      } else {
        for (const lang in dataJSON[projectKey].videos) {
          dataJSON[projectKey].videos[lang].forEach(getIdPromise(lang, projectKey, arrayPromises, youTube));
        }
      }
    });

    Promise.all(arrayPromises).then(data => {
      data.forEach(dataProject => {
        const videos = dataJSON[dataProject.projectKey]['videos'];
        if (dataProject.lang) {
          videos[dataProject.lang][dataProject.index] = dataProject.data;
        } else {
          videos[dataProject.index] = dataProject.data;
        }
      });
      resolve(dataJSON);
    });

  });
}

function youtube(dataJSON) {
  console.log("youtube()");

  const youTubeKey = dataJSON.meta.youTubeKey;

  return new Promise((resolve, reject) => {

    if (!youTubeKey && anyVideo(dataJSON)) reject('No youtube key in configuration file');

    if (!youTubeKey) resolve(dataJSON);

    getVideos(youTubeKey, Object.assign({}, dataJSON)).then(dataWithVideos => resolve(dataWithVideos));

  });

}


module.exports = {
  youtube
};