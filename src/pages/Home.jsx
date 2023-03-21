import React from "react";
import { Navbar } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../states";
import AboutBanner from "../components/AboutBanner";
import { projects, socials } from "../data";
import Socials from "../components/Socials";
import { randomColor } from "../utils";
import Slider from "react-slick";

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

      {/* <div className=" flex sm:flex-col-reverse flex-col "> */}
      <div className=" mt-3 sm:mt-6 ">
        <AboutBanner />
      </div>
      
      <div className="  flex-row hidden mt-6 max-sm:flex justify-end gap-3  ">
        {socials.map((link) => (
          <Socials key={link.id} data={link} />
        ))}
      </div>
      {/* </div> */}
    </>
  );
}

export default Home;
