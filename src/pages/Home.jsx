import React from "react";
import { Navbar } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../states";
import AboutBanner from "../components/AboutBanner";
import { socials } from "../data";
import Socials from "../components/Socials";


function Home() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);

  return (
    <>
      {/* <div className="w-full h-full "> */}
        <div className=" mt-6 ">
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
