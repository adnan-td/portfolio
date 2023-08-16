/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProject = /* GraphQL */ `
  subscription OnCreateProject(
    $id: ID
    $title: String
    $tech: String
    $image: String
    $github: String
  ) {
    onCreateProject(
      id: $id
      title: $title
      tech: $tech
      image: $image
      github: $github
    ) {
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
export const onUpdateProject = /* GraphQL */ `
  subscription OnUpdateProject(
    $id: ID
    $title: String
    $tech: String
    $image: String
    $github: String
  ) {
    onUpdateProject(
      id: $id
      title: $title
      tech: $tech
      image: $image
      github: $github
    ) {
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
export const onDeleteProject = /* GraphQL */ `
  subscription OnDeleteProject(
    $id: ID
    $title: String
    $tech: String
    $image: String
    $github: String
  ) {
    onDeleteProject(
      id: $id
      title: $title
      tech: $tech
      image: $image
      github: $github
    ) {
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
export const onCreateExperience = /* GraphQL */ `
  subscription OnCreateExperience(
    $id: ID
    $title: String
    $subtitle: String
    $description: String
    $date: String
  ) {
    onCreateExperience(
      id: $id
      title: $title
      subtitle: $subtitle
      description: $description
      date: $date
    ) {
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
export const onUpdateExperience = /* GraphQL */ `
  subscription OnUpdateExperience(
    $id: ID
    $title: String
    $subtitle: String
    $description: String
    $date: String
  ) {
    onUpdateExperience(
      id: $id
      title: $title
      subtitle: $subtitle
      description: $description
      date: $date
    ) {
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
export const onDeleteExperience = /* GraphQL */ `
  subscription OnDeleteExperience(
    $id: ID
    $title: String
    $subtitle: String
    $description: String
    $date: String
  ) {
    onDeleteExperience(
      id: $id
      title: $title
      subtitle: $subtitle
      description: $description
      date: $date
    ) {
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
export const onCreateContactMessage = /* GraphQL */ `
  subscription OnCreateContactMessage(
    $id: ID
    $name: String
    $email: String
    $message: String
  ) {
    onCreateContactMessage(
      id: $id
      name: $name
      email: $email
      message: $message
    ) {
      id
      name
      email
      message
      __typename
    }
  }
`;
export const onUpdateContactMessage = /* GraphQL */ `
  subscription OnUpdateContactMessage(
    $id: ID
    $name: String
    $email: String
    $message: String
  ) {
    onUpdateContactMessage(
      id: $id
      name: $name
      email: $email
      message: $message
    ) {
      id
      name
      email
      message
      __typename
    }
  }
`;
export const onDeleteContactMessage = /* GraphQL */ `
  subscription OnDeleteContactMessage(
    $id: ID
    $name: String
    $email: String
    $message: String
  ) {
    onDeleteContactMessage(
      id: $id
      name: $name
      email: $email
      message: $message
    ) {
      id
      name
      email
      message
      __typename
    }
  }
`;
