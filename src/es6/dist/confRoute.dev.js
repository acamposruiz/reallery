"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configRoute = void 0;

var _director = _interopRequireDefault(require("director/build/director"));

var _state = _interopRequireDefault(require("../../state/state"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Router = _director.default.Router;

var configRoute = function configRoute(_ref) {
  var setState = _ref.setState;
  var projects = _state.default.projects;
  var lngParam = _state.default.meta.languageDefault;

  if (lngParam) {
    var router = Router({
      "/:lng/": [function (lng) {
        setState({
          project: null,
          lng: lng
        });
      }, logPageView],
      "/:lng/project/view/:projectId": [function (lng, projectId) {
        setState({
          project: projects[projectId],
          lng: lng
        });
      }, logPageView]
    });
    router.init("/".concat(lngParam));
  } else {
    var _router = Router({
      "/": [function () {
        setState({
          project: null
        });
      }, logPageView],
      "/project/view/:projectId": [function (projectId) {
        setState({
          project: projects[projectId]
        });
      }, logPageView]
    });

    _router.init("/");
  }
};

exports.configRoute = configRoute;

var logPageView = function logPageView() {
  var ga = ga || false;

  if (ga) {
    ga("set", "page", "/" + window.location.hash);
    ga("send", "pageview");
  }
};