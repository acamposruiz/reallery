/*jshint quotmark:false */
/*jshint white:false */
/*jshint trailing:false */
/*jshint newcap:false */
/*global React, Router*/
import Director from "director/build/director";
import React from "react";

import { AppState } from "./contexts";
import { Content, SelectCombo } from "./content.js";
import contextState from "../../state/state";
import utils from "./utils.js";
import { Footer } from "./footer";

const Router = Director.Router;

class AppContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      meta: contextState.meta || {},
      project: null,
    };

    if (contextState.meta.languageDefault) this.state.lng = contextState.meta.languageDefault;
  }
  componentDidMount() {
    this.configRoute(contextState.meta.languageDefault);
  }

  configRoute(lngParam = "en") {
    const setState = this.setState.bind(this);
    let projects = contextState.projects;

    if (lngParam) {
      const router = Router({
        "/:lng/": [
          (lng) => {
            setState({ project: null, lng });
          },
          this.logPageView,
        ],
        "/:lng/project/view/:projectId": [
          (lng, projectId) => {
            setState({ project: projects[projectId], lng });
          },
          this.logPageView,
        ],
      });
      router.init(`/${lngParam}`);
    } else {
      const router = Router({
        "/": [
          () => {
            setState({ project: null });
          },
          this.logPageView,
        ],
        "/project/view/:projectId": [
          (projectId) => {
            setState({ project: projects[projectId] });
          },
          this.logPageView,
        ],
      });
      router.init("/");
    }
  }

  logPageView() {
    const ga = ga || false;
    if (ga) {
      ga("set", "page", "/" + window.location.hash);
      ga("send", "pageview");
    }
  }

  render() {
    if (!contextState.meta || !contextState.projects || !this.state) {
      return <div>error</div>;
    }
    const mobile = utils.is_mobile("any") ? "mobile" : "no-mobile";
    const section = !this.state.project ? "home" : "project";
    const lng = this.state.lng || contextState.meta.languageDefault;
    const pathPrefix = process.env.PUBLICPATH ? "/" + process.env.PUBLICPATH : "";
    const homePath = pathPrefix + "/#/" + (lng || "");
    let meta = contextState.meta || {};

    return (
      <AppState.Provider value={this.state}>
        <div className={`container ${section} ${mobile}`}>
          <header className="container-header">
            <h1 className="title-header">
              <a className="main-title" href={homePath}>
                {meta.title}
              </a>
            </h1>
            {this.state.project ? <SelectCombo /> : null}
          </header>

          <Content />

          <Footer />
        </div>
      </AppState.Provider>
    );
  }
}

export default AppContainer;
