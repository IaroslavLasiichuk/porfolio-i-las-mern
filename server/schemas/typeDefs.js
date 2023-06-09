const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    thoughts: [Thought]!
  }

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
    role: String
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
    user(username: String!): User
    thoughts: [Thought]!
    posts: [Post]!
    thought(thoughtId: ID!): Thought
    post(postId: ID!): Post
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addThought(thoughtText: String!): Thought
    addPost(title: String!, description: String!, content: String!): Post
    addComment(
      postId: ID!
      commentText: String!
      commentAuthor: String!
    ): Post
    updateThought(thoughtId: ID!, thoughtText: String!): Thought!
    removeThought(thoughtId: ID!): Thought
    removeComment(thoughtId: ID!, commentId: ID!): Thought
  }
`;

module.exports = typeDefs;