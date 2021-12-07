import graphql from "graphql";
import User from "../models/userModel.js";

const UserType = new graphql.GraphQLObjectType({
  name: "Uses",
  description: "User type",
  fields: () => ({
    id: { type: graphql.GraphQLID },
    email: { type: graphql.GraphQLString },
    password: { type: graphql.GraphQLString },
  }),
});

const user = {
  type: UserType,
  description: "Retrieves one user",
  args: { id: { type: graphql.GraphQLID } },

  resolve(parent, { id }) {
    return User.findById(id);
  },
};
export { user, UserType };
