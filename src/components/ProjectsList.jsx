import React from 'react'
import { useSelector } from 'react-redux'
import Socials from './Socials'
import { socials } from '../data'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import remarkGfm from 'remark-gfm'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { RandomReveal } from 'react-random-reveal'
import TitleButton from './TitleButton'

const ProjectsList = ({ projects }) => {
    const navigate = useNavigate();
    const theme = useSelector((state) => state.theme)
    return (
        <div
            className={
                `
              flex w-full md:flex-col border justify-start items-start gap-4 sm:gap-4 max-md:flex-col
              overflow-auto p-3 sm:p-4 rounded-[24px] scrollbar-none ` +
                `${theme.mode === "light"
                    ? "border-[#00000056]"
                    : "border-[#ffffff24]"
                } `
            }
        >
            {projects.map((project) => (
                <div
                    className={
                        "  sm:h-fit w-full rounded-[20px]  p-4 border sm:py-6 " +
                        `${theme.mode === "light"
                            ? "border-[#00000056]"
                            : "border-[#ffffff24]"
                        } `
                    }
                    key={project.id}
                >
                    <TitleButton project={project} theme={theme} />

                    <div className=" mt-3 sm:mt-6  ">
                        <div
                            style={{ color: theme.lightText }}
                            className=" text-base max-md:text-[14px] opacity-80  "
                        >
                            <ReactMarkdown
                                children={project.description}
                                remarkPlugins={[remarkGfm]}
                            />
                        </div>
                        <div
                            style={{ color: theme.lightText }}
                            className=" mt-3 text-sm flex flex-wrap font-[300] "
                        >
                            {project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="mr-2 px-2 py-1 my-1 rounded-full text-[10px] font-[300] "
                                    style={{
                                        backgroundColor:
                                            theme.mode === "light" ? "#0000001a" : "#ffffff1a",
                                    }}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="mt-3 flex flex-row gap-2 items-center  sm:mt-6  ">
                        <Socials
                            key={socials[0].id}
                            data={socials[0]}
                            link={project.link}
                            // invert={true}
                            borderOff={true}
                        />
                        <a
                            href={project.link}
                            target="_blank"
                            // style={{ color: theme.opText }}
                            className=" hover:text-[#86868683] translate-y-[1px] opacity-70 duration-200 text-sm max-md:text-[12px] font-[400] "
                        >
                            {project.link.split("/")[2].split('.')[0]}\
                            {project.link.split("/")[4]}
                        </a>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ProjectsList