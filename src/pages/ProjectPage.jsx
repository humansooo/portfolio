import React from "react";
import { randomColor } from "../utils";
import { projects, socials } from "../data";
import Socials from "../components/Socials";
import { useSelector, useDispatch } from "react-redux";

function ProjectPage() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);
  return (
    <div className=" h-[calc(100vh-96px)] ">
      <div className="mt-3 sm:mt-6 ">
        <title>Projects</title>
        <div
          style={{ background: theme.oppPrimary,color: theme.opText }}
          className={` lg:h-[84vh] h-[75vh] flex flex-col justify-start gap-3 sm:gap-4 max-md:flex-col overflow-auto scrollbar-thin p-6 sm:p-8 rounded-[20px] `}
        >
          {projects.map((project) => (
            <div
              className=" max-sm:max-w-[500px] sm:h-[400px] sm:max-w-[1200px] xl:w-[1200px] max-lg:border-b-[4px] border-[#3a3a3a] py-4 sm:py-6 "
              key={project.id}
            >
              <h1
              // style={{ color: theme.opText }}
              className=" text-6xl max-md:text-2xl font-[900] ">
                {project.title}
              </h1>

              <div className=" mt-3 sm:mt-6  ">
                <h1
                  // style={{ color: theme.opText }}
                  className=" text-base max-md:text-[14px] opacity-60 font-[500] "
                >
                  {project.description}
                </h1>
              </div>

              <div className="mt-3 flex flex-row gap-2 items-center  sm:mt-6  ">
                <Socials
                  key={socials[0].id}
                  data={socials[0]}
                  link={project.link}
                  invert={true}
                />
                <a
                  href={project.link}
                  // style={{ color: theme.opText }}
                  className=" hover:text-[#0000006f] translate-y-[1px] opacity-60 duration-200 text-sm max-md:text-[12px] font-[400] "
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
