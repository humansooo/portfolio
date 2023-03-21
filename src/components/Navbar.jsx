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

  // show navbar on scroll down
  useEffect(() => {
    const navbar = document.querySelector(".navBar");
    // navbar.classList.add("animate-blur-slide-down");
    const navbarHeight = navbar.offsetHeight;
    let lastScrollTop = 0;
    window.addEventListener("scroll", () => {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop && scrollTop > navbarHeight + 100 ) {
        navbar.classList.add("translate-y-[-120%]");
        navbar.classList.remove("translate-y-0");
        // navbar.classList.remove("animate-blur-slide-down");
        // navbar.classList.add("animate-blur-slide-up");
        
      } else {
        navbar.classList.remove("translate-y-[-120%]");
        navbar.classList.add("translate-y-0");
        // navbar.classList.add("animate-blur-slide-down");
        // navbar.classList.remove("animate-blur-slide-up");
      }
      lastScrollTop = scrollTop;
    });
  }, [window.pageYOffset]);



  return (
    <div style={{
      background: theme.mode === "light" ? "#eeeeee33" : "#151515cc",  
      // boxShadow: `0px 0px 10px 0px ${theme.primary}`,
    }} className=" flex navBar flex-row max-lg:flex-col justify-between backdrop-blur-[7px] duration-200 gap-3 md:bg-[#000000ad] z-[999] scale-100 lg:left-1/2 lg:w-[80%] w-[100%] fixed lg:mt-3 lg:translate-x-[-50%] px-6 lg:px-4 lg:py-2 py-4  left-0 top-0 max-sm:py-2.5 lg:rounded-[50px] ">
      <div className=" flex max-sm:hidden flex-row justify-end gap-3  ">
        {socials.map((link) => (
          <Socials key={link.id} data={link} />
        ))}
      </div>
      <div className=" flex flex-wrap justify-end gap-1.5 sm:gap-3 ">
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
