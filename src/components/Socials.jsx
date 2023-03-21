import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Socials({ data, link, invert, borderOff}) {
  const theme = useSelector((state) => state.theme);
  return (
    <a
      style={{ color: theme.lightText }}
      href={link ? link : data.path}
      target="_blank"
      className={
        ` max-sm:text-sm max-sm:p-2 duration-500 h-full p-3 flex justify-between cursor-pointer items-center border-[1px] rounded-full ` +
        `${
          theme.mode === "light" ? "border-[#00000056]" : "border-[#ffffff44]"
        } ` +
        ` ${
          invert
            ? theme.mode === "light"
              ? "border-[#ffffff56] border-none p-0 "
              : "border-[#00000059] border-none p-0 "
            : ""
        }` +
        ` ${borderOff && "border-none"}`
      }
    >
      <img
        src={data.logo}
        style={{ background: theme.light === "light" && "black" }}
        className={
          " grayscale  h-[16px] mx-[2px] max-sm:h-[16px] duration-200 " +
          `${!invert && theme.mode === "dark" ? "invert " : "hover:scale-110 "}`
           + `${invert ? (theme.mode === "light" ? "invert hover:scale-110 " : "") : ""}`
        }
        alt=""
      />
    </a>
  );
}

export default Socials;
