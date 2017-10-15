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
        const path = "/#/" + this.props.lng + "/project/view/" + this.props.key2;
        const buttonText = <div className="text title">{this.props.strings.name}</div>;

        return <div className={ `project-button-container ${(this.props.active ? " active" : " no-active")} home-project-button-${this.props.key2}` }>

                    <a href={path}>
                        <div className={`project-icon color-${this.props.color}  ${classNameIcon}`}></div>
                        {this.props.view == 'project'? buttonText : null}
                    </a>
                    {this.props.view == 'home'? buttonText : null}



                </div>
    }
}
;

export default ProjectButton;
