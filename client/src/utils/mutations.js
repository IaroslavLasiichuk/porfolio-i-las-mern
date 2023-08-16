import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
         username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $username: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      username: $username
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
  `;
  
  export const ADD_THOUGHT = gql`
  mutation addThought($thoughtText: String!) {
    addThought(thoughtText: $thoughtText ) {
      _id
      thoughtText
      thoughtAuthor
      createdAt
      comments {
        _id
        commentText
      }
    }
  }
`;
  export const ADD_POST = gql`
  mutation addPost($title: String!, $description: String!, $content: String!) {
    addPost(title: $title, description: $description, content: $content) {
      _id
      title
      description
      content
      author
      authorId
      createdAt
      comments {
        _id
        commentText
      }
    }
  }
`;

export const REMOVE_THOUGTH = gql`
 mutation removeThought($thoughtId: ID!) {
  removeThought(thoughtId: $thoughtId) {
    _id
    thoughtText
    thoughtAuthor
    createdAt
    comments {
      _id
      commentText
    }
  }
}
`;
export const REMOVE_POST = gql`
 mutation removePost($postId: ID!) {
  removePost(postId: $postId) {
    _id
    title
    content
    category
    author
    role
    createdAt
    updatedAt
    comments {
      _id
      commentText
      commentAuthor
      createdAt
    }
  }
}
`;
export const REMOVE_USER = gql`
 mutation removeUser($userId: ID!) {
    removeUser(userId: $userId) {
      _id
      username
      email
      password
    }
}
`;
export const UPDATE_THOUGHT = gql`
mutation updateThought($thoughtId: ID!, $thoughtText: String!) {
  updateThought(thoughtId: $thoughtId, thoughtText: $thoughtText) {
    _id
    thoughtText
    thoughtAuthor
    createdAt
    comments {
      _id
      commentText
    }
  }
}
`;

export const ADD_COMMENT = gql`
  mutation addComment(
    $postId: ID!
    $commentText: String!
    $commentAuthor: String!
  ) {
    addComment(
      postId: $postId
      commentText: $commentText
      commentAuthor: $commentAuthor
    ) {
      _id
     title
     description
     content
     category
     author
     role
      createdAt
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;