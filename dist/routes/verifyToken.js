"use strict";

function cov_2iposs23rz() {
  var path = "C:\\AA Projects\\Andela\\My Backend\\src\\routes\\verifyToken.js";
  var hash = "6b78ccdc818848b9598ff69f7c139326bd901c42";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\AA Projects\\Andela\\My Backend\\src\\routes\\verifyToken.js",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 12
        },
        end: {
          line: 1,
          column: 35
        }
      },
      "1": {
        start: {
          line: 3,
          column: 0
        },
        end: {
          line: 13,
          column: 2
        }
      },
      "2": {
        start: {
          line: 4,
          column: 16
        },
        end: {
          line: 4,
          column: 39
        }
      },
      "3": {
        start: {
          line: 5,
          column: 2
        },
        end: {
          line: 5,
          column: 59
        }
      },
      "4": {
        start: {
          line: 5,
          column: 14
        },
        end: {
          line: 5,
          column: 59
        }
      },
      "5": {
        start: {
          line: 6,
          column: 2
        },
        end: {
          line: 12,
          column: 3
        }
      },
      "6": {
        start: {
          line: 8,
          column: 21
        },
        end: {
          line: 8,
          column: 64
        }
      },
      "7": {
        start: {
          line: 9,
          column: 4
        },
        end: {
          line: 9,
          column: 24
        }
      },
      "8": {
        start: {
          line: 10,
          column: 4
        },
        end: {
          line: 10,
          column: 11
        }
      },
      "9": {
        start: {
          line: 11,
          column: 4
        },
        end: {
          line: 11,
          column: 42
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 3,
            column: 17
          },
          end: {
            line: 3,
            column: 18
          }
        },
        loc: {
          start: {
            line: 3,
            column: 37
          },
          end: {
            line: 13,
            column: 1
          }
        },
        line: 3
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 5,
            column: 2
          },
          end: {
            line: 5,
            column: 59
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 5,
            column: 2
          },
          end: {
            line: 5,
            column: 59
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 5
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "6b78ccdc818848b9598ff69f7c139326bd901c42"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2iposs23rz = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2iposs23rz();
const jwt = (cov_2iposs23rz().s[0]++, require("jsonwebtoken"));
cov_2iposs23rz().s[1]++;
module.exports = (req, res, next) => {
  cov_2iposs23rz().f[0]++;
  const token = (cov_2iposs23rz().s[2]++, req.header("authtoken"));
  cov_2iposs23rz().s[3]++;
  if (!token) {
    cov_2iposs23rz().b[0][0]++;
    cov_2iposs23rz().s[4]++;
    return res.status(401).send("Access denied");
  } else {
    cov_2iposs23rz().b[0][1]++;
  }
  cov_2iposs23rz().s[5]++;
  try {} catch (err) {
    const verified = (cov_2iposs23rz().s[6]++, jwt.verify(token, process.env.TOKEN_SECRET));
    cov_2iposs23rz().s[7]++;
    res.user = verified;
    cov_2iposs23rz().s[8]++;
    next();
    cov_2iposs23rz().s[9]++;
    res.status(400).send("Invalid Token");
  }
};