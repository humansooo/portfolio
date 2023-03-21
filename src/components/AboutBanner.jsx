import React from "react";
import { aboutMe } from "../data";
import { useSelector } from "react-redux";
import { randomColor } from "../utils";
import NavButton from "./NavButton";

function AboutBanner() {
  const theme = useSelector((state) => state.theme);

  return (
    <div
      style={{ background: randomColor().color, color: randomColor().text }}
      className={` w-full min-h-[300px] flex flex-row max-md:flex-col-reverse  justify-between p-8 rounded-[20px] `}
    >
      <div className=" flex-1 ">
        <div>
          <h1
            // style={{ color: theme.primary }}
            className=" text-6xl max-md:text-3xl font-[900] "
          >
            {aboutMe.title}'
          </h1>
        </div>
        <div className=" mt-6  ">
          <h1
            style={{ color: randomColor().text }}
            className=" text-2xl max-md:text-xl font-[600] "
          >
            {aboutMe.description.split(" ").slice(0, 20).join(" ")}'
          </h1>
        </div>
        <div className=' w-[250px] flex flex-wrap mt-6 '>
          <NavButton
            theme={theme}
            invert={true}
            textColor={'#ffffff'}
            to="/About"
            text="Read More"
            icon=">"
            length={null}
          />
        </div>
      </div>

      {/* <div className=" flex justify-center items-center max-sm:pb-6 ">
        <div className=" sm:h-[200px] sm:w-[200px] h-[100px] w-[100px] rounded-full overflow-clip grayscale ">
          <img src={aboutMe.image} alt="image" className=" " />
        </div>
      </div> */}
    </div>
  );
}

export default AboutBanner;
