import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { RandomReveal } from 'react-random-reveal';

const Project = () => {
  const navigation = useNavigate();
  const { state } = useLocation();


  const theme = useSelector((state) => state.theme)
  return (
    <div
      style={{ background: theme.primary, color: theme.text }}
     className=' zoom-in sticky h-screen z-[99999] pt-28 p-10 sm:p-24 sm:px-44 flex-grow '>
      <div className=" text-[#ddd] pl-2 h-full md:relative "
      >
        <div
          style={{ color: theme.text }}
          onClick={() => window.history.back()}
          className="absolute hover:rotate-[calc(360*2deg)] back-button cursor-pointer duration-150 md:translate-x-[-10%] max-md:top-10 md:bottom-0 md:left-0 left-6 w-10 h-10 flex items-center justify-center text-2xl font-bold rounded-full"
        >{'<'}</div>
        <h1
          style={{ color: theme.text }}
          className="text-7xl max-md:text-3xl font-[700] cursor-pointer "
        >
          <RandomReveal
            characters={state.title}
            isPlaying
            duration={0.4}
          />
          {/* {state.title} */}
        </h1>

        <p
          style={{ color: theme.text }}
          className="text-[#959595] text-2xl max-md:text-sm font-[400] mt-14 "
        >
          <ReactMarkdown

          >{state.description}</ReactMarkdown>
        </p>

        <div className="flex overflow-clip flex-wrap mt-10 flex-row gap-3">
          {state.tags.map((tag) => (
            <div
              key={tag}
              style={{
                color: `#333333${Math.floor(Math.random() * 70 + 30)}`,
                // color: 'transparent',
                // stroke: `${randomColor().text}`,
              }}
              className={" text-2xl max-md:text-sm font-[900] " + (theme.mode === 'dark' ? 'invert' : ''  )}
            >

              {tag}

            </div>
          ))}
        </div>

        <a
        href={state.link}
        style={{ color: theme.text }}
        target="_blank"
        className="flex w-fit hover:bg-black hover:invert duration-150 font-light hover:pr-56 mt-10 gap-4 items-center flex-row">
          <img
            src='https://www.svgrepo.com/show/507321/github.svg'
            alt="project"
            className={"w-[28px] h-[28px] " + (theme.mode === 'dark' ? 'invert' : '')}
          />
          <h1 className="text-2xl max-md:text-sm">
            github/{state.link.split('/')[3]}
          </h1>
        </a>

      </div>
    </div>
  )
}

export default Project