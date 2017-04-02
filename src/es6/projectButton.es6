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

        return <div className={ `project-button-container ${(this.props.active ? " active" : " no-active")} home-project-button-${this.props.key2}` }>

                    <div className="text type">{this.props.type}</div>
                    <a href={path}>
                        <div className={`project-icon color-${this.props.color}  ${classNameIcon}`}></div>
                    </a>
                    <div className="text title">{this.props.name}</div>


                </div>
    }
}
;

export default ProjectButton;
