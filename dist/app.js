"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = _interopRequireDefault(require("express"));
var _mongoose = _interopRequireDefault(require("mongoose"));
var _bodyParser = _interopRequireDefault(require("body-parser"));
var _cors = _interopRequireDefault(require("cors"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _swaggerUiExpress = _interopRequireDefault(require("swagger-ui-express"));
var _documentation = _interopRequireDefault(require("./helpers/documentation"));
var _message = _interopRequireDefault(require("./routes/message"));
var _user = _interopRequireDefault(require("./routes/user"));
var _authverified = _interopRequireDefault(require("./routes/authverified"));
var _blog = _interopRequireDefault(require("./routes/blog"));
function cov_21gyyzflvb() {
  var path = "C:\\AA Projects\\Andela\\My Backend\\src\\app.js";
  var hash = "93c504bd49997cc303a97890373964950a3a3095";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\AA Projects\\Andela\\My Backend\\src\\app.js",
    statementMap: {
      "0": {
        start: {
          line: 9,
          column: 13
        },
        end: {
          line: 9,
          column: 37
        }
      },
      "1": {
        start: {
          line: 10,
          column: 12
        },
        end: {
          line: 10,
          column: 21
        }
      },
      "2": {
        start: {
          line: 11,
          column: 0
        },
        end: {
          line: 11,
          column: 16
        }
      },
      "3": {
        start: {
          line: 19,
          column: 0
        },
        end: {
          line: 19,
          column: 27
        }
      },
      "4": {
        start: {
          line: 20,
          column: 0
        },
        end: {
          line: 20,
          column: 39
        }
      },
      "5": {
        start: {
          line: 21,
          column: 0
        },
        end: {
          line: 21,
          column: 31
        }
      },
      "6": {
        start: {
          line: 22,
          column: 0
        },
        end: {
          line: 22,
          column: 42
        }
      },
      "7": {
        start: {
          line: 23,
          column: 0
        },
        end: {
          line: 23,
          column: 39
        }
      },
      "8": {
        start: {
          line: 24,
          column: 0
        },
        end: {
          line: 24,
          column: 44
        }
      },
      "9": {
        start: {
          line: 25,
          column: 0
        },
        end: {
          line: 25,
          column: 67
        }
      },
      "10": {
        start: {
          line: 26,
          column: 0
        },
        end: {
          line: 26,
          column: 16
        }
      },
      "11": {
        start: {
          line: 29,
          column: 0
        },
        end: {
          line: 31,
          column: 3
        }
      },
      "12": {
        start: {
          line: 30,
          column: 2
        },
        end: {
          line: 30,
          column: 25
        }
      },
      "13": {
        start: {
          line: 34,
          column: 18
        },
        end: {
          line: 43,
          column: 1
        }
      },
      "14": {
        start: {
          line: 35,
          column: 2
        },
        end: {
          line: 42,
          column: 3
        }
      },
      "15": {
        start: {
          line: 36,
          column: 4
        },
        end: {
          line: 36,
          column: 38
        }
      },
      "16": {
        start: {
          line: 37,
          column: 17
        },
        end: {
          line: 37,
          column: 66
        }
      },
      "17": {
        start: {
          line: 38,
          column: 4
        },
        end: {
          line: 38,
          column: 62
        }
      },
      "18": {
        start: {
          line: 40,
          column: 4
        },
        end: {
          line: 40,
          column: 23
        }
      },
      "19": {
        start: {
          line: 41,
          column: 4
        },
        end: {
          line: 41,
          column: 20
        }
      },
      "20": {
        start: {
          line: 46,
          column: 0
        },
        end: {
          line: 50,
          column: 3
        }
      },
      "21": {
        start: {
          line: 47,
          column: 2
        },
        end: {
          line: 49,
          column: 5
        }
      },
      "22": {
        start: {
          line: 48,
          column: 4
        },
        end: {
          line: 48,
          column: 33
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 29,
            column: 13
          },
          end: {
            line: 29,
            column: 14
          }
        },
        loc: {
          start: {
            line: 29,
            column: 27
          },
          end: {
            line: 31,
            column: 1
          }
        },
        line: 29
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 34,
            column: 18
          },
          end: {
            line: 34,
            column: 19
          }
        },
        loc: {
          start: {
            line: 34,
            column: 30
          },
          end: {
            line: 43,
            column: 1
          }
        },
        line: 34
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 46,
            column: 17
          },
          end: {
            line: 46,
            column: 18
          }
        },
        loc: {
          start: {
            line: 46,
            column: 23
          },
          end: {
            line: 50,
            column: 1
          }
        },
        line: 46
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 47,
            column: 19
          },
          end: {
            line: 47,
            column: 20
          }
        },
        loc: {
          start: {
            line: 47,
            column: 25
          },
          end: {
            line: 49,
            column: 3
          }
        },
        line: 47
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 9,
            column: 13
          },
          end: {
            line: 9,
            column: 37
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 9,
            column: 13
          },
          end: {
            line: 9,
            column: 29
          }
        }, {
          start: {
            line: 9,
            column: 33
          },
          end: {
            line: 9,
            column: 37
          }
        }],
        line: 9
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
      "22": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "93c504bd49997cc303a97890373964950a3a3095"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_21gyyzflvb = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_21gyyzflvb();
