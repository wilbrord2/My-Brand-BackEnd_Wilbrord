"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _mongoose = _interopRequireDefault(require("mongoose"));
function cov_17wt99uare() {
  var path = "C:\\AA Projects\\Andela\\My Backend\\src\\models\\contactMessageScheme.js";
  var hash = "a541af12cc3305e32152450e0e60f76ce8e56a9c";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\AA Projects\\Andela\\My Backend\\src\\models\\contactMessageScheme.js",
    statementMap: {
      "0": {
        start: {
          line: 2,
          column: 22
        },
        end: {
          line: 23,
          column: 2
        }
      },
      "1": {
        start: {
          line: 25,
          column: 0
        },
        end: {
          line: 25,
          column: 59
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0,
      "1": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "a541af12cc3305e32152450e0e60f76ce8e56a9c"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_17wt99uare = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_17wt99uare();
const messageScheme = (cov_17wt99uare().s[0]++, _mongoose.default.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  Message: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
}));
cov_17wt99uare().s[1]++;
module.exports = _mongoose.default.model("messages", messageScheme);