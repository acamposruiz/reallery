/*jshint quotmark: false */
/*jshint white: false */
/*jshint trailing: false */
/*jshint newcap: false */
/*global React */
import React from 'react';

class ProjectButton extends React.Component {

	constructor(props, context) {
		super(props, context);
	}

	render() {

		const classNameIcon = "icon-ico_" + this.props.key2;
		const path = "/#/project/view/" + this.props.key2;

		return <a href={path}>
					<div className={ `project-button-container ${(this.props.active? " active":" no-active")} bg-color-${this.props.color} home-project-button-${this.props.key2}` }>

							<div className="text type">{this.props.type}</div>
							<div className={`project-icon ${classNameIcon}`}></div>
							<div className="text title">{this.props.name}</div>

					</div>
				</a>
	}
};

export default ProjectButton;
