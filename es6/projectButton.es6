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
            base: {
                color: '#fff',

                // Adding interactive state couldn't be easier! Add a special key to your
                // style object (:hover, :focus, :active, or @media) with the additional rules.
                ':hover': {
                    background: color('#0074d9').lighten(0.2).hex()
                }
            },

            primary: {
                background: '#0074D9'
            },

            warning: {
                background: '#FF4136'
            }
        };

		return <div style={[
						styles.base, styles.primary
					]}>
					<a href={path}>
						<h4 className="type">{this.props.type}</h4>
						<span className={classNameIcon}></span>
						<h3 className="title">{this.props.name}</h3>
					</a>
				</div>
	}
};

export default ProjectButton;
