const mongodb = require("mongoose");

if (mongodb.connection.models["contact"]) {
  module.exports = mongodb.model("contact");
} else {
  const contactSchema = new mongodb.Schema({
    message: {
      type: String,
      required: [true, "Must Provide the Message!"],
    },
    name: {
      type: String,
      required: [true, "Must Provide the Name!"],
    },
    email: {
      type: String,
      required: [true, "Must Provide the Email!"],
    },
  });
  try {
    delete mongodb.connection.models["contact"];
  } catch (error: any) {
    console.error("Error deleting model 'contact':", error.message);
  }
  const contact = mongodb.model("contact", contactSchema);
  module.exports = contact;
}
