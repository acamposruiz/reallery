/*jshint quotmark:false */
/*jshint white:false */
/*jshint trailing:false */
/*jshint newcap:false */
/*global React, Router*/
import React from "react";

import { AppState } from "./contexts";
import { configRoute } from "./confRoute";
import { Content } from "./content.js";
import { Footer } from "./footer";
import { Header } from "./header";
import contextState from "../../state/state";
import utils from "./utils.js";

class AppContainer extends React.Component {
  state = {
    meta: contextState.meta || {},
    lng: contextState.meta.languageDefault ? contextState.meta.languageDefault : null,
    project: null,
  };

  componentDidMount() {
    configRoute({ setState: this.setState.bind(this) });
  }

  render() {
    const mobile = utils.is_mobile("any") ? "mobile" : "no-mobile";
    const section = !this.state.project ? "home" : "project";

    return (
      <AppState.Provider value={this.state}>
        <div className={`container ${section} ${mobile}`}>
          <Header />

          <Content />

          <Footer />
        </div>
      </AppState.Provider>
    );
  }
}

export default AppContainer;
