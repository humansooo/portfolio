import React from "react";
import { Navbar } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../states";
import AboutBanner from "../components/AboutBanner";


function Home() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);

  return (
    <>
      {/* <div className="w-full h-full "> */}
        <div className=" mt-6 ">
          <AboutBanner />
        </div>
      {/* </div> */}
    </>
  );
}

export default Home;
