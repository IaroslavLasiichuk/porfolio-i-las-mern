import { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { QUERY_POSTS } from "../utils/queries";
import { QUERY_ME } from "../utils/queries";
import { QUERY_GET_ALL_USERS } from "../utils/queries";
import { REMOVE_USER } from "../utils/mutations";
import Auth from '../utils/auth';

export const useRemoveUser = () => {
  const { loading: postsLoading, error: postsError, data: postsData } = useQuery(QUERY_POSTS);
  const { loading: meLoading, error: meError, data: meData } = useQuery(QUERY_ME);
  const { loading: getAllUsersLoading, error: getAllUsersError, data: getAllUsersData, refetch } = useQuery(QUERY_GET_ALL_USERS);
  const [removeUser, { error: deleteError }] = useMutation(REMOVE_USER, {
    onCompleted: (userId) => {
      refetch();
    },
    onError: deleteError => {
    },
    refetchQueries: [{ query: QUERY_ME }, { query: QUERY_GET_ALL_USERS }, { query: QUERY_POSTS }],
  });

  const handleRemoveUser = async userId => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;
    if (!token) {
      return false;
    }

    try {
      const { data } = await removeUser({
        variables: { userId },
      });
    } catch (getAllUsersError) {
      console.log(err);
    }
  };

  if (postsLoading || meLoading || getAllUsersLoading ) {
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
  if (postsError || meError || getAllUsersError ) {
    return <div>Error: {getAllUsersError}</div>;
  }
  return { removeUser, handleRemoveUser };
};
