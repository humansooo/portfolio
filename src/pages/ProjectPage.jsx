import React from "react";
import { randomColor } from "../utils";
import { projects, socials } from "../data";
import Socials from "../components/Socials";

function ProjectPage() {
  return (
    <>
      <div className="mt-6">
        <div
          style={{ background: randomColor().color, color: randomColor().text }}
          className={` w-full min-h-[300px] flex flex-row max-md:flex-col justify-between p-8 rounded-[20px] `}
        >
          {projects.map((project) => (
            <div className="" key={project.id}>
              <div className="gap-4">
                <h1 className=" text-6xl max-md:text-3xl font-[900] ">
                  {project.title}
                </h1>

                <div className=" mt-6  ">
                  <h1
                    style={{ color: randomColor().text }}
                    className=" text-2xl max-md:text-xl font-[500] "
                  >
                    {project.description}
                  </h1>
                </div>

                <div className=" mt-6  ">
                  <h1
                    style={{ color: randomColor().text }}
                    className=" text-2xl max-md:text-xl font-[500] "
                  >
                    {project.link}
                  </h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="  flex-row hidden mt-6 max-sm:flex justify-end gap-3  ">
        {socials.map((link) => (
          <Socials key={link.id} data={link} />
        ))}
      </div>
    </>
  );
}

export default ProjectPage;
