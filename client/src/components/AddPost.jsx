import { useAddPost } from "../hooks/useAddPost";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_ME} from "../utils/queries";

const AddPost = () => {
  const { loading, error, data } = useQuery(QUERY_ME);
  const { formState, setFormState, addPost, handleFormSubmit, handleChange } =
    useAddPost();
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
    const { me } = data;
  return (
    <>
      <div className="max-w-2xl mx-auto m-5">
        <form onSubmit={handleFormSubmit}>
          <div className="rounded-b-lg ">
            <input
              required
              name="title"
              value={formState.title}
              id="title"
              onChange={handleChange}
              className="block mb-3 px-3 w-full p-3 text-sm text-black-800 bg-white rounded-lg border focus:ring-0 dark:text-black dark:placeholder-gray-400"
              placeholder="Title"
              type="text"
            ></input>
            <input
              required
              name="description"
              type="text"
              value={formState.description}
              id="description"
              onChange={handleChange}
              className="block mb-3 px-3 w-full p-3 text-sm text-black-800 bg-white rounded-lg border focus:ring-0 dark:text-black dark:placeholder-gray-400"
              placeholder="Description"
            ></input>
            <label htmlFor="editor" className="sr-only">
              Publish post
            </label>
            <textarea
              required
              name="content"
              type="text"
              value={formState.content}
              id="content"
              onChange={handleChange}
              rows="8"
              className="block px-3 w-full  text-sm text-black-800 bg-white rounded-lg border focus:ring-0 dark:text-black dark:placeholder-gray-400"
              placeholder="Write an article..."
            ></textarea>

            <button
              type="submit"
              className="inline-flex mt-2 items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
            >
              Publish post
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddPost;
