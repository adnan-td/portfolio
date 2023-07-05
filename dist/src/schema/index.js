"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const graphql_tag_1 = require("graphql-tag");
exports.typeDefs = (0, graphql_tag_1.gql) `
  type Projects {
    id: ID! @id
    title: String!
    tech: String!
    image: String
    github: String
    url: String
  }

  type Experience {
    id: ID! @id
    title: String!
    subtitle: String!
    description: String!
    date: String!
    tech: String!
    order: Int!
  }

  type ContactMessages {
    id: ID! @id
    name: String!
    email: String!
    message: String!
  }

  extend type Projects
    @auth(rules: [{ operations: [CREATE, UPDATE, DELETE], isAuthenticated: true }])

  extend type Experience
    @auth(rules: [{ operations: [CREATE, UPDATE, DELETE], isAuthenticated: true }])

  extend type ContactMessages
    @auth(rules: [{ operations: [UPDATE, DELETE], isAuthenticated: true }])

  type Mutation {
    signIn(userName: String!, password: String!): String!
  }
`;
