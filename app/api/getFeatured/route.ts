import properties from "../../../utils/model";
// import ConnectDB from "../../../utils/connect";
require("dotenv").config();

const ConnectDB = require("../../../utils/connect");
ConnectDB(process.env.MONGO_URI);
export const GET = async (req: Request) => {
  try {
    const featuredProperties = await properties.find({ isFeatured: true });
    return Response.json({ featuredProperties });
  } catch (error) {
    console.log("ERRORRRRRRRRRRR");
    console.log(error);
    return Response.json(error);
  }
};
