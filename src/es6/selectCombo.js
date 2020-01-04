import React from "react";

import { AppState } from "./contexts";
import contextState from "../../state/state";
import ProjectButton from "./projectButton.js";

export class SelectCombo extends React.Component {
  static contextType = AppState;
  render() {
    const { projects } = contextState;
    const lng = this.context.lng || contextState.meta.languageDefault;
    const section = !this.context.project ? "home" : "project";
    const className = !this.context.project ? "menu menu-content" : "menu menu-header";
    let projectSt = this.context.project || {};
    return (
      <section className={className}>
        {" "}
        {Object.keys(projects)
          .map(function(key) {
            return projects[key];
          })
          .map(function(project, index) {
            project.state = project.state || "";
            const name = !lng ? project.name : project.name[lng];

            return (
              <ProjectButton
                icon={project.icon}
                view={section}
                lng={lng}
                key={index}
                key2={Object.keys(projects)[index]}
                name={name}
                color={project.color}
                type={project.type}
                publish={project.publish}
                state={project.state}
                active={project.name === projectSt.name}
              />
            );
          }, this)}{" "}
      </section>
    );
  }
}
