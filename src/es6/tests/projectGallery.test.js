import React from "react";
import ProjectGallery from "../projectGallery";
import renderer from "react-test-renderer";
import state from "./mocks/state";

jest.mock("../contentIcons", () => {
  return "ContentIcons";
});
jest.mock("react-multimedia-gallery", () => {
  return "Gallery";
});

test("ProjectGallery", () => {
  const component = renderer.create(
    <ProjectGallery lng="en" project={state.projects.architecture} />,
  );
  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
