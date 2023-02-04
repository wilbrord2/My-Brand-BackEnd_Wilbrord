"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = _interopRequireDefault(require("express"));
var _blogController = require("../contollers/blogController");
function cov_2hwtl5sqcw() {
  var path = "C:\\AA Projects\\Andela\\My Backend\\src\\routes\\blog.js";
  var hash = "a6f0ab75c894ae1b9e2860d49d7050a5d050649e";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\AA Projects\\Andela\\My Backend\\src\\routes\\blog.js",
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
          column: 48
        }
      },
      "2": {
        start: {
          line: 15,
          column: 0
        },
        end: {
          line: 15,
          column: 45
        }
      },
      "3": {
        start: {
          line: 19,
          column: 0
        },
        end: {
          line: 19,
          column: 58
        }
      },
      "4": {
        start: {
          line: 22,
          column: 0
        },
        end: {
          line: 22,
          column: 55
        }
      },
      "5": {
        start: {
          line: 26,
          column: 0
        },
        end: {
          line: 26,
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
      "4": 0,
      "5": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "a6f0ab75c894ae1b9e2860d49d7050a5d050649e"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2hwtl5sqcw = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2hwtl5sqcw();
const routes = (cov_2hwtl5sqcw().s[0]++, _express.default.Router());

// Display all Blogs from database
cov_2hwtl5sqcw().s[1]++;
routes.get("/getAllArticle", _blogController.displayAllArticle);

// create Blog to database
cov_2hwtl5sqcw().s[2]++;
routes.post("/createArticle", _blogController.createArticle);

// SEARCH FOR A SPECIFIC BLOG
cov_2hwtl5sqcw().s[3]++;
routes.get("/getSingleArticle/:blogId", _blogController.getSingleArticle);

// delete a specific post
cov_2hwtl5sqcw().s[4]++;
routes.delete("/deleteArticle/:blogId", _blogController.deleteArticle);

// UPPDATE A POST
cov_2hwtl5sqcw().s[5]++;
routes.patch("/UpdateArticle/:blogId", _blogController.UpdateArticle);
var _default = routes;
exports.default = _default;