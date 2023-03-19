import React from "react";
import { aboutMe } from "../data";
import { useSelector } from "react-redux";
import { randomColor } from "../utils";

function AboutBanner() {
  const theme = useSelector((state) => state.theme);

  return (
    <div
      style={{ background: randomColor().color, color: randomColor().text }}
      className={` w-full min-h-[300px] flex flex-row max-md:flex-col-reverse  justify-between p-8 rounded-[20px] `}
    >
      <div>
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
            className=" text-4xl max-md:text-3xl font-[900] "
          >
            {aboutMe.description}'
          </h1>
        </div>
      </div>

      <div className=" flex justify-center items-center max-sm:pb-6 ">
        <div className=" sm:h-[200px] sm:w-[200px] h-[100px] w-[100px] rounded-full overflow-clip grayscale ">
          <img src={aboutMe.image} alt="image" className=" " />
        </div>
      </div>
    </div>
  );
}

export default AboutBanner;
