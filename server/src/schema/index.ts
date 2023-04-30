import { gql } from "graphql-tag";

export const typeDefs = gql`
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

  extend type Projects
    @auth(rules: [{ operations: [CREATE, UPDATE, DELETE], isAuthenticated: true }])

  extend type Experience
    @auth(rules: [{ operations: [CREATE, UPDATE, DELETE], isAuthenticated: true }])

  type Mutation {
    signIn(userName: String!, password: String!): String!
  }
`;
