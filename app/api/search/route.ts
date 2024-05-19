import { redirect } from "next/navigation";

const properties = require("../../../utils/model");

require("dotenv").config();

const ConnectDB = require("../../../utils/connect");
ConnectDB(process.env.MONGO_URI);
export const POST = async (request: any, response: any) => {
  try {
    const req = await request.json();
    let { location, upperPriceLimit, lowerPriceLimit } = req;
    const filteredProperties = await properties.find({
      price: { $gt: lowerPriceLimit, $lt: upperPriceLimit },
      location: location,
    });
    console.log(filteredProperties);
    // console.log(response);
    return Response.json({ success: true, properties: filteredProperties });
  } catch (error: any) {
    console.error(error);
    return response.json({ success: false, error });
  }
};
