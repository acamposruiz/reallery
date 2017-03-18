/*jshint quotmark:false */
/*jshint white:false */
/*jshint trailing:false */
/*jshint newcap:false */
/*global React, Router*/
import React from 'react';
import ReactDOM from 'react-dom';
import ProjectButton from './projectButton.es6';
import ProjectGallery from './projectGallery.es6';
import Director from '../node_modules/director/build/director.js';
import classNames from "../node_modules/classnames/index.js";

const Router = Director.Router;

class worksApp extends React.Component {

    constructor(props, context) {
        super();
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
    }

    componentWillUpdate(nextProps, nextState){

    	return true;
    	/*console.log(nextState.project? nextState.project: 'HOME');*/
	}

	render() {
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
					type={project.type}
					publish={project.publish}
					state={project.state}
					active={project.name == projectSt.name}
				/>
			);
		}, this);



		const gallery = this.state.project? <ProjectGallery project={this.state.project}/>: undefined;

        return <div className={!this.state.project? 'home':'project'}>
					<header className="header">
						<h1><a href="/#/">Antonio Campos's Works</a></h1>
						<div className="contact"><span>acwrks@gmail.com</span><span>/</span><span>@acwrks</span></div>
						<section className="menu">
							<div className="project-list">
                                {projectsButtosList}
							</div>
						</section>
					</header>

					<section className="gallery">
						{gallery}
					</section>
				</div>
	}

};

export default worksApp;
