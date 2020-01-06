import React, { useContext } from "react";

import { AppState } from "./contexts";
import { SelectCombo } from "./selectCombo";
import ProjectGallery from "./projectGallery.js";

export const Content = () => {
  const context = useContext(AppState);
  return !context.project ? (
    <SelectCombo />
  ) : (
    <section className="gallery">
      <ProjectGallery />
    </section>
  );
};
