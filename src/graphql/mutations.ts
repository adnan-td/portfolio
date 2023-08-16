/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProject = /* GraphQL */ `
  mutation CreateProject($input: CreateProjectInput!) {
    createProject(input: $input) {
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
export const updateProject = /* GraphQL */ `
  mutation UpdateProject($input: UpdateProjectInput!) {
    updateProject(input: $input) {
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
export const deleteProject = /* GraphQL */ `
  mutation DeleteProject($input: DeleteProjectInput!) {
    deleteProject(input: $input) {
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
export const createExperience = /* GraphQL */ `
  mutation CreateExperience($input: CreateExperienceInput!) {
    createExperience(input: $input) {
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
export const updateExperience = /* GraphQL */ `
  mutation UpdateExperience($input: UpdateExperienceInput!) {
    updateExperience(input: $input) {
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
export const deleteExperience = /* GraphQL */ `
  mutation DeleteExperience($input: DeleteExperienceInput!) {
    deleteExperience(input: $input) {
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
export const createContactMessage = /* GraphQL */ `
  mutation CreateContactMessage($input: CreateContactMessageInput!) {
    createContactMessage(input: $input) {
      id
      name
      email
      message
      __typename
    }
  }
`;
export const updateContactMessage = /* GraphQL */ `
  mutation UpdateContactMessage($input: UpdateContactMessageInput!) {
    updateContactMessage(input: $input) {
      id
      name
      email
      message
      __typename
    }
  }
`;
export const deleteContactMessage = /* GraphQL */ `
  mutation DeleteContactMessage($input: DeleteContactMessageInput!) {
    deleteContactMessage(input: $input) {
      id
      name
      email
      message
      __typename
    }
  }
`;
