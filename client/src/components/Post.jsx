import React, { useState } from 'react';
import Gradient from "../components/Gradient";
import Comment from "../components/Comment";
import AddPost from "../components/AddPost";
import { Link } from "react-router-dom";
import profileImg from "../assets/IMG_5570.jpg";
import Auth from "../utils/auth";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_POSTS } from "../utils/queries";
import { QUERY_THOUGHTS } from '../utils/queries';

function Post() {
  const { loading, error, data } = useQuery(QUERY_POSTS);
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
  const { posts } = data;

  return (
    <div
      id="blog"
      className="relative isolate bg-white min-h-screen pt-24 sm:pt-24 flex flex-col"
    >
      <Gradient />
      <div className="mx-auto max-w-7xl px-0 lg:px- flex-1">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Welcome to the blog
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            <br />
            Learning programming can open up a world of opportunities. Here are
            some excellent resources to help you get started
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-1">
          {posts.map((post) => (
            <article
              key={post._id}
              className="flex max-w-xl flex-col items-start justify-between mx-10"
            >
              <div className="flex items-center gap-x-4 text-xs ">
                <time className="text-gray-500">{post.createdAt}</time>
                <Link
                  href={post.category}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {post.category}
                </Link>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <p>
                    <span className="absolute inset-0" />
                    {post.title}
                  </p>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  {post.description}
                </p>
                {!Auth.loggedIn() ? (
                  <div
                    className="flex bg-blue-100 rounded-lg p-4 mb-4 text-sm text-blue-700"
                    role="alert"
                  >
                    <svg
                      className="w-5 h-5 inline mr-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <div>
                      <span className="font-medium">Please Login!</span> You need to
                      be logged in to read post
                    </div>
                  </div>
                ) : (
                  <>
                    <Link
                      to={`/posts/${post._id}`}
                      className="relative z-10 rounded-full bg-gray-50 m-3 px-3 py-1.5 font-medium flex max-w-xl flex-row items-start mx-10 text-gray-600 hover:bg-gray-100"
                    >
                      Read more and comment
                      <svg
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                        />
                      </svg>
                    </Link>
                  </>
                )}
              </div>
             
              <div className="relative mt-8 flex items-center gap-x-4">
                <img
                  src={profileImg}
                  alt=""
                  className="h-10 w-9 rounded-full bg-gray-50"
                />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <a>
                      <span className="absolute inset-0" />
                      {post.author}
                    </a>
                  </p>
                  <p className="text-gray-600">{post.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
        {Auth.loggedIn() && Auth.isAdmin() === true ? (<AddPost/>) :( null)}
      </div>
      <div className="bg-white shadow-sm py-0"></div>
    </div>
  );
}

export default Post;
