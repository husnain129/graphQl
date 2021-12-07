import express from "express";
import { graphqlHTTP } from "express-graphql";
import mongoose from "mongoose";
import User from "./models/userModel.js";
import schema from "./schema/schema.js";

const app = express();
app.use(express.json());

var db = "mongodb://127.0.0.1/testdb";
mongoose.connect(db, { useNewUrlParser: true });

const conSuccess = mongoose.connection;
conSuccess.once("open", (_) => {
  console.log("Database connected:", db);
});

app.post("/register", async (req, res) => {
  const { email, password } = req.body;
  if (!email && !password) throw new Error("Provide email and password");
  let user = new User({ email, password });
  user.save();
  res.status(200).json({
    ok: true,
    user,
  });
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email && !password) throw new Error("Provide email and password");
  let user = await User.find({ email, password });
  res.status(200).json({
    ok: true,
    user,
  });
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(3000, () => {
  console.log("app running");
});
