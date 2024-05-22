"use server";
// import { redirect } from "next/navigation";
require("dotenv").config();
const ConnectDb = require("./connect");
// const properties = require("./model");
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
