import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Logan!
            <br className="hidden lg:inline-block" />Contract Gameplay Engineer 
          </h1>
          <p className="mb-8 leading-relaxed">
            I am an RIT graduate with a a degree in 
            Design and Development and a minor in Mobile Development. I am a gameplay engineer who loves to learn and grow.
            Currently I am working as a contract gameplay engineer and in my freetime working on a 3rd person action adventure superhero 
            game called "Phasebound: A Heroes Journey".
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
