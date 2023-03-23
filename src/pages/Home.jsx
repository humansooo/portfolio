import React from "react";
import { Navbar, ProjectCard } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../states";
import AboutBanner from "../components/AboutBanner";
import { projects, socials } from "../data";
import Socials from "../components/Socials";
import { randomColor } from "../utils";
import { Link } from "react-router-dom";

function Home() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,

    // slidesToScroll: 1,
  };

  return (
    <>
      <title>Himanshu Suthar</title>

      <div className=" mt-[7rem] lg:mt-[4rem] px-3 sm:px-6 pt-3 sm:pt-6 animate-blur-in ">
        <AboutBanner />
      </div>

      <div
        className={
          " mt-3 sm:mt-3 sm:mx-6 mb-6 mx-3 border-0 flex flex-col gap-3 rounded-[24px] animate-blur-in " 
          +`${theme.mode === "light" ? "border-[#00000049]" : "border-[#ffffff49]"}`
        }
        >
        <Link to={'/Projects'} className={" text-xl duration-500 text-center after:container border p-2 px-3 hover:px-6 rounded-full  hover:blur-[1px] font-semibold " + `${theme.mode === "light" ? "border-[#00000049]" : "border-[#ffffff49]"}`
        }
        >Projects</Link>
        <div className="flex flex-wrap max-md:flex-wrap gap-3">
        {/* projects */}
          {/* <ProjectCard data={projects[0]} /> */}
          <ProjectCard data={projects[1]} />
          <ProjectCard data={projects[2]} />
          <ProjectCard data={projects[2]} />
      </div>
          </div>

      {/* bottom social links */}
      <div className="  flex-row hidden mt-6 max-sm:flex justify-end gap-3  ">
        {socials.map((link) => (
          <Socials key={link.id} data={link} />
        ))}
      </div>
    </>
  );
}

export default Home;
