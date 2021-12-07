import graphql from "graphql";
import userType from "./user_type.js";

const rootQuery = new graphql.GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    getUser: {
      type: userType,
      resolve(parentValue, args) {
        console.log("hello");
      },
    },
  },
});
