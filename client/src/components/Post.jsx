import React, { useState } from "react";
import Gradient from "../components/Gradient";
import Comment from "../components/Comment";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { Link } from "react-router-dom";
import profileImg from "../assets/IMG_5570.jpg";
import Auth from "../utils/auth";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_POSTS, QUERY_ME } from "../utils/queries";

function Post() {
  const { loading, error, data } = useQuery(QUERY_POSTS);
  if (loading) {
    // Handle loading state, e.g., display a loading spinner
    return <Loading />;
  }
  if (error) {
    // Handle error state
    return <Error message={error} />;
  }

  // Extract data from the queries
  const posts = data?.posts;

  return (
    <div className="relative isolate bg-white min-h-screen pt-24 sm:pt-24 flex flex-col">
      <Gradient />
      <div className="mx-auto  px-0 ">
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
        <div className="mx-auto mt-10 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16"></div>
      </div>

      <div className="flex flex-col">
        {posts.map((post) => (
          <React.Fragment key={post._id}>
            <div className="basis-1/4 flex items-center justify-center m-8">
              <div className="bg-white lg:w-1/2 md:w-1/2 sm:w-1/2 border border-gray-100 rounded-lg text-center hover:shadow-lg align-center p-6 ">
                <article className="flex-col">
                  <div className=" gap-x-4 text-xs ">
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
                        <span className="absolute inset-0 " />
                        {post.title}
                      </p>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                      {post.description}
                    </p>
                    <>
                      
                    </>
                  </div>
                  <div className="relative mt-8 flex flex items-center justify-center gap-x-4">
                    <div className="text-sm leading-6">
                    <Link
                        to={`/posts/${post._id}`}
                        className="relative text-center z-10 rounded-full bg-purple-50 m-3 px-3 py-1.5 font-medium flex max-w-xl flex-row items-start mx-10 text-gray-600 hover:bg-gray-100"
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
              </div>
            </div>
            <div className="mx-16 m-4  border-t border-gray-200 "></div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Post;
