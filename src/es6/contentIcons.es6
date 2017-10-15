/*jshint quotmark: false */
/*jshint white: false */
/*jshint trailing: false */
/*jshint newcap: false */
/*global React */
import React from 'react';
import * as MaterialDesignIcons from 'react-icons/md'
import * as FontAwesome from 'react-icons/fa'
import * as Typicons from 'react-icons/ti'
import * as GithubOcticons from 'react-icons/go'

class ContentIcons extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        const icons = {MaterialDesignIcons, FontAwesome, Typicons, GithubOcticons};
        return React.createElement(icons[this.props.dataicon.family][this.props.dataicon.icon], null)
    }
};

export default ContentIcons;
