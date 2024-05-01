"use server";
// import { auth, clerkClient } from "@clerk/nextjs";
require("dotenv").config();
const ConnectDb = require("./connect");
// import { revalidatePath } from "next/cache";
const properties = require("./model");
ConnectDb(process.env.MONGO_URI);
export const testing = async () => {
  console.log("This is working");
  await properties.find();
};
