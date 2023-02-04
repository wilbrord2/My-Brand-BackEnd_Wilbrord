"use strict";

function cov_7zyvmv5l() {
  var path = "C:\\AA Projects\\Andela\\My Backend\\src\\models\\Post.js";
  var hash = "a082805a8dd384e17d700bb32573e3cb9c150853";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\AA Projects\\Andela\\My Backend\\src\\models\\Post.js",
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
          line: 15,
          column: 2
        }
      },
      "2": {
        start: {
          line: 17,
          column: 0
        },
        end: {
          line: 17,
          column: 53
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
    hash: "a082805a8dd384e17d700bb32573e3cb9c150853"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_7zyvmv5l = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_7zyvmv5l();
const mongoose = (cov_7zyvmv5l().s[0]++, require("mongoose"));
const postScheme = (cov_7zyvmv5l().s[1]++, mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
}));
cov_7zyvmv5l().s[2]++;
module.exports = mongoose.model("BLOGS", postScheme);