import React from "react";
import Gradient from "../components/Gradient";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { useQuery } from "@apollo/client";
import Auth from "../utils/auth";
import { QUERY_GET_ALL_USERS } from "../utils/queries";
import { useRemoveUser } from "../hooks/useRemoveUser";

const Admin = ({ userId }) => {
  const { removeUser, handleRemoveUser, err } = useRemoveUser();
  const { loading, error, data } = useQuery(QUERY_GET_ALL_USERS);

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <Error message={error} />
  }
  // Destructure the user data from the response
  const { getUsers } = data;

  return (
    <div className="relative isolate bg-white min-h-screen pt-24 sm:pt-24 flex flex-col">
      <Gradient />
      <div className="mx-auto max-w-7xl px-0 lg:px- flex-1">
        {Auth.loggedIn() && Auth.isAdmin() ?  (  <> <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            List of Users
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            A list of all the users in your account including their name and
            email
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-1">
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
              <div className="inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full">
                    <thead className="bg-gray-200 border-b">
                      <tr>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Email
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Posts
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
                      {getUsers.map((user) => (
                        <tr
                          key={user._id}
                          className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                        >
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {user.email}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {user.username}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {user.posts.length}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            <button
                              onClick={() => handleRemoveUser(user._id)}
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
        </div> </>) :  <h2 className="text-3xl font-bold tracking-tight text-gray-600 sm:text-4xl">
            Only Admin has access to this route
          </h2> }
       
      </div>
    </div>
  );
};

export default Admin;
