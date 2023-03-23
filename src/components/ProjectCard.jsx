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
      <div
        style={{ color: theme.lightText }}
        className=" mt-3 text-sm font-[400] "
      >
        <ReactMarkdown
          children={data.description}
          remarkPlugins={[remarkGfm]}
        />
        {/* {data.description.slice(0, 100)} */}
      </div>
      <div
        style={{ color: theme.lightText }}
        className=" mt-3 text-sm font-[300] flex flex-wrap "
      >
        {data.tags.map((tag) => (
          <span
            key={tag}
            className="mr-2 px-2 py-1 rounded-full my-1 text-[10px] font-[300] "
            style={{
              backgroundColor:
                theme.mode === "light" ? "#0000001a" : "#ffffff1a",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
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
          target="_blank"
          // style={{ color: theme.opText }}
          className=" hover:text-[#86868683] translate-y-[1px] opacity-70 duration-200 text-[12px] max-md:text-[12px] font-[300] "
        >
          {/* {data.link.slice(0, 4) + "..."} */}
          {data.link.split("/")[2].split('.')[0]}\
          {data.link.split("/")[4]}

        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
