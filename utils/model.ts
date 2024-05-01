const mongo = require("mongoose");

if (mongo.connection.models["properties"]) {
  // Model already exists, no need to redefine

  module.exports = mongo.model("properties");
} else {
  // Define the model
  const propertiesSchema = new mongo.Schema({
    details: {
      type: String,
      required: [true, "Must Provide the details!"],
      trim: true,
    },
    Img: {
      type: String,
      required: [true, "Must Provide the Img!"],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, "Must Provide the price!"],
    },
    forWhat: {
      type: String,
      required: [true, "Must Provide the forWhat!"],
    },
    name: {
      type: String,
      required: [true, "Must Provide the Name!"],
    },
    location: {
      type: String,
      required: [true, "Must Provide the Location!"],
    },
    isFeatured: {
      type: Boolean,
      required: [true, "Must Provide the isFeatured!"],
    },
  });
  try {
    delete mongo.connection.models["properties"];
  } catch (error: any) {
    console.error("Error deleting model 'properties':", error.message);
  }
  const properties = mongo.model("properties", propertiesSchema);
  module.exports = properties;
}
