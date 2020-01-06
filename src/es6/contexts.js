import React from "react";
import contextState from "../../state/state";

export const AppState = React.createContext({
  meta: contextState.meta || {},
  project: null,
});