const PORT = (cov_21gyyzflvb().s[0]++, (cov_21gyyzflvb().b[0][0]++, process.env.PORT) || (cov_21gyyzflvb().b[0][1]++, 3000));
const app = (cov_21gyyzflvb().s[1]++, (0, _express.default)());
cov_21gyyzflvb().s[2]++;
_dotenv.default.config();
// ROUTES
cov_21gyyzflvb().s[3]++;
// Middlewares
// bodyParser
app.use(_bodyParser.default.json());
cov_21gyyzflvb().s[4]++;
app.use("/api/messages", _message.default);
cov_21gyyzflvb().s[5]++;
app.use("/api/user", _user.default);
cov_21gyyzflvb().s[6]++;
app.use("/api/access", _authverified.default);
cov_21gyyzflvb().s[7]++;
app.use("/api/article", _blog.default);
cov_21gyyzflvb().s[8]++;
app.use("/documentation", _swaggerUiExpress.default.serve);
cov_21gyyzflvb().s[9]++;
app.use("/documentation", _swaggerUiExpress.default.setup(_documentation.default));
cov_21gyyzflvb().s[10]++;
app.use((0, _cors.default)());

// ROUTES
cov_21gyyzflvb().s[11]++;
app.get("/", (req, res) => {
  cov_21gyyzflvb().f[0]++;
  cov_21gyyzflvb().s[12]++;
  res.send(" home-Page");
});

//CONNECT TO db
cov_21gyyzflvb().s[13]++;
const connectDB = async () => {
  cov_21gyyzflvb().f[1]++;
  cov_21gyyzflvb().s[14]++;
  try {
    cov_21gyyzflvb().s[15]++;
    _mongoose.default.set("strictQuery", true);
    const conn = (cov_21gyyzflvb().s[16]++, await _mongoose.default.connect(process.env.DB_CONNECTION));
    cov_21gyyzflvb().s[17]++;
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    cov_21gyyzflvb().s[18]++;
    console.log(error);
    cov_21gyyzflvb().s[19]++;
    process.exit(1);
  }
};

//Connect to the database before listening
cov_21gyyzflvb().s[20]++;
connectDB().then(() => {
  cov_21gyyzflvb().f[2]++;
  cov_21gyyzflvb().s[21]++;
  app.listen(PORT, () => {
    cov_21gyyzflvb().f[3]++;
    cov_21gyyzflvb().s[22]++;
    console.log("connect to DB");
  });
});
var _default = app;
exports.default = _default;