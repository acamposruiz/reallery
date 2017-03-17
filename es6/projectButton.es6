/*jshint quotmark: false */
/*jshint white: false */
/*jshint trailing: false */
/*jshint newcap: false */
/*global React */
import Radium from '../vendors/radium/dist/radium.min.js';
import React from 'react';
import color from 'color';
import classNames from "../node_modules/classnames/index.js";

@Radium
class ProjectButton extends React.Component {

	constructor(props, context) {
		super(props, context);
	}

	render() {

		const classNameIcon = "icon-ico_" + this.props.key2;
		const path = "/#/project/view/" + this.props.key2;

        var styles = {
            border: '1px solid #949494',
			'border-radius': '9px',
			margin: '5px',
			padding: '5px',
			float: 'left'
        };

		return <div className={"project-button-container" + (this.props.active? " active":" no-active")}>
					<a href={path}>
						<div className="type">{this.props.type}</div>
						<div className={classNameIcon}></div>
						<div className="title">{this.props.name}</div>
					</a>
				</div>
	}
};

export default ProjectButton;
