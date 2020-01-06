/*jshint quotmark: false */
/*jshint white: false */
/*jshint trailing: false */
/*jshint newcap: false */
/*global React */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as icons from "./icons.es6";

const ContentIcons = ({ dataicon }) => <FontAwesomeIcon icon={icons[dataicon.icon]} />;

export default ContentIcons;
