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
var _routes = _interopRequireDefault(require("./routes"));
function cov_21gyyzflvb() {
  var path = "C:\\AA Projects\\Andela\\My Backend\\src\\app.js";
  var hash = "d2895c7eb4a0c7d1a2ae6f85443078c45b5133c3";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\AA Projects\\Andela\\My Backend\\src\\app.js",
    statementMap: {
      "0": {
        start: {
          line: 10,
          column: 13
        },
        end: {
          line: 10,
          column: 37
        }
      },
      "1": {
        start: {
          line: 11,
          column: 12
        },
        end: {
          line: 11,
          column: 21
        }
      },
      "2": {
        start: {
          line: 12,
          column: 0
        },
        end: {
          line: 12,
          column: 16
        }
      },
      "3": {
        start: {
          line: 17,
          column: 0
        },
        end: {
          line: 17,
          column: 27
        }
      },
      "4": {
        start: {
          line: 18,
          column: 0
        },
        end: {
          line: 22,
          column: 2
        }
      },
      "5": {
        start: {
          line: 23,
          column: 0
        },
        end: {
          line: 23,
          column: 24
        }
      },
      "6": {
        start: {
          line: 24,
          column: 0
        },
        end: {
          line: 24,
          column: 44
        }
      },
      "7": {
        start: {
          line: 25,
          column: 0
        },
        end: {
          line: 25,
          column: 67
        }
      },
      "8": {
        start: {
          line: 28,
          column: 18
        },
        end: {
          line: 37,
          column: 1
        }
      },
      "9": {
        start: {
          line: 29,
          column: 2
        },
        end: {
          line: 36,
          column: 3
        }
      },
      "10": {
        start: {
          line: 30,
          column: 4
        },
        end: {
          line: 30,
          column: 38
        }
      },
      "11": {
        start: {
          line: 31,
          column: 17
        },
        end: {
          line: 31,
          column: 66
        }
      },
      "12": {
        start: {
          line: 32,
          column: 4
        },
        end: {
          line: 32,
          column: 62
        }
      },
      "13": {
        start: {
          line: 34,
          column: 4
        },
        end: {
          line: 34,
          column: 23
        }
      },
      "14": {
        start: {
          line: 35,
          column: 4
        },
        end: {
          line: 35,
          column: 20
        }
      },
      "15": {
        start: {
          line: 40,
          column: 0
        },
        end: {
          line: 44,
          column: 3
        }
      },
      "16": {
        start: {
          line: 41,
          column: 2
        },
        end: {
          line: 43,
          column: 5
        }
      },
      "17": {
        start: {
          line: 42,
          column: 4
        },
        end: {
          line: 42,
          column: 33
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 28,
            column: 18
          },
          end: {
            line: 28,
            column: 19
          }
        },
        loc: {
          start: {
            line: 28,
            column: 30
          },
          end: {
            line: 37,
            column: 1
          }
        },
        line: 28
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 40,
            column: 17
          },
          end: {
            line: 40,
            column: 18
          }
        },
        loc: {
          start: {
            line: 40,
            column: 23
          },
          end: {
            line: 44,
            column: 1
          }
        },
        line: 40
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 41,
            column: 19
          },
          end: {
            line: 41,
            column: 20
          }
        },
        loc: {
          start: {
            line: 41,
            column: 25
          },
          end: {
            line: 43,
            column: 3
          }
        },
        line: 41
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 10,
            column: 13
          },
          end: {
            line: 10,
            column: 37
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 10,
            column: 13
          },
          end: {
            line: 10,
            column: 29
          }
        }, {
          start: {
            line: 10,
            column: 33
          },
          end: {
            line: 10,
            column: 37
          }
        }],
        line: 10
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
      "17": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "d2895c7eb4a0c7d1a2ae6f85443078c45b5133c3"
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

// Middlewares
// bodyParser
cov_21gyyzflvb().s[3]++;
app.use(_bodyParser.default.json());
cov_21gyyzflvb().s[4]++;
app.use((0, _cors.default)({
  origin: "*"
}));
cov_21gyyzflvb().s[5]++;
app.use("/api", _routes.default);
cov_21gyyzflvb().s[6]++;
app.use("/documentation", _swaggerUiExpress.default.serve);
cov_21gyyzflvb().s[7]++;
app.use("/documentation", _swaggerUiExpress.default.setup(_documentation.default));

//CONNECT TO db
cov_21gyyzflvb().s[8]++;
const connectDB = async () => {
  cov_21gyyzflvb().f[0]++;
  cov_21gyyzflvb().s[9]++;
  try {
    cov_21gyyzflvb().s[10]++;
    _mongoose.default.set("strictQuery", true);
    const conn = (cov_21gyyzflvb().s[11]++, await _mongoose.default.connect(process.env.DB_CONNECTION));
    cov_21gyyzflvb().s[12]++;
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    cov_21gyyzflvb().s[13]++;
    console.log(error);
    cov_21gyyzflvb().s[14]++;
    process.exit(1);
  }
};

//Connect to the database before listening
cov_21gyyzflvb().s[15]++;
connectDB().then(() => {
  cov_21gyyzflvb().f[1]++;
  cov_21gyyzflvb().s[16]++;
  app.listen(PORT, () => {
    cov_21gyyzflvb().f[2]++;
    cov_21gyyzflvb().s[17]++;
    console.log("connect to DB");
  });
});
var _default = app;
exports.default = _default;