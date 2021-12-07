const mongoose = require("mongoose");

const DB = "mongodb://localhost:27017/lyricalGraphql";

let db = () => {
  mongoose
    .connect("mongodb://localhost:27017/lyricalGraphql", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((res) => console.log("DB connection successful!"))
    .catch((err) => console.log(err));
};
module.exports = db;
