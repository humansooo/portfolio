import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { aboutMe } from "../data";


function AboutPage() {
  const theme = useSelector((state) => state.theme);

  return (
    <div className="  p-3 sm:p-6 pt-[7rem] sm:pt-[8rem] lg:pt-[5rem] h-screen animate-blur-slide-down-10 ">
      <div
        style={{
          color: theme.lightText,
        }}
        className=" lg:w-56 pl-2 scroll text-[24px] leading-snug  mb-3 py-2 font-[800] uppercase rounded-full "
      >
        about me
      </div>

      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
        <div>
          <h1 className=" text-3xl font-black  ">
            {aboutMe.title}
          </h1>
        </div>
        <div>
          <p>

          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
