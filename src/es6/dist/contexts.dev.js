"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppState = void 0;

var _react = _interopRequireDefault(require("react"));

var _state = _interopRequireDefault(require("../../state/state"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AppState = _react.default.createContext({
  meta: _state.default.meta || {},
  project: null
});

exports.AppState = AppState;