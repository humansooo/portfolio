import React from "react";
import { ProjectCard } from "../components";
import { useDispatch, useSelector } from "react-redux";
import AboutBanner from "../components/AboutBanner";
import { projects, socials } from "../data";
import Socials from "../components/Socials";
import { Link } from "react-router-dom";

function Home() {
  // const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);



  return (
    <>
      <title>Himanshu Suthar</title>

      <div className=" mt-[7rem] lg:mt-[4rem] px-3 sm:px-6 pt-3 sm:pt-6 ">
        <AboutBanner />
      </div>

      <div
        className={
          " mt-3 sm:mt-3 sm:mx-6 mb-6 mx-3 border-0 flex flex-col gap-3 rounded-[24px] " 
          +`${theme.mode === "light" ? "border-[#00000049]" : "border-[#ffffff49]"}`
        }
        >
        <div className={" text-xl duration-500 flex flex-row justify-between items-center w-full border p-2 px-3 pl-4 rounded-full font-semibold " + `${theme.mode === "light" ? "border-[#00000049]" : "border-[#ffffff49]"}`
        }
        >
        <h1>Projects</h1>
        <Link to={'/Projects'}
        style={{
          backgroundColor: theme.text,
          color: theme.background,
        }}
        className={" md:text-lg duration-500 after:container md:border p-1 px-5 md:hover:px-6 rounded-full hover:invert hover:blur-[1px] font-light text-sm md:font-semibold " + `${theme.mode === "light" ? "border-[#00000049]" : "border-[#ffffff49]"}`
        }
        >See all </Link>
        </div>
        <div className="flex flex-wrap max-md:flex-col gap-3">
        {/* projects */}
          {/* <ProjectCard data={projects[0]} /> */}
          <ProjectCard data={projects[0]} />
          <ProjectCard data={projects[1]} />
          <ProjectCard data={projects[2]} />
      </div>
          </div>

      {/* bottom social links */}
      <div className="  flex-row hidden p-3 md:p-6 mt-6 max-sm:flex justify-end gap-3  ">
        {socials.map((link) => (
          <Socials key={link.id} data={link} />
        ))}
      </div>
    </>
  );
}

export default Home;
