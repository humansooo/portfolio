import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function NavButton({ theme, to, text, icon, onClick, length, isActive, invert, textColor }) {
  return (
    <Link
      to={to}
      style={{ color: textColor ? textColor : theme.lightText }}
      onClick={onClick}
      className={
        ` gap-2 sm:hover:gap-6 max-sm:text-sm max-sm:gap-1 cursor-pointer text-[16px] max-sm:p-1.5 max-sm:pl-3 duration-500 h-full flex justify-between items-center p-2 pl-4 border-[2px] rounded-full ` +
        `${
          theme.mode === "light" ? "border-[#00000056]" : "border-[#ffffff24]"
        } ` +
        `${
          !icon ? " sm:hover:gap-0 pl-[8px] max-sm:pl-[6px] " : "sm:hover:pl-5"
        }`
         + ` ${invert && "border-[#ffffff3f]"}`
      }
    >
      <h1>{text}</h1>
      {icon && (
        <div
          className={
            "flex justify-center items-center h-[28px] w-[28px] font-[700] rounded-full border-[2px]   " +
            ` duration-500 ${
              theme.mode === "light"
                ? "border-[#9b9b9b] sm:hover:border-[#5f5e5e]"
                : "border-[#5b5b5b] sm:hover:border-[#c3c3c3]"
            }` +
            ` ${length && "px-6 border-none bg-[#ff6f00]"}` +
            ` ${isActive && isActive === text && "border-[#ff6f00]"}` +  ` ${invert && "border-[#ffffff3f] sm:hover:border-[#ffffffa9]"}`

          }
        >
          {length ? length : icon}
        </div>
      )}
    </Link>
  );
}

export default NavButton;
