import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import {
  AboutPage,
  BlogDisplay,
  BlogsPage,
  ContactPage,
  Home,
  NotFound,
  Project,
  ProjectPage,
} from "./pages";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, AlertBanner } from "./components";

function App() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);
  const Dev = false;

  return (
    <div
      style={{ background: theme.primary, color: theme.text }}
      className="App duration-300 flex flex-col box-border min-h-screen overflow-x-hidden "
    >
      <Navbar />
      {Dev && <AlertBanner title={"In Development."} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/projects/:id" element={<Project />} />
        <Route path="/blog" element={<BlogsPage />} />
        <Route path="/blog/:id" element={<BlogDisplay />} />
        <Route path="/Contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
