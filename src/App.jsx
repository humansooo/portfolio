import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Home, ProjectPage } from "./pages";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "./states";
import FloatingBtn from "./components/floatingBtn";

function App() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);

  return (
    <div
      style={{ background: theme.primary, color: theme.text }}
      className=" flex p-4 overflow-clip h-full w-full duration-500 "
    >
      <FloatingBtn />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectPage />} />
      </Routes>
    </div>
  );
}

export default App;
