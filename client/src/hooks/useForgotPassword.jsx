import { useState } from "react";
import { useMutation } from "@apollo/client";
import { FORGOT_PASSWORD } from "../utils/mutations";
import { useNavigate } from "react-router-dom";

export const useForgotPassword = () => {
  const [successMessage, setSuccessMessage] = useState(null);
  const [formState, setFormState] = useState({
    email: ""
  });

  const [forgotPassword, { error }] = useMutation(FORGOT_PASSWORD);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await forgotPassword({
        variables: {
          email: formState.email,
        },
      });

      // Reset the email field after a successful submission
     setSuccessMessage("Email successfully sent!");

     setFormState({
      email: "",
    });
    
    } catch (error) {
      if (error.message.includes("User not found")) {
        setSuccessMessage("User not found");
      }
      console.log(error);
    }
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      email: value
    }));
  };

  return { formState, setFormState, successMessage, handleFormSubmit, handleChange, error };
};
