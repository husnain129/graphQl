import graphql from "graphql";
import User from "../models/userModel.js";
import { UserType } from "./user_type.js";

const regsiter = {
  type: UserType,
  args: {
    email: { type: graphql.GraphQLString },
    password: { type: graphql.GraphQLString },
  },
  async resolve(parentValue, { email, password }) {
    let user = new User({ email, password });
    await user.save();
    return user;
  },
};

const login = {
  type: UserType,
  args: {
    email: { type: graphql.GraphQLString },
    password: { type: graphql.GraphQLString },
  },
  async resolve(parentValue, { email, password }) {
    let user = await User.findOne({ email, password });
    return user;
  },
};

const deleteUser = {
  type: UserType,
  args: {
    id: { type: graphql.GraphQLID },
  },
  async resolve(parentValue, { id }) {
    let user = await User.findById(id);
    await user.delete();
    return user;
  },
};

export { regsiter, login, deleteUser };
