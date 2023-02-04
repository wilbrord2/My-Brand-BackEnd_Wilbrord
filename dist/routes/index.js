"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = _interopRequireDefault(require("express"));
var _message = _interopRequireDefault(require("./message"));
var _user = _interopRequireDefault(require("./user"));
var _authverified = _interopRequireDefault(require("./authverified"));
var _blog = _interopRequireDefault(require("./blog"));
function cov_7aca6rvhv() {
  var path = "C:\\AA Projects\\Andela\\My Backend\\src\\routes\\index.js";
  var hash = "5db2fca670d09d1e0dc04f2b95d67fef74053eb5";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\AA Projects\\Andela\\My Backend\\src\\routes\\index.js",
    statementMap: {
      "0": {
        start: {
          line: 6,
          column: 15
        },
        end: {
          line: 6,
          column: 31
        }
      },
      "1": {
        start: {
          line: 8,
          column: 0
        },
        end: {
          line: 8,
          column: 38
        }
      },
      "2": {
        start: {
          line: 9,
          column: 0
        },
        end: {
          line: 9,
          column: 30
        }
      },
      "3": {
        start: {
          line: 10,
          column: 0
        },
        end: {
          line: 10,
          column: 41
        }
      },
      "4": {
        start: {
          line: 11,
          column: 0
        },
        end: {
          line: 11,
          column: 38
        }
      },
      "5": {
        start: {
          line: 13,
          column: 0
        },
        end: {
          line: 15,
          column: 3
        }
      },
      "6": {
        start: {
          line: 14,
          column: 2
        },
        end: {
          line: 14,
          column: 25
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 13,
            column: 16
          },
          end: {
            line: 13,
            column: 17
          }
        },
        loc: {
          start: {
            line: 13,
            column: 30
          },
          end: {
            line: 15,
            column: 1
          }
        },
        line: 13
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "5db2fca670d09d1e0dc04f2b95d67fef74053eb5"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_7aca6rvhv = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_7aca6rvhv();
const routes = (cov_7aca6rvhv().s[0]++, _express.default.Router());
cov_7aca6rvhv().s[1]++;
routes.use("/messages", _message.default);
cov_7aca6rvhv().s[2]++;
routes.use("/user", _user.default);
cov_7aca6rvhv().s[3]++;
routes.use("/access", _authverified.default);
cov_7aca6rvhv().s[4]++;
routes.use("/article", _blog.default);
cov_7aca6rvhv().s[5]++;
routes.get("/", (req, res) => {
  cov_7aca6rvhv().f[0]++;
  cov_7aca6rvhv().s[6]++;
  res.send(" home-Page");
});
var _default = routes;
exports.default = _default;