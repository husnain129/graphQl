const { GraphQLString, GraphQLObjectType } = require("graphql");

const UserType = new GraphQLObjectType({
  name: "UserType",
  fields: {
    id: { type: GraphQLString },
    email: { type: GraphQLString },
  },
});

module.exports = UserType;
