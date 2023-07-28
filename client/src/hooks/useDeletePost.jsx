import { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { QUERY_POSTS } from "../utils/queries";
import { QUERY_ME } from "../utils/queries";
import { REMOVE_POST } from "../utils/mutations";
import Auth from '../utils/auth';

export const useDeletePost = () => {
  const { loading, error, data, refetch } = useQuery(QUERY_ME);
  const [removePost, { error: deleteError }] = useMutation(REMOVE_POST, {
    onCompleted: (postId) => {
      refetch();
    },
    onError: error => {
      console.error(error);
    },
     refetchQueries: [{ query: QUERY_ME }, { query: QUERY_POSTS }],
  });

  const handleDeletePost = async postId => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const { data } = await removePost({
        variables: { postId },
      });
    } catch (err) {
      console.error(err);
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
    return <div>Error: {error.message}</div>;
  }
  return { removePost, handleDeletePost };
};
