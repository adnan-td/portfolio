/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateProjectInput = {
  title: string,
  tech: string,
  image?: string | null,
  github?: string | null,
  url?: string | null,
};

export type Project = {
  __typename: "Project",
  id: string,
  title: string,
  tech: string,
  image?: string | null,
  github?: string | null,
  url?: string | null,
};

export type UpdateProjectInput = {
  id: string,
  title?: string | null,
  tech?: string | null,
  image?: string | null,
  github?: string | null,
  url?: string | null,
};

export type DeleteProjectInput = {
  id: string,
};

export type CreateExperienceInput = {
  title: string,
  subtitle: string,
  description: string,
  date: string,
  tech: string,
  order: number,
};

export type Experience = {
  __typename: "Experience",
  id: string,
  title: string,
  subtitle: string,
  description: string,
  date: string,
  tech: string,
  order: number,
};

export type UpdateExperienceInput = {
  id: string,
  title?: string | null,
  subtitle?: string | null,
  description?: string | null,
  date?: string | null,
  tech?: string | null,
  order?: number | null,
};

export type DeleteExperienceInput = {
  id: string,
};

export type CreateContactMessageInput = {
  name: string,
  email: string,
  message: string,
};

export type ContactMessage = {
  __typename: "ContactMessage",
  id: string,
  name: string,
  email: string,
  message: string,
};

export type UpdateContactMessageInput = {
  id: string,
  name?: string | null,
  email?: string | null,
  message?: string | null,
};

export type DeleteContactMessageInput = {
  id: string,
};

export type TableProjectFilterInput = {
  id?: TableIDFilterInput | null,
  title?: TableStringFilterInput | null,
  tech?: TableStringFilterInput | null,
  image?: TableStringFilterInput | null,
  github?: TableStringFilterInput | null,
  url?: TableStringFilterInput | null,
};

export type TableIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type TableStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ProjectConnection = {
  __typename: "ProjectConnection",
  items?:  Array<Project | null > | null,
  nextToken?: string | null,
};

export type TableExperienceFilterInput = {
  id?: TableIDFilterInput | null,
  title?: TableStringFilterInput | null,
  subtitle?: TableStringFilterInput | null,
  description?: TableStringFilterInput | null,
  date?: TableStringFilterInput | null,
  tech?: TableStringFilterInput | null,
  order?: TableIntFilterInput | null,
};

export type TableIntFilterInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  contains?: number | null,
  notContains?: number | null,
  between?: Array< number | null > | null,
};

export type ExperienceConnection = {
  __typename: "ExperienceConnection",
  items?:  Array<Experience | null > | null,
  nextToken?: string | null,
};

export type TableContactMessageFilterInput = {
  id?: TableIDFilterInput | null,
  name?: TableStringFilterInput | null,
  email?: TableStringFilterInput | null,
  message?: TableStringFilterInput | null,
};

export type ContactMessageConnection = {
  __typename: "ContactMessageConnection",
  items?:  Array<ContactMessage | null > | null,
  nextToken?: string | null,
};

export type CreateProjectMutationVariables = {
  input: CreateProjectInput,
};

export type CreateProjectMutation = {
  createProject?:  {
    __typename: "Project",
    id: string,
    title: string,
    tech: string,
    image?: string | null,
    github?: string | null,
    url?: string | null,
  } | null,
};

export type UpdateProjectMutationVariables = {
  input: UpdateProjectInput,
};

export type UpdateProjectMutation = {
  updateProject?:  {
    __typename: "Project",
    id: string,
    title: string,
    tech: string,
    image?: string | null,
    github?: string | null,
    url?: string | null,
  } | null,
};

export type DeleteProjectMutationVariables = {
  input: DeleteProjectInput,
};

export type DeleteProjectMutation = {
  deleteProject?:  {
    __typename: "Project",
    id: string,
    title: string,
    tech: string,
    image?: string | null,
    github?: string | null,
    url?: string | null,
  } | null,
};

export type CreateExperienceMutationVariables = {
  input: CreateExperienceInput,
};

export type CreateExperienceMutation = {
  createExperience?:  {
    __typename: "Experience",
    id: string,
    title: string,
    subtitle: string,
    description: string,
    date: string,
    tech: string,
    order: number,
  } | null,
};

export type UpdateExperienceMutationVariables = {
  input: UpdateExperienceInput,
};

export type UpdateExperienceMutation = {
  updateExperience?:  {
    __typename: "Experience",
    id: string,
    title: string,
    subtitle: string,
    description: string,
    date: string,
    tech: string,
    order: number,
  } | null,
};

export type DeleteExperienceMutationVariables = {
  input: DeleteExperienceInput,
};

export type DeleteExperienceMutation = {
  deleteExperience?:  {
    __typename: "Experience",
    id: string,
    title: string,
    subtitle: string,
    description: string,
    date: string,
    tech: string,
    order: number,
  } | null,
};

export type CreateContactMessageMutationVariables = {
  input: CreateContactMessageInput,
};

export type CreateContactMessageMutation = {
  createContactMessage?:  {
    __typename: "ContactMessage",
    id: string,
    name: string,
    email: string,
    message: string,
  } | null,
};

export type UpdateContactMessageMutationVariables = {
  input: UpdateContactMessageInput,
};

export type UpdateContactMessageMutation = {
  updateContactMessage?:  {
    __typename: "ContactMessage",
    id: string,
    name: string,
    email: string,
    message: string,
  } | null,
};

export type DeleteContactMessageMutationVariables = {
  input: DeleteContactMessageInput,
};

