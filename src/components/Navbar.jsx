import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setTheme } from "../states";
import { useSelector, useDispatch } from "react-redux";
import NavButton from "./NavButton";
import { navlinks, socials } from "../data";
import Socials from "./Socials";

function Navbar() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);
  const [isActive, setIsActive] = useState("home");
  const navigate = useNavigate();

  useEffect(() => {
    const url = window.location.href;
    const urlArr = url.split("/");
    const lastUrl = urlArr[urlArr.length - 1];
    const final = lastUrl === "" ? "Home" : lastUrl;
    setIsActive(final);
  }, [window.location.href]);

  return (
    <div className=" flex flex-row max-lg:flex-col justify-between gap-3 ">
      <div className=" flex max-sm:hidden flex-row justify-end gap-3  ">
        {socials.map((link) => (
          <Socials key={link.id} data={link} />
        ))}
      </div>
      <div className=" flex flex-wrap justify-end gap-3 ">
        {navlinks.map((link) => (
          <div
            key={link.id}
            onClick={() =>
              setIsActive(link.title.toLocaleLowerCase()) + navigate(link.path)
            }
          >
            <NavButton
              isActive={isActive}
              theme={theme}
              text={link.title}
              icon={">"}
              length={link.data.length}
            />
          </div>
        ))}
        <NavButton
          theme={theme}
          // to={""}
          text={
            theme.mode !== "dark" ? (
              <img
                src="https://cdn-icons-png.flaticon.com/512/5043/5043139.png"
                width="28"
                height="26"
                alt="Moon free icon"
                title="Moon free icon"
              ></img>
            ) : (
              <img
                src="https://cdn-icons-png.flaticon.com/512/1687/1687737.png"
                className=" invert mx-[2px]
           "
                width="24"
                height="24"
                alt="Brightness free icon"
                title="Brightness free icon"
              ></img>
            )
          }
          // icon={'>'}
          onClick={() => {
            dispatch(setTheme());
          }}
        />
      </div>
    </div>
  );
}

export default Navbar;
