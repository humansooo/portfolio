import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Home, ProjectPage } from "./pages";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "./states";

function App() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);
  const [toggle, setToggle] = useState(false);

  const toggleTheme = () => {
    dispatch(setTheme());
  };

  return (
    <div
      style={{ background: theme.primary, color: theme.text }}
      className=" flex p-8 overflow-clip h-full w-full duration-500 "
    >
      <div
        style={{
          transform: toggle ? "translateX(0%)" : "translateX(-80%)",
          // transform: toggle ? "rotate(0deg)" : "rotate(10deg)",
          transition: "transform 0.2s ease-in-out",
        }}
        className=" fixed flex flex-row bottom-8 left-0 cursor-pointer "
      >
        <div
          onClick={toggleTheme}
          className=" font-[900] items-center justify-center flex bg-[#00000056] px-6 py-1 backdrop-blur-sm cursor-pointer "
        >
          {theme.mode}
        </div>
        <div
          onClick={() => setToggle(!toggle) + console.log(toggle)}
          className=" p-2 bg-[black] text-white "
        > <div
          style={{ transform: toggle ? "rotate(180deg)" : "rotate(0deg)" }}
        >{'>'}</div> </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectPage />} />
      </Routes>
    </div>
  );
}

export default App;
