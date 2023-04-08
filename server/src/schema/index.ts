import { gql } from "graphql-tag";

export const typeDefs = gql`
  type FeaturedWork {
    id: ID! @id
    title: String!
    description: String
    tech: String
    image: String
    bgColor: String
    mouseColor: String
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

  extend type FeaturedWork
    @auth(rules: [{ operations: [CREATE, UPDATE, DELETE], isAuthenticated: true }])

  extend type Experience
    @auth(rules: [{ operations: [CREATE, UPDATE, DELETE], isAuthenticated: true }])

  type Mutation {
    signIn(userName: String!, password: String!): String!
  }
`;
