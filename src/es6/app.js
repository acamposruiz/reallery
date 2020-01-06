/*jshint quotmark:false */
/*jshint white:false */
/*jshint trailing:false */
/*jshint newcap:false */
/*global React, Router*/

import React from "react";
import ReactDOM from "react-dom";

import AppContainer from "./appContainer.js";
import { PROJECT_DOM_ROOT_ID } from "./constants.js";

ReactDOM.render(<AppContainer />, document.getElementById(PROJECT_DOM_ROOT_ID));
