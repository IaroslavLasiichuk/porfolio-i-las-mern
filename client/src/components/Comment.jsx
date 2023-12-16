import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { ADD_COMMENT } from "../utils/mutations";
import Auth from "../utils/auth";
import { QUERY_ME } from "../utils/queries";

const Comment = ({ postId }) => {
  const { loading, error, data } = useQuery(QUERY_ME);
  const [commentText, setCommentText] = useState("");
  const [addComment, { err }] = useMutation(ADD_COMMENT);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await addComment({
        variables: {
          postId,
          commentText,
          commentAuthor: Auth.getProfile().data.username,
        },
      });
      setCommentText("");
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "commentText") {
      setCommentText(value);
    }
  };

  if (loading) {
    // Handle loading state, e.g., display a loading spinner
    return (
      <div
        className="h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
    );
  }

  if (error) {
    // Handle error state, e.g., display an error message
    return (
      <div>
        <div
          className="flex bg-blue-100 rounded-lg p-4 mb-4 text-sm text-blue-700"
          role="alert"
        >
          <svg
            className="w-5 h-5 inline mr-3"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"
            ></path>
          </svg>
          <div>
            <span className="font-medium">Please Login!</span> You need to be
            logged in to comment a post{' '}
          </div>
          
        </div>
      </div>
    );
  }
  const { me } = data;

  return (
    <section className="bg-white">
      <div className="max-w-2xl mx-auto px-4">
        <form onSubmit={handleFormSubmit} className="mb-6">
          <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border ">
            <label className="sr-only">Your comment</label>
            <textarea
              id="comment"
              rows="6"
              className="px-0 w-full text-sm border-0 focus:ring-0 focus:outline-none"
              placeholder="Write a comment..."
              required
              name="commentText"
              type="text"
              value={commentText}
              onChange={handleChange}
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-indigo-600 text-white inline-flex items-center py-2.5 px-4 text-xs font-medium text-center  bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
          >
            Post comment
          </button>
        </form>
      </div>
    </section>
  );
};

export default Comment;
