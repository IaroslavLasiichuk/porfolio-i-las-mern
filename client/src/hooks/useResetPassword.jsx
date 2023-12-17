import { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { RESET_PASSWORD } from "../utils/mutations";

export const useResetPassword = () => {
  const navigate = useNavigate();
  const { passwordResetToken } = useParams();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [resetPassword, { loading, error, data }] = useMutation(RESET_PASSWORD);
  const handleResetPassword = async (event) => {
    event.preventDefault();
    // Check if passwords match
    if (password !== confirmPassword) {
      console.error("Passwords do not match");
      return "Passwords do not match";
    }

    try {
      console.log("Resetting password with variables:", {
        password,
        passwordResetToken,
      });

      const response = await resetPassword({
        variables: {
          passwordResetToken: passwordResetToken,
          password: password,
        },
      });
      navigate("/");
      // Handle the response as needed (e.g., show a success message, redirect, etc.)
      console.log(response);
    } catch (error) {
      // Handle the error (e.g., show an error message)
      console.error(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    // Update state based on the input name
    if (name === "password") {
      setPassword(password);
    } else if (name === "confirm-password") {
      setConfirmPassword(password);
    }
  };

  return {
    password,
    setPassword,
    handleResetPassword,
    handleChange,
    passwordResetToken,
    error,
  };
};
