import Gradient from "../components/Gradient";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";
import resume from "../assets/iaroslav_lasiichuk_resume.pdf";

function Header() {
  return (
    <div className="relative isolate min-h-screen px-6 pt-14 lg:px-8 font-custom">
      <Gradient />
      <div className="mx-auto max-w-2xl py-16 sm:py-16 lg:pt-28">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
        <div className="text-center">
          <div>
            <section>
              <h1 className="text-4xl py-10 font-bold tracking-tight text-gray-900 sm:text-6xl">
                Hi, My name is Iaroslav Lasiichuk I'm Full Stack Web Developer
              </h1>
              <p className="m-6 text-lg leading-8 text-gray-600">
                Hi, everyone! I'm a young aspiring Full Stack Web developer with
                a passion for technology and a strong desire to make a
                difference in the world. I'm constantly seeking new challenges
                and opportunities to learn and grow as a developer
              </p>
            </section>
          </div>
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            Download resume{" "}
            <a
              href={resume}
              download="Resume Iaroslav Lasiichuk"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-indigo-600"
            >
              <span className="absolute inset-0" aria-hidden="true" />
              Click here <span aria-hidden="true">&rarr;</span>
            </a>
         
          </div>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            {Auth.loggedIn() ? null : (
              <>
                <Link
                  to="/registration"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign up
                </Link>
              </>
            )}
            <Link
              to="https://github.com/IaroslavLasiichuk"
              target="blank"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Jump to my GitHub<span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
