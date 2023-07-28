import React from "react";
import AddPost from "../components/AddPost";
import CommentsList from "../components/CommentsList";
import Gradient from "../components/Gradient";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";

const Dash = () => {
  const { loading, error, data } = useQuery(QUERY_ME);

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
    return <div>Error: {error.message}</div>;
  }
  const { me } = data;

  return (
    <div
      id="blog"
      className="relative isolate bg-white min-h-screen pt-24 sm:pt-24 flex "
    >
      <Gradient />
      <div className="mx-auto max-w-7xl px-0 lg:px- flex-1">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Hi, {me.username}
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            <br />
            Create a new post
          </p>
        </div>
        <div className="m-4">
          <AddPost />
          <CommentsList />
        </div>
      </div>
    </div>
  );
};

export default Dash;
