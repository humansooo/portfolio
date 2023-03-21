import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Home, ProjectPage } from "./pages";
import { useDispatch, useSelector } from "react-redux";
import { Navbar } from "./components";

function App() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);

  return (
    <div
      style={{ background: theme.primary, color: theme.text }}
      className="App duration-500 p-3 sm:p-6 
       h-full overflow-x-hidden "
    >
      {/* <head> */}

      {/* </head> */}
      <Navbar />
      <div className=" w-full h-full mt-[4rem] max-lg:mt-[8rem] " >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/contact" element={<ProjectPage />} />
          <Route path="/about" element={<ProjectPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
