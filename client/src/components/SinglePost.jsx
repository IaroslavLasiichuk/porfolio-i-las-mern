import Gradient from "../components/Gradient";
import Comment from "../components/Comment";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { useParams } from "react-router-dom";
import { QUERY_ME } from "../utils/queries";
import { QUERY_SINGLE_POST } from "../utils/queries";
// import { UPDATE_POST} from "../utils/mutations";

const SinglePost = () => {
  //   const { loading, error, data } = useQuery(QUERY_ME);
  const { postId } = useParams();
  const { loading, data, error } = useQuery(QUERY_SINGLE_POST, {
    variables: { postId: postId },
  });
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
            Please login <p>to read a post and comment</p>
          </h2>
          <a>GO HOME</a>
        </div>
      </div>
    );
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
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-1">
            <div className="group relative">
              <article className="flex max-w-xl flex-col items-start justify-between mx-10">
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                      <br />
                      Getting Started with Git Hub
                    </p>
                  </h3>
                  {Auth.loggedIn() ? (
                    <>
                      <p className="mt-5 text-sm leading-6 text-gray-600">
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
                  ) : (
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
                        <span className="font-medium">Please Login!</span> You
                        need to be logged in to read post
                      </div>
                    </div>
                  )}
                </div>
              </article>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-sm py-0"></div>
      </div>
    </>
  );
};

export default SinglePost;
