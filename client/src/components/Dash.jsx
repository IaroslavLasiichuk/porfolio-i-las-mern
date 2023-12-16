import Ask from "../components/Ask";
import Gradient from "../components/Gradient";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";

const Dash = () => {
  return (
    <div
      id="dash"
      className="relative isolate bg-white min-h-screen pt-24 sm:pt-24 flex "
    >
      <Gradient />
      <div className="mx-auto max-w-7xl px-0 lg:px- flex-1">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Troubleshooting Hub
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            <br />
            Welcome to community dedicated to problem-solving and technical
            support! Whether you're facing challenges with HTML, CSS, JavaScript
            or any related issues, this is the place to seek help. I am here to
            assist you in finding solutions and sharing valuable insights. Don't
            hesitate to post your questions here.
          </p>
        </div>
        <div className="m-4">
          {Auth.loggedIn() ? (
            <Ask />
          ) : (
            <div className="mx-auto max-w-2xl text-center">
              <p className="mt-2 text-lg leading-8 text-red-400">
                <br />
                Please login to create new post
              </p>
              <Link
                to="/login"
                className="mx-auto block w-32 mt-3 rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                LOGIN
              </Link>
            </div>
          )}
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-1"></div>
        </div>
      </div>
    </div>
  );
};

export default Dash;
