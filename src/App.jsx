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
      className=" duration-500 p-6 min-h-screen "
    >
        <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/contact" element={<ProjectPage />} />
        <Route path="/about" element={<ProjectPage />} />
      </Routes>
    </div>
  );
}

export default App;
