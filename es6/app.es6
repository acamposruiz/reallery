/*jshint quotmark:false */
/*jshint white:false */
/*jshint trailing:false */
/*jshint newcap:false */
/*global React, Router*/

import styles from 'Styles/styles.css';
import state from '../state/state';
import React from 'react';
import ReactDOM from 'react-dom';
import WorksApp from './worksApp.es6';

ReactDOM.render(
	<WorksApp model={state.projects}/>,
    document.getElementsByClassName('mainpage')[0]
);
