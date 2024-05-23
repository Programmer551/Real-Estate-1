"use server";
// import { auth, clerkClient } from "@clerk/nextjs/server";
require("dotenv").config();
const ConnectDb = require("./connect");
const properties = require("./model");
const contact = require("./contact-model");
ConnectDb(process.env.MONGO_URI);
export const formSubmit = async (formData: FormData) => {
  try {
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    if (name && email && message) {
      await contact.create({ name, email, message });
    }
  } catch (error) {
    console.log(error);
  }
};
export const getFeatured = async () => {
  const featuredProperties = await properties.find({ isFeatured: true });
  return featuredProperties;
};
// export const getAll = async () => {
//   const Properties = await properties.find();
//   return Properties;
// };
