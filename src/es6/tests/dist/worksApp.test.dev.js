"use strict";

var _react = _interopRequireDefault(require("react"));

var _AppContainer = _interopRequireDefault(require("../AppContainer"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _state = _interopRequireDefault(require("./mocks/state"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

jest.mock("../projectButton", function () {
  return "ProjectButton";
});
jest.mock("../projectGallery", function () {
  return "ProjectGallery";
});
jest.mock("react-multimedia-gallery", function () {
  return "Gallery";
});
test("AppContainer", function () {
  var component = _reactTestRenderer["default"].create(_react["default"].createElement(_AppContainer["default"], {
    meta: _state["default"].meta,
    model: _state["default"].projects
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});