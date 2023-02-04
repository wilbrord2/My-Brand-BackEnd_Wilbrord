"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function cov_nbq97v909() {
  var path = "C:\\AA Projects\\Andela\\My Backend\\src\\routes\\message.doc.js";
  var hash = "261600e7e0827fbcfa9d0c432fbaa9f50e94b431";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\AA Projects\\Andela\\My Backend\\src\\routes\\message.doc.js",
    statementMap: {
      "0": {
        start: {
          line: 2,
          column: 26
        },
        end: {
          line: 31,
          column: 1
        }
      },
      "1": {
        start: {
          line: 34,
          column: 22
        },
        end: {
          line: 91,
          column: 1
        }
      },
      "2": {
        start: {
          line: 94,
          column: 22
        },
        end: {
          line: 128,
          column: 1
        }
      },
      "3": {
        start: {
          line: 131,
          column: 22
        },
        end: {
          line: 155,
          column: 1
        }
      },
      "4": {
        start: {
          line: 156,
          column: 24
        },
        end: {
          line: 169,
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
    hash: "261600e7e0827fbcfa9d0c432fbaa9f50e94b431"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_nbq97v909 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_nbq97v909();
//get all messages swagger documentation
const listOfAllMessages = (cov_nbq97v909().s[0]++, {
  tags: ["Messages"],
  description: "list of all Messages",
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
              subject: "greetings",
              Message: "helloo",
              __v: 0
            }
          }
        }
      }
    }
  }
});
//create a blog swagger documentation

const createmessage = (cov_nbq97v909().s[1]++, {
  tags: ["Messages"],
  description: "create a new message",
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
            subject: {
              type: "string",
              description: "message",
              example: "Learning"
            },
            Message: {
              type: "string",
              description: "message",
              example: "study hard"
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
                Email: "wilbrord@gmail.com",
                subject: "dance",
                message: "dancing"
              }
            }
          }
        }
      }
    }
  }
});

//get single blog by id swagger documentation
const getonemessage = (cov_nbq97v909().s[2]++, {
  tags: ["Messages"],
  summary: "get user by path id",
  description: "get single message by id",
  security: [{
    auth_token: []
  }],
  parameters: [{
    name: "id",
    in: "path",
    description: "id of the user",
    type: "string",
    example: "hfbjsd2345njndfjhcbe3"
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
      description: "message not found"
    }
  }
});

//delete a blog swagger documentation
const deletemessage = (cov_nbq97v909().s[3]++, {
  tags: ["Messages"],
  description: "Delete a message",
  security: [{
    auth_token: []
  }],
  parameters: [{
    name: "id",
    in: "path",
    description: "ID of the message to delete",
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
const messageRouteDoc = (cov_nbq97v909().s[4]++, {
  "/api/messages/save": {
    post: createmessage
  },
  "/api/messages/show": {
    get: listOfAllMessages
  },
  "/api/messages/getOne/{id}": {
    get: getonemessage
  },
  "/api/messages/deleteOne/{id}": {
    delete: deletemessage
  }
});
var _default = messageRouteDoc;
exports.default = _default;