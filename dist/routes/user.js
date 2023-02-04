"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = _interopRequireDefault(require("express"));
var _userController = require("../contollers/userController");
function cov_5lw5ozf9v() {
  var path = "C:\\AA Projects\\Andela\\My Backend\\src\\routes\\user.js";
  var hash = "4da280d251cd06bcda09a9e70a687330a0889267";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\AA Projects\\Andela\\My Backend\\src\\routes\\user.js",
    statementMap: {
      "0": {
        start: {
          line: 9,
          column: 15
        },
        end: {
          line: 9,
          column: 31
        }
      },
      "1": {
        start: {
          line: 12,
          column: 0
        },
        end: {
          line: 14,
          column: 3
        }
      },
      "2": {
        start: {
          line: 13,
          column: 2
        },
        end: {
          line: 13,
          column: 38
        }
      },
      "3": {
        start: {
          line: 18,
          column: 0
        },
        end: {
          line: 18,
          column: 39
        }
      },
      "4": {
        start: {
          line: 19,
          column: 0
        },
        end: {
          line: 19,
          column: 40
        }
      },
      "5": {
        start: {
          line: 20,
          column: 0
        },
        end: {
          line: 20,
          column: 52
        }
      },
      "6": {
        start: {
          line: 21,
          column: 0
        },
        end: {
          line: 21,
          column: 49
        }
      },
      "7": {
        start: {
          line: 24,
          column: 0
        },
        end: {
          line: 24,
          column: 33
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 12,
            column: 24
          },
          end: {
            line: 12,
            column: 25
          }
        },
        loc: {
          start: {
            line: 12,
            column: 44
          },
          end: {
            line: 14,
            column: 1
          }
        },
        line: 12
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
      "6": 0,
      "7": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "4da280d251cd06bcda09a9e70a687330a0889267"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_5lw5ozf9v = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_5lw5ozf9v();
const routes = (cov_5lw5ozf9v().s[0]++, _express.default.Router());

// check we are on page
cov_5lw5ozf9v().s[1]++;
routes.get("/register", async (req, res) => {
  cov_5lw5ozf9v().f[0]++;
  cov_5lw5ozf9v().s[2]++;
  res.send("we are on register page");
});

// SIGN-UP
cov_5lw5ozf9v().s[3]++;
routes.post("/createUser", _userController.createUser);
cov_5lw5ozf9v().s[4]++;
routes.get("/getAllUsers", _userController.getAllUsers);
cov_5lw5ozf9v().s[5]++;
routes.get("/getSingleUser/:userId", _userController.getSingleUser);
cov_5lw5ozf9v().s[6]++;
routes.delete("/deleteUser/:userId", _userController.deleteUser);

//LOGIN
cov_5lw5ozf9v().s[7]++;
routes.post("/login", _userController.loginUser);
var _default = routes;
exports.default = _default;