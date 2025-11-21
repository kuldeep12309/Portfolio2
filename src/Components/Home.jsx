import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import About from "./About";
import Resume from "./Resume";
import Contact from "./Contact";
import Project from "./Project";
import kuldeep from "../assets/kuldeep.jpg";

const Home = () => {
  const typedEl = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedEl.current, {
      strings: [
        "Full-Stack Developer",
        "React + Django Specialist",
        "API Architect",
        "UI/UX Enthusiast",
        "Tech Explorer",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });
    return () => typed.destroy();
  }, []);

  return (
    <div className="scroll-smooth">
      <section className="flex flex-col md:flex-row items-center justify-center py-10">
        <motion.div
          className="w-full md:w-1/2 p-5 text-center md:text-left"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h1
            className="text-2xl md:text-4xl font-bold"
            style={{ fontFamily: "asif" }}
          >
            Hi, I'm{" "}
            <span className="text-blue-600">
              <span ref={typedEl}></span>
            </span>
          </h1>

          <p className="text-gray-600 mt-6 text-lg">
            I’m a full-stack web developer passionate about building powerful,
            scalable, and elegant web solutions using{" "}
            <span className="font-semibold">React</span> on the frontend and{" "}
            <span className="font-semibold text-green-600">Django</span> on the
            backend. I craft seamless user experiences powered by APIs.
          </p>

          <Link
            to="/resume"
            className="inline-block mt-6 px-6 py-3 shadow-lg rounded-md hover:bg-blue-300 hover:text-black transition duration-300"
          >
            View Resume
          </Link>
        </motion.div>

        <motion.div
          className="w-full md:w-1/2 text-center p-5 flex flex-col items-center"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <motion.img
            src={kuldeep}
            alt="Kuldeep Gupta"
            className="w-64 h-64 sm:w-76 sm:h-76 rounded-full object-cover hover:scale-110 transition-transform duration-300"
          />

          <h4 className="m-4 text-green-600 italic text-2xl md:text-3xl font-semibold">
            Kuldeep Gupta
          </h4>

          <p className="text-gray-500">React , Django , Django Rest , MySQL</p>
        </motion.div>
      </section>

      <hr className="my-10 border-gray-300" />

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <About />
      </motion.div>

      <hr className="my-10 border-gray-300" />

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Project />
      </motion.div>

      <hr className="my-10 border-gray-300" />

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Resume />
      </motion.div>

      <hr className="my-10 border-gray-300" />

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Contact />
      </motion.div>

      <hr className="my-10 border-gray-300" />
    </div>
  );
};

export default Home;
