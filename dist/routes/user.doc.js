"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function cov_122rlsvemg() {
  var path = "C:\\AA Projects\\Andela\\My Backend\\src\\routes\\user.doc.js";
  var hash = "84b5635f2e31b096572f9093751486d141dd6a70";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\AA Projects\\Andela\\My Backend\\src\\routes\\user.doc.js",
    statementMap: {
      "0": {
        start: {
          line: 2,
          column: 22
        },
        end: {
          line: 29,
          column: 1
        }
      },
      "1": {
        start: {
          line: 32,
          column: 19
        },
        end: {
          line: 87,
          column: 1
        }
      },
      "2": {
        start: {
          line: 90,
          column: 19
        },
        end: {
          line: 122,
          column: 1
        }
      },
      "3": {
        start: {
          line: 125,
          column: 19
        },
        end: {
          line: 149,
          column: 1
        }
      },
      "4": {
        start: {
          line: 150,
          column: 21
        },
        end: {
          line: 163,
          column: 1
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
    hash: "84b5635f2e31b096572f9093751486d141dd6a70"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_122rlsvemg = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_122rlsvemg();
//get all User swagger documentation
const listOfAllUser = (cov_122rlsvemg().s[0]++, {
  tags: ["User"],
  description: "list of all User",
  // security: [
  //   {
  //     auth_token: [],
  //   },
  // ],
  responses: {
    200: {
      description: "OK",
      content: {
        "application/json": {
          schema: {
            type: "object",
            example: {
              _id: "63c5554511120c1b217b1d31",
              name: "Wilbrord",
              email: "wilbrord@gmail.com",
              __v: 0
            }
          }
        }
      }
    }
  }
});
//create a blog swagger documentation

const createuser = (cov_122rlsvemg().s[1]++, {
  tags: ["User"],
  description: "create a new user",
  requestBody: {
    content: {
      "Application/json": {
        schema: {
          type: "object",
          properties: {
            name: {
              type: "string",
              description: "name",
              example: "Wilbrord"
            },
            email: {
              type: "string",
              description: "email",
              example: "email@gmail.com"
            },
            password: {
              type: "string",
              description: "user",
              example: "Learning"
            },
            repassword: {
              type: "string",
              description: "user",
              example: "Learning"
            }
          }
        }
      }
    },
    responses: {
      200: {
        description: "OK",
        content: {
          "application/json": {
            schema: {
              type: "object",
              example: {
                _id: "63ccde6635bde581af696708",
                name: "Wilbrord",
                Email: "wilbrord@gmail.com"
              }
            }
          }
        }
      }
    }
  }
});

//get single blog by id swagger documentation
const getOneUser = (cov_122rlsvemg().s[2]++, {
  tags: ["User"],
  description: "get single user by id",
  security: [{
    auth_token: []
  }],
  parameters: [{
    name: "id",
    in: "path",
    description: "id of the user",
    type: "string",
    example: ""
  }],
  responses: {
    200: {
      description: "OK",
      content: {
        "application/json": {
          schema: {
            type: "object"
          }
        }
      }
    },
    404: {
      description: "user not found"
    }
  }
});

//delete a blog swagger documentation
const deleteUser = (cov_122rlsvemg().s[3]++, {
  tags: ["User"],
  description: "Delete a user",
  security: [{
    auth_token: []
  }],
  parameters: [{
    name: "id",
    in: "path",
    description: "ID of the user to delete",
    required: true,
    type: "string"
  }],
  responses: {
    204: {
      description: "No Content"
    },
    401: {
      description: "Unauthorized"
    },
    404: {
      description: "Not Found"
    }
  }
});
const userRouteDoc = (cov_122rlsvemg().s[4]++, {
  "/api/user/getAllUsers": {
    get: listOfAllUser
  },
  "/api/user/createUser": {
    post: createuser
  },
  "/api/user/getSingleUser/{id}": {
    get: getOneUser
  },
  "/api/user/deleteUser/{id}": {
    delete: deleteUser
  }
});
var _default = userRouteDoc;
exports.default = _default;