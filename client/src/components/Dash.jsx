import React from "react";
import AddPost from "../components/AddPost";
import PostsList from "../components/PostsList";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Gradient from "../components/Gradient";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";

const Dash = () => {
  const { loading, error, data } = useQuery(QUERY_ME);

  if (loading) {
    // Handle loading state, e.g., display a loading spinner
    return <Loading />;
  }

  if (error) {
    // Handle error state, e.g., display an error message
    return <Error message={error} />;
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
            Hi,
             {me.username}
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            <br />
            Create a new post
          </p>
        </div>
        <div className="m-4">
          <AddPost />
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-1">
            </div>
          <PostsList />
        </div>
      </div>
    </div>
  );
};

export default Dash;
