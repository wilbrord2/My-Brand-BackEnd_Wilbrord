//get all User swagger documentation
const listOfAllUser = {
  tags: ["User"],
  description: "list of all User",

  security: [
    {
      authtoken: [],
    },
  ],
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
              __v: 0,
            },
          },
        },
      },
    },
  },
};
//create a blog swagger documentation

const createuser = {
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
              example: "Wilbrord",
            },

            email: {
              type: "string",
              description: "email",
              example: "email@gmail.com",
            },

            password: {
              type: "string",
              description: "user",
              example: "Learning",
            },

            repassword: {
              type: "string",
              description: "user",
              example: "Learning",
            },
          },
        },
      },
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
              },
            },
          },
        },
      },
    },
  },
};

//get single blog by id swagger documentation
const getOneUser = {
  tags: ["User"],
  description: "get single user by id",
  security: [
    {
      auth_token: [],
    },
  ],
  parameters: [
    {
      name: "id",
      in: "path",
      description: "id of the user",
      type: "string",
      example: "",
    },
  ],
  responses: {
    200: {
      description: "OK",
      content: {
        "application/json": {
          schema: {
            type: "object",
          },
        },
      },
    },
    404: {
      description: "user not found",
    },
  },
};

//delete a blog swagger documentation
const deleteUser = {
  tags: ["User"],
  description: "Delete a user",
  security: [{ authtoken: [] }],
  parameters: [
    {
      name: "id",
      in: "path",
      description: "ID of the user to delete",
      required: true,
      type: "string",
    },
  ],
  responses: {
    204: {
      description: "No Content",
    },
    401: {
      description: "Unauthorized",
    },
    404: {
      description: "Not Found",
    },
  },
};

// login user swagger documentation
const login = {
  tags: ["User"],
  description: "Login",
  requestBody: {
    content: {
      "Application/json": {
        schema: {
          type: "object",
          properties: {
            email: {
              type: "string",
              description: "email",
              example: "email@gmail.com",
            },
            password: {
              type: "string",
              description: "user",
              example: "******",
            },
          },
        },
      },
    },
    responses: {
      200: {
        description: "OK",
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                message: {
                  type: "string",
                  description: "user message",
                },
                data: {
                  type: "string",
                  description: "JWT assigned to the user",
                },
              },
            },
          },
        },
      },
    },
  },
};

const userRouteDoc = {
  "/api/user/getAllUsers": {
    get: listOfAllUser,
  },
  "/api/user/createUser": {
    post: createuser,
  },
  "/api/user/getSingleUser/{id}": {
    get: getOneUser,
  },
  "/api/user/deleteUser/{id}": {
    delete: deleteUser,
  },
  "api/user/login": {
    post: login,
  },
};

export default userRouteDoc;
