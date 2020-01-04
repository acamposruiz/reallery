/*jshint quotmark:false */
/*jshint white:false */
/*jshint trailing:false */
/*jshint newcap:false */
/*global React, Router*/
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import Director from "director/build/director";

import ProjectButton from "./projectButton.es6";
import ProjectGallery from "./projectGallery.es6";
import utils from "./utils.es6";
import contextState from "../../state/state";

export const AppState = React.createContext(contextState);

class Content extends React.Component {
  static contextType = AppState;
  render() {
    const { projectsButtonList, gallery } = this.props;
    return !this.context.project ? (
      <section className="menu menu-content"> {projectsButtonList} </section>
    ) : (
      <section className="gallery"> {gallery} </section>
    );
  }
}

const Router = Director.Router;

class AppContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      contextState,
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
    let projects = contextState.projects;
    let projectSt = this.state.project || {};
    let meta = contextState.meta || {};
    let ObjVals = Object.keys(projects).map(function(key) {
      return projects[key];
    });

    let projectsButtonList = ObjVals.map(function(project, index) {
      project.state = project.state || "";
      const name = !lng ? project.name : project.name[lng];

      return (
        <ProjectButton
          icon={project.icon}
          view={section}
          lng={lng}
          key={index}
          key2={Object.keys(projects)[index]}
          name={name}
          color={project.color}
          type={project.type}
          publish={project.publish}
          state={project.state}
          active={project.name === projectSt.name}
        />
      );
    }, this);

    const gallery = <ProjectGallery lng={lng} project={this.state.project} />;

    return (
      <AppState.Provider value={this.state}>
        <div className={`container ${section} ${mobile}`}>
          <header className="container-header">
            <h1 className="title-header">
              <a className="main-title" href={homePath}>
                {meta.title}
              </a>
            </h1>
            <section className="menu menu-header">
              {" "}
              {this.state.project ? projectsButtonList : null}{" "}
            </section>
          </header>

          <Content projectsButtonList={projectsButtonList} gallery={gallery} />

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
