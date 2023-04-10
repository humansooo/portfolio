import React from "react";
import { randomColor } from "../utils";
import { projects, socials } from "../data";
import Socials from "../components/Socials";
import { useSelector, useDispatch } from "react-redux";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ProjectsList } from "../components";

function ProjectPage() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);
  return (
    <div className="  pt-[7rem] sm:pt-[8rem] lg:pt-[5rem] p-3 sm:p-6  ">
      <div className=" flex flex-col justify-center items-start ">
        <div
          style={{
            color: theme.text,
          }}
          className=" lg:w-56 pl-2 scroll text-[24px] leading-snug  mb-3 py-2 font-[800] uppercase rounded-full "
        >
          projects
        </div>
        <title>Projects</title>
        <ProjectsList projects={projects} />
      </div>
      <div className=" flex-row hidden mt-6 max-sm:flex justify-end gap-3  ">
        {socials.map((link) => (
          <Socials key={link.id} data={link} />
        ))}
      </div>
    </div>
  );
}

export default ProjectPage;
