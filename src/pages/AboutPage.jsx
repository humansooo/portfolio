import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { aboutMe } from "../data";

function AboutPage() {
  const theme = useSelector((state) => state.theme);

  return (
    <div className="  p-6 sm:p-6 pt-[7rem] sm:pt-[8rem] lg:pt-[5rem] h-screen animate-blur-slide-down-10 ">
      <title>About</title>
      <div
        style={{
          color: theme.lightText,
        }}
        className=" lg:w-56 pl-2 scroll text-[24px] leading-snug  mb-3 py-2 font-[900] uppercase rounded-full "
      >
        about me
      </div>

      <div className="flex flex-row outline justify-between w-full ">
        <div className="  w-full outline">
          <h1 className="lg:w-[60%] text-xl font-normal  ">{aboutMe.description}</h1>
        </div>
        <div
          style={{ color: theme.lightText }}
          className=" text-sm flex flex-wrap w-fit h-auto gap-2 justify-center  items-center font-[300] "
        >
          {aboutMe.skills.map((tag) => (
            <span
              key={tag}
              className={
                " px-2 py-1 h-fit w-auto rounded-full border text-[14px] font-[600] " +
                `${
                  theme.mode === "light"
                    ? "border-[#00000044]"
                    : "border-[#ffffff44]"
                } `
              }
              // style={{
              //   backgroundColor:
              //     theme.mode === "light" ? "#0000001a" : "#ffffff1a",
              // }}
            >
              {tag}
            </span>
          ))}
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default AboutPage;
