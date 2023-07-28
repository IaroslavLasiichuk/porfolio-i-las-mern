import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
    }
  }
`;

export const QUERY_GET_ALL_USERS = gql`
  query getUsers {
    getUsers {
      _id
      username
      email
      posts{
        title
        description
        content
        category
        author
        role
        createdAt
        updatedAt
      
      }
      thoughts {
      _id
      thoughtText
      thoughtAuthor
      createdAt
      comments {
        _id
        commentText
        commentAuthor
        createdAt
      }
    }
    }
  }
`;

export const QUERY_THOUGHTS = gql`
  query getThoughts {
    thoughts {
      _id
      thoughtText
      thoughtAuthor
      createdAt
      comments {
        _id
        commentText
        commentAuthor
        createdAt
      }
    }
  }
`;

export const QUERY_POSTS = gql`
  query posts {
    posts {
      _id
      title
      description
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

export const QUERY_SINGLE_THOUGHT = gql`
  query getSingleThought($thoughtId: ID!) {
    thought(thoughtId: $thoughtId) {
      _id
      thoughtText
      thoughtAuthor
      createdAt
      comments {
        _id
        commentText
        commentAuthor
        createdAt
      }
    }
  }
`;

export const QUERY_SINGLE_POST = gql`
  query getSinglePost($postId: ID!) {
    post(postId: $postId) {
      _id
      title
      description
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

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      posts {
      _id
      title
      description
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
  }
`;
