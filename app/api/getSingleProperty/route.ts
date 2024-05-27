const properties = require("../../../utils/model");

require("dotenv").config();

const ConnectDB = require("../../../utils/connect");
ConnectDB(process.env.MONGO_URI);
export const POST = async (request: Request) => {
  try {
    const req = await request.json();
    // console.log(req);

    const Property = await properties.find({ _id: req.id });
    return Response.json({ success: true, data: Property[0] });
  } catch (error) {
    return Response.json({ error });
  }
};
