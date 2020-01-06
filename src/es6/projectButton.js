/*jshint quotmark: false */
/*jshint white: false */
/*jshint trailing: false */
/*jshint newcap: false */
/*global React */
import React, { useContext } from "react";

import { AppState } from "./contexts";
import ContentIcons from "./contentIcons.js";

const ProjectButton = (props) => {
  const context = useContext(AppState);
  const { buttonProject } = props;
  const { icon: iconFromProps, color } = buttonProject;
  const view = !context.project ? "home" : "project";
  const lng = context.lng || contextState.meta.languageDefault;
  const name = !lng ? buttonProject.name : buttonProject.name[lng];
  const classNameIcon = "icon-ico_" + props.projectKey;
  const pathPrefix = process.env.PUBLICPATH ? "/" + process.env.PUBLICPATH : "";
  const path = pathPrefix + "/#/" + (lng ? lng + "/" : "") + "project/view/" + props.projectKey;
  const buttonText = <div className="text title">{name}</div>;
  const icon = iconFromProps || { family: "FontAwesome", icon: "FaAsterisk" };
  let projectSt = context.project || {};
  const active = buttonProject.name === projectSt.name;

  return (
    <div
      className={`project-button-container ${
        active ? " active" : " no-active"
      } home-project-button-${props.projectKey}`}
    >
      <a href={path}>
        <div className={`project-icon color-${color}  ${classNameIcon}`}>
          <ContentIcons dataicon={{ family: icon.family, icon: icon.icon }} />
        </div>

        {view === "project" ? buttonText : null}
      </a>
      {view === "home" ? buttonText : null}
    </div>
  );
};
export default ProjectButton;
