/*jshint quotmark:false */
/*jshint white:false */
/*jshint trailing:false */
/*jshint newcap:false */
/*global React, Router*/

import styles from 'Styles/styles.css';
import React from 'react';
import ReactDOM from 'react-dom';
import WorksApp from './worksApp.es6';

var model = app.state.projects;

ReactDOM.render(
	<WorksApp model={model}/>,
    document.getElementsByClassName('mainpage')[0]
);
