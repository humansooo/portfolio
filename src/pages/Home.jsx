import React from "react";
import { Navbar } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../states";

function Home() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);

  return (
    <>
      <div>
        <Navbar />
        <h1
          className="text-4xl font-bold text-center cursor-pointer hover:opacity-80 "
          // style={{ color: theme.text }}
          onClick={() => {
            dispatch(setTheme());
          }}
        >
          {theme.mode}{" "}
        </h1>
      </div>
    </>
  );
}

export default Home;
