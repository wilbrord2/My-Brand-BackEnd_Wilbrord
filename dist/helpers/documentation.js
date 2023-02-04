"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _blog = _interopRequireDefault(require("../routes/blog.doc"));
var _message = _interopRequireDefault(require("../routes/message.doc"));
var _user = _interopRequireDefault(require("../routes/user.doc"));
function cov_1mnblx05j1() {
  var path = "C:\\AA Projects\\Andela\\My Backend\\src\\helpers\\documentation.js";
  var hash = "a9737edba6dc385476af51be759c82c5df7ca415";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\AA Projects\\Andela\\My Backend\\src\\helpers\\documentation.js",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 30
        },
        end: {
          line: 36,
          column: 1
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "a9737edba6dc385476af51be759c82c5df7ca415"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1mnblx05j1 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1mnblx05j1();
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
const swaggerDocumentations = (cov_1mnblx05j1().s[0]++, {
  openapi: "3.0.0",
  info: {
    title: "My brand Api",
    Version: "0.1.0",
    description: "This is the backend of my BRAND"
  },
  servers: [{
    url: "http://localhost:3000",
    name: "development server"
  }],
  schemes: ["HTTP", "HTTPS"],
  tags: [{
    name: "Blogs",
    description: ""
  }, {
    name: "Messages",
    description: ""
  }],
  paths: _objectSpread(_objectSpread(_objectSpread({}, _blog.default), _message.default), _user.default)
});
var _default = swaggerDocumentations;
exports.default = _default;