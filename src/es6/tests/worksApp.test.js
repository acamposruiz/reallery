import React from "react";
import AppContainer from "../AppContainer";
import renderer from "react-test-renderer";
import state from "./mocks/state";

jest.mock("../projectButton", () => {
  return "ProjectButton";
});
jest.mock("../projectGallery", () => {
  return "ProjectGallery";
});
jest.mock("react-multimedia-gallery", () => {
  return "Gallery";
});

test("AppContainer", () => {
  const component = renderer.create(<AppContainer meta={state.meta} model={state.projects} />);
  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
