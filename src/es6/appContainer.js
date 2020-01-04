/*jshint quotmark:false */
/*jshint white:false */
/*jshint trailing:false */
/*jshint newcap:false */
/*global React, Router*/
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Director from "director/build/director";
import React from "react";

import { AppState } from "./contexts";
import { Content, SelectCombo } from "./content.js";
import contextState from "../../state/state";
import utils from "./utils.js";

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

          <footer className="contact">
            {meta.github ? (
              <a target="_blank" href={meta.github}>
                <span className="mail-data">
                  <FontAwesomeIcon icon={faGithub} />
                  <span className="data">View on github</span>
                </span>
              </a>
            ) : null}
            <a href={`mailto:${meta.email}`}>
              <span className="mail-data">
                <FontAwesomeIcon icon={faEnvelope} />
                <span className="data">{meta.email}</span>
              </span>
            </a>
            &nbsp; &nbsp; &nbsp;
            <a href={`tel:${meta.tlf}`}>
              <span className="mail-data">
                <FontAwesomeIcon icon={faPhone} />
                <span className="data">{meta.tlf}</span>
              </span>
            </a>
            {/*<i class="material-icons">phone</i>
                             <span className="twitter-data"><FaTwitter /><span className="data">@acwrks</span></span>
                             <span className="instagram-data"><FaInstagram /><span className="data">acwrks</span></span>
                             */}
          </footer>
        </div>
      </AppState.Provider>
    );
  }
}

export default AppContainer;
