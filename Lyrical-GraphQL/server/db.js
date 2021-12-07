const mongoose = require("mongoose");

const DB = "mongodb://127.0.0.1/lyricalGraphql";

let db = () => {
  mongoose
    .connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("DB connection successful!"))
    .catch((err) => console.log(err));
};
module.exports = db;
