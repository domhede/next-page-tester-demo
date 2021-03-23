const { gql } = require('apollo-server');

module.exports = typeDefs = gql`
  type Query {
    user: User!
  }

  directive @length(max: Int!) on FIELD_DEFINITION

  scalar Date

  scalar IPAddress

  type AssignedRole {
    id: ID
    updatedBy: User
    createdAt: Date
    updatedAt: Date
    isDeleted: Boolean!
    version: Int!
    ipAddress: IPAddress!
    user: User
    assignedBy: User
    role: Role
    issue: Issue
  }

  type Attachment {
    id: ID
    updatedBy: User
    createdAt: Date
    updatedAt: Date
    isDeleted: Boolean!
    version: Int!
    ipAddress: IPAddress!
    url: String @length(max: 2083)
    name: String @length(max: 255)
    messages: [Attachment]!
  }

  type ConductType {
    id: ID
    updatedBy: User
    createdAt: Date
    updatedAt: Date
    isDeleted: Boolean!
    version: Int!
    ipAddress: IPAddress!
    name: String @length(max: 255)
    shortDescription: String!
    description: String!
    definition: String!
    level: Int!
    organisation: Organisation
  }

  type Control {
    url: String! @length(max: 2083)
    name: String! @length(max: 255)
    description: String!
    id: ID
    updatedBy: User
    createdAt: Date
    updatedAt: Date
    isDeleted: Boolean!
    version: Int!
    ipAddress: IPAddress!
    issues: [Control]!
  }

  type Department {
    id: ID
    updatedBy: User
    createdAt: Date
    updatedAt: Date
    isDeleted: Boolean!
    version: Int!
    ipAddress: IPAddress!
    name: String @length(max: 255)
    organisation: Organisation
    issues: [Department]!
  }

  type Gender {
    id: ID
    updatedBy: User
    createdAt: Date
    updatedAt: Date
    isDeleted: Boolean!
    version: Int!
    ipAddress: IPAddress!
    name: String @length(max: 255)
  }

  type Group {
    id: ID
    updatedBy: User
    createdAt: Date
    updatedAt: Date
    isDeleted: Boolean!
    version: Int!
    ipAddress: IPAddress!
    name: String @length(max: 255)
    organisation: Organisation
    roles: [Group]!
    users: [Group]!
  }

  type Hris {
    id: ID
    updatedBy: User
    createdAt: Date
    updatedAt: Date
    isDeleted: Boolean!
    version: Int!
    ipAddress: IPAddress!
    name: String! @length(max: 255)
    organisation: Organisation
    provider: String!
    secretArn: String! @length(max: 2083)
    apiUrl: String! @length(max: 2083)
  }

  type Interview {
    id: ID
    updatedBy: User
    createdAt: Date
    updatedAt: Date
    isDeleted: Boolean!
    version: Int!
    ipAddress: IPAddress!
    investigation: Investigation
    subject: String
    dateTime: Date
    location: String! @length(max: 27)
  }

  type InterviewProtocol {
    id: ID
    updatedBy: User
    createdAt: Date
    updatedAt: Date
    isDeleted: Boolean!
    version: Int!
    ipAddress: IPAddress!
    interview: Interview
    interviewProtocolTemplate: InterviewProtocolTemplate
    text: String!
    type: String @length(max: 7)
    order: Int
    completedAt: Date
  }

  type InterviewProtocolTemplate {
    id: ID
    updatedBy: User
    createdAt: Date
    updatedAt: Date
    isDeleted: Boolean!
    version: Int!
    ipAddress: IPAddress!
    interviewTemplate: InterviewTemplate
    type: String @length(max: 7)
    order: Int
  }

  type InterviewQuestion {
    id: ID
    updatedBy: User
    createdAt: Date
    updatedAt: Date
    isDeleted: Boolean!
    version: Int!
    ipAddress: IPAddress!
    topic: Topic
    question: String!
    interviewTemplates: [InterviewQuestion]!
  }

  type InterviewResponse {
    id: ID
    updatedBy: User
    createdAt: Date
    updatedAt: Date
    isDeleted: Boolean!
    version: Int!
    ipAddress: IPAddress!
    investigation: Investigation
    interviewQuestion: InterviewQuestion
    response: String!
  }

  type InterviewTemplate {
    id: ID
    updatedBy: User
    createdAt: Date
    updatedAt: Date
    isDeleted: Boolean!
    version: Int!
    ipAddress: IPAddress!
    name: String @length(max: 255)
    description: String!
    interviewQuestions: [InterviewTemplate]!
  }

  type InterviewTopics {
    id: ID
    updatedBy: User
    createdAt: Date
    updatedAt: Date
    isDeleted: Boolean!
    version: Int!
    ipAddress: IPAddress!
    topic: String @length(max: 27)
    interview: Interview
  }

  type Investigation {
    id: ID
    updatedBy: User
    createdAt: Date
    updatedAt: Date
    isDeleted: Boolean!
    version: Int!
    ipAddress: IPAddress!
    issue: Issue
    isExternal: Boolean!
    assignedInvestigator: User
    interviewDatetime: Date
  }

  type Issue {
    id: ID
    updatedBy: User
    createdAt: Date
    updatedAt: Date
    isDeleted: Boolean!
    version: Int!
    ipAddress: IPAddress!
    organisation: Organisation
    name: String @length(max: 255)
    summary: String!
    keyDetails: String!
    analysis: String!
    primaryConductType: ConductType!
    secondaryConductType: ConductType!
    severity: Severity!
    risk: Risk!
    status: String! @length(max: 27)
    outcomes: String!
    recommendations: String!
    claimant: Person!
    location: Location!
    incidentDatetime: Date
    controls: [Issue]!
    departments: [Issue]!
    relatedIssues: [Issue]!
    people: [Issue]!
    policys: [Issue]!
  }

  type Item {
    id: ID
    updatedBy: User
    createdAt: Date
    updatedAt: Date
    isDeleted: Boolean!
    version: Int!
    ipAddress: IPAddress!
    name: String @length(max: 255)
    description: String!
  }

  type Location {
    id: ID
    updatedBy: User
    createdAt: Date
    updatedAt: Date
    isDeleted: Boolean!
    version: Int!
    ipAddress: IPAddress!
    organisation: Organisation
    name: String @length(max: 255)
    address: String!
  }

  type Message {
    id: ID
    updatedBy: User
    createdAt: Date
    updatedAt: Date
    isDeleted: Boolean!
    version: Int!
    ipAddress: IPAddress!
    issue: Issue!
    messageTemplate: MessageTemplate!
    messageType: String! @length(max: 5)
    sentAt: Date
    receivedAt: Date
    claimant: Person
    subject: String @length(max: 78)
    body: String!
    opened: Int!
    clicked: Int!
    recipients: [Message]!
    attachments: [Message]!
  }

  type MessageTemplate {
    id: ID
    updatedBy: User
    createdAt: Date
    updatedAt: Date
    isDeleted: Boolean!
    version: Int!
    ipAddress: IPAddress!
    name: String @length(max: 255)
    description: String!
    content: String!
    subject: String @length(max: 78)
  }

  type Note {
    id: ID
    updatedBy: User
    createdAt: Date
    updatedAt: Date
    isDeleted: Boolean!
    version: Int!
    ipAddress: IPAddress!
    name: String! @length(max: 255)
    object: String @length(max: 27)
    content: String!
    isPrivate: Boolean!
  }

  type ObjectFk {
    id: ID
    updatedBy: User
    createdAt: Date
    updatedAt: Date
    isDeleted: Boolean!
    version: Int!
    ipAddress: IPAddress!
    fk: String @length(max: 27)
    table: String @length(max: 100)
  }

  type Organisation {
    id: ID
    updatedBy: User
    createdAt: Date
    updatedAt: Date
    isDeleted: Boolean!
    version: Int!
    ipAddress: IPAddress!
    name: String @length(max: 255)
    address: String!
    email: String! @length(max: 320)
    industry: String! @length(max: 255)
    website: String! @length(max: 2083)
    linkedinpage: String! @length(max: 2083)
  }

  type Permission {
    id: ID
    updatedBy: User
    createdAt: Date
    updatedAt: Date
    isDeleted: Boolean!
    version: Int!
    ipAddress: IPAddress!
    name: String @length(max: 255)
    description: String!
    item: Item
    role: Role
    canView: Boolean!
    canEdit: Boolean!
    canDelete: Boolean!
    canRead: Boolean!
    canShare: Boolean!
    canComment: Boolean!
  }

  type Person {
    id: ID
    updatedBy: User
    createdAt: Date
    updatedAt: Date
    isDeleted: Boolean!
    version: Int!
    ipAddress: IPAddress!
    firstName: String @length(max: 255)
    lastName: String! @length(max: 255)
    fullName: String! @length(max: 255)
    prefix: String! @length(max: 32)
    jobTitle: String! @length(max: 255)
    gender: String! @length(max: 27)
    phoneNumber: String! @length(max: 15)
    department: Department
    hris: Hris!
    issues: [Person]!
  }

  type Policy {
    url: String! @length(max: 2083)
    name: String! @length(max: 255)
    description: String!
    id: ID
    updatedBy: User
    createdAt: Date
    updatedAt: Date
    isDeleted: Boolean!
    version: Int!
    ipAddress: IPAddress!
    issues: [Policy]!
  }

  type Risk {
    id: ID
    updatedBy: User
    createdAt: Date
    updatedAt: Date
    isDeleted: Boolean!
    version: Int!
    ipAddress: IPAddress!
    name: String @length(max: 255)
    description: String!
    level: Int
  }

  type Role {
    id: ID
    updatedBy: User
    createdAt: Date
    updatedAt: Date
    isDeleted: Boolean!
    version: Int!
    ipAddress: IPAddress!
    name: String @length(max: 255)
    organisation: Organisation
    groups: [Role]!
  }

  type Severity {
    id: ID
    updatedBy: User
    createdAt: Date
    updatedAt: Date
    isDeleted: Boolean!
    version: Int!
    ipAddress: IPAddress!
    name: String @length(max: 255)
    description: String!
    level: Int
  }

  type Status {
    id: ID
    updatedBy: User
    createdAt: Date
    updatedAt: Date
    isDeleted: Boolean!
    version: Int!
    ipAddress: IPAddress!
    name: String @length(max: 255)
    display: String! @length(max: 255)
  }

  type Tag {
    id: ID
    updatedBy: User
    createdAt: Date
    updatedAt: Date
    isDeleted: Boolean!
    version: Int!
    ipAddress: IPAddress!
    name: String! @length(max: 100)
    objects: [Tag]!
  }

  type Topic {
    id: ID
    updatedBy: User
    createdAt: Date
    updatedAt: Date
    isDeleted: Boolean!
    version: Int!
    ipAddress: IPAddress!
    name: String @length(max: 255)
  }

  type User {
    id: ID
    updatedBy: User
    createdAt: Date
    updatedAt: Date
    isDeleted: Boolean!
    version: Int!
    ipAddress: IPAddress!
    cognitoUuid: String! @length(max: 36)
    email: String @length(max: 320)
    firstName: String! @length(max: 255)
    lastName: String! @length(max: 255)
    fullName: String! @length(max: 255)
    gender: String! @length(max: 27)
    phoneNumber: String! @length(max: 15)
    organisation: Organisation!
    isExternal: Boolean!
    lastLogin: Date
    loginCount: Int!
    supervisor: String! @length(max: 27)
    linkedinUrl: String! @length(max: 2083)
    groups: [User]!
  }

  type UserSetting {
    id: ID
    updatedBy: User
    createdAt: Date
    updatedAt: Date
    isDeleted: Boolean!
    version: Int!
    ipAddress: IPAddress!
    user: User
    key: String @length(max: 32)
    value: String @length(max: 32)
    castTo: String! @length(max: 32)
  }
`;
