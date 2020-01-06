import React from "react";

import { AppState } from "./contexts";
import { SelectCombo } from "./selectCombo";
import contextState from "../../state/state";

export class Header extends React.Component {
  static contextType = AppState;
  render() {
    const lng = this.context.lng || contextState.meta.languageDefault;
    let meta = contextState.meta || {};
    const pathPrefix = process.env.PUBLICPATH ? "/" + process.env.PUBLICPATH : "";
    const homePath = pathPrefix + "/#/" + (lng || "");
    return (
      <header className="container-header">
        <h1 className="title-header">
          <a className="main-title" href={homePath}>
            {meta.title}
          </a>
        </h1>
        {this.context.project ? <SelectCombo /> : null}
      </header>
    );
  }
}
