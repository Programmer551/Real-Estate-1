"use server";
import { redirect } from "next/navigation";
require("dotenv").config();
const ConnectDb = require("./connect");
const properties = require("./model");
ConnectDb(process.env.MONGO_URI);
export const search = async (formData: FormData) => {
  try {
    const keyword = formData.get("keyword");
    const location = formData.get("location");
    const price = formData.get("price");
    let upperPriceLimit;
    let lowerPriceLimit;
    if (typeof price == "string") {
      const parts = price.split("-");
      const num1 = Number.parseInt(parts[0]);
      const num2 = Number.parseInt(parts[1]);
      lowerPriceLimit = num1;
      upperPriceLimit = num2;
      upperPriceLimit = --upperPriceLimit;
      lowerPriceLimit = --lowerPriceLimit;
      // redirect("/property");
    }
    // console.log(upperPriceLimit, lowerPriceLimit);
    // console.log(location);

    const filteredProperties = await properties.find({
      price: { $gt: lowerPriceLimit, $lt: upperPriceLimit },
      location: location,
    });
    // Any type is because who is going to type the huge object
    let updated = filteredProperties.map((obj: any) => {
      const isVisible = obj.name.toLowerCase().includes(keyword);

      if (isVisible) {
        return obj;
      }
      return null;
    });
    // console.log(updated);
    updated = updated.filter(
      (item: any) => item !== null && typeof item === "object",
    );
  } catch (error) {
    console.log(error);
  }
  redirect("/property");
};
