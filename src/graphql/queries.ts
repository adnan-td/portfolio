/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProject = /* GraphQL */ `
  query GetProject($id: ID!) {
    getProject(id: $id) {
      id
      title
      tech
      image
      github
      url
      __typename
    }
  }
`;
export const listProjects = /* GraphQL */ `
  query ListProjects(
    $filter: TableProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        tech
        image
        github
        url
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getExperience = /* GraphQL */ `
  query GetExperience($id: ID!) {
    getExperience(id: $id) {
      id
      title
      subtitle
      description
      date
      tech
      order
      __typename
    }
  }
`;
export const listExperiences = /* GraphQL */ `
  query ListExperiences(
    $filter: TableExperienceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listExperiences(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        subtitle
        description
        date
        tech
        order
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getContactMessage = /* GraphQL */ `
  query GetContactMessage($id: ID!) {
    getContactMessage(id: $id) {
      id
      name
      email
      message
      __typename
    }
  }
`;
export const listContactMessages = /* GraphQL */ `
  query ListContactMessages(
    $filter: TableContactMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContactMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        message
        __typename
      }
      nextToken
      __typename
    }
  }
`;
