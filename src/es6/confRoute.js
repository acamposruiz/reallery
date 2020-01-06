import Director from "director/build/director";
import _ from "lodash";

import contextState from "../../state/state";

const Router = Director.Router;

export const configRoute = ({ state, setState }) => {
  let projects = contextState.projects;
  const lngParam = contextState.meta.languageDefault;
  if (lngParam) {
    const router = Router({
      "/:lng/": [
        (lng) => {
          setState({ ...state, project: null, itemsStore: null, lng });
        },
        logPageView,
      ],
      "/:lng/project/view/:projectId": [
        (lng, projectId) => {
          setState({
            ...state,
            project: projects[projectId],
            lng,
            ...getItems(projects[projectId], lng),
          });
        },
        logPageView,
      ],
    });
    router.init(`/${lngParam}`);
  } else {
    const router = Router({
      "/": [
        () => {
          setState({ ...state, project: null, itemsStore: null });
        },
        logPageView,
      ],
      "/project/view/:projectId": [
        (projectId) => {
          setState({
            ...state,
            project: projects[projectId],
            ...getItems(projects[projectId]),
          });
        },
        logPageView,
      ],
    });
    router.init("/");
  }
};

const logPageView = () => {
  const ga = ga || false;
  if (ga) {
    ga("set", "page", "/" + window.location.hash);
    ga("send", "pageview");
  }
};

function getItems(project, lng) {
  const photos = _.get(project, `images.all`)
    .concat(lng ? _.get(project, `images.${lng}`) : [])
    .map((image) => _.pick(image, ["src", "srcset", "width", "height", "type"]));

  const videos = lng ? project.videos[lng] : project.videos;

  const articles = (lng ? project.articles[lng] : project.articles).map((text) => {
    return {
      type: "article",
      content: text,
    };
  });

  const storeLength = photos.length + videos.length + articles.length;

  return { photos, videos, articles, storeLength };
}
