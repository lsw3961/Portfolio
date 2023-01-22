import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";
export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            These are a few of my skills and different programs that I have picked up over the years.
          </p>
        </div>
        <div class="accordion accordion-flush w-1/2 flex flex-wrap flex-row lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2" id="accordionFlushExample">

          {skills.map((skill) => (

            <div class="accordion-item accordian-flush w-1/2 p-2">

              <h2 class="accordion-flush-header accordian-flush mb-0 bg-gray-800 break-words" id={"flush-heading" + skill.index}>
                <button class="
                  accordion-button
                  collapsed
                  relative
                  flex
                  items-center
                  w-full
                  py-4
                  px-5
                  title-font
                  bg-gray-800
                  border-0
                  rounded-md
                  transition
                  focus:outline-none
                " type="button" data-bs-toggle="collapse" data-bs-target={"#collapse" + skill.index} aria-expanded="false"
                >
                  <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                  {skill.title}
                </button>
              </h2>
              <div id={"collapse" + skill.index} class="accordion-collapse collapse collapse" aria-labelledby={"heading" + skill.index}>
                <div class="accordion-body-flush">
                  {skill.content}
                  {skill.image != "" && skill.link != "" &&
                    <div className="flex relative">
                      <a href={skill.link} target="_blank" rel="noreferrer" className="w-full object-cover object-center">
                        <img
                          alt="gallery"
                          className="inset-0 w-full h-48 object-cover object-center"
                          src={skill.image}
                        />
                      </a>
                    </div>
                  }
                  {skill.image != "" && skill.link == "" &&
                    <div className="flex relative">
                      <img
                        alt="gallery"
                        className="inset-0 w-full h-48 object-cover object-center"
                        src={skill.image}
                      />
                    </div>
                  }
                </div>
              </div>
            </div>

          ))}
        </div>


      </div>
    </section >
  );
}
