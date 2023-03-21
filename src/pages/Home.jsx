import React from "react";
import { Navbar } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../states";
import AboutBanner from "../components/AboutBanner";
import { projects, socials } from "../data";
import Socials from "../components/Socials";
import { randomColor } from "../utils";

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

      <div className=" mt-[7rem] sm:mt-[4rem] p-3 sm:p-6 animate-blur-in ">
        <AboutBanner />
      </div>

      <div className={" mt-3 sm:mt-6 p-3 h-[97vh] border rounded-[24px] animate-blur-in " +
      `${theme.mode === "light" ? "border-[#00000049]" : "border-[#ffffff49]"}`}>
      <div className={` h-full w-full border rounded-[14px] animate-blur-in ` +
      `${theme.mode === "light" ? "border-[#00000049]" : "border-[#ffffff49]"}`}>

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
