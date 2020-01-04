import Director from "director/build/director";

import contextState from "../../state/state";

const Router = Director.Router;

export const configRoute = ({ setState }) => {
  let projects = contextState.projects;
  const lngParam = contextState.meta.languageDefault;
  if (lngParam) {
    const router = Router({
      "/:lng/": [
        (lng) => {
          setState({ project: null, lng });
        },
        logPageView,
      ],
      "/:lng/project/view/:projectId": [
        (lng, projectId) => {
          setState({ project: projects[projectId], lng });
        },
        logPageView,
      ],
    });
    router.init(`/${lngParam}`);
  } else {
    const router = Router({
      "/": [
        () => {
          setState({ project: null });
        },
        logPageView,
      ],
      "/project/view/:projectId": [
        (projectId) => {
          setState({ project: projects[projectId] });
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
