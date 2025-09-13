import { useAddPost } from "../hooks/useAddPost";
import ReactQuill from "react-quill";
import { useState } from "react";
import "react-quill/dist/quill.snow.css";

const AddPost = () => {
  const { formState, setFormState, handleFormSubmit, handleChange } = useAddPost();

  // Handle ReactQuill changes separately
  const handleContentChange = (value) => {
    setFormState((prev) => ({
      ...prev,
      content: value, // store HTML string from Quill
    }));
  };

  return (
    <div className="max-w-2xl mx-auto m-5 font-custom">
      <form onSubmit={handleFormSubmit}>
        <div className="rounded-b-lg">
          {/* Title */}
          <input
            required
            name="title"
            value={formState.title}
            id="title"
            onChange={handleChange}
            className="block mb-3 px-3 w-full p-3 text-sm text-black-800 bg-white rounded-lg border focus:ring-0 dark:text-black dark:placeholder-gray-400"
            placeholder="Title"
            type="text"
          />

          {/* Description */}
          <input
            required
            name="description"
            type="text"
            value={formState.description}
            id="description"
            onChange={handleChange}
            className="block mb-3 px-3 w-full p-3 text-sm text-black-800 bg-white rounded-lg border focus:ring-0 dark:text-black dark:placeholder-gray-400"
            placeholder="Description"
          />

          {/* Content (ReactQuill instead of textarea) */}
          <ReactQuill
            theme="snow"
            value={formState.content}
            onChange={handleContentChange}
            modules={{
              toolbar: [
                ["bold", "italic", "underline"],
                ["link"], // enables inserting links
              ],
            }}
            className="mb-3 bg-white rounded-lg border"
          />

          {/* Submit */}
          <button
            type="submit"
            className="inline-flex mt-2 items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
          >
            Publish post
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPost;
