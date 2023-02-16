"use client" // this is a client component
import React from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"

const Banner = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">Hi, I&#39;m Jon!</h1>
          {/* <p className="text-lg mt-4 mb-6 md:text-2xl">
            I&#39;m a <span className="font-semibold text-teal-600">Software Engineer </span>
            based in Orlando, FL. Creative and ambitious developer with a background in IT. I&#39;m a detail and
            design-oriented professional looking to create and collaborate with others to provide immersive user
            experiences.
          </p> */}

          <p className="text-lg mt-4 mb-6 md:text-2xl">
            I&#39;m a <span className="font-semibold text-teal-600">Software Engineer </span>
            with a background in IT, focused on delivering exceptional user experiences through creative and innovative
            solutions. Based in Orlando, FL, I am a detail-oriented and design-focused professional with a passion for
            technology and a commitment to continuous learning and improvement.
          </p>

          <Link
            to="projects"
            className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700 cursor-pointer"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <Link to="about" activeClass="active" spy={true} smooth={true} offset={-100} duration={500}>
          <HiArrowDown size={35} className="animate-bounce cursor-pointer" />
        </Link>
      </div>
    </section>
  )
}

export default Banner
