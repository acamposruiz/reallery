import React from "react";
import ProjectButton from "../projectButton.js";
import renderer from "react-test-renderer";

jest.mock("../contentIcons", () => {
  return "ContentIcons";
});

test("ProjectButton", () => {
  const stringParam = { name: "Ducks", type: "sculpture" };
  const component = renderer.create(
    <ProjectButton
      view="home"
      lng="en"
      key="0"
      key2="001"
      name="Project name"
      strings={stringParam}
      color="red"
      type="sculpture"
      publish="1"
    />,
  );
  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
