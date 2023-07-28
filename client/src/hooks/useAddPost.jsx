import { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { QUERY_POSTS } from "../utils/queries";
import { QUERY_ME } from "../utils/queries";
import { ADD_POST } from "../utils/mutations";

export const useAddPost = () => {
  const [formState, setFormState] = useState({
    title: "",
    description: "",
    content: "",
  });

  const [addPost] = useMutation(ADD_POST, {
    onCompleted: ({ addPost }) => {
      setFormState({ title: "", description: "", content: "" });
    },
    refetchQueries: [{ query: QUERY_ME }, { query: QUERY_POSTS }],
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!formState.title || !formState.description || !formState.content) {
      alert("Please enter text!!!");
      return;
    }
    try {
      addPost({
        variables: {
          title: formState.title,
          description: formState.description,
          content: formState.content,
        },
      });
      setFormState({ title: "", description: "", content: "" });
    } catch (err) {}
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return { formState, setFormState, addPost, handleFormSubmit, handleChange };
};
