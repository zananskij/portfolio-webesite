import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Streaming backlist",
    skillsUsed: ["TypeScript", "React", "Express", "SQL", "Tailwind CSS"],
    description: "Browse from thousands of Movies & TV shows and add them to a Watchlater or Favorites list!",
    image: "/letterboxd.png",
    github: "https://github.com/zananskij/Letterboxd-clone-frontend",
    link: "https://letterboxd-clone.herokuapp.com/",
  },
  {
    name: "Chat App",
    skillsUsed: ["React", "Python", "Django", "PostgreSQL", "Bootstrap"],
    description: "Sign-up and be able to add and start chatting with friends!",
    image: "/chatApp.png",
    github: "https://github.com/zananskij/chat-app-frontend",
    link: "https://slack-clone-ga.herokuapp.com/",
  },
  {
    name: "Travel Blog",
    skillsUsed: ["React", "Express", "Node.js", "MongoDB", "Bootstrap & CSS"],
    description: "Make posts about places you've been!",
    image: "/travelblog.png",
    github: "https://github.com/zananskij/project3-frontend-new",
    link: "https://twitter-clone-frontend123.herokuapp.com/",
  },
]

const Projects = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <div className="flex flex-wrap flex-row justify-center z-10 mb-6 md:justify-start">
                      {project.skillsUsed.map((skill) => {
                        return (
                          <p
                            key={skill}
                            className="bg-gray-200 hover:bg-teal-600 hover:text-white px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                          >
                            {skill}
                          </p>
                        )
                      })}
                    </div>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub size={30} className="hover:-translate-y-1  transition-transform cursor-pointer" />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Projects
