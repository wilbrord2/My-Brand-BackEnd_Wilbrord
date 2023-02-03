//get all messages swagger documentation
const listOfAllMessages = {
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
              __v: 0,
            },
          },
        },
      },
    },
  },
};
//create a blog swagger documentation

const createmessage = {
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
              example: "Wilbrord",
            },

            email: {
              type: "string",
              description: "email",
              example: "email@gmail.com",
            },

            subject: {
              type: "string",
              description: "message",
              example: "Learning",
            },

            Message: {
              type: "string",
              description: "message",
              example: "study hard",
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
                subject: "dance",
                message: "dancing",
              },
            },
          },
        },
      },
    },
  },
};

//get single blog by id swagger documentation
const getonemessage = {
  tags: ["Messages"],
  summary: "get user by path id",
  description: "get single message by id",

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
      example: "hfbjsd2345njndfjhcbe3",
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
      description: "message not found",
    },
  },
};

//delete a blog swagger documentation
const deletemessage = {
  tags: ["Messages"],
  description: "Delete a message",
  security: [{ auth_token: [] }],
  parameters: [
    {
      name: "id",
      in: "path",
      description: "ID of the message to delete",
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
const messageRouteDoc = {
  "/api/messages/save": {
    post: createmessage,
  },
  "/api/messages/show": {
    get: listOfAllMessages,
  },
  "/api/messages/getOne/:messageId": {
    get: getonemessage,
  },
  "/api/messages/deleteOne/:messageId": {
    delete: deletemessage,
  },
};

export default messageRouteDoc;
