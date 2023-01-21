import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
export default function App() {
  return (
    // <main className="text-gray-400 bg-gray-900 body-font">
    // <Navbar />
    //   <About />
    //   <Projects />
    //   <Skills />
    //   {/* <Testimonials /> */}
    //   <Contact />
    // </main>
    <section class="relative  flex flex-col items-center justify-center text-center text-white py-0 px-3">
      <div class="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
        <video class="min-w-full min-h-full absolute object-cover" src="./newVideo.mp4" type="video/mp4" autoPlay muted loop></video>
      </div>
      <div class="video-content ">
        <main className="">
          <Navbar />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main >
      </div>
    </section>

  );
}
