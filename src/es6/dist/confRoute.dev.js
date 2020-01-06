"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configRoute = void 0;

var _director = _interopRequireDefault(require("director/build/director"));

var _lodash = _interopRequireDefault(require("lodash"));

var _utils = _interopRequireDefault(require("./utils.js"));

var _state = _interopRequireDefault(require("../../state/state"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Router = _director["default"].Router;

var configRoute = function configRoute(_ref) {
  var setState = _ref.setState;
  var projects = _state["default"].projects;
  var lngParam = _state["default"].meta.languageDefault;

  if (lngParam) {
    var router = Router({
      "/:lng/": [function (lng) {
        setState({
          project: null,
          itemsStore: null,
          lng: lng
        });
      }, logPageView],
      "/:lng/project/view/:projectId": [function (lng, projectId) {
        setState(_objectSpread({
          project: projects[projectId],
          lng: lng
        }, getItems(projects[projectId], lng)));
      }, logPageView]
    });
    router.init("/".concat(lngParam));
  } else {
    var _router = Router({
      "/": [function () {
        setState({
          project: null,
          itemsStore: null
        });
      }, logPageView],
      "/project/view/:projectId": [function (projectId) {
        setState(_objectSpread({
          project: projects[projectId]
        }, getItems(projects[projectId])));
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

function getItems(project, lng) {
  var photos = _lodash["default"].get(project, "images.all").concat(lng ? _lodash["default"].get(project, "images.".concat(lng)) : []).map(function (image) {
    return _lodash["default"].pick(image, ["src", "srcset", "width", "height", "type"]);
  });

  var videos = lng ? project.videos[lng] : project.videos;
  var articles = (lng ? project.articles[lng] : project.articles).map(function (text) {
    return {
      type: "article",
      content: text
    };
  });
  var storeLength = photos.length + videos.length + articles.length;
  return {
    photos: photos,
    videos: videos,
    articles: articles,
    storeLength: storeLength
  };
}