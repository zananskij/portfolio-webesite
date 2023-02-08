import React from "react"
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineSolution } from "react-icons/ai"

const Footer = () => {
  return (
    <footer id="contact" className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0" />
      <div className="mx-auto p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between">
        <div className="flex flex-row items-center justify-center text-neutral-500 dark:text-neutral-100 font-bold">
          zananskij@gmail.com | (407)-435-7172
        </div>
        <div className="flex flex-row items-center justify-center space-x-2 mb-1">
          <a href="https://github.com/zananskij" rel="noreferrer" target="_blank">
            <AiOutlineGithub
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={30}
            />
          </a>

          <a href="https://www.linkedin.com/in/zananskij/" rel="noreferrer" target="_blank">
            <AiOutlineLinkedin
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={30}
            />
          </a>
          <a
            href="https://docs.google.com/document/d/1DlSpxZhtqAq9vCRq0saCtojFLiiHunR9s_Fd_h3VGfk/edit#"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineSolution
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={30}
            />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
