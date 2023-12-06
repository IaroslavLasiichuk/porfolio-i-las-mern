import React from "react";
import Gradient from "../components/Gradient";
import Avatar from "../assets/IMG_5570.jpg";
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
        <div class="flex min-h-screen items-center justify-center">
          <div class="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div class="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
              <img
                src={Avatar}
                alt="image"
                class="h-full w-full object-cover"
              />
            </div>
            <div class="p-6">
              <h6 class="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-purple-300 antialiased">
                PROFESSIONAL SUMMARY
              </h6>
              <h4 class="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                Iaroslav Lasiichuk
              </h4>
              <p class="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                Passionate and solutions-driven full stack web developer with a
                web development certificate from University of Denver.
                Experience in coding utilizing a combination of strong
                communication, collaboration, problem- solving, and analytical
                skills. Strong ability to design, build, and maintain websites
                from conception to production. Ability to work in a fast-paced
                and diverse team environment developing solutions and exceeding
                expectations.
              </p>
              <h4 class="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                Skills
              </h4>
              <p class="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                HTML/CSS/Git, JavaScript, DOM, Bootstrap, Tailwind, Chakra UI,
                APIs, JQuery, JSON, Node, ES6, OOP,MVC paradigm, MySQL, NoSQL,
                Mongo DB, PWA, MERN, Stack, React, Express, Agile development, WorldPress
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
