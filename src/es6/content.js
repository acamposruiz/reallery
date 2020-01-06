import React from "react";

import { AppState } from "./contexts";
import { SelectCombo } from "./selectCombo";
import ProjectGallery from "./projectGallery.js";

export class Content extends React.Component {
  static contextType = AppState;
  render() {
    return !this.context.project ? (
      <SelectCombo />
    ) : (
      <section className="gallery">
        <ProjectGallery />
      </section>
    );
  }
}
