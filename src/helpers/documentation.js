import blogRouteDoc from "../routes/blog.doc";
import messageRouteDoc from "../routes/message.doc";
import userRouteDoc from "../routes/user.doc";
const swaggerDocumentations = {
  openapi: "3.0.0",
  info: {
    title: "My brand Api",
    Version: "0.1.0",
    description: "This is the backend of my BRAND",
  },
  components: {
    securitySchemes: {
      customAuth: {
        type: "apiKey",
        in: "header",
        name: "authtoken",
      },
    },
  },
  security: [
    {
      customAuth: {
        key: "",
        token: "",
      },
    },
  ],

  servers: [
    {
      url: "https://wilbrord-mybrand-backend.up.railway.app",
      name: "development server",
    },
  ],

  schemes: ["HTTP", "HTTPS"],
  tags: [
    {
      name: "Blogs",
      description: "",
    },

    {
      name: "Messages",
      description: "",
    },
  ],

  paths: {
    ...blogRouteDoc,
    ...messageRouteDoc,
    ...userRouteDoc,
  },
};

export default swaggerDocumentations;
