"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = _interopRequireDefault(require("express"));
var _verifyToken = _interopRequireDefault(require("./verifyToken"));
function cov_wwq4lqj0j() {
  var path = "C:\\AA Projects\\Andela\\My Backend\\src\\routes\\authverified.js";
  var hash = "9af282427c8c29c5b16dae9532351ca60d96fe6e";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\AA Projects\\Andela\\My Backend\\src\\routes\\authverified.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 15
        },
        end: {
          line: 3,
          column: 31
        }
      },
      "1": {
        start: {
          line: 5,
          column: 0
        },
        end: {
          line: 9,
          column: 3
        }
      },
      "2": {
        start: {
          line: 6,
          column: 2
        },
        end: {
          line: 8,
          column: 5
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 5,
            column: 28
          },
          end: {
            line: 5,
            column: 29
          }
        },
        loc: {
          start: {
            line: 5,
            column: 42
          },
          end: {
            line: 9,
            column: 1
          }
        },
        line: 5
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "9af282427c8c29c5b16dae9532351ca60d96fe6e"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_wwq4lqj0j = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_wwq4lqj0j();
const routes = (cov_wwq4lqj0j().s[0]++, _express.default.Router());
cov_wwq4lqj0j().s[1]++;
routes.get("/post", _verifyToken.default, (req, res) => {
  cov_wwq4lqj0j().f[0]++;
  cov_wwq4lqj0j().s[2]++;
  res.json({
    posts: {
      title: "ur are using token",
      Description: "token verified"
    }
  });
});
var _default = routes;
exports.default = _default;