import React, { useContext } from "react";

import { AppState } from "./contexts";
import contextState from "../../state/state";
import ProjectButton from "./projectButton.js";

export const SelectCombo = () => {
  const context = useContext(AppState);
  const { projects } = contextState;
  const projectsKeys = Object.keys(projects);
  const className = !context.project ? "menu menu-content" : "menu menu-header";
  return (
    <section className={className}>
      {" "}
      {projectsKeys
        .map(function(key) {
          return [projects[key], key];
        })
        .map(function([project, projectKey]) {
          project.state = project.state || "";
          return <ProjectButton buttonProject={project} projectKey={projectKey} key={projectKey} />;
        }, this)}{" "}
    </section>
  );
};
