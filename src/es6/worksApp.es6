/*jshint quotmark:false */
/*jshint white:false */
/*jshint trailing:false */
/*jshint newcap:false */
/*global React, Router*/
import React from 'react';
import ProjectButton from './projectButton.es6';
import ProjectGallery from './projectGallery.es6';
import Director from '../../node_modules/director/build/director.js';
import FaEnvelope from 'react-icons/lib/fa/envelope';
import FaPhone from 'react-icons/lib/fa/phone';
import FaGithubAlt from 'react-icons/lib/fa/github-alt';
import FaTwitter from 'react-icons/lib/fa/twitter';
import FaInstagram from 'react-icons/lib/fa/instagram';
import utils from './utils.es6';

const Router = Director.Router;

class worksApp extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      meta: props.meta || {},
      project: null
    };

    if (props.meta.languageDefault) this.state.lng = props.meta.languageDefault;
  }

  componentDidMount() {
    this.configRoute(this.props.meta.languageDefault);
  }

  configRoute(lngParam) {
    const setState = this.setState.bind(this);
    let projects = this.props.model;

    if (lngParam) {
      const router = Router({
        '/:lng/': [(lng) => {
          setState({project: null, lng});
        }, this.logPageView],
        '/:lng/project/view/:projectId': [(lng, projectId) => {
          setState({project: projects[projectId], lng});
        }, this.logPageView]
      });
      router.init(`/${lngParam}`);
    } else {
      const router = Router({
        '/': [() => {
          setState({project: null});
        }, this.logPageView],
        '/project/view/:projectId': [(projectId) => {
          setState({project: projects[projectId]});
        }, this.logPageView]
      });
      router.init('/');
    }
  }

  logPageView() {
    const ga = ga || false;
    if (ga) {
      ga('set', 'page', '/' + window.location.hash);
      ga('send', 'pageview');
    }
  }

  render() {
    const mobile = utils.is_mobile('any') ? 'mobile' : 'no-mobile';
    const section = !this.state.project ? 'home' : 'project';
    const lng = this.state.lng;
    const homePath = "/#/" + (lng || "");
    let projects = this.props.model;
    let projectSt = this.state.project || {};
    let meta = this.props.meta || {};
    let ObjVals = Object.keys(projects).map(function (key) {
      return projects[key];
    });


    let projectsButtosList = ObjVals.map(function (project, index) {
      project.state = project.state || "";
      const name = (!lng)? project.name: project.name[lng];


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
          active={project.name == projectSt.name}
        />
      );
    }, this);


    const gallery = <ProjectGallery lng={lng} project={this.state.project}/>;

    return <div className={`container ${section} ${mobile}`}>

      <header className="container-header">
        <h1 className="title-header"><a className="main-title" href={homePath}>{meta.title}</a></h1>
        <section className="menu menu-header"> {this.state.project ? projectsButtosList : null} </section>
      </header>

      <section className="menu menu-content"> {!this.state.project ? projectsButtosList : null} </section>

      <section className="gallery"> {gallery} </section>

      <footer className="contact">
        {(meta.github) ?
          <a target="_blank" href={meta.github}><span className="mail-data"><FaGithubAlt/><span className="data">View on github</span></span></a> : null}

        <a href={`mailto:${meta.email}`}><span className="mail-data"><FaEnvelope/><span
          className="data">{meta.email}</span></span></a>
        &nbsp;  &nbsp;  &nbsp;
        <a href={`tel:${meta.tlf}`}><span className="mail-data"><FaPhone/><span
          className="data">{meta.tlf}</span></span></a>


        {/*<i class="material-icons">phone</i>
                             <span className="twitter-data"><FaTwitter /><span className="data">@acwrks</span></span>
                             <span className="instagram-data"><FaInstagram /><span className="data">acwrks</span></span>
                             */}

      </footer>

    </div>
  }

};

export default worksApp;
