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
        <div className="mx-auto  px-0">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {post.title}
            </h2>
            <div className="mx-auto border-t border-gray-200 pt-10 sm:mt-8 sm:pt-8"></div>
          </div>
        </div>
        <div className="flex items-center justify-center m-8">
          <div className="bg-white border border-gray-100 rounded-lg text-center hover:shadow-lg align-center p-6">
          <article className="flex  flex-col items-start justify-between ">
                <div className="group relative">
                  <h3 className="m-3 text-3xl font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                   
                      <br />
                      {post.description}
                  
                  </h3>
                 
                  {/* <img
                    src="https://drive.google.com/file/d/1Ksoc6F4_O6FzVHVBKkoZsSK-BjDUs_wO/view?usp=drive_link"
                    className="h-13 "
                    alt="WorldPress Error"
                  /> */}
                  <>
                    <p className="mt-5 text-lg indent-8 leading-8 text-gray-600">
                      {post.content}
                    </p>

                    {!post.comments.length ? (
                      <div className="flex justify-center items-center m-1 font-medium py-1 px-2 bg-white rounded-md text-yellow-700">
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
        </div>
        </div>
      </div>
    </>
  );
};

export default SinglePost;
