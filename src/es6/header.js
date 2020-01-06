import React, { useContext } from "react";

import { AppState } from "./contexts";
import { SelectCombo } from "./selectCombo";
import contextState from "../../state/state";

export const Header = () => {
  const context = useContext(AppState);
  const lng = context.lng || contextState.meta.languageDefault;
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
      {context.project ? <SelectCombo /> : null}
    </header>
  );
};
