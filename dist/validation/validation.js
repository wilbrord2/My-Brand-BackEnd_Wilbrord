"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signUpvalidation = exports.signInvalidation = void 0;
function cov_2eocb815qk() {
  var path = "C:\\AA Projects\\Andela\\My Backend\\src\\validation\\validation.js";
  var hash = "b516ed3b5cd5c5ffc44b958f1d448742bb7e6d8c";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\AA Projects\\Andela\\My Backend\\src\\validation\\validation.js",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 12
        },
        end: {
          line: 1,
          column: 32
        }
      },
      "1": {
        start: {
          line: 4,
          column: 25
        },
        end: {
          line: 12,
          column: 1
        }
      },
      "2": {
        start: {
          line: 5,
          column: 17
        },
        end: {
          line: 10,
          column: 4
        }
      },
      "3": {
        start: {
          line: 11,
          column: 2
        },
        end: {
          line: 11,
          column: 31
        }
      },
      "4": {
        start: {
          line: 15,
          column: 25
        },
        end: {
          line: 21,
          column: 1
        }
      },
      "5": {
        start: {
          line: 16,
          column: 17
        },
        end: {
          line: 19,
          column: 4
        }
      },
      "6": {
        start: {
          line: 20,
          column: 2
        },
        end: {
          line: 20,
          column: 31
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 4,
            column: 25
          },
          end: {
            line: 4,
            column: 26
          }
        },
        loc: {
          start: {
            line: 4,
            column: 35
          },
          end: {
            line: 12,
            column: 1
          }
        },
        line: 4
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 15,
            column: 25
          },
          end: {
            line: 15,
            column: 26
          }
        },
        loc: {
          start: {
            line: 15,
            column: 35
          },
          end: {
            line: 21,
            column: 1
          }
        },
        line: 15
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
      "0": 0,
      "1": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "b516ed3b5cd5c5ffc44b958f1d448742bb7e6d8c"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2eocb815qk = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2eocb815qk();
const Joi = (cov_2eocb815qk().s[0]++, require("@hapi/joi"));

// REGISTER VALIDATION
cov_2eocb815qk().s[1]++;
const signUpvalidation = data => {
  cov_2eocb815qk().f[0]++;
  const scheme = (cov_2eocb815qk().s[2]++, Joi.object({
    name: Joi.string().min(6).required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
    repassword: Joi.string().min(6).required()
  }));
  cov_2eocb815qk().s[3]++;
  return scheme.validate(data);
};

// LOGIN VALIDATION
exports.signUpvalidation = signUpvalidation;
cov_2eocb815qk().s[4]++;
const signInvalidation = data => {
  cov_2eocb815qk().f[1]++;
  const scheme = (cov_2eocb815qk().s[5]++, Joi.object({
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required()
  }));
  cov_2eocb815qk().s[6]++;
  return scheme.validate(data);
};
exports.signInvalidation = signInvalidation;