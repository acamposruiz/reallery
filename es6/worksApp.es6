/*jshint quotmark:false */
/*jshint white:false */
/*jshint trailing:false */
/*jshint newcap:false */
/*global React, Router*/
import React from 'react';
import ReactDOM from 'react-dom';
import TodoFooter from './footer.es6';
import ProjectItem from './projectItem.es6';
import Director from '../node_modules/director/build/director.js';

const Router = Director.Router;

class worksApp extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

	render() {
		let projects = this.props.model;

		let projectsItems = Object.values(projects).map(function (project, index) {
            project.state = project.state || "";
			return (
				<ProjectItem
					key={index}
					key2={Object.keys(projects)[index]}
					name={project.name}
					type={project.type}
					publish={project.publish}
					state={project.state}
				/>
			);
		}, this);

		return <div>
					<header className="header">
						<h1>Antonio Campos - Works</h1>
					</header>
					<section className="main">
						<div className="projects">
							{projectsItems}
						</div>
					</section>
				</div>
	}

};

export default worksApp;
