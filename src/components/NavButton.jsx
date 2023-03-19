import React from "react";
import { Link } from "react-router-dom";

function NavButton({ theme, to, text, icon, onClick,length }) {
  return (
    <Link
      style={{ color: theme.lightText }}
      to={to}
      onClick={onClick}
      className={
        ` gap-2 hover:gap-6 duration-500 h-full flex justify-between items-center p-2 hover:pl-5 pl-4 border-[1px] rounded-full ` +
        `${
          theme.mode === "light" ? "border-[#00000056]" : "border-[#ffffff56]"
        } ` +
        `${!icon && " hover:gap-0 hover:pl-2 pl-2"}`
      }
    >
      <h1 className={!icon && " duration-500 hover:scale-105 scale-90"}>
        {text}
      </h1>
      {icon && (
        <div
          className={
            "flex justify-center items-center h-[28px] w-[28px] font-[700] rounded-full border-[1px]   " +
            ` duration-500 ${
              theme.mode === "light"
                ? "border-[#9b9b9b] hover:border-[#5f5e5e]"
                : "border-[#5b5b5b] hover:border-[#c3c3c3]"
            }` + ` ${length && "px-8 ml-4 border-none bg-[#ff6f00]"}`
          }
        >
          { length ? length : icon}
        </div>
      )}
    </Link>
  );
}

export default NavButton;
