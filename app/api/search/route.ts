import { redirect } from "next/navigation";

const properties = require("../../../utils/model");

require("dotenv").config();

const ConnectDB = require("../../../utils/connect");
ConnectDB(process.env.MONGO_URI);
export const POST = async (request: any) => {
  try {
    const req = await request.json();
    let {
      location,
      upperPriceLimit,
      lowerPriceLimit,
    }: {
      location: string | null;
      upperPriceLimit: string | null;
      lowerPriceLimit: string | null;
    } = req;

    if (location && upperPriceLimit) {
      const filteredProperties = await properties.find({
        price: { $gt: lowerPriceLimit, $lt: upperPriceLimit },
        location: location,
      });
      return Response.json({ success: true, properties: filteredProperties });
    } else if (location && !upperPriceLimit) {
      const filteredProperties = await properties.find({
        location: location,
      });
      return Response.json({ success: true, properties: filteredProperties });
    } else if (!location && upperPriceLimit) {
      const filteredProperties = await properties.find({
        price: { $gt: lowerPriceLimit, $lt: upperPriceLimit },
        location: location,
      });
      return Response.json({ success: true, properties: filteredProperties });
    } else {
      const filteredProperties = await properties.find({});
      return Response.json({ success: true, properties: filteredProperties });
    }
  } catch (error: any) {
    console.error(error);
    return Response.json({ success: false, error });
  }
};
