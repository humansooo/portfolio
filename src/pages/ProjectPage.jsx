import React from "react";
import { randomColor } from "../utils";
import { projects, socials } from "../data";
import Socials from "../components/Socials";
import { useSelector, useDispatch } from "react-redux";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function ProjectPage() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);
  return (
    <div className=" animate-blur-slide-down-10 pt-[7rem] sm:pt-[8rem] lg:pt-[8rem] p-3 sm:p-6  ">
      <div className=" flex flex-col justify-center items-start ">
        <style></style>
        <div
          style={{
            color: theme.text,
          }}
          className=" lg:w-56 pl-2 scroll text-[24px] leading-snug  mb-3 py-2 font-[800] uppercase rounded-full "
        >
          projects
        </div>
        <title>Projects</title>
        <div
          className={
            // ` 
            // lg:h-[78vh] sm:h-[73vh]
            `
             flex w-full md:flex-col border animate-blur-in justify-start items-start gap-4 sm:gap-4 max-md:flex-col
             overflow-auto p-3 sm:p-4 rounded-[24px] scrollbar-none ` +
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
              className={
                "  sm:h-fit w-full rounded-[20px]  p-4 border sm:py-6 " +
                `${
                  theme.mode === "light"
                    ? "border-[#00000056]"
                    : "border-[#ffffff24]"
                } `
              }
              key={project.id}
            >
              <h1
                style={{ color: theme.text }}
                className=" text-5xl max-md:text-2xl font-[700] "
              >
                {project.title}
              </h1>
              {/* <h1
                style={{ color: theme.lightText }}
                className=" ml-1 relative left-[98%] top-[-20%] text-xl max-md:text-base font-[400] "
              >
                #{project.id + 1}
              </h1> */}

              <div className=" mt-3 sm:mt-6  ">
                <div
                  style={{ color: theme.lightText }}
                  className=" text-base max-md:text-[14px] opacity-80  "
                >
                  {/* {project.description} */}
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
