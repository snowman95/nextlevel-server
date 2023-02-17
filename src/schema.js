const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    photos(page: Int!): [Photo!]!
    posts: [Post!]!
    # Query all animals
    animals: [Animal]
    assets(id: Int!): [Asset]
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

  # Animal type definition
  type Animal {
    id: ID!
    firstName: String
    type: String
    accessory: String
  }

  type Asset {
    id: String
    x: Float
    y: Float
    name: String
    address: String
    date: String
    price: Int
    view: Int
    src: String
    detail: AssetDetail
  }

  type AssetDetail {
    address: String
    mainUse: String
    buildType: String
    approvalDate: String
    landArea: String
    buildingArea: String
    statutoryFloorAreaRatio: Int
    currentStatusFloorAreaRatio: Int
    scale: String

    dealAmount: Int
    dealPoint: String
    buildingDealArea: String
    buildingDealUnitPrice: String
    landDealArea: String
    landDealUnitPrice: String
    dealType: String

    registrationReason: String
    registrationReceipt: String
    sell: String
    buy: String

    source: String
    notes: [String]
  }
`;

module.exports = typeDefs;
