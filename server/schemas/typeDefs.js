const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    isAdmin: Boolean
    thoughts: [Thought]!
    posts: [Post]!
  }

  # type PasswordResetRequest {
  #   email: String!
  # }

  # type PasswordReset {
  #   token: String!
  #   newPassword: String!
  # }

  type Thought {
    _id: ID
    thoughtText: String
    thoughtAuthor: String
    createdAt: String
    updatedAt: String
    comments: [Comment]!
  }

  type Post {
    _id: ID
    title: String
    description: String
    content: String
    category: String
    author: String
    authorId: String
    role: String
    img: String
    createdAt: String
    updatedAt: String
    comments: [Comment]!
  }

  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    getUsers: [User]
    user(username: String!): User
    thoughts: [Thought]!
    posts: [Post]!
    thought(thoughtId: ID!): Thought
    post(postId: ID!): Post
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    removeUser(userId: ID!): User
    login(email: String!, password: String!): Auth
    addThought(thoughtText: String!): Thought
    addPost(title: String!, description: String!, content: String!): Post
    addComment(postId: ID!, commentText: String!, commentAuthor: String!): Post
    updateThought(thoughtId: ID!, thoughtText: String!): Thought!
    removeThought(thoughtId: ID!): Thought
    removePost(postId: ID!): Post
    removeComment(thoughtId: ID!, commentId: ID!): Thought
    # requestPasswordReset(input: PasswordResetRequest!): Boolean
    # resetPassword(input: PasswordReset!): Boolean
  }
`;

module.exports = typeDefs;
