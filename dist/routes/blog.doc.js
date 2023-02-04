"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function cov_1te46bib35() {
  var path = "C:\\AA Projects\\Andela\\My Backend\\src\\routes\\blog.doc.js";
  var hash = "4562d9f3ebbc06fef7fbc5a67b350843694972a9";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\AA Projects\\Andela\\My Backend\\src\\routes\\blog.doc.js",
    statementMap: {
      "0": {
        start: {
          line: 2,
          column: 26
        },
        end: {
          line: 24,
          column: 1
        }
      },
      "1": {
        start: {
          line: 26,
          column: 22
        },
        end: {
          line: 54,
          column: 1
        }
      },
      "2": {
        start: {
          line: 57,
          column: 22
        },
        end: {
          line: 104,
          column: 1
        }
      },
      "3": {
        start: {
          line: 107,
          column: 22
        },
        end: {
          line: 181,
          column: 1
        }
      },
      "4": {
        start: {
          line: 184,
          column: 22
        },
        end: {
          line: 208,
          column: 1
        }
      },
      "5": {
        start: {
          line: 209,
          column: 21
        },
        end: {
          line: 226,
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
      "4": 0,
      "5": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "4562d9f3ebbc06fef7fbc5a67b350843694972a9"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1te46bib35 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1te46bib35();
//get all blogs swagger documentation
const listOfAllArticles = (cov_1te46bib35().s[0]++, {
  tags: ["Blogs"],
  description: "list of all blogs",
  responses: {
    200: {
      description: "OK",
      content: {
        "application/json": {
          schema: {
            type: "object",
            example: {
              _id: "63c5554511120c1b217b1d31",
              title: "eating is good",
              description: "nice",
              date: 2023.02,
              __v: 0
            }
          }
        }
      }
    }
  }
});
//get single blog by id swagger documentation
const getonearticle = (cov_1te46bib35().s[1]++, {
  tags: ["Blogs"],
  // summary: "get user by path id",
  description: "get single blog by id",
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
      description: "blog not found"
    }
  }
});
//create a blog swagger documentation

const createArticle = (cov_1te46bib35().s[2]++, {
  tags: ["Blogs"],
  description: "create a new blog",
  security: [{
    token: []
  }],
  requestBody: {
    content: {
      "Application/json": {
        schema: {
          type: "object",
          properties: {
            title: {
              type: "string",
              description: "title of the blog",
              example: "Learning"
            },
            description: {
              type: "string",
              description: "description of the blog",
              example: "singing is the best practice"
            }
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
              title: "dancing",
              description: "dancing is a very good physical exercise for the dancer"
            }
          }
        }
      }
    }
  }
});

//update blog swagger documentation
const updateArticle = (cov_1te46bib35().s[3]++, {
  tags: ["Blogs"],
  description: "Update a blog",
  security: [{
    token: []
  }],
  parameters: [{
    name: "id",
    in: "path",
    description: "ID of the article to update",
    required: true,
    type: "string"
  }],
  requestBody: {
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            title: {
              type: "string",
              description: "Title of the blog",
              example: "Singing"
            },
            picture: {
              type: "string",
              description: "Image of the blog (url)",
              example: "http://localhost:5000/images/1674370662518pexels-harry-dona-2338407.jpg"
            },
            description: {
              type: "string",
              description: "Description of the blog",
              example: "Singing is the best practice"
            }
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
            properties: {
              _id: {
                type: "string",
                description: "ID of the updated article"
              },
              title: {
                type: "string",
                description: "Title of the updated artcle"
              },
              picture: {
                type: "string",
                description: "Image of the updated article (url)"
              },
              description: {
                type: "string",
                description: "Description of the updated article"
              }
            }
          }
        }
      }
    }
  }
});

//delete a blog swagger documentation
const deleteArticle = (cov_1te46bib35().s[4]++, {
  tags: ["Blogs"],
  description: "Delete a blog",
  security: [{
    auth_token: []
  }],
  parameters: [{
    name: "id",
    in: "path",
    description: "ID of the article to delete",
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
const blogRouteDoc = (cov_1te46bib35().s[5]++, {
  "/api/article/createArticle": {
    post: createArticle
  },
  "/api/article/getAllArticle": {
    get: listOfAllArticles
  },
  "/api/article/getSingleArticle/{id}": {
    get: getonearticle
  },
  "/api/article//UpdateArticle/{id}": {
    patch: updateArticle
  },
  "/api/article//deleteArticle/{id}": {
    delete: deleteArticle
  }
});
var _default = blogRouteDoc;
exports.default = _default;