/*jshint quotmark: false */
/*jshint white: false */
/*jshint trailing: false */
/*jshint newcap: false */
/*global React */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as icons from "./icons.es6";

class ContentIcons extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <FontAwesomeIcon icon={icons[this.props.dataicon.icon]} />;
  }
}

export default ContentIcons;
