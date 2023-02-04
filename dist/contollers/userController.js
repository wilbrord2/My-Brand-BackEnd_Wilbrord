"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loginUser = exports.getSingleUser = exports.getAllUsers = exports.deleteUser = exports.createUser = void 0;
var _registerSdcheme = _interopRequireDefault(require("../models/registerSdcheme"));
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _validation = require("../validation/validation");
var _bcryptjs = _interopRequireDefault(require("bcryptjs"));
function cov_1gmc9ibw0f() {
  var path = "C:\\AA Projects\\Andela\\My Backend\\src\\contollers\\userController.js";
  var hash = "daf310269f6e6d94c13282d0ab16b6126db8bfb4";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\AA Projects\\Andela\\My Backend\\src\\contollers\\userController.js",
    statementMap: {
      "0": {
        start: {
          line: 6,
          column: 19
        },
        end: {
          line: 33,
          column: 1
        }
      },
      "1": {
        start: {
          line: 8,
          column: 20
        },
        end: {
          line: 8,
          column: 46
        }
      },
      "2": {
        start: {
          line: 9,
          column: 2
        },
        end: {
          line: 9,
          column: 67
        }
      },
      "3": {
        start: {
          line: 9,
          column: 13
        },
        end: {
          line: 9,
          column: 67
        }
      },
      "4": {
        start: {
          line: 12,
          column: 21
        },
        end: {
          line: 12,
          column: 66
        }
      },
      "5": {
        start: {
          line: 13,
          column: 2
        },
        end: {
          line: 14,
          column: 71
        }
      },
      "6": {
        start: {
          line: 14,
          column: 4
        },
        end: {
          line: 14,
          column: 71
        }
      },
      "7": {
        start: {
          line: 17,
          column: 15
        },
        end: {
          line: 17,
          column: 39
        }
      },
      "8": {
        start: {
          line: 18,
          column: 25
        },
        end: {
          line: 18,
          column: 67
        }
      },
      "9": {
        start: {
          line: 19,
          column: 25
        },
        end: {
          line: 19,
          column: 69
        }
      },
      "10": {
        start: {
          line: 21,
          column: 18
        },
        end: {
          line: 26,
          column: 4
        }
      },
      "11": {
        start: {
          line: 27,
          column: 2
        },
        end: {
          line: 32,
          column: 3
        }
      },
      "12": {
        start: {
          line: 28,
          column: 22
        },
        end: {
          line: 28,
          column: 42
        }
      },
      "13": {
        start: {
          line: 29,
          column: 4
        },
        end: {
          line: 29,
          column: 24
        }
      },
      "14": {
        start: {
          line: 31,
          column: 4
        },
        end: {
          line: 31,
          column: 30
        }
      },
      "15": {
        start: {
          line: 35,
          column: 20
        },
        end: {
          line: 43,
          column: 1
        }
      },
      "16": {
        start: {
          line: 36,
          column: 2
        },
        end: {
          line: 42,
          column: 3
        }
      },
      "17": {
        start: {
          line: 37,
          column: 22
        },
        end: {
          line: 37,
          column: 39
        }
      },
      "18": {
        start: {
          line: 39,
          column: 4
        },
        end: {
          line: 39,
          column: 24
        }
      },
      "19": {
        start: {
          line: 41,
          column: 4
        },
        end: {
          line: 41,
          column: 39
        }
      },
      "20": {
        start: {
          line: 45,
          column: 22
        },
        end: {
          line: 52,
          column: 1
        }
      },
      "21": {
        start: {
          line: 46,
          column: 2
        },
        end: {
          line: 51,
          column: 3
        }
      },
      "22": {
        start: {
          line: 47,
          column: 17
        },
        end: {
          line: 47,
          column: 55
        }
      },
      "23": {
        start: {
          line: 48,
          column: 4
        },
        end: {
          line: 48,
          column: 19
        }
      },
      "24": {
        start: {
          line: 50,
          column: 4
        },
        end: {
          line: 50,
          column: 18
        }
      },
      "25": {
        start: {
          line: 54,
          column: 19
        },
        end: {
          line: 62,
          column: 1
        }
      },
      "26": {
        start: {
          line: 55,
          column: 2
        },
        end: {
          line: 60,
          column: 3
        }
      },
      "27": {
        start: {
          line: 56,
          column: 24
        },
        end: {
          line: 56,
          column: 69
        }
      },
      "28": {
        start: {
          line: 57,
          column: 4
        },
        end: {
          line: 57,
          column: 26
        }
      },
      "29": {
        start: {
          line: 59,
          column: 4
        },
        end: {
          line: 59,
          column: 18
        }
      },
      "30": {
        start: {
          line: 64,
          column: 18
        },
        end: {
          line: 78,
          column: 1
        }
      },
      "31": {
        start: {
          line: 66,
          column: 20
        },
        end: {
          line: 66,
          column: 46
        }
      },
      "32": {
        start: {
          line: 67,
          column: 2
        },
        end: {
          line: 67,
          column: 67
        }
      },
      "33": {
        start: {
          line: 67,
          column: 13
        },
        end: {
          line: 67,
          column: 67
        }
      },
      "34": {
        start: {
          line: 70,
          column: 15
        },
        end: {
          line: 70,
          column: 60
        }
      },
      "35": {
        start: {
          line: 71,
          column: 2
        },
        end: {
          line: 71,
          column: 65
        }
      },
      "36": {
        start: {
          line: 71,
          column: 13
        },
        end: {
          line: 71,
          column: 65
        }
      },
      "37": {
        start: {
          line: 73,
          column: 23
        },
        end: {
          line: 73,
          column: 77
        }
      },
      "38": {
        start: {
          line: 74,
          column: 2
        },
        end: {
          line: 74,
          column: 76
        }
      },
      "39": {
        start: {
          line: 74,
          column: 21
        },
        end: {
          line: 74,
          column: 76
        }
      },
      "40": {
        start: {
          line: 76,
          column: 16
        },
        end: {
          line: 76,
          column: 69
        }
      },
      "41": {
        start: {
          line: 77,
          column: 2
        },
        end: {
          line: 77,
          column: 46
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 6,
            column: 19
          },
          end: {
            line: 6,
            column: 20
          }
        },
        loc: {
          start: {
            line: 6,
            column: 39
          },
          end: {
            line: 33,
            column: 1
          }
        },
        line: 6
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 35,
            column: 20
          },
          end: {
            line: 35,
            column: 21
          }
        },
        loc: {
          start: {
            line: 35,
            column: 40
          },
          end: {
            line: 43,
            column: 1
          }
        },
        line: 35
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 45,
            column: 22
          },
          end: {
            line: 45,
            column: 23
          }
        },
        loc: {
          start: {
            line: 45,
            column: 42
          },
          end: {
            line: 52,
            column: 1
          }
        },
        line: 45
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 54,
            column: 19
          },
          end: {
            line: 54,
            column: 20
          }
        },
        loc: {
          start: {
            line: 54,
            column: 39
          },
          end: {
            line: 62,
            column: 1
          }
        },
        line: 54
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 64,
            column: 18
          },
          end: {
            line: 64,
            column: 19
          }
        },
        loc: {
          start: {
            line: 64,
            column: 38
          },
          end: {
            line: 78,
            column: 1
          }
        },
        line: 64
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 9,
            column: 2
          },
          end: {
            line: 9,
            column: 67
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 9,
            column: 2
          },
          end: {
            line: 9,
            column: 67
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
        line: 9
      },
      "1": {
        loc: {
          start: {
            line: 13,
            column: 2
          },
          end: {
            line: 14,
            column: 71
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 13,
            column: 2
          },
          end: {
            line: 14,
            column: 71
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
        line: 13
      },
      "2": {
        loc: {
          start: {
            line: 67,
            column: 2
          },
          end: {
            line: 67,
            column: 67
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 67,
            column: 2
          },
          end: {
            line: 67,
            column: 67
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
        line: 67
      },
      "3": {
        loc: {
          start: {
            line: 71,
            column: 2
          },
          end: {
            line: 71,
            column: 65
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 71,
            column: 2
          },
          end: {
            line: 71,
            column: 65
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
        line: 71
      },
      "4": {
        loc: {
          start: {
            line: 74,
            column: 2
          },
          end: {
            line: 74,
            column: 76
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 74,
            column: 2
          },
          end: {
            line: 74,
            column: 76
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
        line: 74
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
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0,
      "27": 0,
      "28": 0,
      "29": 0,
      "30": 0,
      "31": 0,
      "32": 0,
      "33": 0,
      "34": 0,
      "35": 0,
      "36": 0,
      "37": 0,
      "38": 0,
      "39": 0,
      "40": 0,
      "41": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "daf310269f6e6d94c13282d0ab16b6126db8bfb4"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1gmc9ibw0f = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1gmc9ibw0f();
cov_1gmc9ibw0f().s[0]++;
const createUser = async (req, res) => {
  cov_1gmc9ibw0f().f[0]++;
  // CHECK VALIDATION
  const {
    error
  } = (cov_1gmc9ibw0f().s[1]++, (0, _validation.signUpvalidation)(req.body));
  cov_1gmc9ibw0f().s[2]++;
  if (error) {
    cov_1gmc9ibw0f().b[0][0]++;
    cov_1gmc9ibw0f().s[3]++;
    return res.status(400).send(error.details[0].message);
  } else {
    cov_1gmc9ibw0f().b[0][1]++;
  }

  // CHECK IF EMAIL EXIST
  const existEmail = (cov_1gmc9ibw0f().s[4]++, await _registerSdcheme.default.findOne({
    email: req.body.email
  }));
  cov_1gmc9ibw0f().s[5]++;
  if (existEmail) {
    cov_1gmc9ibw0f().b[1][0]++;
    cov_1gmc9ibw0f().s[6]++;
    return res.status(400).send("email Already exist try onother one");
  } else {
    cov_1gmc9ibw0f().b[1][1]++;
  }

  // HASH THE PASSWORD
  const salt = (cov_1gmc9ibw0f().s[7]++, await _bcryptjs.default.genSalt(10));
  const hashedPasword1 = (cov_1gmc9ibw0f().s[8]++, await _bcryptjs.default.hash(req.body.password, salt));
  const hashedPasword2 = (cov_1gmc9ibw0f().s[9]++, await _bcryptjs.default.hash(req.body.repassword, salt));
  // IF EVERY CHECK IS OK REGISTER
  const newUser = (cov_1gmc9ibw0f().s[10]++, new _registerSdcheme.default({
    name: req.body.name,
    email: req.body.email,
    password: hashedPasword1,
    repassword: hashedPasword2
  }));
  cov_1gmc9ibw0f().s[11]++;
  try {
    const SavedUser = (cov_1gmc9ibw0f().s[12]++, await newUser.save());
    cov_1gmc9ibw0f().s[13]++;
    res.json(SavedUser);
  } catch (err) {
    cov_1gmc9ibw0f().s[14]++;
    res.status(400).send(err);
  }
};
exports.createUser = createUser;
cov_1gmc9ibw0f().s[15]++;
const getAllUsers = async (req, res) => {
  cov_1gmc9ibw0f().f[1]++;
  cov_1gmc9ibw0f().s[16]++;
  try {
    const SavedUser = (cov_1gmc9ibw0f().s[17]++, await _registerSdcheme.default.find());
    cov_1gmc9ibw0f().s[18]++;
    res.json(SavedUser);
  } catch (err) {
    cov_1gmc9ibw0f().s[19]++;
    res.json({
      message: err.message
    });
  }
};
exports.getAllUsers = getAllUsers;
cov_1gmc9ibw0f().s[20]++;
const getSingleUser = async (req, res) => {
  cov_1gmc9ibw0f().f[2]++;
  cov_1gmc9ibw0f().s[21]++;
  try {
    const user = (cov_1gmc9ibw0f().s[22]++, await _registerSdcheme.default.findById(req.params.userId));
    cov_1gmc9ibw0f().s[23]++;
    res.json(user);
  } catch (err) {
    cov_1gmc9ibw0f().s[24]++;
    res.json(err);
  }
};
exports.getSingleUser = getSingleUser;
cov_1gmc9ibw0f().s[25]++;
const deleteUser = async (req, res) => {
  cov_1gmc9ibw0f().f[3]++;
  cov_1gmc9ibw0f().s[26]++;
  try {
    const remomeAUser = (cov_1gmc9ibw0f().s[27]++, await _registerSdcheme.default.remove({
      _id: req.params.userId
    }));
    cov_1gmc9ibw0f().s[28]++;
    res.json(remomeAUser);
  } catch (err) {
    cov_1gmc9ibw0f().s[29]++;
    res.json(err);
  }
  // res.json("testing");
};
exports.deleteUser = deleteUser;
cov_1gmc9ibw0f().s[30]++;
const loginUser = async (req, res) => {
  cov_1gmc9ibw0f().f[4]++;
  // CHECK VALIDATION
  const {
    error
  } = (cov_1gmc9ibw0f().s[31]++, (0, _validation.signInvalidation)(req.body));
  cov_1gmc9ibw0f().s[32]++;
  if (error) {
    cov_1gmc9ibw0f().b[2][0]++;
    cov_1gmc9ibw0f().s[33]++;
    return res.status(400).send(error.details[0].message);
  } else {
    cov_1gmc9ibw0f().b[2][1]++;
  }

  // CHECK IF EMAIL EXIST
  const user = (cov_1gmc9ibw0f().s[34]++, await _registerSdcheme.default.findOne({
    email: req.body.email
  }));
  cov_1gmc9ibw0f().s[35]++;
  if (!user) {
    cov_1gmc9ibw0f().b[3][0]++;
    cov_1gmc9ibw0f().s[36]++;
    return res.status(400).send("email does not exist");
  } else {
    cov_1gmc9ibw0f().b[3][1]++;
  }
  // CHECK PASSWORD
  const validPasword = (cov_1gmc9ibw0f().s[37]++, await _bcryptjs.default.compare(req.body.password, user.password));
  cov_1gmc9ibw0f().s[38]++;
  if (!validPasword) {
    cov_1gmc9ibw0f().b[4][0]++;
    cov_1gmc9ibw0f().s[39]++;
    return res.status(400).send("password does not match");
  } else {
    cov_1gmc9ibw0f().b[4][1]++;
  }
  const token = (cov_1gmc9ibw0f().s[40]++, _jsonwebtoken.default.sign({
    _id: user._id
  }, process.env.TOKEN_SECRET));
  cov_1gmc9ibw0f().s[41]++;
  res.header("auth-token", token).send(token);
};
exports.loginUser = loginUser;