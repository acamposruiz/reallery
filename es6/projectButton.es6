/*jshint quotmark: false */
/*jshint white: false */
/*jshint trailing: false */
/*jshint newcap: false */
/*global React */
import React from 'react';
import classNames from "../node_modules/classnames/index.js";

class ProjectButton extends React.Component {

	constructor(props, context) {
		super(props, context);
	}

	render() {

		const classNameIcon = "icon-ico_" + this.props.key2;
		const path = "/#/project/view/" + this.props.key2;

		return <div className={classNames({
            		unpublish: !this.props.publish
				})}>
					<a href={path}>
						{this.props.name}
						<span className={classNameIcon}></span>
					</a>
				</div>
	}
};

export default ProjectButton;
