/*jshint quotmark: false */
/*jshint white: false */
/*jshint trailing: false */
/*jshint newcap: false */
/*global React */
import React from 'react';
import classNames from "../node_modules/classnames/index.js";

class ProjectItem extends React.Component {

	constructor(props, context) {
		super(props, context);
	}

	render() {

		const classNameIcon = "icon-ico_" + this.props.name;

		return <div className={classNames({
            		unpublish: !this.props.publish
				})}>
            		{this.props.name}
				<span className={classNameIcon}></span>
				</div>
	}
};

export default ProjectItem;
