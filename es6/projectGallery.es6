/*jshint quotmark: false */
/*jshint white: false */
/*jshint trailing: false */
/*jshint newcap: false */
/*global React */
import React from 'react';

class ProjectGallery extends React.Component {

	constructor(props, context) {
		super(props, context);
	}

	render() {

		return <div>
					<h1>{this.props.project && this.props.project.name}</h1>
				</div>
	}
};

export default ProjectGallery;
