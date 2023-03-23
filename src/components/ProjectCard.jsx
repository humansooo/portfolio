import React from "react";
import { socials } from "../data";
import Socials from "./Socials";
import { useSelector } from "react-redux";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import NavButton from "./NavButton";

function ProjectCard({ data }) {
  const theme = useSelector((state) => state.theme);
  return (
    <div
      className={
        " p-4 border flex-col flex-1 md:h-min flex rounded-[20px] " +
        `${
          theme.mode === "light" ? "border-[#00000049]" : "border-[#ffffff49]"
        }`
      }
    >
      {/* <div></div> */}
      <h1 className=" text-xl font-bold ">{data.title}</h1>
      <p style={{ color: theme.lightText }} className=" mt-3 text-sm font-[300] ">
        <ReactMarkdown
          children={data.description.slice(0, 110) + "..."}
          remarkPlugins={[remarkGfm]}
        />
        {/* {data.description.slice(0, 100)} */}
      </p>
      <div className="mt-2 flex flex-row gap-1 items-center  sm:mt-3  ">
        <Socials
          key={socials[0].id}
          data={socials[0]}
          link={data.link}
          // invert={true}
          borderOff={true}
        />
        <a
          href={data.link}
          // style={{ color: theme.opText }}
          className=" hover:text-[#0000006f] translate-y-[1px] opacity-70 duration-200 text-[12px] max-md:text-[12px] font-[300] "
        >
          {data.link}
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
