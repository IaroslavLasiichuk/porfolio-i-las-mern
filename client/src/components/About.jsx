import React from "react";
import Gradient from "../components/Gradient";
import Avatar from "../assets/IMG_5570.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="relative isolate bg-white min-h-screen pt-24 sm:pt-24 flex flex-col">
      <Gradient />
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Hello, I'm Iaroslav Lasiichuk
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          <br />
          Crafting Digital Experiences with Love and Expertise
        </p>
      </div>
      <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-1">
        {/* Card */}
        <div className="flex items-center justify-center m-8">
          <div className="w-1/1 bg-white border border-gray-100 rounded-lg text-center hover:shadow-lg align-center p-6">
            <div className="flex justify-center">
              <img
                src={Avatar}
                className="rounded-full w-52 h-62 object-center border-4 border-white -mt-6 shadow-lg align-center"
              />
            </div>

            <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
              Professional Summury
            </h3>

            <p className="mt-5 text-sm leading-6 text-gray-600">
              {" "}
              Passionate and solutions-driven full stack web developer with a
              web development certificate from University of Denver. Experience
              in coding utilizing a combination of strong communication,
              collaboration, problem- solving, and analytical skills. Strong
              ability to design, build, and maintain websites from conception to
              production. Ability to work in a fast-paced and diverse team
              environment developing solutions and exceeding expectations.
            </p>
            <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
              Skills
            </h3>

            <p className="mt-5 text-sm leading-6 text-gray-600">
              {" "}
              HTML/CSS/Git, JavaScript, DOM, Bootstrap, Tailwind, Chakra UI,
              APIs, JQuery, JSON, Node, ES6, OOP, MVC paradigm, MySQL, NoSQL,
              Mongo DB, PWA, MERN Stack, React, Express, WorldPress, Agile development.
            </p>
            <div className="rounded-full mt-6 px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Recent project{" "}
              <a
                href="https://www.dunk4dreams.org"
                download="Resume Iaroslav Lasiichuk"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-indigo-600"
              >
                <span className="" aria-hidden="true" />
                Click here <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
