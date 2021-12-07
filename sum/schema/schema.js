import graphql from "graphql";
import { deleteUser, login, regsiter } from "./user_mutation.js";
import { user } from "./user_type.js";

const QueryType = new graphql.GraphQLObjectType({
  name: "QueryType",
  description: "Queries",
  fields: {
    user,
  },
});

const MutationType = new graphql.GraphQLObjectType({
  name: "Mutation",
  description: "All Mutation",
  fields: {
    regsiter,
    login,
    deleteUser,
  },
});

const schema = new graphql.GraphQLSchema({
  query: QueryType,
  mutation: MutationType,
});

export default schema;
