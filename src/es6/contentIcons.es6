/*jshint quotmark: false */
/*jshint white: false */
/*jshint trailing: false */
/*jshint newcap: false */
/*global React */
import React from "react";
import * as icons from "./icons.es6";

class ContentIcons extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return React.createElement(icons[this.props.dataicon.icon], null);
  }
}

export default ContentIcons;
