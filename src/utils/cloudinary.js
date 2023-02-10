import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.COUDINARY_NAME,
  api_key: process.env.COUDINARY_APIKEY,
  api_secret: process.env.CLOUDINARY_APIKEY_SECRET,
  url: process.env.CLOUDINARY_URL,
});
export default cloudinary;
