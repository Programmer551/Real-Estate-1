import { NextResponse } from "next/server";

const properties = require("../../../utils/model");

require("dotenv").config();

const ConnectDB = require("../../../utils/connect");
ConnectDB(process.env.MONGO_URI);
// export const POST = async (request: any) => {
//   try {
//     const req = await request.json();
//     const { location, upperLimitPrice, lowerLimitPrice, keyword } = req;
//     const filteredProperties: any = await properties.find({
//       $and: [
//         { $lt: { price: lowerLimitPrice } },
//         { $gt: { price: upperLimitPrice } },
//         { $eq: { location: location } },
//       ],
//     });
//     console.log(filteredProperties);
//     return NextResponse.json({});
//   } catch (error) {
//     // console.log(error);
//     return Response.json({ success: false, error });
//   }
// };
export const POST = async (request: any) => {
  try {
    const req = await request.json();
    let { location, upperPriceLimit, lowerPriceLimit, keyword } = req;
    // upperPriceLimit = 199999;
    // lowerPriceLimit = 99999;
    // console.log(upperPriceLimit, lowerPriceLimit);

    upperPriceLimit = --upperPriceLimit;
    lowerPriceLimit = --lowerPriceLimit;
    // console.log(upperPriceLimit, lowerPriceLimit);
    // console.log(location);

    const filteredProperties = await properties.find({
      price: { $gt: lowerPriceLimit, $lt: upperPriceLimit },
      location: location,
    });

    // console.log(filteredProperties);
    return NextResponse.json({ success: true, data: filteredProperties });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ success: false, error });
  }
};
