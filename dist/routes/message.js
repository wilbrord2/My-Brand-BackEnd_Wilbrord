"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = _interopRequireDefault(require("express"));
var _messageControler = require("../contollers/messageControler");
function cov_2kzzalr5k0() {
  var path = "C:\\AA Projects\\Andela\\My Backend\\src\\routes\\message.js";
  var hash = "db3c03190f09e599370ea9637b49bd6a058dda85";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\AA Projects\\Andela\\My Backend\\src\\routes\\message.js",
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
          line: 12,
          column: 35
        }
      },
      "2": {
        start: {
          line: 15,
          column: 0
        },
        end: {
          line: 15,
          column: 34
        }
      },
      "3": {
        start: {
          line: 19,
          column: 0
        },
        end: {
          line: 19,
          column: 48
        }
      },
      "4": {
        start: {
          line: 22,
          column: 0
        },
        end: {
          line: 22,
          column: 54
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "db3c03190f09e599370ea9637b49bd6a058dda85"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2kzzalr5k0 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2kzzalr5k0();
const routes = (cov_2kzzalr5k0().s[0]++, _express.default.Router());

// Display all Message from database
cov_2kzzalr5k0().s[1]++;
routes.get("/show", _messageControler.GetAllMessage);

// // Sending Message to database
cov_2kzzalr5k0().s[2]++;
routes.post("/save", _messageControler.SaveMessage);

// SEARCH FOR A SPECIFIC Message
cov_2kzzalr5k0().s[3]++;
routes.get("/getOne/:messageId", _messageControler.SearchMessage);

// delete a specific Message
cov_2kzzalr5k0().s[4]++;
routes.delete("/deleteOne/:messageId", _messageControler.deleteMessage);
var _default = routes;
exports.default = _default;