import { useState } from "react";

export const useFormState = () => {
    
  const [mailerState, setMailerState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    message: "",
  });

  function handleStateChange(e) {
    setMailerState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  const submitEmail = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3000/send", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ mailerState }),
    })
      .then((res) => res.json())
      .then(async (res) => {
        const resData = await res;
        if (resData.status === "success") {
          alert("Message Sent");
        } else if (resData.status === "fail") {
          alert("Message failed to send");
        }
      })
      .then(() => {
        setMailerState({
          firstName: "",
          lastName: "",
          email: "",
          company: "",
          message: "",
        });
      });
  };

  return { mailerState, handleStateChange, submitEmail };
};
