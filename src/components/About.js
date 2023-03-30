import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Logan!
            <br className="hidden lg:inline-block" />Gameplay Engineer specializing in AI
          </h1>
          <p className="mb-8 leading-relaxed">
            I am a graduating student of RIT class of 2023 with a degree in Game
            Design and Development and a minor in Mobile Development. I am a gameplay engineer who focuses in AI progamming.
            I am an avid learner and I am always looking for new connections and friends in the game development space.
             Please enjoy my porfolio and be sure to contact me and make a new friend!
          </p>
          <div className="flex justify-center">
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coverImage.png"
          />
        </div>
      </div>
    </section>
  );
}
