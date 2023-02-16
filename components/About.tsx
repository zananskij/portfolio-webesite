"use client" // this is a client component
import React from "react"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"

const skills = [
  { skill: "JavaScript" },
  { skill: "React" },
  { skill: "TypeScript" },
  { skill: "Next.js" },
  { skill: "Node.js" },
  { skill: "Express" },
  { skill: "Python" },
  { skill: "Django" },
  { skill: "Tailwind CSS" },
  { skill: "Bootstrap" },
  { skill: "MongoDB" },
  { skill: "PostgreSQL" },
  { skill: "Git" },
  { skill: "GitHub" },
]

const About = () => {
  return (
    <section id="about">
      <div className="my-8 pb-1 md:pt-10 md:pb-2">
        <h1 className="text-center font-bold text-4xl mb-4">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-2 md:text-left">Get to know me!</h1>
            <p>
              Hi, my name is Jon and I am a <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> software engineer based in Orlando, FL.
            </p>
            <br />
            <p>
              With 500+ hours of expert-led instruction in full-stack development under my belt, I have honed my skills
              in multiple frontend frameworks and gained hands-on experience in developing backend databases and APIs.
            </p>
            <br />
            <p>
              Technology has always been a passion of mine but i also have a wide range of hobbies that keep me busy.
              From fitness, cooking, traveling, to keeping up with the latest movies, TV shows & games. I believe that
              you should <span className="font-bold text-teal-500">never stop growing</span> and that&#39;s what I
              strive to do, by exploring new experiences and learning new things, and i bring that same drive and
              curiosity to my work.
            </p>
            <br />
            <p></p>
            <p>
              I&#39;m excited to see where my career in technology will take me and am always open to new opportunities.
              Whether it&#39;s pushing the limits of what&#39;s possible or simply improving upon what&#39;s already
              been done, I am dedicated to delivering impactful and innovative solutions.🙂
            </p>
          </div>

          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-2">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 hover:bg-teal-600 hover:text-white px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <Link to="projects" activeClass="active" spy={true} smooth={true} offset={-100} duration={500}>
          <HiArrowDown size={35} className="animate-bounce cursor-pointer" />
        </Link>
      </div>
    </section>
  )
}

export default About
