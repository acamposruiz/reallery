/*jshint quotmark:false */
/*jshint white:false */
/*jshint trailing:false */
/*jshint newcap:false */
/*global React, Router*/
import React from 'react';
import ProjectButton from './projectButton.es6';
import ProjectGallery from './projectGallery.es6';
import Director from '../../node_modules/director/build/director.js';
import FaEnvelope from 'react-icons/fa/envelope';
import FaTwitter from 'react-icons/fa/twitter';
import FaInstagram from 'react-icons/fa/instagram';
import utils from './utils.es6';

const Router = Director.Router;


class worksApp extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            lng: 'en',
            project: null
        };
    }

    componentDidMount() {
        const setState = this.setState.bind(this);
        let projects = this.props.model;
        const router = Router({
            //'/video': [this.setState.bind(this, {project: projects["001"]}), this.logPageView],
            //'/': [this.setState.bind(this, {project: null}),  this.logPageView],
            '/:lng/': [(lng) => {
                setState({project: null, lng});
            }, this.logPageView],
            '/:lng/project/view/:projectId': [(lng, projectId) => {
                setState({project: projects[projectId], lng});
            }, this.logPageView]
        });
        router.init('/en');
        //utils.preload.home(projects);
    }

    logPageView() {
        ga('set', 'page', '/' + window.location.hash);
        ga('send', 'pageview');
    }

	render() {
    	const mobile = utils.is_mobile('any')? 'mobile':'no-mobile';
    	const section = !this.state.project? 'home':'project';
    	const lng = this.state.lng;
        const homePath = "/#/" + lng;
		let projects = this.props.model;
		let projectSt = this.state.project || {};
		let ObjVals = Object.keys(projects).map(function(key) {
            return projects[key];
        });

		let projectsButtosList = ObjVals.map(function (project, index) {
            project.state = project.state || "";
			return (
				<ProjectButton
					view={section}
					lng={lng}
					key={index}
					key2={Object.keys(projects)[index]}
					name={project.name}
					strings={project.strings[lng]}
					color={project.color}
					type={project.type}
					publish={project.publish}
					state={project.state}
					active={project.name == projectSt.name}
				/>
			);
		}, this);



		const gallery = <ProjectGallery lng={lng} project={this.state.project || null}/>;

        return <div className={`container ${section} ${mobile}`}>

						<header className="container-header">
							<h1 className="title-header"><a className="main-title" href={homePath}>Antonio {this.state.project? <br/> : null} Campos</a></h1>
							<section className="menu menu-header"> {this.state.project? projectsButtosList: null} </section>
						</header>

						<section className="menu menu-content"> {!this.state.project? projectsButtosList: null} </section>

						<section className="gallery"> {gallery} </section>

						<footer className="contact">
							<span className="mail-data"><FaEnvelope /><span className="data">acamposruiz@gmail.com</span></span>
                            {/*
							 <span className="twitter-data"><FaTwitter /><span className="data">@acwrks</span></span>
							 <span className="instagram-data"><FaInstagram /><span className="data">acwrks</span></span>
							 */}

						</footer>

				</div>
	}

};

export default worksApp;
