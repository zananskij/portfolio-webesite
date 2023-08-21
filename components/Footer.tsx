// email + nmber on separate
import React from "react"
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlinePhone, AiOutlineSolution } from "react-icons/ai"
import { MdOutlineEmail } from "react-icons/md"
import { BsLinkedin } from "react-icons/bs"

const Footer = () => {
  return (
    <footer id="contact" className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl pt-20 pb-12">
      <hr className="w-full h-0.5 mx-auto mt-8 mb-8 bg-neutral-200 border-0" />
      <h2 className="text-3xl font-bold text-center text-neutral-900 dark:text-neutral-100 mb-4">Contact Me!</h2>
      <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      <p className="text-neutral-900 dark:text-neutral-100 mb-8">
        Let's bring cutting-edge ideas to life together. If you're looking for a driven and collaborative team player,
        I'd love to hear from you. Please don't hesitate to reach out and connect with me below.
      </p>
      <div className="mx-auto p-4 flex flex-col md:flex-row md:justify-between items-center text-center text-neutral-900 ">
        <div className="flex flex-row items-center justify-center md:justify-start text-neutral-900 dark:text-neutral-100 font-bold mb-1 md:mb-0 md:mr-4 hover:text-teal-500">
          <div className="mr-2">
            <MdOutlineEmail size={20} />
          </div>
          <a href="mailto:zananskij@gmail.com">zananskij@gmail.com</a>
        </div>
        <div className="flex flex-row items-center justify-center text-neutral-900 dark:text-neutral-100 font-bold mb-1 md:mb-0">
          <div className="mr-2 hover:text-teal-500">
            <AiOutlinePhone size={30} />
          </div>
          <p className="text-center hover:text-teal-500 ease-out text-neutral-900 dark:text-neutral-100">
            (407)-435-7172
          </p>
        </div>

        <div className="flex flex-row items-center justify-center space-x-2 md:justify-end">
          <a
            href="https://docs.google.com/document/d/1IlpecH8LmQi1AU7qOs5wKLXSLoBy_ksqeA_OT9C4qvI/edit"
            rel="noreferrer"
            target="_blank"
            className="flex flex-row items-center hover:text-teal-600 hover:-translate-y-1 transition-transform ease-out"
          >
            <span className="  hover:text-teal-600 ease-out text-neutral-900 dark:text-neutral-100">View Resume</span>
            <AiOutlineSolution
              size={30}
              className="ml-2 cursor-pointer hover:text-teal-600 ease-out text-neutral-900 dark:text-neutral-100"
            />
          </a>

          <a href="https://github.com/zananskij" rel="noreferrer" target="_blank">
            <AiOutlineGithub
              size={30}
              className="hover:-translate-y-1 transition-transform cursor-pointer hover:text-teal-600 ease-out text-neutral-900 dark:text-neutral-100"
            />
          </a>
          <a href="https://www.linkedin.com/in/zananskij/" rel="noreferrer" target="_blank">
            <BsLinkedin
              size={30}
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-900 dark:text-neutral-100 hover:text-teal-600 ease-out "
            />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
