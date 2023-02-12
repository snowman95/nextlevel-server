const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    photos(page: Int!): [Photo!]!
    posts: [Post!]!
  }

  type Photo {
    albumId: Int
    id: ID!
    title: String!
    url: String
    thumbnailUrl: String
  }

  type Post {
    userId: Int!
    id: ID!
    title: String!
    body: String!
  }
`;

module.exports = typeDefs;
