var YouTube = require('youtube-node');


function anyVideo(dataJSON) {

  var videos = [];

  for (var key in dataJSON) {
    let projVideo = dataJSON[key].videos;
    videos = (projVideo) ? videos.concat(projVideo) : videos;
  }

  return videos.length > 0;

}


function getIdPromise(lang, projectKey, arrayPromises, youTube) {
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

  return new Promise(resolve => {

    var youTube = new YouTube();
    youTube.setKey(youTubeKey);
    const arrayPromises = [];


    Object.keys(dataJSON).filter(key => key !== 'meta').forEach(projectKey => {
      if (!dataJSON.meta.languages) {
        dataJSON[projectKey].videos.forEach(getIdPromise(false, projectKey, arrayPromises, youTube));
      } else {
        Object.keys(dataJSON[projectKey].videos).forEach(lang => {

          dataJSON[projectKey].videos[lang].forEach(getIdPromise(lang, projectKey, arrayPromises, youTube));

        });
      }
    });

    Promise.all(arrayPromises).then(data => {
      data.forEach(dataProject => {
        if (dataProject.lang) {
          dataJSON[dataProject.projectKey]['videos'][dataProject.lang][dataProject.index] = dataProject.data;
        } else {
          dataJSON[dataProject.projectKey]['videos'][dataProject.index] = dataProject.data;
        }
      });
      resolve(dataJSON);
    });

  });
}

function youtube(dataJSON) {

  const youTubeKey = dataJSON.meta.youTubeKey;

  return new Promise((resolve, reject) => {

    if (!youTubeKey && anyVideo(dataJSON)) reject('No youtube key in configuration file');

    if (!youTubeKey) resolve(dataJSON);

    getVideos(youTubeKey, dataJSON).then(dataWithVideos => resolve(dataWithVideos));

  });

}


module.exports = {
  youtube
};