import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_COMMENT } from "../utils/mutations";
import Auth from "../utils/auth";


const Comment = ({ postId }) => {
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
