/*jshint quotmark:false */
/*jshint white:false */
/*jshint trailing:false */
/*jshint newcap:false */
/*global React, Router*/

import React from "react";
import ReactDOM from "react-dom";

import AppContainer from "./appContainer.es6";
import { PROJECT_DOM_ROOT_ID } from "./constants.es6";

ReactDOM.render(<AppContainer />, document.getElementById(PROJECT_DOM_ROOT_ID));
