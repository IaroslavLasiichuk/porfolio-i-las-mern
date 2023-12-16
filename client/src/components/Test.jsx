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
            <div class="flex items-center justify-center m-8">
              <card class="w-1/1 bg-white border border-gray-100 rounded-lg text-center hover:shadow-lg align-center p-6">
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
                    <>
                      <Link
                        to={`/posts/${post._id}`}
                        className="relative z-10 rounded-full bg-purple-50 m-3 px-3 py-1.5 font-medium flex max-w-xl flex-row items-start mx-10 text-gray-600 hover:bg-gray-100"
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
                  </div>
                  <div className="relative mt-8 flex items-center gap-x-4">
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
              </card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Post;

import Gradient from "../components/Gradient";
import Comment from "../components/Comment";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { QUERY_ME } from "../utils/queries";
import { QUERY_SINGLE_POST } from "../utils/queries";
import ImgWpError from "../assets/world_press_error.png";

const SinglePost = () => {
  const { postId } = useParams();
  const { loading, data, error } = useQuery(QUERY_SINGLE_POST, {
    variables: { postId: postId },
  });
  if (loading) {
    // Handle loading state, e.g., display a loading spinner
    return <Loading />;
  }

  if (error) {
    // Handle error state, e.g., display an error message
    return <Error message={error} />;
  }

  const post = data?.post || {};

  return (
    <>
      <div className="relative isolate bg-white min-h-screen pt-24 sm:pt-24 flex flex-col">
        <Gradient />
        <div className="mx-auto max-w-7xl px-0 lg:px- flex-1">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {post.title}
            </h2>
          </div>
          <div class="flex items-center justify-center m-8">
          <card class="w-1/1 bg-white border border-gray-100 rounded-lg text-center hover:shadow-lg align-center p-6">
        
              <article className="flex max-w-xl flex-col items-start justify-between mx-10">
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                      <br />
                      {post.description}
                    </p>
                  </h3>
                  <img
                    src={ImgWpError}
                    className="h-32 "
                    alt="WorldPress Error"
                  />
                  <>
                    <p className="mt-5 text-lg leading-8 text-gray-600">
                      {post.content}
                    </p>

                    {!post.comments.length ? (
                      <div className="flex justify-center items-center m-1 font-medium py-1 px-2 bg-white rounded-md text-yellow-700 bg-yellow-100 border border-yellow-300 ">
                        <div slot="avatar">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="100%"
                            height="100%"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-info w-5 h-5 mx-2"
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="12" y1="16" x2="12" y2="12"></line>
                            <line x1="12" y1="8" x2="12.01" y2="8"></line>
                          </svg>
                        </div>
                        <div className="text-xl font-normal  max-w-full flex-initial">
                          <div className="py-2">
                            No comments yet
                            <div className="text-sm font-base">
                              Leave a comment here
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div>
                        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                          <p className="mt-2 text-lg leading-8 text-gray-600">
                            <br />
                            Comments...
                          </p>
                        </h3>
                        {post.comments.map((comment) => (
                          <div key={comment._id}>
                            <div>
                              <div className="bg-violet-100 mt-5 rounded-3xl px-4 pt-2 pb-2.5">
                                <div className="text-normal leading-snug md:leading-normal">
                                  {comment.commentText}
                                </div>
                              </div>
                            </div>
                            <div className="font-semibold text-xs leading-relaxed">
                              <p className="font-semibold text-gray-500">
                                <a>Author: {comment.commentAuthor}</a>
                              </p>

                              <time className="text-gray-500">
                                Created at: {comment.createdAt}
                              </time>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                    <Comment postId={post._id} />
                  </>
                </div>
              </article>
            
          </card>
          </div>
        </div>
        <div className="bg-white shadow-sm py-0"></div>
      </div>
      
    </>
  );
};

export default SinglePost;
