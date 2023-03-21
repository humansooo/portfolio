import React from "react";
import { randomColor } from "../utils";
import { projects, socials } from "../data";
import Socials from "../components/Socials";
import { useSelector, useDispatch } from "react-redux";
import reactMarkdown from "react-markdown";


function ProjectPage() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);
  return (
    <div className=" h-[calc(100vh-96px)] ">
      <div className="mt-3 sm:mt-6 flex ">
        <title>Projects</title>
        <div
          className={
            ` lg:h-[84vh] h-[75vh] flex flex-1 flex-col border-[2px] justify-start items-center gap-4 sm:gap-4 max-md:flex-col
             overflow-auto p-4 sm:p-6 rounded-[20px] scrollbar-none `
             +
            `${
              theme.mode === "light"
                ? "border-[#00000056]"
                : "border-[#ffffff24]"
            } `
          }
        >
          {projects.map((project) => (
            <div
              // style={{ backgroundColor: randomColor().color }}
              className={"  sm:h-[400px] w-full sm:max-w-[1500px] rounded-[20px]  p-4 border sm:py-6 " + `${
                theme.mode === "light" ? "border-[#00000056]" : "border-[#ffffff24]"
              } `}
              key={project.id}
            >
              <h1
                style={{ color: randomColor().color }}
                className=" text-6xl max-md:text-2xl font-[700] "
              >
                {project.title}
              </h1>

              <div className=" mt-3 sm:mt-6  ">
                <h1
                  // style={{ color: theme.opText }}
                  className=" text-base max-md:text-[14px] opacity-80 font-[400] "
                >
                  {project.description}
                </h1>
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
                  // style={{ color: theme.opText }}
                  className=" hover:text-[#0000006f] translate-y-[1px] opacity-70 duration-200 text-sm max-md:text-[12px] font-[400] "
                >
                  {project.link}
                </a>
              </div>
            </div>
          ))}
        </div>
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
