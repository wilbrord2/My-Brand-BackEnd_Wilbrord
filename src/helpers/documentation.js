import blogRouteDoc from "../routes/blog.doc";
import messageRouteDoc from "../routes/message.doc";

const swaggerDocumentations = {
  openapi: "3.0.0",
  info: {
    title: "My brand Api",
    Version: "0.1.0",
    description: "This is the backend of my BRAND",
  },
  servers: [
    {
      url: "http://localhost:3000",
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
  },
};

export default swaggerDocumentations;