export type DeleteContactMessageMutation = {
  deleteContactMessage?:  {
    __typename: "ContactMessage",
    id: string,
    name: string,
    email: string,
    message: string,
  } | null,
};

export type GetProjectQueryVariables = {
  id: string,
};

export type GetProjectQuery = {
  getProject?:  {
    __typename: "Project",
    id: string,
    title: string,
    tech: string,
    image?: string | null,
    github?: string | null,
    url?: string | null,
  } | null,
};

export type ListProjectsQueryVariables = {
  filter?: TableProjectFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProjectsQuery = {
  listProjects?:  {
    __typename: "ProjectConnection",
    items?:  Array< {
      __typename: "Project",
      id: string,
      title: string,
      tech: string,
      image?: string | null,
      github?: string | null,
      url?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetExperienceQueryVariables = {
  id: string,
};

export type GetExperienceQuery = {
  getExperience?:  {
    __typename: "Experience",
    id: string,
    title: string,
    subtitle: string,
    description: string,
    date: string,
    tech: string,
    order: number,
  } | null,
};

export type ListExperiencesQueryVariables = {
  filter?: TableExperienceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListExperiencesQuery = {
  listExperiences?:  {
    __typename: "ExperienceConnection",
    items?:  Array< {
      __typename: "Experience",
      id: string,
      title: string,
      subtitle: string,
      description: string,
      date: string,
      tech: string,
      order: number,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetContactMessageQueryVariables = {
  id: string,
};

export type GetContactMessageQuery = {
  getContactMessage?:  {
    __typename: "ContactMessage",
    id: string,
    name: string,
    email: string,
    message: string,
  } | null,
};

export type ListContactMessagesQueryVariables = {
  filter?: TableContactMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListContactMessagesQuery = {
  listContactMessages?:  {
    __typename: "ContactMessageConnection",
    items?:  Array< {
      __typename: "ContactMessage",
      id: string,
      name: string,
      email: string,
      message: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateProjectSubscriptionVariables = {
  id?: string | null,
  title?: string | null,
  tech?: string | null,
  image?: string | null,
  github?: string | null,
};

export type OnCreateProjectSubscription = {
  onCreateProject?:  {
    __typename: "Project",
    id: string,
    title: string,
    tech: string,
    image?: string | null,
    github?: string | null,
    url?: string | null,
  } | null,
};

export type OnUpdateProjectSubscriptionVariables = {
  id?: string | null,
  title?: string | null,
  tech?: string | null,
  image?: string | null,
  github?: string | null,
};

export type OnUpdateProjectSubscription = {
  onUpdateProject?:  {
    __typename: "Project",
    id: string,
    title: string,
    tech: string,
    image?: string | null,
    github?: string | null,
    url?: string | null,
  } | null,
};

export type OnDeleteProjectSubscriptionVariables = {
  id?: string | null,
  title?: string | null,
  tech?: string | null,
  image?: string | null,
  github?: string | null,
};

export type OnDeleteProjectSubscription = {
  onDeleteProject?:  {
    __typename: "Project",
    id: string,
    title: string,
    tech: string,
    image?: string | null,
    github?: string | null,
    url?: string | null,
  } | null,
};

export type OnCreateExperienceSubscriptionVariables = {
  id?: string | null,
  title?: string | null,
  subtitle?: string | null,
  description?: string | null,
  date?: string | null,
};

export type OnCreateExperienceSubscription = {
  onCreateExperience?:  {
    __typename: "Experience",
    id: string,
    title: string,
    subtitle: string,
    description: string,
    date: string,
    tech: string,
    order: number,
  } | null,
};

export type OnUpdateExperienceSubscriptionVariables = {
  id?: string | null,
  title?: string | null,
  subtitle?: string | null,
  description?: string | null,
  date?: string | null,
};

export type OnUpdateExperienceSubscription = {
  onUpdateExperience?:  {
    __typename: "Experience",
    id: string,
    title: string,
    subtitle: string,
    description: string,
    date: string,
    tech: string,
    order: number,
  } | null,
};

export type OnDeleteExperienceSubscriptionVariables = {
  id?: string | null,
  title?: string | null,
  subtitle?: string | null,
  description?: string | null,
  date?: string | null,
};

export type OnDeleteExperienceSubscription = {
  onDeleteExperience?:  {
    __typename: "Experience",
    id: string,
    title: string,
    subtitle: string,
    description: string,
    date: string,
    tech: string,
    order: number,
  } | null,
};

export type OnCreateContactMessageSubscriptionVariables = {
  id?: string | null,
  name?: string | null,
  email?: string | null,
  message?: string | null,
};

export type OnCreateContactMessageSubscription = {
  onCreateContactMessage?:  {
    __typename: "ContactMessage",
    id: string,
    name: string,
    email: string,
    message: string,
  } | null,
};

export type OnUpdateContactMessageSubscriptionVariables = {
  id?: string | null,
  name?: string | null,
  email?: string | null,
  message?: string | null,
};

export type OnUpdateContactMessageSubscription = {
  onUpdateContactMessage?:  {
    __typename: "ContactMessage",
    id: string,
    name: string,
    email: string,
    message: string,
  } | null,
};

export type OnDeleteContactMessageSubscriptionVariables = {
  id?: string | null,
  name?: string | null,
  email?: string | null,
  message?: string | null,
};

export type OnDeleteContactMessageSubscription = {
  onDeleteContactMessage?:  {
    __typename: "ContactMessage",
    id: string,
    name: string,
    email: string,
    message: string,
  } | null,
};
