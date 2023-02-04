"use strict";

function cov_d1hf4bdix() {
  var path = "C:\\AA Projects\\Andela\\My Backend\\src\\models\\registerSdcheme.js";
  var hash = "5ab6f7504a5f7adcafaafd9bbfcf6c9eafb0b2b5";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\AA Projects\\Andela\\My Backend\\src\\models\\registerSdcheme.js",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 17
        },
        end: {
          line: 1,
          column: 36
        }
      },
      "1": {
        start: {
          line: 2,
          column: 19
        },
        end: {
          line: 23,
          column: 2
        }
      },
      "2": {
        start: {
          line: 25,
          column: 0
        },
        end: {
          line: 25,
          column: 55
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "5ab6f7504a5f7adcafaafd9bbfcf6c9eafb0b2b5"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_d1hf4bdix = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_d1hf4bdix();
const mongoose = (cov_d1hf4bdix().s[0]++, require("mongoose"));
const userScheme = (cov_d1hf4bdix().s[1]++, mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  repassword: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
}));
cov_d1hf4bdix().s[2]++;
module.exports = mongoose.model("Clients", userScheme);