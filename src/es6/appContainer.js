/*jshint quotmark:false */
/*jshint white:false */
/*jshint trailing:false */
/*jshint newcap:false */
/*global React, Router*/
import React, { useEffect, useState } from "react";

import { AppState } from "./contexts";
import { configRoute } from "./confRoute";
import { Content } from "./content.js";
import { Footer } from "./footer";
import { Header } from "./header";
import contextState from "../../state/state";
import utils from "./utils.js";

const AppContainer = () => {
  const [state, setState] = useState({
    meta: contextState.meta || {},
    lng: contextState.meta.languageDefault ? contextState.meta.languageDefault : null,
    project: null,
  });

  useEffect(() => {
    configRoute({ state, setState });
  }, []);

  const mobile = utils.is_mobile("any") ? "mobile" : "no-mobile";
  const section = !state.project ? "home" : "project";

  return (
    <AppState.Provider value={state}>
      <div className={`container ${section} ${mobile}`}>
        <Header />

        <Content />

        <Footer />
      </div>
    </AppState.Provider>
  );
};

export default AppContainer;
