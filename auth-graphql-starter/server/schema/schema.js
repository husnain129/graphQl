const graphql = require("graphql");
const mutation = require("./mutation");
const { GraphQLSchema } = graphql;

const RootQueryType = require("./types/root_query_type");

module.exports = new GraphQLSchema({
  query: RootQueryType,
  mutation,
});
