const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const JsonPlaceholderAPI = require("./datasources/json-placeholder-api");

async function startApolloServer(typeDefs, resolvers) {
  const server = new ApolloServer({
    // cors: {
    //   origin: [""],
    // },
    typeDefs,
    resolvers,
    dataSources: () => {
      return {
        jsonPlaceholderAPI: new JsonPlaceholderAPI(),
      };
    },
  });

  const { url, port } = await server.listen({ port: process.env.PORT || 4000 });
  console.log(`
      🚀  Server is running
      🔉  Listening on port ${port}
      📭  Query at ${url}
    `);
}

startApolloServer(typeDefs, resolvers);
