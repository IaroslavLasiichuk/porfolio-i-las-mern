import React from "react";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { useDeletePost } from "../hooks/useDeletePost";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";

const PostsList = ({ postId }) => {
  const { loading, error, data } = useQuery(QUERY_ME);
  const { removePost, handleDeletePost } = useDeletePost();

  if (loading) {
    // Handle loading state, e.g., display a loading spinner
    return <Loading />;
  }

  if (error) {
    // Handle error state, e.g., display an error message
    return <Error message={error} />;
  }

  // Destructure the user data from the response
  const { me } = data;
  if (!me || !me.posts || me.posts.length === 0) {
    return (
      <h2 className="text-3xl text-center py-3 tracking-tight text-grey-900 sm:text-3xl">
        No posts yet
      </h2>
    );
  }
  return (
    <div>
      <div className="max-w-2xl mx-auto m-5">
        <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
          <div className="py-2 inline-block min-w-full">
            <div className="overflow-hidden">
              <h2 className="text-3xl text-center tracking-tight text-grey-900 sm:text-3xl">
                List of Posts
              </h2>
              <p className="m-2 text-center text-lg leading-8 text-gray-600">
                <br />
                Delete post
              </p>
              <table className="min-w-full">
                <thead className="bg-gray-200 border-b">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Post
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Created at
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Edit
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {me.posts.map((post) => (
                    <tr
                      key={post._id}
                      className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                    >
                      <td className="px-6 py-4  text-sm font-medium text-gray-900">
                        {post.title}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 ">
                        {post.createdAt}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 ">
                        <button
                          onClick={() => handleDeletePost(post._id)}
                          className="text-red-600 dark:text-red-500 hover:underline"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostsList;
