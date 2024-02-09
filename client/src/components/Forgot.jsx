import Gradient from "../components/Gradient";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/favicon.ico";
import { useForgotPassword } from '../hooks/useForgotPassword';

const Forgot = () => {
  const { formState, successMessage, setFormState, handleFormSubmit, handleChange, error } = useForgotPassword();

    return (
        <>
             <div className="relative isolate bg-white min-h-screen pt-24 sm:pt-24 flex flex-col font-custom">
        {" "}
        <Gradient />
        <div className="mx-auto max-w-7xl px-0 lg:px- flex-1">
          <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Forgot Password
              </h2>
            </div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form
               onSubmit={handleFormSubmit}
                className="space-y-6"
                action="#"
                method="POST"
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      value={formState.email}
                      onChange={handleChange}
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="block w-full p-3 border-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1  ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    />
                  </div>
                  {successMessage && <p className="text-sm mt-2 text-center font-medium text-purple-500">
                 {successMessage}
                 </p>}
                </div>

                
                <div>
                  {error ? (
                    <p className="text-sm mb-2 text-center font-medium text-red-500">
                     {error.message}
                    </p>
                  ) : null}
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                  Reset
                  </button>
                </div>
              </form>
              <p className="mt-10 text-center text-sm text-gray-500">
               If you don't have an account please sign up to create new one{" "}
                <Link
                  to="/registration"
                  className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                >
                  Sign Up
                </Link>
               {" "} or{" "}
                <Link
                to="/login"
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Return to Login</Link>
              </p>
            </div>
          </div>
        </div>
       
      </div> 
        </>
    )
}

export default Forgot;