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
            project: null
        };
    }

    componentDidMount() {
        const setState = this.setState.bind(this);
        let projects = this.props.model;
        const router = Router({
            '/': this.setState.bind(this, {project: null}),
            '/project/view/:projectId': (projectId) => {
                setState({project: projects[projectId]});
			}
        });
        router.init('/');
        utils.preload.home(projects);
    }

	render() {
    	const movil = utils.is_mobile('any')? 'movil':'no-movil';
    	const section = !this.state.project? 'home':'project';
		let projects = this.props.model;
		let projectSt = this.state.project || {};
		let ObjVals = Object.keys(projects).map(function(key) {
            return projects[key];
        });;

		let projectsButtosList = ObjVals.map(function (project, index) {
            project.state = project.state || "";
			return (
				<ProjectButton
					key={index}
					key2={Object.keys(projects)[index]}
					name={project.name}
					color={project.color}
					type={project.type}
					publish={project.publish}
					state={project.state}
					active={project.name == projectSt.name}
				/>
			);
		}, this);



		const gallery = <ProjectGallery project={this.state.project || null}/>;

        return <div className={`container ${section} ${movil}`}>

						<header className="container'header">
							<h1 className="title-header"><a className="main-title" href="/#/">Antonio Campos</a></h1>
							<section className="menu menu-header"> {this.state.project? projectsButtosList: null} </section>
						</header>

						<section className="menu menu-content"> {!this.state.project? projectsButtosList: null} </section>

						<section className="gallery"> {gallery} </section>

						<footer className="contact">
							<span className="mail-data"><FaEnvelope /><span className="data">acamposruiz@gmail.com</span></span>
							<span className="twitter-data"><FaTwitter /><span className="data">@acwrks</span></span>
							<span className="instagram-data"><FaInstagram /><span className="data">acwrks</span></span>
						</footer>

				</div>
	}

};

export default worksApp;
