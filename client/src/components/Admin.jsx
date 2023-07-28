import React from "react";
import Auth from "../utils/auth";
import AddPost from "../components/AddPost";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_GET_ALL_USERS } from "../utils/queries";
import { QUERY_ME } from "../utils/queries";

const Admin= () => {
  const { loading, error, data } = useQuery(QUERY_GET_ALL_USERS);
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
        Error: {error.message}
        <div>
          <h2>
            Please login <p>to comment a post</p>
          </h2>
          <a>GO HOME</a>
        </div>
      </div>
    );
  }

  // Destructure the user data from the response
  const { getUsers } = data;
  console.log(getUsers);
  return (
    <div id="admin" className="max-w-2xl mx-auto">
      <AddPost/>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          List of users
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          <br />
          Learning programming can open up a world of opportunities. Here are
          some excellent resources to help you get started
        </p>
      </div>

      <div className="flex flex-col">
        <div className="overflow-x-auto shadow-md sm:rounded-lg">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden ">
              <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                <thead className="bg-gray-100 dark:bg-gray-700">
                  <tr>
                    <th scope="col" className="p-4"></th>
                    <th
                      scope="col"
                      className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      Username
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      Thoughts
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      Posts
                    </th>
                    <th scope="col" className="p-4">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                  {getUsers.map((user) => (
                    <tr
                      key={user._id}
                      className="hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <td className="p-4 w-4">
                        <div className="flex items-center">
                          <input
                            id="checkbox-table-1"
                            type="checkbox"
                            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          ></input>
                          <label htmlFor="checkbox-table-1" className="sr-only">
                            checkbox
                          </label>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {user.username}{" "}
                      </td>
                      <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                        {user.email}{" "}
                      </td>
                      <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {user.posts.length}{" "}
                      </td>
                      <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {user.thoughts.length}{" "}
                      </td>
                      <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                        <a
                          href="#"
                          className="text-blue-600 dark:text-blue-500 hover:underline pr-3"
                        >
                          Edit
                        </a>
                        <a
                          href="#"
                          className="text-red-600 dark:text-red-500 hover:underline"
                        >
                          Delete
                        </a>
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

export default Admin;
