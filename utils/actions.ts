"use server";
// import { auth, clerkClient } from "@clerk/nextjs";
require("dotenv").config();
const ConnectDb = require("./connect");
// import { revalidatePath } from "next/cache";
const properties = require("./model");
ConnectDb(process.env.MONGO_URI);
export const search = async (formData: FormData) => {
  try {
    const keyword = formData.get("keyword");
    const location = formData.get("location");
    const price = formData.get("price");
  } catch (error) {}
};
