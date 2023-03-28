import { gql } from "graphql-tag";

export const typeDefs = gql`
  type FeaturedWork @exclude(operations: [DELETE]) {
    id: ID!
    title: String!
    description: String
    tech: String
    image: String
    bgColor: String
    mouseColor: String
  }

  extend type FeaturedWork @auth(rules: [{ operations: [CREATE, UPDATE], isAuthenticated: true }])

  type Mutation {
    signIn(userName: String!, password: String!): String!
  }
`;
