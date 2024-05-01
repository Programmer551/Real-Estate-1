const mongoose = require("mongoose");
const ConnectDB = (url: String) => {
  mongoose
    .connect(url)
    .then(() => {
      console.log("DB is connected");
    })
    .catch((err: Error) => {
      console.log(err);
    });
};
module.exports = ConnectDB;
